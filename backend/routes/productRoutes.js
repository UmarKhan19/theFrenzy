const express = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const checkAdmin = require("../middleware/isAdmin");

const router = express.Router();

router.post("/create", authMiddleware, checkAdmin, createProduct);
router.get("/all", getAllProducts);

module.exports = router;
