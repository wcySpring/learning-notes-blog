[TOC]
>[success] # 简单的案例和项目结构目录
~~~
.
├── node_modules     // npm 安装的包文件
├── public           //  存放静态资源文件夹
|   ├── css
|   └── js  
├── views           // 存放html 文件件
|   ├── index.html  // 首页
|   └── js  
├── data.json   // 无数据暂时用json 保存数据
├── index.js    // 文件主入口，主要做配置
├── router.js   // 所有的路由配置
├── service.js  // 业务逻辑，写好的业务逻辑，会导入进路由js中，形成关联
└── package.json   // npm init 生成的NPM包的所有相关信息，其中sprict可以脚本
~~~
>[danger] #####  操作步骤
~~~
1.npm init -y // 初始化 package.json
2.npm install express --save // 安装express
3.npm install --save art-template
  npm install --save express-art-template  // 安装模板依赖，和对应模板
4.npm install --save body-parse // 处理post 请求
~~~
>[danger] ##### index.js  入口文件 -- 主要配置文件

 ~~~
const express = require('express');
const path =require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');
const app = express();

// 启动静态资源服务
app.use('/www',express.static('public'));
// 设置模板路径
app.set('views', path.join(__dirname,'views'));
// 设置模板引擎
app.set('view engine','html');
// 使express兼容art-template模板引擎
app.engine('html', require('express-art-template'));

// 处理请求参数
// 挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({ extended: false }));
// 处理json格式的参数
app.use(bodyParser.json());


// 配置路由
app.use(router);
app.listen(3000,()=>{
    console.log('running...');
});
~~~
>[danger] ##### router.js -- 路由文件所有请求经过的配置文件
~~~
1.主要做路由的分发配合service 逻辑业务层
2.一定要把路由导出好让index.js 入口文件可以接受到并且处理
~~~
~~~
// 路由文件
const express = require('express');
const router = express.Router();   // 导入express 的路由文件
const service = require('./service.js'); // 导入业务逻辑模块


router.get('/', service.showIndex);    // 渲染主页
router.get('/toaddbook', service.toaddBook); // 跳转到添加页面
router.post('/addBook', service.addBook);  // 处理post 添加数据请求
router.get('/toEditBook',service.toEditBook); // 跳转到编辑图书信息页面
router.post('/editBook',service.editBook); // 编辑图书提交表单
router.get('/deleteBook',service.deleteBook); // 删除图书信息
module.exports = router;
~~~
>[danger] service.js -- 逻辑业务层
~~~
1.重定向res.redirect('地址');
~~~
 ~~~
const data = require('./data.json');  // 不用数据库暂时用json 存储
const path = require('path');
const fs = require('fs');

// 自动生成图书编号（自增）
let maxBookCode = ()=>{
    let arr = [];
    data.forEach((item)=>{
        arr.push(item.id);
    });
    return Math.max.apply(null,arr);
};

// 把内存数据写入文件
let writeDataToFile = (res) => {
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err)=>{
        if(err){
            res.send('server error');
        }
        res.redirect('/'); // 文件写入成功之后重新跳转到主页面
    });
};


// 渲染主页面
exports.showIndex = (req,res) =>{
    res.render('index',{list:data})
};

// 跳转添加图书页面
exports.toaddBook = (req,res) =>{
    res.render('addBook');
};

// 处理添加的post
exports.addBook = (req,res) =>{
      let info = req.body;
      let book = {};
      for(let i in info){
          book[i] = info[i];
      }
    book.id = maxBookCode() + 1;
    data.push(book);
    writeDataToFile(res);   // 把内存中的数据写入文件
};


// 跳转编辑图书页面
exports.toEditBook = (req,res) => {
    let id = req.query.id;
    let book = {};
    data.forEach((item)=>{
        if(id == item.id){
            book = item;
            return;
        }
    });
    res.render('editBook',book);
}
// 编辑图书更新数据
exports.editBook = (req,res) => {
    let info = req.body;
    data.forEach((item)=>{
        if(info.id == item.id){
            for(let key in info){
                item[key] = info[key];
            }
            return;
        }
    });
    // 把内存中的数据写入文件
    writeDataToFile(res);
}
// 删除图书信息
exports.deleteBook = (req,res) => {
    let id = req.query.id;
    data.forEach((item,index)=>{
        if(id == item.id){
            // 删除数组的一项数据
            data.splice(index,1);
        }
        return;
    });
    // 把内存中的数据写入文件
    writeDataToFile(res);
}
~~~
>[danger] ##### views -- html 页面
* index
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图书管理系统</title>
    <link rel="stylesheet" type="text/css" href="/www/style.css">
</head>
<body>
    <div class="title">图书管理系统<a href="/toAddBook">添加图书</a></div>
    <div class="content">
        <table cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>名称</th>
                    <th>作者</th>
                    <th>分类</th>
                    <th>描述</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {{each list}}
                <tr>
                    <td>{{$value.id}}</td>
                    <td>{{$value.name}}</td>
                    <td>{{$value.author}}</td>
                    <td>{{$value.category}}</td>
                    <td>{{$value.desc}}</td>
                    <td><a href="/toEditBook?id={{$value.id}}">修改</a>|<a href="/deleteBook?id={{$value.id}}">删除</a></td>
                </tr>
                {{/each}}
        </table>
    </div>
</body>
</html>
~~~
* addBook 添加页
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>添加图书</title>
</head>
<body>
    <div>添加图书</div>
    <form action="/addBook" method="post">
        名称：<input type="text" name="name"><br>
        作者：<input type="text" name="author"><br>
        分类：<input type="text" name="category"><br>
        描述：<input type="text" name="desc"><br>
        <input type="submit" value="提交">
    </form>
</body>
</html>
~~~
* editBook  编辑页
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>修改图书</title>
</head>
<body>
    <div>修改图书</div>
    <form action="/editBook" method="post">
        <input type="hidden" name="id" value="{{id}}">
        名称：<input type="text" name="name" value="{{name}}"><br>
        作者：<input type="text" name="author" value="{{author}}"><br>
        分类：<input type="text" name="category" value="{{category}}"><br>
        描述：<input type="text" name="desc" value="{{desc}}"><br>
        <input type="submit" value="提交">
    </form>
</body>
</html>
~~~