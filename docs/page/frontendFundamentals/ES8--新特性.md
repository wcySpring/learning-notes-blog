>[success] # ES8 -- Object.values
1. `Object.values`方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
~~~
const obj = {
  name: "jimmy",
  age: 18,
  height: 188,
};
console.log(Object.values(obj)); // [ 'jimmy', 18, 188 ]
~~~
>[success] # ES8 -- Object.entries
1. `Object.entries()` 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值对数组
~~~
const obj = {
  name: "jimmy",
  age: 18,
  height: 188,
};
console.log(Object.entries(obj)); // [ [ 'name', 'jimmy' ], [ 'age', 18 ], [ 'height', 188 ] ]
console.log(Object.entries([1, 2, 3])); // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]
~~~
>[success] # ES8 -- Object.getOwnPropertyDescriptors
1. `Object.getOwnPropertyDescriptors()`  方法用来获取一个对象的所有自身属性的描述符。
~~~
const obj = {
  name: "jimmy",
  age: 18,
};
const desc = Object.getOwnPropertyDescriptors(obj);
console.log(desc);  
// 打印结果
{
  name: {
    value: 'jimmy',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { 
   value: 18, 
   writable: true,
   enumerable: true, 
   configurable: true 
  }
}
~~~
>[success] # String.prototype.padStart
1. `String.prototype.padStart`把指定字符串填充到字符串头部，返回新字符串。
2. `str.padStart(targetLength [, padString])`，**targetLength**当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身，**padString 可选**填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 " "


~~~
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
~~~
>[danger] ##### 实用案例 -- 日期格式化
~~~
const now = new Date()
const year = now.getFullYear()
// 月份和日期 如果是一位前面给它填充一个0
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const day = (now.getDate()).toString().padStart(2, '0')
console.log(year, month, day)
console.log( `${year}-${month}-${day}` ) //输入今天的日期 2022-09-04

~~~
>[danger] ##### 实用案例 -- 文字 * 号显示
~~~
const tel = '18788888888'
// 先获取要显示字符，然后在用padStart 补齐
const newTel = tel.slice(-4).padStart(tel.length, '*')
console.log(newTel) // *******8888
~~~
>[success] # String.prototype.padEnd
1. `String.prototype.padEnd`把指定字符串填充到字符串尾部，返回新字符串。
2. `str.padEnd(targetLength [, padString])`，**targetLength**当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身，**padString 可选**填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 " "


~~~
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
~~~
>[danger] ##### 实用案例 -- 时间戳补齐
~~~
console.log(new Date().getTime()) // 时间戳 13位的
timestamp = +String(timestamp).padEnd(13, '0')

~~~
>[success] # ES8 -- 尾逗号 Trailing commas
1. 函数参数末尾可以预留逗号
~~~
function aaa(
    param1,
    param2,
) {
    /* ... */
}

aaa(
    'foo',
    'bar',
)
~~~

>[success] # ES8 -- async/await
可参考文章中**async/await**  其他章节