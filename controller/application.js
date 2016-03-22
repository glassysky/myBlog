/**
 * Created by cuitianhao on 16/3/22.
 */
var GLOBAL = require('../models/global');

var controller = {};

controller.changeApps = function(){
    setTimeout(function(){
        GLOBAL.changeApps();
        console.log("changed");
    },2000);
}

module.exports = controller;
