[TOC]
>[success] # 目录操作 -- fs
~~~
1.创建目录 -- mkdir
~~~
>[danger] ##### fs.mkdir(path[, options], callback) -- 创建目录
~~~
1.path - 文件路径。
2.options 参数可以是：
    recursive - 是否以递归的方式创建目录，默认为 false。
    mode - 设置目录权限，默认为 0777。
3.callback - 回调函数，
~~~
* 创建非递归文件
~~~
var fs = require("fs");
const path = require('path');
fs.mkdir(path.join(__dirname,'abc1'),function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});
~~~
* 创建递归文件(有点问题给详细看看)
~~~
// 创建 /tmp/a/apple 目录，无论是否存在 `/tmp` 和 /tmp/a 目录。
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});
~~~
* 同步
~~~
fs.mkdirSync(path.join(__dirname,'hello'));
~~~
>[danger] ##### fs.readdir(path[, options], callback) -- 读取目录
* 配合stat查，当前文件下目录和文件
~~~
var fs = require("fs");
const path = require('path');
// 读取目录
fs.readdir(__dirname,(err,files)=>{
    files.forEach((item,index)=>{
        fs.stat(path.join(__dirname,item),(err,stat)=>{
            if(stat.isFile()){
                console.log(item,'文件');
            }else if(stat.isDirectory()){
                console.log(item,'目录');
            }
        });
    });
});
~~~
* 同步使用
~~~
let files = fs.readdirSync(__dirname);
files.forEach((item,index)=>{
    fs.stat(path.join(__dirname,item),(err,stat)=>{
        if(stat.isFile()){
            console.log(item,'文件');
        }else if(stat.isDirectory()){
            console.log(item,'目录');
        }
    });
});
~~~
>[danger] ##### fs.rmdir(path, callback) -- 删除目录
~~~
fs.rmdir(path.join(__dirname,'abc'),(err)=>{
    console.log(err);
});
~~~
* 同步
~~~
fs.rmdirSync(path.join(__dirname,'qqq'));
~~~