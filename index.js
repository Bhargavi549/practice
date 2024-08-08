// const { config } = require("dotenv");
// const express = require("express");
// const app = express();

// require("dotenv").config();

// app.get("/", function (req, res) {
//   res.send("<p>welcome</p>");
// });
// PORT = process.env.PORT || 8500;
// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`);
// });

const http = require('http');
const express = require('express');

const app = express();
app.use((req,res,next)=>{         // adding middle ware
  console.log('middle ware');
  next(); // allows next middle ware line
}) 

app.use((req,res,next)=>{         // adding middle ware
  console.log('another middle ware');
}) 

const server = http.createServer(app);
server.listen(8555);
