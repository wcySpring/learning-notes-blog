>[success] # var x = y = 100 发生什么
~~~
1.如果吧 var x = y = 100 拆开就会得到下面代码
~~~
~~~
var x; // 变量提升声明 x
y = 100 // 隐式全局变量在特定情况下会出现泄漏
x = y // 变量赋值
console.log(x,y)
打印结果：
100 100
~~~
* 通过之前学的推理验证
~~~
1.通过之前概念通过'getOwnPropertyDescriptor'得到的'y' 的描述可以发现'configurable' 属性为'true',
因此也可以推断出'y'是一个隐式全局变量
2.x 和 y 是两个不同的东西，前者是声明的名字，后者是一个赋值过程可能创建的变量名。
3.let 和 const 同理但不会出现var 这种变量提升
~~~
~~~
var x = y = 100
console.log(Object.getOwnPropertyDescriptor(window,'y'))
console.log(Object.getOwnPropertyDescriptor(window,'x'))
console.log(x,y)
打印结果：
{value: 100, writable: true, enumerable: true, configurable: true}
{value: 100, writable: true, enumerable: true, configurable: false}
100 100
~~~