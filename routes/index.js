// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express');
var router = express.Router(); 

router.get('/', function(req, res) {
    res.render('home', {
  });
});

// Add another page
router.get('/info', function(req, res) {
    res.render('info', {
  });
});

module.exports = router;
