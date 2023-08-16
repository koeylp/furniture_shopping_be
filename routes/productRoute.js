const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const VERIFY = require("../middleware/auth.js");

router.get("/", productController.getAllProducts);
router.get("/categories/:category", productController.getProductsByCategory);
router.post("/", VERIFY.verifyAdminToken, productController.addProduct);

module.exports = router;
