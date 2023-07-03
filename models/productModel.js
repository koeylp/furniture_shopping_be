const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  productName: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  description: String,
  img: String,
});

module.exports = mongoose.model("Product", productSchema);
