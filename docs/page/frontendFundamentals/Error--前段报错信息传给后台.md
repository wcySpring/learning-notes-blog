>[success] # 将报错信息传递给后台
~~~
1.要建立这样一种 JavaScript 错误记录系统，首先需要在服务器上创建一个页面（或者一个服务器入
口点），用于处理错误数据。这个页面的作用无非就是从查询字符串中取得数据，然后再将数据写入错
误日志中。这个页面可能会使用如下所示的函数：
~~~
~~~
function logError(sev, msg){
 var img = new Image();
 img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" +
 encodeURIComponent(msg);
}
~~~
>[danger] ##### 为什么用image 对象
~~~
1.这个 logError()函数接收两个参数：表示严重程度的数值或字符串（视所用系统而异）及错误消
息。其中，使用了 Image 对象来发送请求，这样做非常灵活，主要表现如下几方面。
  1.1 所有浏览器都支持 Image 对象，包括那些不支持 XMLHttpRequest 对象的浏览器。
  1.2 可以避免跨域限制。通常都是一台服务器要负责处理多台服务器的错误，而这种情况下使用
XMLHttpRequest 是不行的。
  1.3 在记录错误的过程中出问题的概率比较低。大多数 Ajax 通信都是由 JavaScript 库提供的包装函
数来处理的，如果库代码本身有问题，而你还在依赖该库记录错误，可想而知，错误消息是不
可能得到记录的。
~~~
* 案例
~~~
// 只要是使用 try-catch 语句，就应该把相应错误记录到日志中。来看下面的例子。
for (var i=0, len=mods.length; i < len; i++){
 try {
     mods[i].init();
 } catch (ex){
     logError("nonfatal", "Module init failed: " + ex.message);
 }
}
// 讲解：
在这里，一旦模块初始化失败，就会调用 logError()。第一个参数是"nonfatal"（非致命），表
示错误的严重程度。第二个参数是上下文信息加上真正的 JavaScript 错误消息。记录到服务器中的错误
消息应该尽可能多地带有上下文信息，以便鉴别导致错误的真正原因。
~~~
>[danger] ##### 在vue main.js 文件记录全局报错
~~~
const errorHandler = (err, vm, info) =>{
    console.log('全局异常捕获')
    console.error('全局异常捕获')
    console.error(err)
    console.error(vm)
    console.error(info)
    function report(err, vm, info) {
        let reportUrl = '/report'
        new Image().src = reportUrl + '/error?err='+err+'&info='+info
    }
    report(err, vm, info)
};

Vue.prototype.errorHandler = errorHandler;
Vue.config.errorHandler = errorHandler;
~~~