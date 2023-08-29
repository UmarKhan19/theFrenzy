const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const sendEmail = require("../utils/sendMail");

// //////////////////////////////////////////////////////////////////
// Validate Fields
// //////////////////////////////////////////////////////////////////

const validateFields = (fields) => {
  const requiredFields = ["email", "password", "role", "profile"];
  for (const field of requiredFields) {
    if (!fields[field]) {
      return field;
    }
  }
  return null;
};

// //////////////////////////////////////////////////////////////////
// Register User
// //////////////////////////////////////////////////////////////////

const registerUser = async (req, res) => {
  try {
    const { email, password, role, profile } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Validate all required fields are provided
    const missingField = validateFields({ email, password, role, profile });
    if (missingField) {
      return res.status(400).json({ error: `${missingField} is required` });
    }

    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      password: hashedPassword, // Store hashed password
      role,
      profile,
    });

    const savedUser = await newUser.save();

    // Generate and send JWT token upon successful user creation
    const token = jwt.sign(
      { userId: savedUser._id, role: savedUser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d", // Token expiration time (adjust as needed)
      }
    );

    res
      .status(201)
      .header("Authorization", `Bearer ${token}`)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
};

// //////////////////////////////////////////////////////////////////
// Login User
// //////////////////////////////////////////////////////////////////

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate and send JWT token upon successful login
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d", // Token expiration time (adjust as needed)
      }
    );

    res
      .status(200)
      .header("Authorization", `Bearer ${token}`)
      .json({ success: true, message: "Login successfull" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

// //////////////////////////////////////////////////////////////////
// Get User Profile
// //////////////////////////////////////////////////////////////////

const getProfile = async (req, res) => {
  try {
    // Use req.user to get the authenticated user's ID from the middleware
    const userId = req.user.id;

    // Fetch user profile from the database using the userId
    const userProfile = await User.findById(userId);

    if (!userProfile) {
      return res.status(404).json({ error: "User profile not found" });
    }

    res.status(200).json(userProfile);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching user profile" });
  }
};

// //////////////////////////////////////////////////////////////////
// Update User Profile
// //////////////////////////////////////////////////////////////////

const updateUser = async (req, res) => {
  try {
    const { name, address, phoneNumber } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }

    //   Update the user profile
    user.profile.name = name || user.profile.name;
    user.profile.address = address || user.profile.address;
    user.profile.phoneNumber = phoneNumber || user.profile.phoneNumber;

    //   save the updated user profile
    await user.save();

    res.status(200).json({ success: true, message: "User Profile Updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// //////////////////////////////////////////////////////////////////
// Update User Password
// //////////////////////////////////////////////////////////////////

const changeUserPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id; // Extracted from authentication middleware

    if (!currentPassword || !newPassword) {
      return res.status(403).json({
        success: false,
        message: "Please provide the required information",
      });
    }

    // Find the user by ID
    const user = await User.findById(userId).select("+password");

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Compare current password with hashed password
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Current password is incorrect" });
    }

    // Hash and update the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;

    // Save the updated user with new password
    await user.save();

    res.status(200).json({ success: true, message: "Password Changed" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "An error occurred while updating the password",
    });
  }
};

// //////////////////////////////////////////////////////////////////
// Delete User Account
// //////////////////////////////////////////////////////////////////

const deleteUserAccount = async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from authentication middleware

    // Delete the user by ID
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "An error occurred while deleting the account",
    });
  }
};

// //////////////////////////////////////////////////////////////////
// Forgot Password
// //////////////////////////////////////////////////////////////////

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate a password reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token valid for 1 hour

    // Save the user with the reset token and expiration
    await user.save();

    // Send a password reset email with the token
    const resetLink = `http://your-frontend-app/reset-password/${resetToken}`;
    const emailSubject = "Password Reset Request";
    const emailText = `You have requested a password reset. Click the following link to reset your password: ${resetLink}`;

    await sendEmail(email, emailSubject, emailText);

    res
      .status(200)
      .json({ success: true, message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({
      error: `An error occurred while processing the request ${error}`,
    });
  }
};

// //////////////////////////////////////////////////////////////////
// Reset User Password
// //////////////////////////////////////////////////////////////////

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      res.status(401).json({
        success: false,
        message: "Please provide the required information",
      });
    }

    // Find the user by the reset token and ensure it's not expired
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password and reset token fields
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    // Save the updated user
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Password reset successful" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
};

module.exports = {
  registerUser,
  getProfile,
  loginUser,
  updateUser,
  changeUserPassword,
  deleteUserAccount,
  forgotPassword,
  resetPassword,
};
