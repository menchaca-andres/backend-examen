const Product = require("../models/Product");

const productController = {
  crearProducto: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  obtenerProductos: async (req, res) => {
    try {
      const products = await Product.find().select('-__v');
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  actualizarProducto: async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  eliminarProducto: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: "Producto eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = productController;
