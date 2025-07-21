const express = require("express");
const dbConnect = require("./config/db");

const app = express();

dbConnect();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
