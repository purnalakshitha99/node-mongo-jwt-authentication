const express = require("express");
const dbConnect = require("./config/dbConnect");


dbConnect();

const app = express();

//middleware
app.use(express.json());

//routes


// Start the Server (use fallback port to avoid `undefined`)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
