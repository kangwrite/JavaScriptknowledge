1、搭建环境，需要node+npm，然后npm安装angular cli

安装时遇到了问题，后推测可能是本地node版本过低，升级后解决，windows下node的升级需要去官网下载最新版安装包，安装即可

npm install -g @angular/cli

ng new my-app 初始应用

cd my-app
ng serve --open 运行应用

命令运行成功以后，会自动调用浏览器，打开server地址http://localhost:4200/

2、angular几个常用语法

*ngFor  用于遍历数据，*类型的指令为结构性指令，会改变或者重塑宿主DOM

*ngIf   用于隐藏展示DOM

插值表达式 {{}}   {{ product.name }}

属性绑定 []   <a [title]="product.name + ' details'">

事件绑定 ()   <button (click)="share()">

3、index中有app-root组件，这是根组件，组件入口在app.component.ts。app.module.ts中进行基本配置，NgModule中有rooter等的配置。

组件定义好后，在html中使用<app-组件名></app-组件名>的标签来引用即可。

每个组件的ts文件中有选择器、模板、和样式文件的配置信息
