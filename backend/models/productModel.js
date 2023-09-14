const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true, min: 0 },
    discount: { type: Number, min: 0, max: 100, default: 0 },
    totalPrice: { type: String, required: true, min: 0 },
    variants: [
      {
        color: String,
        size: String,
        images: [{ type: String, required: true }],
        stock: { type: Number, required: true, default: 0, min: 0 },
      },
    ],
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    rating: { type: Number, required: true, min: 0, max: 5, default: 0 },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    viewCount: { type: Number, required: true, min: 0, default: 0 },
    salesCount: { type: Number, required: true, min: 0, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
