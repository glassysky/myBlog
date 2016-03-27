import {Injectable} from 'angular2/core';
import {Regex} from './regex';

@Injectable()

export class RegexService {
    matchRegex (regex: Regex){
        var userPattern = regex.pattern,                    //用户输入的正则表达式
            validateRegexPattern = /\/.*\//,    //用来检验用户输入是否为正则表达式
            text = regex.text,                              //用户需要匹配的文本
            patternObj,                                      //正则对象
            result;                                         //用户输入正则是否正确

        //判断是否为正则表达式
        if(validateRegexPattern.test(userPattern)){
            regex.result = ["success"];
            if(regex.pattern && regex.text){
                let tempPattern;
                //得到正确的正则表达式
                tempPattern = validateRegexPattern.exec(userPattern)[0];
                tempPattern = regex.pattern.slice(1, tempPattern.length - 1);
                patternObj = new RegExp(tempPattern);
                //用输入的正则匹配输入的文本
                if(patternObj.test(text)){
                    regex.result = patternObj.exec(text);
                } else {
                    regex.result = [""];
                }
            }
        } else {
            regex.result = ["error"];
        }


    }
}
