const Cart = require("../models/cartModel");

const addToCart = async (newCart) => {
  try {
    const existCart = await Cart.find({ user: newCart.user });
    if (existCart.length === 0) {
      await Cart.create(newCart);
    } else {
      const cart = await Cart.findOne({ user: newCart.user });
      const existingItem = cart.items.find(
        (item) => item.product === newCart.items[0].product
      );

      if (existingItem) {
        await Cart.findOneAndUpdate(
          {
            user: newCart.user,
            "items.product": newCart.items[0].product,
          },
          {
            $inc: {
              "items.$.cartQuantity": newCart.items[0].cartQuantity,
            },
          }
        );
      } else {
        await Cart.findOneAndUpdate(
          { user: newCart.user },
          { $push: { items: newCart.items[0] } }
        );
      }
    }
    return existCart;
  } catch (error) {
    throw new Error(error);
  }
};

const getCartByUser = async (user) => {
  try {
    const cart = await Cart.findOne({ user: user.user }).populate(
      "items.product"
    );
    return cart;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCartItemById = async (user, product) => {
  try {
    const cart = await Cart.findOne({ user: user.user });
    const existingItem = cart.items.find(
      (item) => item.product === product.product
    );
    if (existingItem) {
      await Cart.findOneAndUpdate(
        {
          user: user.user,
        },
        {
          $pull: {
            items: { product: product.product },
          },
        }
      );
    }
  } catch (error) {
    throw new Error(error);
  }
};

const updateQuantity = async (user, product, quantity) => {
  try {
    const cart = await Cart.findOne({ user: user });
    const existingItem = cart.items.find(
      (item) => item.product === product
    );

    if (existingItem) {
      await Cart.findOneAndUpdate(
        {
          user: user,
          "items.product": product,
        },
        {
          $set: {
            "items.$.cartQuantity": quantity,
          },
        }
      );
    } else {
      await Cart.findOneAndUpdate(
        { user: newCart.user },
        { $push: { items: newCart.items[0] } }
      );
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addToCart,
  getCartByUser,
  deleteCartItemById,
  updateQuantity,
};
