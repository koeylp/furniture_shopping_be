const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
