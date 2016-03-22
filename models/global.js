/**
 * Created by cuitianhao on 16/3/22.
 */
var apps = [
    {
        name: "正则表达式",
        introduce: "在线正则表达式匹配测试"
    }
];

function Methods(){

}

Methods.prototype = {
    constructor: Methods,
    getAppsInfo: function(){
        return apps;
    }
}

var method = new Methods();

module.exports = method;