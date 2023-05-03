>[success] # Express -- 模板引擎
~~~
1.和大多数后台语言一样，可以指定网页渲染的模板引擎。
2.这里使用的是art - template
~~~
>[danger] ##### 下载 -- art-template
~~~
npm install --save art-template
npm install --save express-art-template
~~~
>[danger] ##### 使用 -- art-template
* set 方法
~~~
1.set方法用于指定变量的值.
2.下面代码使用set方法，为系统变量“views”和“view engine”指定值。
~~~
~~~
1.设置模板文件所在目录，第一参数views 是固定值是为了告诉要对express 
做模板引擎操作,第二个值是渲染的视图层地址:
    app.set('views',path.join(__dirname,'views'));

2.设置要使用的模板引擎,第一个参数view engine 是固定的，第二个参数指
定模板文件的后缀名为html
    app.set('view engine','html');

3.要运行后缀是html 的模板引擎
    app.engine('html', require('express-art-template'));
~~~
>[danger] ##### 如何渲染
~~~
1.在响应的res 参数有个方法叫render，第一个参数是渲染在views文件下
的，指定文件的名称，第二个是要渲染的数据，数据是个对象
    let data = {
            title : '水果',
            list : ['apple','orange','banana']
        }
    res.render('list',data);
~~~
>[danger] ##### 简单的例子说明
~~~
1.npm init -y // 初始化 package.json
2.npm install express --save // 安装express
3.npm install --save art-template
  npm install --save express-art-template  // 安装模板依赖，和对应模板
~~~
~~~
const express = require('express');
const path =require('path');
const app = express();

// 设置模板路径
app.set('views', path.join(__dirname,'views'));
// 设置模板引擎
app.set('view engine','html');
// 使express兼容art-template模板引擎
app.engine('html', require('express-art-template'));

app.get('/', (req, res)=>{
    let data = {
        title : '水果',
        list : ['apple','orange','banana']
    }
    // 参数一：模板名称；参数二：渲染模板的数据
    res.render('list',data);
});

app.listen(3000,()=>{
    console.log('running...');
});
~~~
* 备注
~~~
1.这里面的list 是在views 文件下的一个list.html ，里面的内容是如下:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div>{{title}}</div>
<div>
    <ul>
        {{each list}}
        <li>{{$value}}</li>
        {{/each}}
    </ul>
</div>

</body>
</html>
~~~