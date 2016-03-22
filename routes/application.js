/**
 * Created by cuitianhao on 16/3/22.
 */
var express = require('express');
var router = express.Router();

var CONFIG = require('../public/conf/config');
var GLOBAL = require('../models/global');

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('./application/index', { apps: GLOBAL.getAppsInfo() });
});

module.exports = router;
