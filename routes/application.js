/**
 * Created by cuitianhao on 16/3/22.
 */
var express = require('express');
var router = express.Router();

var CONFIG = require('../public/conf/config');
var GLOBAL = require('../models/global');

//根目录

router.get('/', function(req, res, next) {
    console.log(req.baseUrl);
    var apps = GLOBAL.getAppsInfo();

    apps.map(function(item){
        item.src = req.baseUrl + "/appShow/" + item.index;
    });
    res.render('./application/index', { apps: apps });
});


//应用展示

router.get('/appShow/:index', function(req, res, next) {
    // console.log(req.params.index);
    // console.log(req.baseUrl);
    // console.log(req.index);
    res.render('./application/appShow', {
        appIndex: req.params.index
    });
});

module.exports = router;
