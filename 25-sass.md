sass 是css预处理器，可以再sass中使用变量等，让css编写的更方便快捷
目前踩坑第一步

1、安装
sass需要依赖Ruby环境，去官网安装ruby

2、运行命令
gem source -ahttp://rubygems.org/
gem sources -ahttp://ruby.taobao.org/  我这里此命令失败了，但是sass还是能用
gem install sass
安装成功

3、进入项目目录，编写scss文件
注意，scss是可以用{}作为分割的sass文件

4、运行命令  sass a.scss a.css 
回车查看，目录下已经生成了对应的a.css 文件
此文件是浏览器可读可理解的样式文件

后续继续踩高级坑
