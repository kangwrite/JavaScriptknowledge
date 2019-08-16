window.open()做下载和导出等功能时，参数过多url过长时，可以使用form模拟post请求

//首先创建一个form表单
var tempForm = document.createElement("form");  
tempForm.id="tempForm1";

//制定发送请求的方式为post
tempForm.method="post"; 
//此为window.open的url，通过表单的action来实现
tempForm.action="usermanage/ui/export";
//利用表单的target属性来绑定window.open的一些参数（如设置窗体属性的参数等）
tempForm.target="";  

//创建input标签，用来设置参数
var hideInput = document.createElement("input");  
hideInput.type="hidden";  
hideInput.name= "departmentId";
hideInput.value= departmentId;
//将input表单放到form表单里
tempForm.appendChild(hideInput);  

var hideInput2 = document.createElement("input");
hideInput2.type = "hidden";
hideInput2.name = "keyword";
hideInput2.value = keyword;
tempForm.appendChild(hideInput2);

var hideInput3 = document.createElement("input");
hideInput3.type = "hidden";
hideInput3.name = "status";
hideInput3.value = status;
tempForm.appendChild(hideInput3);
	          
//此为给form表单绑定事件（onsubmit），由于存在浏览器兼容问题所以此处加了一个判断。
//但实质都是为form表单绑定一个提交事件，以便之后触发实现window.open效果
if(document.all){
    tempForm.attachEvent("onsubmit",function(){});        //IE
}else{
    var subObj = tempForm.addEventListener("submit",function(){},false);    //firefox
}

//将此form表单添加到页面主体body中
document.body.appendChild(tempForm);

//然后触发onsubmit事件时执行openWindow(name)函数。因为有特定浏览器会打开一个空白页面所以这里的function（甚至整个if）可以根据情况省略，经试验这不会影响模拟window.open的效果。
if(document.all){
    tempForm.fireEvent("onsubmit",function(){ openWindow(name); });
}else{
    //tempForm.dispatchEvent(new Event("submit"));
    $("form").trigger("onsubmit",function(){ openWindow(name); });
}

//手动触发，提交表单
tempForm.submit();

//从body中移除form表单
document.body.removeChild(tempForm);
function openWindow(name){
     window.open('about:blank',name,'height=400, width=400, top=0, left=0, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, status=yes');
}
