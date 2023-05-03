[TOC]
>[success] # Express -- nodeWeb框架
~~~
1.基于[Node.js]平台，快速、开放、极简的 Web 开发框架
~~~
>[danger] ##### 安装使用
<a href="http://www.expressjs.com.cn/starter/installing.html">官网安装教程</a>
~~~
1.npm init                      -- 初始化package.json
2.npm install express --save    -- 安装express 框架
~~~
>[danger] ##### 简单使用（具体和http模块对应比较见之前文档）
~~~
// 导入express 包
const express = require('express');
// 创建express 对象
const app = express();
// 绑定路由
app.get('/',(req,res) =>{
    // 类似node http 中的end方法页面返回指定内容
    res.send('Hell Word')
});

// 监听端口
app.listen(3000,()=>{
   console.log("running")
});
~~~
>[danger] ##### 静态文件的处理
<a href="http://www.expressjs.com.cn/starter/static-files.html">托管静态文件</a>
~~~
1.要处理静态文件的时候，需要利用 Express 托管静态文件，比如js、css、img等
2.处理静态文件使用 -- express.static('public') 指定静态目录
3.使用express 对象的use方法进行绑定
4.也可以指定一个虚拟路径前缀
5.app.use(express.static('public')); -- 这个public  里文件相当于在根目
录，假如在public 文件夹下的img文件下放了一个index.html文件，可
以：http://localhost:3000/img/index.html 这么访问，也就是前缀不用
加public。
~~~
* 简单的案例使用
~~~
const express = require('express');
const app = express();

// 使用express 对象的use方法，和使用express导包的static方法
// 创建一个静态路由处理
// 也可同时多个静态资源文件夹
app.use(express.static('public'));
app.use(express.static('static'));
app.listen(3000,()=>{
   console.log("running1")
});
~~~
* 简单案例之 -- 虚拟路径
~~~
const express = require('express');
const app = express();

// 使用express 对象的use方法，和使用express导包的static方法
// 创建一个静态路由处理
// 访问前缀必须加上虚拟路径/abc，然而这个/abc 在实际工程目录并
// 不存在，只是我们人为假设的一个目录
app.use('/abc',express.static('public'));

app.listen(3000,()=>{
   console.log("running1")
});
~~~
>[danger] ##### 路由分发
~~~
1.路由是指确定应用程序如何响应对特定端点的客户端请求，该请求
是URI（或路径）和特定HTTP请求方法（GET，POST等）。
2.app.METHOD(PATH, HANDLER)
 解释:  1.`app`是一个实例`express`。
        2.`METHOD`是一个[HTTP请求方法](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)，小写。
        3.`PATH`是服务器上的路径。
        4.`HANDLER`是路由匹配时执行的功能。
3.http的常用请求方式：post 添加,get 查询,put 更新,delete 删除
~~~
* 案例
~~~
const express = require('express');
const app = express();

// 基本的路由处理
app.get('/',(req,res)=>{
    res.send('get data');
});

app.post('/',(req,res)=>{
    res.send('post data');
});

app.put('/',(req,res)=>{
    res.send('put data');
});

app.delete('/',(req,res)=>{
    res.send('delete data');
});

// 直接使用use分发可以处理所有的路由请求,不管get，post,del，put 都能接收到
// app.use((req,res)=>{
//     res.send('ok');
// });

app.listen(3000,()=>{
   console.log("running1")
});
~~~