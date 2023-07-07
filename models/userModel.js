const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("User", userSchema);
