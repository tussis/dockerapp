// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express(); 
    router = express.Router(); 

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

// Add another page
router.get('/info', function(req, res) {
    res.render('info', {
  });
});

app.listen(8080);
module.exports.getApp = app;
