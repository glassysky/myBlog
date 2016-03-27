System.register(['angular2/core', './regex', "./regex.service"], function(exports_1, context_1) {
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
    var core_1, regex_1, regex_service_1;
    var RegexTextComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (regex_1_1) {
                regex_1 = regex_1_1;
            },
            function (regex_service_1_1) {
                regex_service_1 = regex_service_1_1;
            }],
        execute: function() {
            RegexTextComponent = (function () {
                function RegexTextComponent(_regexService) {
                    this._regexService = _regexService;
                }
                RegexTextComponent.prototype.OnTextKey = function (event) {
                    this.regex.text = event.target.value;
                    this.regex.text = this._regexService.matchRegex(this.regex);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', regex_1.Regex)
                ], RegexTextComponent.prototype, "regex", void 0);
                RegexTextComponent = __decorate([
                    core_1.Component({
                        selector: 'regex-text',
                        templateUrl: 'app/regex-text.component.html',
                        styleUrls: ['app/regex-text.component.css'],
                        providers: [regex_service_1.RegexService]
                    }), 
                    __metadata('design:paramtypes', [regex_service_1.RegexService])
                ], RegexTextComponent);
                return RegexTextComponent;
            }());
            exports_1("RegexTextComponent", RegexTextComponent);
        }
    }
});
//# sourceMappingURL=regex-text.component.js.map