const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes.js")

const dbConnect = require("./config/dbConnect");


dbConnect();

const app = express();

//middleware
app.use(express.json());

//routes

const BASE_URL = "/api/v1"
app.use(`${BASE_URL}/auth`,authRoutes)


// Start the Server (use fallback port to avoid `undefined`)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
