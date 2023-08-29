const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  category: [String],
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
