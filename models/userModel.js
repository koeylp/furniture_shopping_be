const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
