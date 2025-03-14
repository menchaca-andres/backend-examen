const User = require("../models/User");
const Product = require("../models/Product");

const getCounters = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const productCount = await Product.countDocuments();
    
    res.json({
      usuarios: userCount,
      productos: productCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCounters
};
