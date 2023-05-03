>[success] # 安装 -- mysqljs/mysql
* [npm 对 mysqljs 介绍](https://www.npmjs.com/package/mysql)
* [github 对mysqljs 介绍](https://github.com/mysqljs/mysql#install)
>[danger] ##### 安装 -- mysqljs
~~~
1.npm install mysqljs/mysql
~~~
>[danger] ##### github 给出 -- 使用案例
~~~
var mysql      = require('mysql');     // 导入包
var connection = mysql.createConnection({
  host     : 'localhost',     // 连接地址
  user     : 'me',            // 用户名
  password : 'secret',        //密码
  database : 'my_db'         // 数据库名称
});

connection.connect(); // 连接数据库
// 执行sql 语句
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
// 关闭连接
connection.end();
~~~
>[danger] ##### 增 -- insert
~~~
1.在sql 语句 使用? 号 做占位符
2.插入语句时候使用对象的格式进行插入语句
~~~
~~~
// 加载数据库驱动
const mysql = require('mysql');
// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost', // 数据库所在的服务器的域名或者IP地址
    user: 'root', // 登录数据库的账号
    password: '', // 登录数据库的密码
    database: 'book' // 数据库名称
});
// 执行连接操作
connection.connect();

let sql = 'insert into book set ?'
let data = {
    name : '明朝那些事',
    author : '当年明月',
    category : '文学',
    description : '明朝的历史'
}
// 操作数据库
connection.query(sql,data, function(error, results, fields) {
    if (error) throw error;
    // console.log(results);
    if(results.affectedRows == 1){    // 判断更改成功数据个数
        console.log('数据插入成功');
    }
});
// 关闭数据库
connection.end();
~~~
>[danger] ##### 删 -- delete
~~~
1.在sql 语句 使用? 号 做占位符
2.删除的时候使用[] 来填充? 占位的条件
~~~
~~~
// 加载数据库驱动
const mysql = require('mysql');
// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost', // 数据库所在的服务器的域名或者IP地址
    user: 'root', // 登录数据库的账号
    password: '', // 登录数据库的密码
    database: 'book' // 数据库名称
});
// 执行连接操作
connection.connect();

let sql = 'delete from book where id = ?';
let data = [9];

// 操作数据库
connection.query(sql,data, function(error, results, fields) {
    if (error) throw error;
    // console.log(results);
    if(results.affectedRows == 1){
        console.log('删除成功');
    }
});
// 关闭数据库
connection.end();
~~~
>[danger] ##### 更新 -- updata
~~~
1.在sql 语句 使用? 号 做占位符
2.更新的时候使用[] 来填充? 占位的条件
~~~
~~~
const mysql = require('mysql');
// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost', // 数据库所在的服务器的域名或者IP地址
    user: 'root', // 登录数据库的账号
    password: '', // 登录数据库的密码
    database: 'book' // 数据库名称
});
// 执行连接操作
connection.connect();

let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
let data = ['浪潮之巅','吴军','计算机','IT巨头的兴衰史',8];

// 操作数据库
connection.query(sql,data, function(error, results, fields) {
    if (error) throw error;
    // console.log(results);
    if(results.affectedRows == 1){
        console.log('更新成功');
    }
});
// 关闭数据库
connection.end();
~~~
>[danger] ##### 查 -- select
~~~
1.在sql 语句 使用? 号 做占位符
2.查询的时候使用[] 来填充? 占位的条件
~~~
~~~
// 加载数据库驱动
const mysql = require('mysql');
// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost', // 数据库所在的服务器的域名或者IP地址
    user: 'root', // 登录数据库的账号
    password: '', // 登录数据库的密码
    database: 'book' // 数据库名称
});
// 执行连接操作
connection.connect();

let sql = 'select * from book where id = ?';
let data = [6];

// 操作数据库
connection.query(sql,data, function(error, results, fields) {
    if (error) throw error;
    console.log(results[0].name);
    // console.log(results);
});
// 关闭数据库
connection.end();
~~~
>[danger] ##### 进行分装  - api
~~~
1.不管是增删改查，所有方法都有一共性都是需要连接数据库，并且关闭数
据库，根据共性 将这个提取出来 ，封装一下作为调用
2.exports.base将这个api 暴露出去
~~~
~~~
/*
    封装操作数据库的通用api
*/
const mysql = require('mysql');

exports.base = (sql,data,callback) => {
    // 创建数据库连接
    const connection = mysql.createConnection({
        host: 'localhost', // 数据库所在的服务器的域名或者IP地址
        user: 'root', // 登录数据库的账号
        password: '', // 登录数据库的密码
        database: 'book' // 数据库名称
    });
    // 执行连接操作
    connection.connect();

    // 操作数据库(数据库操作也是异步的)
    connection.query(sql,data, function(error, results, fields) {
        if (error) throw error;
        callback(results);
    });
    // 关闭数据库
    connection.end();
}
~~~
>[danger] ##### 使用 -- api
~~~
1.三个参数sql,data,callback，一次分别是sql 语句，查询添加的数据，和回调函数
2.其中当想查全部数据的时候，我们可以将第二个变量data 传值为null
~~~
~~~
/*
    测试通用api
*/
const db = require('./db.js');

// 插入操作
let sql = 'insert into book set ?';
let data = {
    name : '笑傲江湖',
    author : '金庸',
    category : '文学',
    description : '武侠小说'
}
db.base(sql,data,(result)=>{
    console.log(result);
});
// 更新操作
let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
let data = ['天龙八部','金庸','文学','武侠小说',11];
db.base(sql,data,(result)=>{
    console.log(result);
});
// 删除操作
let sql = 'delete from book where id = ?';
let data = [11];
db.base(sql,data,(result)=>{
    console.log(result);
});
// 查询操作
let sql = 'select * from book where id = ?';
let data = [8];
db.base(sql,data,(result)=>{
    console.log(result[0].name);
});
~~~