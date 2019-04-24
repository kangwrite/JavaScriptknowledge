grunt

1、npm安装grunt
npm install grunt --save-dev
2、安装脚手架
npm install -g grunt-cli
3、执行grunt的项目需要有gruntfile.js和package.json文件
package.json: 此文件被npm用于存储项目的元数据，以便将此项目发布为npm模块。你可以在此文件中列出项目依赖的grunt和Grunt插件，放置于devDependencies配置段内。
大部分 grunt-init 模版都会自动创建特定于项目的package.json文件。
npm init命令会创建一个基本的package.json文件。

Gruntfile: 此文件被命名为 Gruntfile.js 或 Gruntfile.coffee，用来配置或定义任务（task）并加载Grunt插件的。 此文档中提到的 Gruntfile 其实说的是一个文件，文件名是 Gruntfile.js 或 Gruntfile.coffee。
Gruntfile由以下几部分构成：

"wrapper" 函数
项目与任务配置
加载grunt插件和任务
自定义任务
ex:
/// 包装函数
module.exports = function(grunt) {
    // 任务配置,所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus:{
            build: {
                options: {
                    linenos: false,
                    compress: true
                },
                files: [{
                    'styles/index.css': ['styles/css.styl','styles/css2.styl']
                    //配置将styl文件执行到一个index.css文件中
                }]
            }
        },
        // watch插件的配置信息
        watch: {
            another: {
                files: ['styles/*','styles/*.styl'],
                tasks: ['stylus'],
                options: {
                    livereload: 1337
                }
            }
        }
    });
    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    // 告诉grunt当我们在终端中输入grunt时需要做些什么  执行grunt命令时的任务
    grunt.registerTask('default', ['stylus','watch']);
};
