const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.get("/provinces", addressController.getAllProvinces);
router.get("/districts", addressController.getAllDistricts);
router.get("/wards", addressController.getAllWards);
router.get("/:email", addressController.getAddressByEmail);
router.post("/", addressController.addNewAddress);

module.exports = router;
