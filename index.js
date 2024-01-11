const { config } = require("dotenv");
const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", function (req, res) {
  res.send("<p>welcome</p>");
});
PORT = process.env.PORT || 8500;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
