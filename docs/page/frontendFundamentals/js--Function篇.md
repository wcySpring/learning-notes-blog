[函数基础知识点](https://www.kancloud.cn/cyyspring/html_js_cs/612114)

>[success] # 程序中的foo、bar、baz
1. 经常在看一些开发例子时候会看到变量名为`foo、bar、baz` 这些都是没有特殊含义名字仅仅是长时间习惯喜欢用的`伪变量`

>[success] # JavaScript头等函数
1. **头等函数**（first-class function；第一级函数）是指在程序设计语言中，函数被当作头等公民函数可以作为别的函数的参数、函数的返回值，赋值给变量或存储在数据结构中；

1.1. 赋值给变量

~~~
function foo(){}
const a = foo
~~~

1.2.函数可以另外一个函数的参数
~~~
   function bar(fn) {
      console.log("fn:", fn)
      fn()
    }
    bar(foo1)
~~~
1.3. 函数作为另外一个函数的返回值
~~~
function sayHello() {
	function hi() {
	console.log("hi kobe")
	}
	return hi
}

~~~
1.4. 
~~~
 var obj = {
    eating: function() {
        console.log("eating")
  }
}
~~~
>[success] # 高阶函数
1. 参数是函数,或者返回值是函数即为*高阶函数*

>[success] # 函数也是对象
函数也是对象，对象就具备属性和方法，下面例子打印函数属性
~~~
function a(){}
Object.getOwnPropertyNames(a) // ['length', 'name', 'arguments', 'caller', 'prototype']
~~~
