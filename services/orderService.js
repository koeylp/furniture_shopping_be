const Order = require("../models/orderModel");
const Product = require("../models/productModel");

const createOrder = async (newOrder) => {
  try {
    newOrder.orderDetails.forEach(async (product) => {
      await Product.updateOne(
        { _id: product.product },
        { $inc: { quantity: -product.quantity } }
      );
    });

    const order = await Order.create(newOrder);
    return order;
  } catch (error) {
    throw new Error(error);
  }
};

const getOrdersByUserAndStatus = async (user, status) => {
  try {
    const orders = await Order.find({ user: user.user, status: status.status });
    return orders;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createOrder, getOrdersByUserAndStatus };
