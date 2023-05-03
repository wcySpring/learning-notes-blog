>[success] ## 检测某个类型是否为数组两种方式
~~~
1.第一'instanceof' 运算符用于测试构造函数的prototype属性是否出现
，在对象的原型链中的任何位置
2.使用'isArray' 判断该对象是否为数组
~~~
>[danger] ##### instanceof 用法案例
~~~
var array = ['wang','wang2']
console.log(array instanceof Array) // true
~~~
>[danger] ##### isArray用法案例
~~~
var array = ['wang','wang2']
console.log(Array.isArray(array)) // true
~~~