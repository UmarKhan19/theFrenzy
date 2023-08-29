const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true, select: false },
    role: { type: "string", default: "user" },
    profile: {
      name: { type: String, required: true },
      address: { type: String },
      phoneNumber: { type: String },
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
