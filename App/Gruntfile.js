/**
 * Created by cui on 2016/2/15.
 */
//封装函数
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/test.js',
                dest: 'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};