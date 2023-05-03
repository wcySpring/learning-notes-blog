>[success] # every -- 判断每一项是否都符合
~~~
1.every 元素都符合条件才返回true
2.every 不会改变原数组 返回值是 true 或者false
3.三个参数 item 、callback、array 数组中的元素、写条件的回调函数、
原数组
4.额外知识补充：(参数1, 参数2, …, 参数N) =>{ return 表达式; } 可以缩写
(参数1, 参数2, …, 参数N) => 表达式（单一）
~~~
>[danger] ##### 对every封装 -- 判断每一项是否都符合
~~~
1.下面写法的好处 如果没有写调函数来做判断，则会根据数组每一项的布尔类
型做判断
~~~
~~~
var a = [1,2,3,4];
const all = (arr, fn=Boolean) => arr.every(fn)
const currentBoolean = all(a)
const currentBoolean1 = all(a,(item)=>{
   return item > -1;
});
console.log(currentBoolean, currentBoolean1)
~~~
* 打印结果
~~~
false true
~~~