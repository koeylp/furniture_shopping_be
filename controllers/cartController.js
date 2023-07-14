const cartService = require("../services/cartService");

const addToCart = async (req, res) => {
  try {
    const newCartItem = req.body;
    const cart = await cartService.addToCart(newCartItem);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCartByUser = async (req, res) => {
  try {
    const user = req.params;
    const cart = await cartService.getCartByUser(user);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteCartItemById = async (req, res) => {
  try {
    const product = req.params;
    const user = req.params;
    const cart = await cartService.deleteCartItemById(user, product);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = { addToCart, getCartByUser, deleteCartItemById };
