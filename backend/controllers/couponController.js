const Coupon = require("../models/couponModel");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const User = require("../models/userModel");

const addCoupon = async (req, res) => {
  try {
    const {
      code,
      discountPercentage,
      usageLimit,
      expirationDate,
      minimumPurchaseAmount,
      applicableProducts,
      applicableCategories,
      userRestrictions,
      isOneTimeUse,
    } = req.body;

    // Check if the coupon code is unique
    const existingCoupon = await Coupon.findOne({ code });

    if (existingCoupon) {
      return res.status(400).json({
        success: false,
        message: "Coupon code already exists",
      });
    }

    // Validate applicable products
    const validApplicableProducts = await validateProducts(applicableProducts);

    // Validate applicable categories
    const validApplicableCategories = await validateCategories(
      applicableCategories
    );

    // Validate user restrictions
    const validUserRestrictions = await validateUserRestrictions(
      userRestrictions
    );

    // Create a new coupon
    const newCoupon = new Coupon({
      code,
      discountPercentage,
      usageLimit,
      expirationDate,
      minimumPurchaseAmount,
      applicableProducts: validApplicableProducts,
      applicableCategories: validApplicableCategories,
      userRestrictions: validUserRestrictions,
      isOneTimeUse,
    });

    // Save the coupon
    await newCoupon.save();

    res.status(201).json({
      success: true,
      message: "Coupon added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteCoupon = async (req, res) => {
  try {
    const { couponId } = req.params;

    // Check if the coupon exists
    const coupon = await Coupon.exists({ _id: couponId });

    if (!coupon) {
      return res.status(404).json({
        success: false,
        message: "Coupon not found",
      });
    }

    // Delete the coupon
    await Coupon.findByIdAndDelete(couponId);

    res.status(200).json({
      success: true,
      message: "Coupon deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json({
      success: true,
      totalCoupons: coupons.length,
      coupons,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

async function validateProducts(productIds) {
  try {
    const validProducts = await Product.find({ _id: { $in: productIds } });

    return validProducts.map((product) => product._id);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

// Helper function to validate applicable categories
async function validateCategories(categoryIds) {
  try {
    const validCategories = await Category.find({ _id: { $in: categoryIds } });

    return validCategories.map((category) => category._id);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

// Helper function to validate user restrictions
async function validateUserRestrictions(userRestrictions) {
  try {
    const validUsers = await User.find({
      _id: { $in: userRestrictions.users },
    });

    return {
      roles: userRestrictions.roles,
      users: validUsers.map((user) => user._id),
    };
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

module.exports = { addCoupon, deleteCoupon, getAllCoupons };
