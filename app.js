// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';


var express = require('express');
var routes = require('./routes/');

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

//app.get('/', function(req, res) {
//    res.render('home', {
//  });
//});

app.listen(8080);
module.exports.getApp = app;
