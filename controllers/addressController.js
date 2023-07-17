const addressService = require("../services/addressService");

const getAllProvinces = async (req, res) => {
  try {
    const provinces = await addressService.getAllProvinces();
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

const getAddressByUser = async (req, res) => {
  const id = req.params;
  try {
    const addresses = await addressService.getAddressByUser(id);
    res.status(200).json(addresses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addNewAddress = async (req, res) => {
  const newAddress = req.body;
  try {
    const address = await addressService.addNewAddress(newAddress);
    res.status(200).json(address);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const setDefaultAddress = async (req, res) => {
  const id = req.params;
  const userId = req.params;
  try {
    const address = await addressService.setDefaultAddress(id, userId);
    res.status(200).json(address);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const addressId = req.params.addressId;
    const address = await addressService.deleteAddress(addressId);
    res.status(200).json(address);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllProvinces,
  getAllDistricts,
  getAllWards,
  getAddressByUser,
  addNewAddress,
  setDefaultAddress,
  deleteAddress
};
