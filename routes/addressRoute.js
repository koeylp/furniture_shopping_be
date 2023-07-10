const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.get("/provinces", addressController.getAllProvinces);
router.get("/districts", addressController.getAllDistricts);
router.get("/wards", addressController.getAllWards);
router.get("/:id", addressController.getAddressByUser);
router.post("/", addressController.addNewAddress);
router.put("/:id/:userId", addressController.setDefaultAddress);

module.exports = router;
