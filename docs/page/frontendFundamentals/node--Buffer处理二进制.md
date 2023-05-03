>[success] #  Buffer基本操作
~~~
1.Buffer对象是Node处理二进制数据的一个接口。它是Node原生提供的全局对象，
可以直接使用，不需要require(‘buffer’)
2.Buffer本质上就是字节构成的数组
~~~
>[danger] ##### 创建Buffer对象
~~~
1.自己我理解，使用Buffer时候需要定义长度，就和java数组类似，需要定义
数组长度
2.第一种 Buffer.alloc(size[, fill[, encoding]])：返回一个指定大小的 Buffer 实例，如
果没有设置 fill，则默认填满 0
3.第二种 Buffer.from(string)：返回一个被 string 的值初始化的新的 Buffer 实例
4.第三种 Buffer.from(array)：返回一个被 array 的值初始化的新的 Buffer 实
例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
~~~
* 使用 Buffer.alloc(size\[, fill\[, encoding\]\]) 创建
~~~
1.size 必填规定创建的长度
2.fill 选填不填写默认是0，用来规定占位的内容
3.encoding 编码格式，默认utf8,可选择的有ascii、utf-8、utf16le、base64、hex 等

案例：
let a = Buffer.alloc(5,1)
console.log(a)
打印结果：
<Buffer 01 01 01 01 01>
~~~
* Buffer.from(string[, encoding]) 创建Buffer 对象
~~~
1.string 字符串必填，用来明确占位的string
2.encoding 编码格式，默认utf8,可选择的有ascii、utf-8、utf16le、base64、hex 等

案例：
let a = Buffer.from('tést');
console.log(a)

打印结果：
<Buffer 74 c3 a9 73 74>
~~~
* Buffer.from(array)
~~~
1.直接传入一个规定好的数组

案例：
let buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf)

打印结果：
<Buffer 62 75 66 66 65 72>
~~~
>[danger] ##### 功能方法 
~~~
1.Buffer.isEncoding() 判断是否支持该编码 
2.Buffer.isBuffer() 判断是否为Buffer    
3.Buffer.byteLength() 返回指定编码的字节长度，默认utf8
4.Buffer.concat() 将一组Buffer对象合并为一个Buffer对象
~~~
* Buffer.isEncoding() 判断是否支持该编码 
~~~
1.常用的编码已经在创建使用的时候做了说明，也可以用这个方法来检测是
否支持编码

案例：
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('gbk'));

打印结果：
true
false
~~~
* Buffer.isBuffer() 判断是否为Buffer    
~~~
let buf = Buffer.from('hello');
console.log(Buffer.isBuffer(buf));
console.log(Buffer.isBuffer({}));

打印结果：
true
false
~~~

* Buffer.byteLength() 返回指定编码的字节长度，默认utf8
~~~
let buf = Buffer.from('中国');
console.log(Buffer.byteLength(buf));

打印结果：
6     说明uf8中一个汉字占据三个字节
~~~
* Buffer.concat() 将一组Buffer对象合并为一个Buffer对象
~~~
let buf1 = Buffer.from('tom');
let buf2 = Buffer.from('jerry');
let buf3 = Buffer.concat([buf1,buf2]);
~~~
>[danger] ##### 实例方法操作
~~~
1.write() 向buffer对象中写入内容 
2.slice() 截取新的buffer对象
3.toString() 把buf对象转成字符串 
4.toJson() 把buf对象转成json形式的字符串
~~~
* buf.write(string[, offset[, length]][, encoding])
~~~
1.string  -- 写入缓冲区的字符串。
2.offset  -- 缓冲区开始写入的索引值，默认为 0 。
3.length  -- 写入的字节数，默认为 buffer.length 
4.encoding -- 使用的编码。默认为 'utf8' 。
5.根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参
数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 
string 的一部分。 只部分解码的字符不会被写入。

案例：
// 先创建，在写入要指定的内容hello
let buf = Buffer.alloc(5);
buf.write('hello',2,2);
console.log(buf);

打印结果：
<Buffer 00 00 68 65 00>
~~~
* slice() 截取新的buffer对象
~~~
let buf = Buffer.from('hello');
let buf1 = buf.slice(2,3);
console.log(buf,buf1)

打印结果：
<Buffer 68 65 6c 6c 6f> <Buffer 6c>
~~~
* buf.toString([encoding[, start[, end]]])
~~~
1.encoding 使用的编码。默认为 'utf8' 。
2.start 指定开始读取的索引位置，默认为 0。    
3.end 结束位置，默认为缓冲区的末尾。

let buf = Buffer.from('中国');
console.log(buf.toString());

打印结果：
中国        -- 把buf 重新转换成字符串
~~~

* toJson() 把buf对象转成json形式的字符串
~~~
const buf = Buffer.from('hello');
const json = JSON.stringify(buf);
console.log(json);

打印结果：
{"type":"Buffer","data":[104,101,108,108,111]}
~~~