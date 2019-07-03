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

 但是最新版的webpack 4.0+，需要修改命令为  webpack common.js -o bundle.js
 
 此路径是common.js 和bundle.js同在根目录下，否则可以使用 webpack js/common.js -o dist/bundle.js
 
 在终端中进行webpack命令打包，文件过多时会很复杂，所以可以使用配置文件配置打包命令
 
对于使用webpack.config.js配置文件配置webpack命令的情况，在根目录下新建webpack.config.js文件，然后输入
module.exports = {
  entry:  __dirname + "/app/main.js",//入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

然后命令行运行webpack即可，会自动读取webpack.config.js的内容
 
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

测试通过则表明配置没有问题。

7、对于非默认配置，即打包的文件不止main.js 以及目标文件不在dist目录下，想要自己配置时，可以运行命令

npx webpack ./common.js -o bundle.js --mode development

这样打包出来的bundle.js文件为开发版的入口文件

npx webpack ./common.js -o bundle.js --mode production 

对于npx命令，是新版的npm增加的模块，如果执行时提示不是内部或外部命令，升级npm即可



其他
npm install --save-dev webpack-dev-server  安装使用本地服务器，然后再webpack.config.js里配置devserver
devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
  package.json的scripts中配置"server": "webpack-dev-server --open"，然后命令行 npm run server即可开启本地服务器。







