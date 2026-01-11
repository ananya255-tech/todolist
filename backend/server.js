const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.use("/", authRoutes);


app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});
