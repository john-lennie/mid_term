"use strict";
//This is our server



//Requires
const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/appRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use('/app', routes);


// app.get('/', function (request, response) {
//   response.render('urls_index');
//   console.log("HELLO WORLD");
// })





app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
