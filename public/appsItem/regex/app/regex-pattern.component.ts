import {Component, Input} from 'angular2/core';
import {Regex} from './regex';
import {RegexService} from "./regex.service";

@Component ({
    selector: 'regex-pattern',
    templateUrl: 'app/regex-pattern.component.html',
    styleUrls: ['app/regex-pattern.component.css'],
    providers: [RegexService]
})

export class RegexPatternComponent {
    @Input() regex: Regex;

    constructor(private _regexService: RegexService){}

    onPatternKey(event: any) {
        this.regex.pattern = event.target.value;
        this.regex.text = this._regexService.matchRegex(this.regex);
    }
}