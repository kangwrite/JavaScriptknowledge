css3的transition，过渡效果，效果触发方式，是在过渡效果定义的样式改变时触发

css3背景渐变有2个类型，

一个是线性渐变linear-gradient
background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
background-color:#33CC99;

上方代码的意思是 偏移45° 从左下开始，0-25% 颜色是rgba(255, 255, 255, .15);25%-50%是透明色，即会展示为设置的背景颜色;50%-75%均为rgba(255, 255, 255, .15)（此处也可以设置成2个颜色，则为渐变效果）最后是说75%-100%均为透明，最终的100%是省略掉了
出来的效果是进度条的螺旋向前。

一个是径性渐变radial-gradient
 background: -webkit-radial-gradient(60% 55%, farthest-corner,blue,green,yellow,black); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(60% 55%, farthest-corner,blue,green,yellow,black); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(60% 55%, farthest-corner,blue,green,yellow,black); /* Firefox 3.6 - 15 */
    background: radial-gradient(60% 55%, farthest-corner,blue,green,yellow,black); /* 标准的语法（必须放在最后） */
    
60% 55%  应该是圆心所在位置
farthest-corner 是指渐变半径从圆心到距离最远的角 ，可选值还有farthest-side：最远的边；closest-side；closest-corner
然后后续列出要渐变的颜色

