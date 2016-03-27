import {Component} from 'angular2/core';
import {RegexTestComponent} from './regex-test.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-regex-test></my-regex-test>
    `,
    directives: [RegexTestComponent],
})

export class AppComponent {
    public title = 'Regex Online Test';
}
