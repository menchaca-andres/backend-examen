const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  categoria: String,
});

module.exports = mongoose.model("Producto", productSchema);
