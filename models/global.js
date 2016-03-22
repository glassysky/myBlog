/**
 * Created by cuitianhao on 16/3/22.
 */
var apps = [
    {
        name: "正则表达式",
        introduce: "在线正则表达式匹配测试"
    }
];

var method = function(){
    return {
        getAppsInfo: function(){
            return apps;
        }
    }

};

module.exports = method;