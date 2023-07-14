const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: String,
    require: true,
    ref: "User",
  },
  address: {
    type: String,
    require: true,
    ref: "Address",
  },
  orderDate: { type: Date, default: Date.now, require: true },
  paymentMethod: String,
  totalPrice: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    require: true,
    default: "Pending",
  },
  orderDetails: [
    {
      product: { type: String, require: true, ref: "Product" },
      quantity: { type: Number, require: true },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
