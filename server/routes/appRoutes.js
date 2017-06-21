"use strict";

const express = require('express');
const app  = express.Router();


app.get('/', function (request, response) {
  console.log("HELLO WORLD");
  response.render("urls_index");
})

module.exports = app;
