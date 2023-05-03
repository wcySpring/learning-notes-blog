[TOC]
>[success] # 什么是数组
~~~
1.数组:一组有序的数据
2.数组的作用:可以一次性存储多个'任意类型'数据
3.数组的最大长度4 294 967 295
~~~
>[success] # 创建数组
~~~
1.尽可能使用字面量的形式'js高级程序设计'中说因为字面量的形式，
代码少
~~~
 
>[info] ## Array 构造函数创建数组
~~~
1.创建的实例如果不传参数生成一个空数组
2.如果传入数字生成对应长度的数组
3.如果是非数字生成一个自动包含该项的数组
~~~
~~~
 var array = new Array()
console.log(array) // []
var array1 = new Array(10)
console.log(array1) // 新的谷歌浏览器会打印出[empty x 10]，取出其中一项是undefined
var array2 = new Array('wang','sss')
console.log(array2) // ['wnag','sss']
~~~
>[info] ## 使用字面量创建数组
~~~
1.字面量创建数组的形式不会调用'Array' 的构造函数(除了火狐3及更早浏览器)
2.字面量跟构成函数创建一样都可以通过'脚标'来添加修改数据
~~~
~~~
var array = [] // 创建一个空数组
var array1 = ['wang'] // 创建一个包含'wang' 字符的数组

// 给指定项添加内容
var array3 = []
array3[1] = 'wang'
console.log(array3) // [empty,'wang']
~~~
>[success] # 数组的length 属性不仅仅是长度
~~~
1.通常在使用数组'length' 属性的时候最常用的就是判断当前数组长度，
但是'length' 还可以用来做'删除' 和 '增加'
2.'length' 属性不是只读属性，因此给'length' 重新赋值也可以控制数组，
一些特殊变化
~~~
>[info] ## 删除 n 项 或添加 n项 undefined
~~~
var array = ['wang','wang2']
array.length = 1
console.log(array) //  ['wang']

var array2 = ['wang','wang2']
array2.length = 3
console.log(array2) // ['wang','wang2','empty']
~~~
>[info] ## 利用length 给数组末项添加数据
~~~
1.首先数字的长度也数组的脚标差为1
2.每次改变数组中的内容后会自动刷新长度
~~~
~~~
var array = ['wang','wang2']
array[array.length] = '倒数第二'
array[array.length] = '倒数第一'
console.log(array) // ["wang", "wang2", "倒数第二", "倒数第一"]

var array2 = ['wang','wang2']
array2[10] = '倒数第三'
console.log(array2) // ["wang", "wang2",empty x 8,'倒数第一']
~~~
