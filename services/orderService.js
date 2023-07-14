const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");

const createOrder = async (newOrder) => {
  try {
    newOrder.orderDetails.forEach(async (product) => {
      await Product.updateOne(
        { _id: product.product },
        { $inc: { quantity: -product.quantity } }
      );
    });

    await Cart.findOneAndUpdate(
      { user: newOrder.user },
      {
        $set: { items: [] },
      }
    );

    console.log("here");
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
