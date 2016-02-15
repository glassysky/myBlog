/**
 * Created by cui on 2016/2/15.
 */
//封装函数
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('default', []);
};