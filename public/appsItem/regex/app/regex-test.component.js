System.register(['angular2/core', './regex-pattern.component', './regex-text.component', './regex-checkbox.component'], function(exports_1, context_1) {
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
    var core_1, regex_pattern_component_1, regex_text_component_1, regex_checkbox_component_1;
    var RegexTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (regex_pattern_component_1_1) {
                regex_pattern_component_1 = regex_pattern_component_1_1;
            },
            function (regex_text_component_1_1) {
                regex_text_component_1 = regex_text_component_1_1;
            },
            function (regex_checkbox_component_1_1) {
                regex_checkbox_component_1 = regex_checkbox_component_1_1;
            }],
        execute: function() {
            RegexTestComponent = (function () {
                function RegexTestComponent() {
                    this.keyMessage = "";
                    this.regex = {
                        "pattern": "",
                        "text": "",
                        "result": []
                    };
                }
                RegexTestComponent = __decorate([
                    core_1.Component({
                        selector: 'my-regex-test',
                        templateUrl: 'app/regex-test.component.html',
                        styleUrls: ['app/regex-test.component.css'],
                        directives: [regex_pattern_component_1.RegexPatternComponent, regex_text_component_1.RegexTextComponent, regex_checkbox_component_1.RegexCheckboxComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RegexTestComponent);
                return RegexTestComponent;
            }());
            exports_1("RegexTestComponent", RegexTestComponent);
        }
    }
});
//# sourceMappingURL=regex-test.component.js.map