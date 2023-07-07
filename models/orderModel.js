const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerName: String,
  orderDate: { type: Date, default: Date.now, require: true },
  shippingMethod: String,
  details: [
    {
      product: { type: Schema.Types.ObjectId, require: true, ref: "Product" },
      quantity: { type: Number, require: true },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
