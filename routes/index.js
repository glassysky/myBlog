var express = require('express');
var router = express.Router();

var CONFIG = require('../public/conf/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: CONFIG.title });
});

router.get('/application', function(req, res, next) {
  res.render('application', { title: CONFIG.title });
});

router.get('/')

module.exports = router;
