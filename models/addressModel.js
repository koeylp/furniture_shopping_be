const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  user: {
    type: String,
    require: true,
    ref: "User",
  },
  fullname: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  province: {
    type: String,
    require: true,
  },
  district: {
    type: String,
    require: true,
  },
  ward: {
    type: String,
    require: true,
  },
  status: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Address", addressSchema);
