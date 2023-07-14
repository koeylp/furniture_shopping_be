const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/create", orderController.createOrder);
router.get("/:user/:status", orderController.getOrdersByUserAndStatus)

module.exports = router;