var express = require('express');
var router = express.Router();

var CONFIG = require('../public/conf/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./index/index', { title: CONFIG.title });
});

router.get('/article', function(req, res, next) {
  res.render('article', { title: CONFIG.title });
});

router.get('/photography', function(req, res, next) {
  res.render('photography', { title: CONFIG.title });
});

router.get('/application', function(req, res, next) {
  res.render('./application/index', { title: CONFIG.title });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: CONFIG.title });
});


module.exports = router;
