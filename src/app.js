require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const {
  countOperations,
  getOperationCount,
} = require("./middlewares/operationCounter");
const { getCounters } = require("./controllers/counterController");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(countOperations);

app.use("/usuarios", userRoutes);
app.use("/productos", productRoutes);
app.get("/contadores", getCounters);
app.get("/operaciones", getOperationCount);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

