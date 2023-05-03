>[success] # Express 中间件
~~~
1.中间件（middleware）就是处理HTTP请求的函数。它最大的特点就是，
一个中间件处理完，再传递给下一个中间件
2.中间件有三个参数分别是依次为request对象（代表HTTP请求）、
response对象（代表HTTP回应），next回调函数（代表下一个中间件）。
3.简单说中间件就像一个过滤器可以，给每个url在请求前加一个操作，比如
请求时间，请求IP之类的。
~~~
>[danger] ##### use -- 注册调用中间件
~~~
1.当我们写好了中间件方法，可以使用use 进行调用中间件
2.app.use的作用是将一个中间件绑定到应用中，参数path是一个路径前
缀，用于限定中间件的作用范围，所有以该前缀开始的请求路径均是中间
件的作用范围，不考虑http的请求方法
~~~
>[danger] ##### use 和 method
~~~
1.路由规则是app.use(path,router)定义的，router代表一个由e
xpress.Router()创建的对象，在路由对象中可定义多个路由规则。可是如
果我们的路由只有一条规则时，可直接接一个回调作为简写，也可直接使
用app.get或app.post方法。即
2.use 和 method 都可以调用中间件，两者区别当一个路径有多个匹配规则
时，使用app.use，否则使用相应的app.method(get、post)
3.use 不受请求状态的限制，但method 会被指定请求状态
~~~
>[danger] ##### 中间件函数 -- next 讲解
~~~
1.简单的案例模仿next()方法
2.这个案例涉及到了，函数队列，回调函数，闭包，递归
3.在express内部，有一个函数的数组，暂时叫这个数组**tasks**，每来一
个请求express内部会依次执行这个数组中的函数
~~~
~~~
var http = require('http');
function express(){
    var funcs = [];

    var expr = function(req,res){
        var i = 0;
        function next(){
            var task = funcs[i++];
            if(!task) return;
            task(req,res,next);
        }
        next();
    }
    expr.use=function(f){
        funcs.push(f);
    }
    return expr;
}
var app = express();
app.use(function(req,res,next){
    console.log('haha');
    next();
});
app.use(function(req,res,next){
    console.log('hehe');
    next();
});
app.use(function(req,res){
    res.end("there is nothing happened");
});
// createServer 函数参数 function(req,res),因为app 返回的是expr ，就变
// 相的相当于expr(req,res)
http.createServer(app).listen('3000', function(){
    console.log('Express server listening on port 3000');
});
~~~
>[success] # 中间案例
~~~
1.中间如果不启用next 的方法，就不会讲内容传递给下一个中间件，整
个程序就会被hang住。简单的说next方法的作用就是把请求传递到下一个
中间件
2.next 中可以填写参数，如果填写的参数是route 可以直接跳转到下一个路由
3.可以定义方法后，用数组顺序决定中间件运行顺序。
4.中间件错误处理参数
~~~
>[danger] ##### 简单的使用 -- 定一个请求时间的中间
~~~
const express = require('express');
const app = express();

let visitTime = (req, res, next)=>{
    let dt = new Date();
    console.log(Number(dt));
    // 给下一个中间件app.get
    next();
};
// use 可以接受全类型的 请求，我们封装的一个方法用来记录请求时间的
app.use(visitTime);

app.get('/', function (req, res, next) {
    res.send("111")
});

app.listen('3000',function () {
    console.log("11")
});
~~~
>[danger] ##### 简单案例 -- next 跳转到指定路由
~~~
1.没加route 参数的话，跳转acb，加了跳转到hello
~~~
~~~
const express = require('express');
const app = express();

app.get('/abc',(req,res,next)=>{
    console.log(1);
    // 跳转到下一个路由
    //next('route');
    next()
},(req,res)=>{
    console.log(2);
    res.send('abc');
});

app.get('/abc',(req,res)=>{
    console.log(3);
    res.send('hello');
});

app.listen('3000',function () {
    console.log("11")
});

~~~
>[danger] ##### 简单案例 -- 用数组决定顺序
~~~
const express = require('express');
const app = express();

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');
}

app.get('/example', [cb0, cb1, cb2]);
// app.use('/example', [cb0, cb1, cb2]);

app.listen('3000',function () {
    console.log("11")
});

~~~
>[danger] ##### 简单案例 -- 处理错误500/404 中间件
~~~
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
~~~