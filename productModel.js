const { default: mongoose } = require("mongoose");

const ProductSchema = mongoose.Schema({
  productName: {
    type: String,
    required: false,
    default: "test",
  },
  price: {
    type: Number,
    required: false,
    default: 20,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
