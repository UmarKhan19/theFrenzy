const Product = require("../models/productModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dgrttjl8s",
  api_key: "391611877572426",
  api_secret: "KNKqkXrQoRIWy-IRVUDViRguifw",
});

createProduct = async (req, res) => {
  try {
    const { name, description, price, rating, category, variants } = req.body;

    const uploadedImageUrls = [];
    for (const url of req.files.variants) {
      const uploadedImage = await cloudinary.uploader.upload(url.tempFilePath);
      uploadedImageUrls.push(uploadedImage.secure_url);
    }

    console.log(uploadedImageUrls);

    // Construct variant objects
    const variantObjects = [];
    for (const variant of variants) {
      variantObjects.push({
        size: variant.size,
        color: variant.color,
        stock: variant.stock,
        imageUrls: uploadedImageUrls,
      });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      rating,
      category,
      variants: variantObjects, // Use the array of variant objects
      comments: [],
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (products.length == 0) {
      return res
        .status(404)
        .json({ success: true, message: "No products found" });
    }
    res
      .status(200)
      .json({ success: true, totalProducts: products.length, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createProduct, getAllProducts };
