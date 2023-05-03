>[success] # 处理Get
~~~
1.get请求都是通过url 进行请求因此，想使用get请求其实就是变相处理url
2.url.parse(str,true); -- 获取url 具体参数，这个方法返回的是一个对象，其中
整个get传参都在这个对象的query中，第二个参数不加true意味着，query这
个key对应的value 是一个字符串，加true是一个对象
~~~
* 简单的使用案例
~~~
const url = require('url');
//parse方法的作用就是把URL字符串转化为对象
let str = 'http://www.baidu.com/abc/qqq?flag=123&keyword=java';
let ret = url.parse(str,true);
console.log(ret.query);
console.log(ret.query.keyword);
打印结果:
{ flag: '123', keyword: 'java' }
java
~~~
>[danger] ##### 具体处理的简单案例
~~~
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    let obj = url.parse(req.url,true);
    res.end(obj.query.username + '=========' + obj.query.password);
}).listen(3000,()=>{
    console.log('running....');
})
~~~