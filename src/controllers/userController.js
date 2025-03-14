const User = require("../models/User");

const userController = {
  crearUsuario: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  obtenerUsuarios: async (req, res) => {
    try {
      const users = await User.find().select('-__v');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  actualizarUsuario: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  eliminarUsuario: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: "Usuario eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = userController;