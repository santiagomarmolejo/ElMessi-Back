const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  Img : String,
  title: String,
  price: Number,
  description: String,
  stock: Number,
});

module.exports = mongoose.model("productSchema", productSchema);
