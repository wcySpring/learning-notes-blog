[TOC]

 
>[success] # 函数new 和 不 new 差在哪里
~~~
1.'new'和不'new'区别到底是什么，其实两者的区别就是'构造函数'和'函数'的区别
2.当通过 new 关键字创建函数实例时，会将实例的隐式原型指向构造函数的显式原型
~~~
>[danger] ##### 构造函数和函数的区别引用书中讲解
~~~
1.构造函数与其他函数的唯一区别，就在于调用它们的方式不同。
不过，构造函数毕竟也是函数，不存在定义构造函数的特殊语法。
任何函数，只要通过 new 操作符来调用，那它就可以作为构造函数；
而任何函数，如果不通过 new 操作符来调用，那它跟普通函数也不会
有什么两样。
~~~
>[info] ## 函数 和构造函数
~~~
1.下面的案例是书中的案例，根据上面书中的解释其实可以理解首先
'Person'其实是函数，如果我们直接 ' Person("Greg", 27, "Doctor") '
也是会正常执行，这时候他叫函数，如果'new Person("Greg", 27, "Doctor")'
在'new' 后面他叫'构造函数' 可以创建出来对象
2.要注意如果你已经决定要将这个函数作为一个构造函数使用，一般建议首字母要大写
~~~
* 创建对象调用
~~~
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
       alert(this.name);
 };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor"); 
~~~
* 当函数调用
[this指向](https://www.kancloud.cn/cyyspring/html_js_cs/725361)
~~~
1.当使用'new'的时候构造函数中的'this' 指向对象
2.当不使用'new'的时候函数中的'this' 指向的是window，因为
当在全局作用域中调用一个函数时，this 对象总是指向 Global 对象（在
浏览器中就是 window 对象）。因此，在调用完函数之后，可以通过 window 
对象来调用 sayName()方法，并且还返回了"Greg"
~~~
~~~
// 当作构造函数使用
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); //"Nicholas"

// 作为普通函数调用
Person("Greg", 27, "Doctor"); // 添加到 window
window.sayName(); //"Greg"

// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); //"Kristen" 
~~~

* 这里引用mdn 里面的解释
[内容来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
~~~
1.你可能已经注意到我们的 function A 有一个叫做 prototype 的特殊属性。该特殊属可
与 JavaScript 的 new 操作符一起使用。对原型对象的引用被复制到新实例的内部 
[[Prototype]] 属性。例如，当执行 var a1 = new A(); 时，JavaScript（在内存中创建对
象之后，和在运行函数 A() 把 this 指向对象之前）设置 a1.[[Prototype]] = A.prototype;。
然后当您访问实例的属性时，JavaScript 首先会检查它们是否直接存在于该对象上，如果不存在，则会 [[Prototype]] 中查找。这意味着你在 prototype 中定义的所有内容都可
以由所有实例有效地共享，你甚至可以稍后更改部分 prototype，并在所有现有实例中
显示更改（如果有必要的话）。

注：[[Prototype]] 相当于__proto__
~~~
>[danger] ##### 实例对象中的'constructor'
~~~
1.当我们声明一个方法时候，不加括号调用，那么方法会打印如下效果
~~~
~~~
function  speak() {
    alert('wang')
}
// 打印结果：
ƒ speak() {
    alert('wang')
}
~~~
~~~
1.那么当我们打印一个构造函数，一个对象，对象中的构造函数效果
~~~
~~~
function Person(name, age, job) {
    this.name = name
    this.age = age
    this.sayName = function () {
        alert(this.name)
    }
}
Person.prototype.sayName = function () {}
const p1 = new Person('wang','17')
console.log(Person)  // 打印构造函数(也就是类)
console.log(p1.constructor) // 打印实例的constructor
console.log(p1) // 打印实例
console.log(p1.constructor === Person) // 判断实例的构造函数属性(constructor) 和 类（js叫构造函数）的关系
// 打印结果：
ƒ Person(name, age, job) {
    this.name = name
    this.age = age
    this.sayName = function () {
        alert(this.name)
    }
}

ƒ Person(name, age, job) {
    this.name = name
    this.age = age
    this.sayName = function () {
        alert(this.name)
    }
}

Person {name: "wang", age: "17", sayName: ƒ}

true
~~~
* 疑问
~~~
1.p1.constructor ，p1 明明没有constructor 属性，是如何点出来的。首先寻找顺p1没有。就去他的[[propotype]]找顺着原型链
~~~
* 总结
~~~
1.对象的构造函数属性('constructor') 指向创建该类的构造函数(类)
2.通过一个对象的('constructor') 属性可以反推该对象创建的类
~~~