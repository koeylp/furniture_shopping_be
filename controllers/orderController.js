const orderService = require("../services/orderService");

const createOrder = async (req, res) => {
  const newOrder = req.body;
  try {
    const order = await orderService.createOrder(newOrder);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getOrdersByUserAndStatus = async (req, res) => {
  const user = req.params;
  const status = req.params;
  try {
    const orders = await orderService.getOrdersByUserAndStatus(user, status);
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrdersByUserAndStatus };
