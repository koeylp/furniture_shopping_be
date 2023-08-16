const Product = require("../models/productModel");

const getAllProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

const getProductsByCategory = async (category_id) => {
  try {
    const products = await Product.find({ category: category_id });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

const addProduct = async (newProduct) => {
  try {
    await Product.create(newProduct);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAllProducts, getProductsByCategory, addProduct };
