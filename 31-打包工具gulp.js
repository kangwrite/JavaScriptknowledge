//全局安装gulp
npm install --global gulp

//开发依赖安装
npm install --save-dev gulp

npm install gulp-uglify gulp-concat gulp-clean-css gulp-rev-append gulp-minify-css -g
npm install gulp-uglify gulp-concat gulp-clean-css gulp-rev-append gulp-minify-css --save -dev
//引入需要用到到插件
var gulp = require('gulp');
 		uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css');
    rev = require('gulp-rev-append')


gulp.task('style',function(){
	return gulp.src('style/*.css')    // 匹配style文件夹下的css文件
	  .pipe(cleanCSS())               //使用cleancss压缩css文件
	  .pipe(concat('comm.min.css'))   //压缩后的代码写入到comm.min.css文件
	  .pipe(gulp.dest('style/dist')); //将文件输出到style/dist目录下
})

gulp.task('js',function(){
	return gulp.src('script/*.js') 
	  .pipe(uglify())                 //uglify压缩js文件
	  .pipe(concat('comm.min.js'))
	  .pipe(gulp.dest('script/dist'));
})

gulp.task('default', gulp.series('js','style',function(){   
//默认任务，使用gulp即可执行。 gulp4.0不再支持gulp.task('default', ['a','b','c'],function   
这种任务队列，转而使用gulp.series方法指定依赖任务
	return gulp.src('index.html')
		   .pipe(rev())   //rev监听文件的hash值，index.html页面引入的文件如果有hash变化，?hash=code  code值会自动更新
       .pipe(concat('index.html'))
       .pipe(gulp.dest('.'));
}));
