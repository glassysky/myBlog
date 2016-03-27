import {Component} from 'angular2/core';
import {Regex} from './regex';
import {RegexPatternComponent} from './regex-pattern.component';
import {RegexTextComponent} from './regex-text.component';
import {RegexCheckboxComponent} from './regex-checkbox.component';

@Component ({
    selector: 'my-regex-test',
    templateUrl: 'app/regex-test.component.html',
    styleUrls: ['app/regex-test.component.css'],
    directives: [RegexPatternComponent, RegexTextComponent, RegexCheckboxComponent]
})

export class RegexTestComponent {
    regex: Regex;

    keyMessage = "";

    constructor(){
        this.regex = {
            "pattern": "",
            "text": "",
            "result": []
        };
    }

}