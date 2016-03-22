/**
 * Created by cuitianhao on 16/3/22.
 */
var express = require('express');
var router = express.Router();

var CONFIG = require('../public/conf/config');

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('./application/index', { title: CONFIG.title });
});

module.exports = router;
