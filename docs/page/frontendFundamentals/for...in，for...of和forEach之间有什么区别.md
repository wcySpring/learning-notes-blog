[TOC]
>[success] # for ... in，for ... of之间有什么区别
[内容来自30s](https://www.30secondsofcode.org/blog/s/javascript-for-in-for-of-foreach)
[推荐系列](https://www.softwhy.com/article-9990-1.html)
~~~
1.'for...in'用于迭代对象的所有'可枚举'属性，包括继承的可枚举属性, 该迭代语句可用于数组字符串或普通对象，
   但不能用于Map或Set对象
2.'for...of'用于'可迭代'对象，迭代其值而不是其属性，该迭代语句可以与数组，字符串Map或Set对象一起使用，
   但不能与普通对象一起使用。
~~~
>[danger] #####  for...in 针对可枚举
[Object.kes具有与for..in循环完全相同的行为](https://www.30secondsofcode.org/blog/s/eslint-refactor-for-in)
~~~
1.Array：打印出来的是下角标
2.String：打印出来的是下角标
3.Object：打印的是'可枚举'的属性，这里要做个简单说明关于'可枚举'，可以使用getOwnPropertyDescriptor
来参看当前属性是否可枚举，通过es6 class 创建挂载到原型的方法也是不可枚举的可以参考
'https://2ality.com/2015/10/enumerability-es6.html'
4.Map或Set :直接免疫都不走
~~~
~~~
// ---------针对数组使用 ---------------------------
// js 数组本身就是一个为对象 因此打印的数组下角标
const list = ['a','b','c']
for(let prop in list){
    console.log(prop) // 0, 1, 2 (array indexes)
}

// -------字符串打印的是对应字符的下角标 ------------
const str = 'abc'
for(let prop in str){
    console.log(prop)  // 0, 1, 2 (string indexes)
}

// --------对象 可枚举--------------
const obj = {a:1,b:2,c(){}}
for(let prop in obj){
    console.log(prop) // a, b, c (object property names)
}
// ------------es5 生成的对象特殊 ------------------
function Obj2(){
    this.a = 1
    this.b = 2
}
Obj2.prototype.c = function(){}

const obj2 = new Obj2()

for(let prop in obj2){
    console.log(prop) // a, b c(object property names)
}
// ------------class 生成的对象特殊 ------------------
class Obj1{
    constructor(){
        this.a = 1
        this.b = 2
    }
    c(){}
}
const obj1 = new Obj1()
for(let prop in obj1){
    console.log(prop) // a, b (object property names)
}
// -----------------set ---------------------------
const set  = new Set([1,2,3])


for(let prop in set){
    console.log(prop) // 这里都不执行
}
~~~
>[danger] ##### for...of 针对可迭代
~~~
1.of 循环的是可迭代的对象，迭代是值而不是属性，可以迭代数组，字符串Map或Set对象，
但不能与普通对象一起使用
~~~
[关于更多](https://www.kancloud.cn/cyyspring/more/1316856)
~~~
for (let val of ['a', 'b', 'c'])
  console.log(val);            // a, b, c (array values)

for (let val of 'str')
  console.log(val);            // s, t, r (string characters)

for (let val of {a: 1, b: 2, c: 3})
  console.log(prop);           // TypeError (not iterable)

for (let val of new Set(['a', 'b', 'a', 'd']))
  console.log(val);            // a, b, d (Set values)
~~~
>[danger] ##### forEach 循环
~~~
1.forEach()是Array原型的一种方法，它允许您遍历数组的元素，注意他是数组的方法'Symbol.iterator'配置
是无效的
~~~
~~~
['a', 'b', 'c'].forEach(
  val => console.log(val)     // a, b, c (array values)
);

['a', 'b', 'c'].forEach(
  (val, i) => console.log(i)  // 0, 1, 2 (array indexes)
);
~~~