const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/", cartController.addToCart);
router.get("/:user", cartController.getCartByUser);
router.put("/:user/:product", cartController.deleteCartItemById);

module.exports = router;