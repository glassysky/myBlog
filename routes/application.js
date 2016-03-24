/**
 * Created by cuitianhao on 16/3/22.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

var CONFIG = require('../public/conf/config');
var GLOBAL = require('../models/global');
var apps = GLOBAL.getAppsInfo();

//根目录

router.get('/', function(req, res, next) {

    apps.map(function(item){
        item.src = req.baseUrl + "/appShow/" + item.index;
    });
    res.render('./application/index', { apps: apps });
});


//应用展示

router.get('/appShow/:index', function(req, res, next) {
    var appIndex = req.params.index;

    res.render('./application/appShow', {
        appPos: apps[appIndex].filename
    });
});

module.exports = router;
