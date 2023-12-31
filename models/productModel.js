const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  productName: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
    ref: "Category",
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
  status: {
    type: Boolean,
    require: true,
    default: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
