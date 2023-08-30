const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  originalPrice: { type: Number, required: true },
  discountPercent: { type: Number, default: 0 },
  totalPrice: { type: Number },
  rating: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  category: [String],
  salesCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 },
  variants: [
    {
      color: [{ type: String, required: true }],
      size: [{ type: String, required: true }],
      stock: { type: Number, default: 1 },
      imageUrls: [{ type: String, required: true }], // Array of image URLs
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
