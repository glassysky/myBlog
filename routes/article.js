/**
 * Created by cuitianhao on 16/3/22.
 */
var express = require('express');
var router = express.Router();

var CONFIG = require('../public/conf/config');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./article/index', { title: "test Page", content: "why i get many hot update files ?!!!" });
});

module.exports = router;
