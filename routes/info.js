'use strict';

var express = require('express');
var router = express.Router(); 

router.get('/info', function(req, res) {
    res.render('info', {
  });
});

module.exports = router;
