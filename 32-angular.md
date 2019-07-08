1、搭建环境，需要node+npm，然后npm安装angular cli

安装时遇到了问题，后推测可能是本地node版本过低，升级后解决，windows下node的升级需要去官网下载最新版安装包，安装即可

npm install -g @angular/cli

ng new my-app 初始应用

cd my-app
ng serve --open 运行应用

命令运行成功以后，会自动调用浏览器，打开server地址http://localhost:4200/
