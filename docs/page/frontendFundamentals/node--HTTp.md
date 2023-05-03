[TOC]
>[success] # node -- HTTP 模块
~~~
1.引用http 包 -- require('http')
~~~
>[danger] #####  开启一个本地服务
~~~
1.listen 中有三个参数，第一个是端口号，第二个是指定的ip，第三个是回调
函数，指定ip可以省略，省略后默认location。
2.用两种创建，一种是传统的js使用的on事件监听创建，一种是直接createServer
~~~
* 第一种利用on 监听request 事件
~~~
const http = require('http');
// 创建服务器实例对象
let server = http.createServer();
// 绑定请求事件
server.on('request',(req,res)=>{
    res.end('hello');
});
// 监听端口
server.listen(3000);
~~~
* 第二种
~~~
const http = require('http');

http.createServer((req,res)=>{
    // 返回页面的内容是ok
    res.end('ok');
}).listen(3000,'192.168.0.106',()=>{
    console.log('running...');
});
~~~
>[danger] ##### req/res--请求响应 路由
~~~
1.在server.on('request',(req, res) => {})中回调函数有两个参数，一个是请
求，一个是响应。他们依次是,req对象是Class: http.IncomingMessage的实
例对象，res对象是Class: http.ServerResponse的实例对象
2.req.url -- 获取请求连接地址,获取的格式是斜杠开头类似"/index"
3.req.write  -- 写一个要返回展示的页面中的内容
4. 响应头 -- res.writeHead(404,{'Content-Type':'text/plain; charset=utf8'});
~~~
* 简单的路由映射案例
~~~
const http = require('http');
// 创建一个server
let server = http.createServer();
// 监听 request 方法
server.on('request',(req, res) => {
    // req.url 获取请求连接地址
    console.log(req.url);
    if (req.url.startsWith('/index')) {
        // req.write 写一个要返回展示的页面中的内容
        res.write('hello');
        res.write('hi');
        res.write('nihao');
        // end方法用来完成响应，只能执行一次
        res.end();
    } else if (req.url.startsWith('/about')) {
        res.end('about');
    } else {
        res.end('no content');
    }
});
server.listen(3000,()=>{
    console.log('启动成功')
});
~~~
>[success] # 响应网页请求的案例
~~~
1.使用上面http 包
2.配合未见读写模块fs
3.利用path 模块
4.主要原理，读取服务器中html文件，然后利用res.end 方法将页面内容全部返回。
~~~
>[danger] ##### 案例
~~~
1.下面的代码中html 代码全部放在了www的文件夹下
2.封装一个专门用来处理读取，www文件下对应文件内容的方法
3.在调用的时候传入对应html 文件的名称，和响应对象
~~~
~~~
const http = require('http');
const fs = require('fs');
const path = require('path');

// 配置全局html 文件处理目录
let staticPath = path.join(__dirname,'www')
// 函数表达式 的方式配合箭头函数封装一个html处理方法
let readFileHtml = (url, res) => {
    fs.readFile(path.join(staticPath,url),'utf8', (err,fileContent)=> {
       if(err){
           res.end('server error')
       } else{
           res.end(fileContent)
       }
    });
};

// 创建一个server
let server = http.createServer();
// 监听 request 方法
server.on('request',(req, res) => {
    if (req.url.startsWith('/index')) {
        readFileHtml('index.html',res);
    } else if (req.url.startsWith('/about')) {
        readFileHtml('about.html',res);
    } else {
        res.end('no content');
    }
});
server.listen(3000,()=>{
    console.log('启动成功')
});
~~~