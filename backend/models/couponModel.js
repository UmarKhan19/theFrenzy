const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, trim: true, unique: true },
    discountPercentage: { type: Number, min: 0, max: 100, default: 0 },
    usageLimit: { type: Number, min: 0 },
    usageCount: { type: Number, min: 0 },
    expirationDate: Date,
    minimumPurchaseAmount: { type: Number, min: 0 },
    applicableProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    applicableCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    userRestrictions: {
      roles: [String],
      users: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    isOneTimeUse: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
