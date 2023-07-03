const Product = require("../models/productModel");

const getAllProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAllProducts };
