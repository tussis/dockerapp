// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';


var express = require('express');
var path = require('path');
var routes = require('./routes/');

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


app.listen(8080);
module.exports.getApp = app;
