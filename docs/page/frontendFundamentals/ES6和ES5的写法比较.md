[TOC]
>[success] # ES6 和 ES5 的类写法比较

>[info] ## 比较 两者最基本写法

>[danger] #####  es5 -- 类的写法
~~~
function PersonType(name) {
    this.name = name
}
PersonType.prototype.sayName=function () {
    console.log(this.name)
}
var personType= new PersonType('wang')
personType.sayName() // wang

// instanceof  判断的是是否在原型链上
// 所以很好的说明 万物都来自Object
console.log(personType instanceof PersonType) // true
console.log(personType instanceof Object) // true
~~~
>[danger] ##### es6 的写法 -- class
~~~
1.书中的给的建议是:自有属性是实例中的属性，不会出现在原型上，且只能在类的构造函数活方法中创建，
建议在构造函数中创建所有的自有属性，从而只通过一处就可以控制类中的所有自有属性。下面案例中name
就是一个自有属性

~~~
~~~
class PersonClass{

    // 等价于es5写法的PersonType 构造函数
    constructor(name){
        this.name = name
    }

    // 等价于es5 的PersonType.prototype.sayName
    sayName(){
        console.log(this.name)
    }
}
let personType= new PersonClass('wang')
personType.sayName() // wnag

console.log(personType instanceof PersonClass) // true
console.log(personType instanceof Object) // true

// 证明了 class 只是一个语法糖
console.log(typeof  PersonClass) // function
~~~
>[info] ## es6 和 es5 的类其他的不同
~~~
1.函数声明可以被提升，而类声明与let声明类似，不能被提升；真正执行声明语句之前，它们会一直存在
 于临时死区中；
2.类声明中的所有代码将自动运行在严格模式中，而且无法强行让代码脱离严格模式执行；
3.在自定义类型中，需要通过Object.defineProperty()方法手工指定某个方法为不可枚举；
而在类中，所有方法都是不可枚举的；并且如果用es6形式简写function 则挂在在原型链上，否者挂在实列上
4.每个类都有一个名为'[[Construct]]'的内部方法，通过关键字new调用那些不含'[[Construct]]'的方法会导致程
序抛出错误；
5.使用除关键字new以外的方式调用类的构造函数会导致程序抛出错误；
6.在类中修改类名会导致程序报错。
~~~
>[danger] ##### 对第三条解释
~~~
function PersonType(name) {
    this.name = name
}
PersonType.prototype.sayName=function () {
    console.log(this.name)
}
var personType= new PersonType('wang')

for(item in personType){
    console.log(item,1)
}

打印结果：
name1
sayName 1

// -----------------ES6 分割线----------------------
class PersonClass{

    // 等价于es5写法的PersonType 构造函数
    constructor(name){
        this.name = name
    }
    // 等价于es5写法的PersonType 构造函数
    age = 10 
    // 等价于es5写法的PersonType 构造函数
    getAge=function(){}
    // 等价于es5 的PersonType.prototype.sayName
    sayName(){
        console.log(this.name)
    }
}
let per= new PersonClass('wang')


for(item in per){
    console.log(item) 
}
打印结果：
age
getAge
name

~~~
>[danger] ##### 解释第六条
~~~
class Foo{
    constructor(){
        Foo = "bar";  // 执行时会抛出错误
    }
}
// 但在类声明结束后就可以修改
Foo = "bar"
~~~
>[danger] ##### 利用上面六点 写一个es5符合的情况
~~~
// 直接等价于 PersonClass
let PersonType2 = (function() {
    "use strict";
    const PersonType2 = function(name) {
        // 确认函数被调用时使用了 new
        if (typeof new.target === "undefined") {
            throw new Error("Constructor must be called with new.");
        }
        this.name = name;
    }
    Object.defineProperty(PersonType2.prototype, "sayName", {
        value: function() {
            // 确认函数被调用时没有使用 new
            if (typeof new.target !== "undefined") {
                throw new Error("Method cannot be called with new.");
            }
            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });
    return PersonType2;
}());

// ----- 使用----
const a = new PersonType2('wang')
console.log(a.name) // wang
~~~
>[info] ## es6 和es5 的访问器属性写法

>[danger] ##### es5 仿照es6实现写法
~~~
let CustomHTMLElement = (function() {
    "use strict";
    const CustomHTMLElement = function(element) {
        // 确认函数被调用时使用了 new
        if (typeof new.target === "undefined") {
            throw new Error("Constructor must be called with new.");
        }
        this.element = element;
    }
    Object.defineProperty(CustomHTMLElement.prototype, "html", {
        enumerable: false,
        configurable: true,
        get: function() {
            return this.element.innerHTML;
        },
        set: function(value) {
            this.element.innerHTML = value;
        }
    });
    return CustomHTMLElement;
}());
~~~
>[danger] ##### es6 的写法
~~~
class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }
    get html() {
        return this.element.innerHTML;
    }
    set html(value) {
        this.element.innerHTML = value;
    }
}
var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");
console.log("get" in descriptor); // true
console.log("set" in descriptor); // true
console.log(descriptor.enumerable); // false
~~~