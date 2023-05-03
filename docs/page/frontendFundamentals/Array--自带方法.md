[更多方法参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
[TOC]
>[success] # 内置对象Array
~~~
* Array.isArray(对象)---->判断这个对象是不是数组
 * instanceof关键字
 * .concat(数组,数组,数组,...) 组合一个新的数组
 * .every(函数)--返回值是布尔类型,函数作为参数使用,函数中有三个参数,第一个参数是元素的值，第二个参数是索引值,第三个参数是原来的数组(没用)
 * 如果这个数组中的每个元素的值都符合条件,最后才返回的是true
 *
 * .filter(函数);返回的是数组中每一个元素都复合条件的元素,组成了一个新的数组
 *
 * .push(值);--->把值追加到数组中,加到最后了---返回值也是追加数据之后的数组长度
 * .pop();--->删除数组中最后一个元素,返回值就是删除的这个值
 * .shift();--->删除数组中第一个元素,返回值就是删除的这个值
 * .unshift();--->向数组的第一个元素前面插入一个新的元素,----返回值是插入后的程度
 * .forEach(函数)方法---遍历数组用---相当于for循环
 * .indexOf(元素值);返回的是索引,没有则是-1
 * .join("字符串");----返回的是一个字符串
 * .map(函数);--->数组中的每个元素都要执行这个函数,把执行后的结果重新的全部的放在一个新的数组中
 * .reverse();----->反转数组
 * .sort();---排序的,可能不稳定,如果不稳定,请写MDN中的那个固定的代码
 * .arr.slice(开始的索引,结束的索引);把截取的数组的值放在一个新的数组中,但是不包含结束的索引对应的元素值
 * .splice(开始的位置,要删除的个数,替换的元素的值);一般是用于删除数组中的元素,或者是替换元素,或者是插入元素
~~~
>[danger] ##### 判断是不是数组
~~~
var a = [1,2,3,4,5];
console.log(Array.isArray(a));
console.log( a instanceof Array );

打印结果：
true
true
~~~

>[danger] ##### 数组的拼接--concat
~~~
var a = [1,2,3];
var b = [4,5,6];
var c = a.concat(b);
console.log(c)

打印结果：
[1, 2, 3, 4, 5, 6]
~~~

>[danger] ##### 数组的浅拷贝--from
~~~
var arr=["a","b","c"];
var newArr=Array.from(arr);
~~~

>[danger] ##### 循环数组操作return bool 类型---every 
~~~
1.回调函数中第一个参数元素的值，二个索引，第三个是原数组（实际用不上）
2.每一个元素都符合，函数内的判断，返回的是bool 类型
~~~
~~~
// 判断数组中每一个 元素 值是不是大于200
var a = [100,200,300];
// 回调函数
var flag = a.every(function (a, b) {
    return a>200
});
console.log(flag)

打印结果：
false
~~~

>[danger] ##### 过滤出符合判断的新数组--fittler
~~~
// 过滤生成新元素,返回所有奇数
var a = [1,2,3,4,5,6];
var newA  = a.filter(function (ele) {
    return ele%2
})
console.log(newA)

打印结果：
[1,3,5]
~~~

>[danger] ##### 数组的基本操作-- 增删
~~~
 1 .push(值);--->把值追加到数组中,加到最后了---返回值也是追加数据之后的数组长度
 2 .pop();--->删除数组中最后一个元素,返回值就是删除的这个值
 3 .shift();--->删除数组中第一个元素,返回值就是删除的这个值
 4 .unshift();--->向数组的第一个元素前面插入一个新的元素,----返回值是插入后的程度
~~~

~~~
var a = [1,2,3,4,5,6];
a.push("a");
console.log(a)

var a = [1,2,3,4,5,6];
a.pop();
console.log(a)

var a = [1,2,3,4,5,6];
a.shift();
console.log(a)

var a = [1,2,3,4,5,6];
a.unshift(1);
console.log(a)

打印结果：
[1, 2, 3, 4, 5, 6, "a"]
[1, 2, 3, 4, 5]
[2, 3, 4, 5, 6]
[1, 1, 2, 3, 4, 5, 6]
~~~

>[danger] ##### 循环数组中所有元素--forEach()
~~~
1.第一个参数元素，二个是位置
~~~
~~~
var a = [1,2,3,4,5,6]
    a.forEach(function (ele, index) {
        console.log(ele, index)
    })

打印结果：
1 0
2 1
3 2
4 3
5 4
6 5
~~~

>[danger] ##### 根据元素返回索引--indexOf()
~~~
1.存在则返回对应位置，不存在 返回-1
~~~
~~~
var a = [1,2,3,4,5,6];
console.log(a.indexOf(4))

打印结果：
3
~~~

>[danger] ##### 将数组拼接成字符串--join
~~~
var a= [1,2,3,4];
console.log(a.join("|"))

打印结果：
1|2|3|4
~~~

>[danger] ##### 执行每一个元素返回数组--map
~~~
1.参数是每一个元素
~~~
~~~
var a= [1,2,3,4];
a = a.map(function (value) {
    return value+1
})
console.log(a)

打印结果：
[2,3,4,5]
~~~

>[danger] ##### 反转数组--reverse()
~~~
var a= [1,2,3,4];
console.log(a.reverse())

打印结果：
[4,3,2,1]
~~~

>[danger] ##### 对数组做切片-- slice
~~~
1.顾头不顾腚
~~~
~~~
var a= [1,2,3,4];
console.log(a.slice(0,2))

打印结果：
[1,2]
~~~

>[danger] ##### 从指定位置删除元素-- splice(删除、插入、替换)
~~~
1.第一个参数，起始位置
2.第二个参数，删除的个数
3.第三个参数，要替换的元素
4.返回值是删除元素的列表
~~~
~~~
var a= [1,2,3,4];
a.splice(0,2)
console.log(a)

var a= [1,2,3,4];
a.splice(0,2,66)
console.log(a)

打印结果：
[3,4]
[66,3,4]
~~~

>[danger] ##### 数组的排序--sort
~~~
1.sort()是根据字符编码的顺序进行排序，所以对数字类型排序需要自定义
2.
如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
~~~
~~~
var a= [1,2,18,4,1,22];
console.log(a.sort())

打印结果：
[1, 1, 18, 2, 22, 4]


var a= [1,2,18,4,1,22];
console.log(a.sort(function (a1,a2) {
    if(a1>a2){
        return 1;
    }else if (a1<a2){
        return -1
    } else {
        return 0
    }
}))

打印结果：
[1, 1, 2, 4, 18, 22]
~~~
>[danger] ##### findIndex 查询返位置角标
~~~
var array = ['wang','wang2']
const newArrayIndex = array.findIndex(item=>item === 'wang')
console.log(newArrayIndex) // 0
~~~
>[danger] ##### find 返回内容
~~~
var array = ['wang','wang2']
const newArray = array.find(item=>item === 'wang')
console.log(newArray) // wang
~~~
>[danger] ##### Reduce 很强大参看文章开头的推荐文章