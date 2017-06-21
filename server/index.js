"use strict";
//This is our server

const express = require('express');
const app = express();




app.get('/', function (request, response) {
  response.send('Hello World');
})




console.log("Listening on port 8080");
app.listen(8080);