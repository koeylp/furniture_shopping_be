const User = require("../models/userModel");

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email.email });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getUserByEmail };
