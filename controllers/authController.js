const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    const token = jwt.sign(
      { email: user.email, admin: user.admin },
      process.env.JWT_SECRET,
      {
        expiresIn: "1y",
      }
    );

    res.cookie("token", token, {
      httpOnly: true, // Makes the cookie accessible only by the web server
      maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year in milliseconds
    });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    // You can also perform additional cleanup if needed
    // For example, you might want to track active sessions and remove this session

    // Send a response indicating successful logout
    res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

const signup = async (req, res) => {
  const { email, password, admin } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const newUser = new User({
      email,
      password: hashedPassword,
      admin,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login, logout, signup };
