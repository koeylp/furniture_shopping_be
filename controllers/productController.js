const { HttpStatusCode } = require("axios");
const productService = require("../services/productService");

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const category_id = req.params;
    const products = await productService.getProductsByCategory(
      category_id.category
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    await productService.addProduct(newProduct);
    res.status(HttpStatusCode.Created).json(newProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getAllProducts, getProductsByCategory, addProduct };
