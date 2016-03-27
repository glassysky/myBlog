/**
 * Created by cuitianhao on 16/3/22.
 */
var apps = [
    {
        index: 1,
        name: "正则匹配",
        introduce: "在线正则表达式匹配测试",
        github: "https://github.com/glassysky/myBlog",
        filename: "regex"
    },
    {
        index: 2,
        name: "颜色选择器",
        introduce: "选择你喜欢的配色吧",
        github: "https://github.com/glassysky/colorSelector",
        filename: "colorSelector"
    }
];

function Methods(){

}

Methods.prototype = {
    constructor: Methods,
    getAppsInfo: function(){
        return apps;
    },
    changeApps: function(){
        apps[0].name = "changed";
    }
}

var method = new Methods();

module.exports = method;
