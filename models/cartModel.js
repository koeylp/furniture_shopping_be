const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: {
    type: String,
    require: true,
    ref: "User",
  },
  items: [
    {
      product: {
        type: String,
        require: true,
        ref: "Product",
      },
      cartQuantity: {
        type: Number,
        require: true,
      },
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
