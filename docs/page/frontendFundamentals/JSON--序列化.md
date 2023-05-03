>[success] # JSON
* 一下内容都是选自mdn 和 js 高级程序设计书中的内容
~~~
1.一种轻量级的数据交换格式
2.用来序列化对象、数组、数值、字符串、布尔值和 null 
3.不支持变量、函数或对象实例、JavaScript 中的特殊值 undefined。
4.Json 字符串只能用双引号表示，json的key 也要加双引号
~~~
>[danger] ##### 解释二三条
~~~
// 将转换成json 字符串的时候发现会将2，3条包含的内容进行处理
// 其实可以很好理解Json 是一种数据格式交互语言直接的交互最直接
// 肯定是定义共同的属性才更具备交互，将js独有的给到其他语言，其他
// 语言不支持其语法也是无用的
 function Person(){
        this.name='wang'
    }
    const person = new Person()
    var a = {
        xxx:function () {
            alert("1212")
        },
        yyy: person, // 如果是实例的话只会显示他的属性
        zzz: undefined,
    }
    console.log(JSON.stringify(a))
// 打印结果：
{"yyy":{"name":"wang"}}
~~~
>[info] ## JSON.stringify
[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
JSON.stringify()将值转换为相应的JSON格式：

*   转换值如果有toJSON()方法，该方法定义什么值将被序列化。
*   非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
*   布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
*   `undefined、`任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成`null`（出现在数组中时）。函数、undefined被单独转换时，会返回undefined，如`JSON.stringify(function(){})` or `JSON.stringify(undefined).`
*   对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
*   所有以 symbol 为属性键的属性都会被完全忽略掉，即便`replacer`参数中强制指定包含了它们。
*   Date日期调用了toJSON()将其转换为了string字符串（同Date.toISOString()），因此会被当做字符串处理。
*   NaN和Infinity格式的数值及null都会被当做null。
*   其他类型的对象，包括Map/Set/weakMap/weakSet，仅会序列化可枚举的属性。
>[danger] ##### 对应技巧过滤想要字段 -- 数组
~~~
1.过滤器参数是数组，那么 JSON.stringify()的结果中将只包含数组中列出的属性。
var book = {
 "title": "Professional JavaScript",
 "authors": [
 "Nicholas C. Zakas"
 ],
 edition: 3,
 year: 2011
 };
var jsonText = JSON.stringify(book, ["title", "edition"]);

JSON.stringify()的第二个参数是一个数组，其中包含两个字符串："title"和"edition"。这
两个属性与将要序列化的对象中的属性是对应的，因此在返回的结果字符串中，就只会包含这两个属性：
{"title":"Professional JavaScript","edition":3} 
~~~
>[danger] ##### 对应技巧过滤想要字段 -- 函数
~~~
var book = {
 "title": "Professional JavaScript",
 "authors": [
 "Nicholas C. Zakas"
 ],
 edition: 3,
 year: 2011
 };
var jsonText = JSON.stringify(book, function(key, value){
     switch(key){
         case "authors":
             return value.join(",")
         case "year":
             return 5000;
         case "edition":
             return undefined;
         default:
             return value;
     }
});
这里，函数过滤器根据传入的键来决定结果。如果键为"authors"，就将数组连接为一个字符串；
如果键为"year"，则将其值设置为 5000；如果键为"edition"，通过返回 undefined 删除该属性。
最后，一定要提供 default 项，此时返回传入的值，以便其他值都能正常出现在结果中。实际上，第
一次调用这个函数过滤器，传入的键是一个空字符串，而值就是 book 对象。序列化后的 JSON 字符串
如下所示：
{"title":"Professional JavaScript","authors":"Nicholas C. Zakas","year":5000} 
~~~
>[danger] ##### console.log 更好看效果
~~~
var book = {
 "title": "Professional JavaScript",
 "authors": [
 "Nicholas C. Zakas"
 ],
 "edition": 3,
 "year": 2011
} 
var jsonText = JSON.stringify(book, null, 4);
JSONStringifyExample03.htm
保存在 jsonText 中的字符串如下所示：
{
 "title": "Professional JavaScript",
 "authors": [
 "Nicholas C. Zakas"
 ],
 "edition": 3,
 "year": 2011
} 
~~~
>[info] ## JSON.parse 反序列化
[反序列化参看](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
>[danger] ##### 技巧
~~~
如果还原函数返回 undefined，则表示要从结果中删除相应的键；如果返回其他值，则将该值插
入到结果中。在将日期字符串转换为 Date 对象时，经常要用到还原函数。例如：
var book = {
     "title": "Professional JavaScript",
     "authors": [
     "Nicholas C. Zakas"
     ],
     edition: 3,
     year: 2011,
     releaseDate: new Date(2011, 11, 1)
 };
var jsonText = JSON.stringify(book);
var bookCopy = JSON.parse(jsonText, function(key, value){
     if (key == "releaseDate"){
         return new Date(value);
     } else {
         return value;
 } });

alert(bookCopy.releaseDate.getFullYear());

以上代码先是为 book 对象新增了一个 releaseDate 属性，该属性保存着一个 Date 对象。这个
对象在经过序列化之后变成了有效的 JSON 字符串，然后经过解析又在 bookCopy 中还原为一个 Date
对象。还原函数在遇到"releaseDate"键时，会基于相应的值创建一个新的 Date 对象。结果就是
bookCopy.releaseDate 属性中会保存一个 Date 对象。正因为如此，才能基于这个对象调用
getFullYear()方法。
~~~