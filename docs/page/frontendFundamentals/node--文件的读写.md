[TOC]
>[success] # 文件的读写 -- fs模块
~~~
1.整个操作是有异步操作方法和同步操作方式是对应出现的，但官方建议使用异
步，同步会出现阻塞体现不出来node的优势，异步是无法确认准确的返回时间，
因此，操作最好放在回调中进行。
1.stat -- 查看文件状态
2.readFile -- 文件的读取
3.writeFile -- 文件的写入
4.文件流读取 -- createReadStream
5.文件流写入 -- createWriteStream
~~~
>[danger] ##### fs.stat(path, callback) -- 查看文件状态
~~~
1.可以进行查看文件的详细信息，判断当前是文件还是目录等
2.回调函数中有两个参数一个是，异常的报错，一个是正确的返回对象
3.不建议在调用`fs.open()`、`fs.readFile()`或`fs.writeFile()`之前使用`fs.stat()`检查
文件是否存在。 而是，应该直接打开、读取或写入文件，并在文件不可用时处理
引发的错误。
4.返回的对象键值依次解释
{ dev: 包含该文件的设备的数字标识符,
  mode: 描述文件类型和模式的位字段,
  nlink:文件存在的硬链接数。
  uid: 拥有该文件的用户的数字用户标识符（POSIX）,
  gid: 拥有该文件的组的数字组标识符（POSIX）,
  rdev: 如果文件被视为特殊文件，则该值为数字设备标识符。,
  blksize: 用于 I/O 操作的文件系统块大小,
  ino: 5348024557505149,
  size: 文件的大小（以字节为单位）,
  blocks: 为此文件分配的块数,
  atime: 表示上次访问此文件的时间戳,
  mtime: 表示上次修改此文件的时间戳,
  ctime: 表示上次更改文件状态的时间戳,
  birthtime: 表示此文件创建时间的时间戳}
~~~
* 异步使用案例
~~~
let fs = require('fs')
fs.stat('data.txt',function (err, stats) {
    if (err) throw err;
    if(stats.isFile()){
        console.log('文件');
    }else if(stats.isDirectory()){
        console.log('目录');
    }
    console.log(stats)
})

打印结果：
文件
{ dev: 742412320,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 5348024557505149,
  size: 13,
  blocks: undefined,
  atime: 2019-01-06T11:16:18.474Z,
  mtime: 2017-05-27T15:17:56.327Z,
  ctime: 2019-01-06T11:16:18.475Z,
  birthtime: 2019-01-06T11:16:18.474Z }
~~~
* 同步方法不建议使用
~~~
let fs = require('fs')
let ret = fs.statSync('./data.txt');
console.log(ret);

打印结果：
{ dev: 742412320,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 5348024557505149,
  size: 13,
  blocks: undefined,
  atime: 2019-01-06T11:16:18.474Z,
  mtime: 2017-05-27T15:17:56.327Z,
  ctime: 2019-01-06T11:16:18.475Z,
  birthtime: 2019-01-06T11:16:18.474Z }
~~~
 >[danger]  ##### fs.readFile(path[, options], callback) -- 文件的读取
~~~
1.第一个参数path 路径，options 编码格式，callback 回调函数
2.如果有第二个参数并且是编码，那么回调函数获取到的数据就是字符串，如果没有第二个参数，那么得到的就是Buffer实例对象
~~~
* 异步读取
~~~
let fs = require('fs');
let strpath = path.join(__dirname,'data.txt'); // 相对路径
// 没有进行转码使用toString() 进行转码
fs.readFile(strpath,(err,data)=>{
    if(err) return;
    console.log(data.toString());
});

let fs = require('fs');
// 使用utf8转码
fs.readFile(strpath,'utf8',(err,data)=>{
    if(err) return;
    console.log(data);
});
~~~
* 同步(不建议使用)
~~~
// 同步操作
let ret = fs.readFileSync(strpath,'utf8');
console.log(ret);
~~~
>[danger] #####  fs.writeFile(file, data\[, options\], callback) -- 文件的写入
~~~
1.第一个参数：文件路径
2.第二个参数：文件内容
3.第三个参数：回调函数 其中回调函数中的error  当文件写入成功：error 是 
null，当文件写入失败，error 就是错误对象信息
4.会覆盖原文件内容
~~~
* 异步方法
~~~
let fs = require('fs')
let path = require('path')
let strpath = path.join(__dirname,'data.txt');
var data = "我是写入的内容"
fs.writeFile(strpath, data,'utf8',(err)=>{
    if(!err){
        console.log("写入成功")
    }
})
~~~
* 同步(不建议使用)
~~~
fs.writeFileSync(strpath,'tom and jerry');
~~~
>[danger] ##### 文件流读取 -- createReadStream
~~~
1.文件流，如果大文件的拷贝的话，内存就受不了而且没有进度的概念，比如说，
你拷贝一个很大的文件，一直在拷贝，你不知道已经拷贝到哪了，已经等不及
了，就把它给停掉了，这样就造成之前的拷贝白白浪费了。因此采取文件流的方
式复制，就是针对大文件操作的。
2.类似浏览器的点击事件，基于事件的处理方式
//读取文件发生错误事件
readStream.on('error', (err) => {
    console.log('发生异常:', err);
});
//已打开要读取的文件事件
readStream.on('open', (fd) => {
    console.log('文件已打开:', fd);
});
//文件已经就位，可用于读取事件
readStream.on('ready', () => {
    console.log('文件已准备好..');
});
 
//文件读取中事件·····
readStream.on('data', (chunk) => {
    console.log('读取文件数据:', chunk);
});
 
//文件读取完成事件
readStream.on('end', () => {
    console.log('读取已完成..');
});
 
//文件已关闭事件
readStream.on('close', () => {
    console.log('文件已关闭！');
}
~~~
* 使用读取文件
~~~
let fs = require('fs')
let path = require('path')
let strpath = path.join(__dirname,'data.txt');
let readStream = fs.createReadStream(strpath); // 读取的地址
readStream.on('data',(chunk)=>{
    // 二进制需要转码
    console.log(chunk.toString())
})
~~~
>[danger] ##### 文件流写入 -- createWriteStream
~~~
1.用文件流写入

//读取文件发生错误事件
writeStream.on('error', (err) => {
    console.log('发生异常:', err);
});
//已打开要写入的文件事件
writeStream.on('open', (fd) => {
    console.log('文件已打开:', fd);
});
//文件已经就写入完成事件
writeStream.on('finish', () => {
    console.log('写入已完成..');
    console.log('读取文件内容:', fs.readFileSync('./test/b.js', 'utf8')); //打印写入的内容，使用同步去读取写入的内容。
    console.log(writeStream);
});
 
//文件关闭事件
writeStream.on('close', () => {
    console.log('文件已关闭！');
});
 
writeStream.write('这是我要做的测试内容');
writeStream.end();
~~~
* 案例（将已存在文件内容写入其他指定文件中，可以在read 的on事件，边读变写入这是一个小技巧）
~~~
let fs = require('fs')
let path = require('path')
let strpath = path.join(__dirname,'data.txt');
let writeStream = fs.createWriteStream(strpath);
writeStream.write("你好呀");
~~~
* 读完写出到指定文件
~~~
fs.createReadStream(spath).pipe(fs.createWriteStream(dpath));
~~~
>[danger] ##### sql语句生成的小案例
* data
~~~
[
    {
        "id": "1",
        "name": "三国演义",
        "author": "罗贯中",
        "category": "文学",
        "desc": "一个杀伐纷争的年代"
    },
    {
        "id": "2",
        "name": "水浒传",
        "author": "施耐庵",
        "category": "文学",
        "desc": "108条好汉的故事"
    },
    {
        "id": "3",
        "name": "西游记",
        "author": "吴承恩",
        "category": "文学",
        "desc": "佛教与道教的斗争"
    },
    {
        "id": "4",
        "name": "红楼梦",
        "author": "曹雪芹",
        "category": "文学",
        "desc": "一个封建王朝的缩影"
    },
    {
        "name": "天龙八部",
        "author": "金庸",
        "category": "文学",
        "desc": "武侠小说",
        "id": 5
    }
]
~~~
~~~
const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname,'../','data.json'),(err, result)=>{
    if(err) throw err ;
    let list =JSON.parse(result.toString());
    let arr = [];
    list.forEach((item,index)=>{
        let sql = `insert into book (name,author,category,description) values ('${item.name}','${item.author}','${item.category}','${item.desc}');`;
        arr.push(sql)
    });
    fs.writeFile(path.join(__dirname,'datas.sql'),arr.join(''),'utf8',(err)=>{
       if(!err){
           console.log("1")
       }
    });

});
~~~