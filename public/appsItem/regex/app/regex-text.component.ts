import {Component, Input} from 'angular2/core';
import {Regex} from './regex';
import {RegexService} from "./regex.service";

@Component ({
    selector: 'regex-text',
    templateUrl: 'app/regex-text.component.html',
    styleUrls: ['app/regex-text.component.css'],
    providers: [RegexService]
})

export class RegexTextComponent {
    @Input() regex: Regex;

    constructor(private _regexService: RegexService){}
    
    OnTextKey(event: any) {
        this.regex.text = event.target.value;
        this.regex.text = this._regexService.matchRegex(this.regex);
    }
}

