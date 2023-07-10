const axios = require("axios");
const Address = require("../models/addressModel");

const getAllProvinces = async () => {
  try {
    const provinces = await axios.get("https://provinces.open-api.vn/api/p/");
    return provinces.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllDistricts = async () => {
  try {
    const districts = await axios.get("https://provinces.open-api.vn/api/d/");
    return districts.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllWards = async () => {
  try {
    const wards = await axios.get("https://provinces.open-api.vn/api/w/");
    return wards.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getAddressByUser = async (id) => {
  try {
    const addresses = await Address.find({ user: id.id });
    console.log(addresses);
    return addresses;
  } catch (error) {
    throw new Error(error);
  }
};

const addNewAddress = async (newAddress) => {
  try {
    const address = await Address.create(newAddress);
    return address;
  } catch (error) {
    throw new Error(error);
  }
};

const setDefaultAddress = async (id, userId) => {
  try {
    await Address.updateMany({"user": userId.userId}, {"$set":{"status": 0}});
    const address = await Address.updateOne({"_id": id.id}, {"$set":{"status": 1}});
    return address;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllProvinces,
  getAllDistricts,
  getAllWards,
  getAddressByUser,
  addNewAddress,
  setDefaultAddress,
};
