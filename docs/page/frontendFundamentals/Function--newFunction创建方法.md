>[success] # new Function
~~~
1.声明函数除了基础篇章说的函数表达式，和函数声明两种方式外，也可以
'new'出来，但这种方式不推荐
~~~
>[danger] ##### 案例
~~~
var sum = new Function('num1','return num1')
console.log(sum(10)) // 10
~~~