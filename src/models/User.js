const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  ocupacion: String,
});

module.exports = mongoose.model("Usuario", userSchema);
