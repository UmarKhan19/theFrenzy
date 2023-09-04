const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    discount: { type: Number, min: 0, max: 100, default: 0 },
    totalPrice: Number,
    variants: [
      {
        color: String,
        size: String,
        images: [{ type: String, required: true }],
        required: true,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
