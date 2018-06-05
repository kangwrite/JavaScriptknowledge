<!-- es6常用语法-->
<!--
//   1、变量声明 let  常量声明 const 
  
//   注意：let和const均为块级作用域，不会进行变量提升，作用域为{}内部,const 不可改变值
-->
function aa(bool) {
    const name = "connie";
    name = "qi";//报错，常量值不可被更改
    if(bool) {
        let test = 'hello'
    } else {
        console.log(test)
    }
}
aa(true); //test 被声明，值为hello;
aa(false); //报错，test未定义


var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
//在块作用域内的声明之前 调用变量，即使外部作用域有全局变量，仍然会报错
//在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
//es5的作用域是全局作用域或函数作用域，let增加了块级作用域，比如可防止用来循环计数的变量泄露为全局变量


<!--
//   2、模板字符串
//   表达式嵌入字符串进行拼接，用${}来区分;
//   反引号 `` 拼接多行字符串
-->
    //es5 
    var name = 'lux'
    console.log('hello' + name)
    //es6
    const name = 'lux'
    console.log(`hello ${name}`) //hello lux
    
    const template = `<div>
        <span>hello world</span>
    </div>`

 <!--
//     3、函数
 -->
  //函数默认值,避免函数参数为false时，转变为了默认值
  function log(x, y = 'World') {
    console.log(x, y);
  }
  log('Hello') // Hello World
  log('Hello', 'China') // Hello China
  log('Hello', '') // Hello
         


//     箭头函数 
//     省略return ，继承上下文的this，无需function创建，
//     只有一个参数时，可省略参数的（）
 var people = name => 'hello' + name;
 var people = (name, age) => {
        const fullName = 'h' + name
        return fullName
    } 
    
 
 
<!--
//   4、对象扩展
//   对象方法简写
-->

 const people = {
        name: 'lux',
        getName () { //省略冒号、function 关键字
            console.log(this.name)
        }
    }
    
 <!--
    //5、对象和数组解构
 -->
    const people = {
        name: 'lux',
        age: 20
    }
    const { name, age } = people  //对象的key 要和解构后的key对应
    console.log(`${name} --- ${age}`)
    //数组
    const color = ['red', 'blue']
    const [first, second] = color  //数组解构的key可以任意取名
    console.log(first) //'red'
    console.log(second) //'blue'
    //数组解构根据下标来对应，对象结构按照key匹配
    //但是需要注意以下的问题
    let { bar, foo } = { foo: "aaa", bar: "bbb" };   //此处是普通按照属性值来匹配

    let { foo: baz } = { foo: 'aaa', bar: 'bbb' };   //baz：aaa
    //foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
 <!-- 
//     6、展开运算符
//     将元素在新变量内部展开，可以理解为融入或者提取  ...
 -->
 
    //数组
    const color = ['red', 'yellow']
    const colorful = [...color, 'green', 'pink']
    console.log(colorful) //[red, yellow, green, pink]

    //对象
    const alp = { fist: 'a', second: 'b'}
    const alphabets = { ...alp, third: 'c' }
    console.log(alphabets) //{ "fist": "a", "second": "b", "third": "c"}
    
     //数组
    const number = [1,2,3,4,5]
    const [first, ...rest] = number
    console.log(rest) //2,3,4,5
    //对象
    const user = {
        username: 'lux',
        gender: 'female',
        age: 19,
        address: 'peking'
    }
    const { username, ...rest } = user
    console.log(rest) //{"address": "peking", "age": 19, "gender": "female"}
    
     
  <!--
     // 7、import 和export  导入和导出模块
  -->
 // 待完善
  
   <!--
      //8、promise  用同步的方式去写异步的代码
  -->
  //待完善
  
  <!--
      //9、generator  生成器函数
  -->
  //待完善
  
  <!--
    //10、字符串方法
  -->

    //for of 可以遍历字符串
    let stringChar = "abc";
    for(let a of stringChar){
      console.info(a)
    } 
    // a   b   c

    //新增 includes()：返回布尔值，表示是否找到了参数字符串。
    //startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()
    //：返回布尔值，表示参数字符串是否在原字符串的尾部。
    //第二个参数代表只寻找前几个字符

    str.repeat(n)   //字符串重复的次数  
    'x'.repeat(2)   // => 'xx' 


    //padStart()用于头部补全，padEnd()用于尾部补全
    'x'.padStart(5, 'ab') // 'ababx'
    'x'.padStart(4, 'ab') // 'abax'

    'x'.padEnd(5, 'ab') // 'xabab'
    'x'.padEnd(4, 'ab') // 'xaba'

  <!-- 
    //11、Number 对象 和Math对象 以及一些计算方法
  -->
    //es6为了逐步减少全局方法，将一些方法转移到了Number对象上,行为不变
    // ES5的写法
    parseInt('12.34') // 12
    parseFloat('123.45#') // 123.45

    // ES6的写法
    Number.parseInt('12.34') // 12
    Number.parseFloat('123.45#') // 123.45
    

    Number.isInteger()   //用来判断一个数值是否为整数。
    
    //Math.trunc方法用于去除一个数的小数部分，返回整数部分  对于空值和无法截取整数的值，返回NaN
    //Math.sign方法用来判断一个数到底是正数、负数、还是零


    ** //指数运算符
    2 ** 3  // 8
    2 **= 3  //2 = 2**3  8
    
  
