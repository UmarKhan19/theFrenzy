const Product = require("../models/productModel");
const Order = require("../models/orderModel");
const OrderItem = require("../models/orderItemModel");
const Coupon = require("../models/couponModel");

const createOrder = async (req, res) => {
  try {
    const { orderItems, address, phoneNumber, couponId } = req.body;
    const userId = req.user.id;

    // Validate input data
    if (
      !orderItems ||
      !Array.isArray(orderItems) ||
      orderItems.length === 0 ||
      !address ||
      !phoneNumber
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid order items, address, and phone number",
      });
    }

    // Fetch product details for all order items in parallel
    const productIds = orderItems.map((item) => item.product);
    const products = await Product.find({ _id: { $in: productIds } });

    // Calculate totalAmount and build orderItems array
    let totalAmount = 0;
    const orderItemsArray = [];

    for (const item of orderItems) {
      const product = products.find((p) => p._id.toString() === item.product);

      if (!product) {
        return res.status(400).json({
          success: false,
          message: `Product with ID ${item.product} not found`,
        });
      }

      const itemTotalPrice = product.totalPrice * item.quantity;
      totalAmount += itemTotalPrice;

      const orderItem = new OrderItem({
        product: item.product,
        quantity: item.quantity,
      });

      // Save the orderItem to the database
      await orderItem.save();

      orderItemsArray.push(orderItem);
    }

    // Create the order
    const order = new Order({
      user: userId,
      totalAmount,
      orderItems: orderItemsArray,
      address,
      phoneNumber,
      // Add other order properties here
    });

    let discountAmount = 0; // Initialize discountAmount

    // Check if a valid coupon ID is provided
    if (couponId !== "" && couponId !== undefined) {
      const coupon = await Coupon.findById(couponId);
      if (coupon) {
        // Check if the coupon is one-time use and the user has already used it
        if (coupon.isOneTimeUse && coupon.usedByUsers.includes(userId)) {
          return res.status(400).json({
            success: false,
            message: "You have already used this one-time use coupon",
          });
        }

        // Check if the coupon has a usage limit
        if (coupon.usageLimit !== undefined) {
          // Check if the coupon has reached its usage limit
          if (coupon.usageCount >= coupon.usageLimit) {
            return res.status(400).json({
              success: false,
              message: "This coupon has reached its usage limit",
            });
          }
        }

        // Calculate the discount amount
        discountAmount = (coupon.discountPercentage / 100) * totalAmount;

        // Apply the coupon to the order
        order.coupon = coupon._id;
        coupon.usageCount += 1;
        coupon.usedByUsers.push(userId);

        // Save the updated coupon
        await coupon.save();
      } else {
        return res.status(400).json({
          success: false,
          message: "Coupon not found",
        });
      }
    }

    // Reduce the totalAmount by the discountAmount
    order.totalAmount -= discountAmount;

    // Save the order to the database
    await order.save();

    const populatedOrder = await Order.findById(order._id)
      .populate("user", "firstName lastName email")
      .populate({
        path: "orderItems",
        populate: {
          path: "product",
        },
      })
      .populate("coupon", "code");

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: populatedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createOrder };
