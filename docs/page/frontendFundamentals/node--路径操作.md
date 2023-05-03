[TOC]
>[success] # node 路径操作 -- path模块
~~~
1.basename -- 获取文件名称
2.dirname  -- 获取路径
3.extname -- 获取扩展名称
4.isAbsolute  -- 判断是否为绝对路径
5.join -- 拼接路径
6.normalize -- 规范化路径
~~~
>[danger] ##### basename -- 获取文件名称
~~~
1.const path = require('path');要引入文件操作模块。
~~~
* 说明 path.posix.basename 是支持所有系统获取文件名称的方法
~~~
const path = require('path')
var bs = path.posix.basename('/tmp/myfile.html');
console.log(bs)

打印结果：
myfile.html
~~~
 * 只要名称不用文件后缀
 ~~~
const path = require('path')
var bs = path.posix.basename('/tmp/myfile.html','.html');
console.log(bs)

打印结果：
myfile
~~~

>[danger] ##### dirname -- 返回路径中代表文件夹的部分
* 推荐使用 __dirname
~~~
const path = require('path');
console.log(path.dirname("C:\\Windows\\qq\\sss"));

打印结果：
C:\Windows\qq
~~~
>[danger] ##### extname --  获取扩展名称
~~~
const path = require('path');
console.log(path.extname('index.html'));

打印结果：
.html
~~~
>[danger] ##### format -- 对象拼接路径字符串
~~~
{ root: 'E:\\', 文件的跟路径
  dir: 'E:\\node\\day02\\02-code',文件的全路径
  base: '02.js',文件的名称
  ext: '.js',扩展名
  name: '02' 文件名称
}

const path = require('path');

var a = path.format({
    root: 'E:\\',
    dir: 'E:\\node\\day02\\02-code',
    base: '02.js',
    ext: '.js',
    name: '02'
});
console.log(a)

打印结果：
E:\node\day02\02-code\02.js
~~~
>[danger] ##### parse -- 返回路径字符串的对象
~~~
const path = require('path');
var a = path.parse('E:\\node\\day02\\02-code\\02.js');
console.log(a)

打印结果：
{ root: 'E:\\',
  dir: 'E:\\node\\day02\\02-code',
  base: '02.js',
  ext: '.js',
  name: '02' }
~~~
>[danger] #####  isAbsolute -- 判断是否为绝对路径
~~~
const path = require('path');
console.log(path.isAbsolute('/foo/bar'));
console.log(path.isAbsolute('C:/foo/'));

打印结果：
true
true
~~~
>[danger] ##### join -- 拼接路径
~~~
1.用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔
符，Unix系统是"/"，Windows系统是"\"。
~~~
~~~
const path = require('path');
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));

打印结果：
\foo\bar\baz\asdf\quux
~~~
>[danger] ##### normalize -- 规范化路径
~~~
const path = require('path');
console.log(path.normalize('C:\\temp\\\\foo\\bar'));

打印结果：
C:\temp\foo\bar
~~~