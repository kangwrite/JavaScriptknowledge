webpack是一个将前端模块化打包的工具，通过终端执行命令，扫描模块依赖，压缩文件

11.08 踩坑一波

1、使用webpack，预先安装node  、npm环境，然后通过npm安装全局的和开发环境的webpack。
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
2、新建空项目，终端进入并运行npm init，会发现新建了package.json文件，该文件会包含webpack 打包的配置信息。
3、写demo，例如 index.html引入bundle.js，但是逻辑代码写在了common.js中，则bundle.js为入口js
4、运行命令 webpack {真正的逻辑js} {打包后的入口js}
针对我们的demo，则是 webpack common.js bundle.js （注意路径）
 但是最新版的webpack，需要修改命令为  webpack common.js -o bundle.js
5、此时打包出的文件是压缩版本，现在webpack提供了 开发版  上线版 和none ，需要在package.json增加配置
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
6、运行 npm run dev 如果能成功打包，则说明dev配置成功
注意：
此处需要说明，运行npm run dev命令时，webpck的默认配置是 src中的index.js为逻辑js，dist中的main.js为入口js，即打包后的js；
所以我们验证时，可能会报错，需要创建dist  src 文件夹以及index.js 来测试。
测试通过测表明配置没有问题。
7、对于非默认配置，即打包的文件不止main.js 以及目标文件不在dist目录下，想要自己配置时，可以运行命令
npx webpack ./common.js -o bundle.js --mode development
这样打包出来的bundle.js文件为开发版的入口文件
npx webpack ./common.js -o bundle.js --mode production 

对于npx命令，是新版的npm增加的模块，如果执行时提示不是内部或外部命令，升级npm即可



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
    // 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['stylus','watch']);
};
