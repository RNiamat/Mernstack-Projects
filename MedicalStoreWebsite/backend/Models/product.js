// backend/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  category: String
});

module.exports = mongoose.model("Product", productSchema);
