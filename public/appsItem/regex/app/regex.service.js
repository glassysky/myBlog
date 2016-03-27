System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var RegexService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RegexService = (function () {
                function RegexService() {
                }
                RegexService.prototype.matchRegex = function (regex) {
                    var userPattern = regex.pattern, //用户输入的正则表达式
                    validateRegexPattern = /\/.*\//, //用来检验用户输入是否为正则表达式
                    text = regex.text, //用户需要匹配的文本
                    patternObj, //正则对象
                    result; //用户输入正则是否正确
                    //判断是否为正则表达式
                    if (validateRegexPattern.test(userPattern)) {
                        regex.result = ["success"];
                        if (regex.pattern && regex.text) {
                            var tempPattern = void 0;
                            //得到正确的正则表达式
                            tempPattern = validateRegexPattern.exec(userPattern)[0];
                            tempPattern = regex.pattern.slice(1, tempPattern.length - 1);
                            patternObj = new RegExp(tempPattern);
                            //用输入的正则匹配输入的文本
                            if (patternObj.test(text)) {
                                regex.result = patternObj.exec(text);
                            }
                            else {
                                regex.result = [""];
                            }
                        }
                    }
                    else {
                        regex.result = ["error"];
                    }
                };
                RegexService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RegexService);
                return RegexService;
            }());
            exports_1("RegexService", RegexService);
        }
    }
});
//# sourceMappingURL=regex.service.js.map