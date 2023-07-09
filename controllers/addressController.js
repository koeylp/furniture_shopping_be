const addressService = require("../services/addressService");

const getAllProvinces = async (req, res) => {
  try {
    const provinces = await addressService.getAllProvinces();
    // const jsonData = JSON.stringify(provinces);
    res.status(200).json(provinces);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllDistricts = async (req, res) => {
  try {
    const districts = await addressService.getAllDistricts();
    res.status(200).json(districts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllWards = async (req, res) => {
  try {
    const wards = await addressService.getAllWards();
    res.status(200).json(wards);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAddressByEmail = async (req, res) => {
  const email = req.params;
  try {
    const addresses = await addressService.getAddressByEmail(email);
    res.status(200).json(addresses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addNewAddress = async (req, res) => {
  const newAddress = req.body;
  console.log(newAddress);
  try {
    const address = await addressService.addNewAddress(newAddress);
    res.status(200).json(address);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllProvinces,
  getAllDistricts,
  getAllWards,
  getAddressByEmail,
  addNewAddress
};
