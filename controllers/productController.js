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
    console.log(category_id.category);
    const products = await productService.getProductsByCategory(category_id.category);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}



module.exports = { getAllProducts, getProductsByCategory };
