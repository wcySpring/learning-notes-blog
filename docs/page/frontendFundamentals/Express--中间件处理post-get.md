>[success] # express 处理post/get
~~~
1.看了正常使用案例后我们虽然觉得get使用起来还是比较方便，当时我们看了
post处理起来太麻烦，这时候我们来看第二条
2.安装包 npm install --save body-parse。
3.使用use注册下载处理的post 格式的中间件，使用如下:
    var bodyParser = require('body-parser')
    // 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())
    
    app
      .post('/login', function(req,res){
                // 获取参数
             req.body
        })
~~~
>[danger] ##### 正常使用
~~~
1.在public 下创建一个静态页面login.html
2.创建了一个专门处理login 链接请求的get方法，使用req.query 可以打印出
get请求参数
3.当使用post方法的时候可以参考HTTP -- post处理章节
~~~
~~~
const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/login',function (req,res) {
    console.log(req.query)
    res.send("11")
});

app.listen('3000',function () {
    console.log("11")
});
~~~
>[danger] ##### 使用 -- 中间件post处理
~~~
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parse');

// 处理urlencode 格式数据
app.use(bodyParser.urlencoded({extend:false}));
// 处理json 格式数据
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.post('/login',function (req,res) {
    console.log(req.query)
    res.send("11")
});


app.listen('3000',function () {
    console.log("11")
});

~~~
