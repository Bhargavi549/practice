// Express: 
// express is a frame work built in top of NodeJS, 
// it gives the waid range of features to the applications.

const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);
server.listen(6000);