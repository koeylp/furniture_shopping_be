const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

const signup = async (req, res) => {
  const { email, fullname, phone } = req.body;
  try {
    const newUser = new User({
      email,
      fullname,
      phone,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login, signup };
