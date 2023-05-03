[TOC]
>[success] # this 通俗理解篇
~~~
1.this 是 JavaScript 的一个关键字，一般指向'调用它的对象'。
    1.1.this 指向的应该是一个对象，更具体地说是函数执行的'上下文对象'
    1.2.'1.1'说的对象指向的是'调用它'的对象，如果调用它的不是对象或对象不存在，
        则会指向全局对象（严格模式下为 undefined）
2.this的值是在执行的时候才能确认，定义的时候不能确认,像dom 绑定事件来说，最后执行dom的绑定
方法实际是dom 非事件，因此this 指向为当前dom对象
~~~
>[danger] ##### 举例子来理解
* 案例 一
~~~
1.下面函数fn 是通过对象'o'调用的,因此根据上面'this一般指向'调用它的对象'那么此时的this 就可以
很好的理解为什么打印的是'o'
~~~
~~~
// 代码 1
var o = {
  fn() {
    console.log(this)
  }
}
o.fn() // o
~~~
* 案例二
~~~
1.代码2和代码1同理，不同点是 a 是通过类A 创建的,但是方法的调用是a调用的，因此this 是a
~~~
~~~
// 代码 2
class A {
  fn() {
    console.log(this)
  }
}
var a = new A() 
a.fn()// a
~~~
* 案例三
~~~
1.下面fn 由于没有找到调用 fn 的对象，所以 this 会指向全局对象 指向是window
~~~
~~~

// 代码 3
function fn() {
  console.log(this)
}
fn() // 浏览器：Window；Node.js：global

~~~
* 案例四
~~~
1.虽然现在的fn 是在fn2内部执行，但是fn 由于没有找到调用 fn 的对象，所以 this 会指向全局对象 
指向是window
~~~
~~~
function fn() {console.log(this)}
function fn2() {fn()}
fn2() // Window；Node.js：global
~~~
* 案例五
~~~
1.虽然fn 是在函数fn2 中执行，并且fn2是对象obj 调用，fn2 的this 指向是obj，但是fn2()中的 this 指向并不会传
递给函数 fn()，因此fn也是window
~~~
~~~
function fn() {console.log(this)}
function fn2() {fn()}
var obj = {fn2}
obj.fn2() //  Window；Node.js：global
~~~
* 案例六
~~~
1.fn 由于没有找到调用 fn 的对象，所以 this 会指向全局对象指向是window，但是这里要注意一点
ES6 下的 class 内部默认采用的是严格模式，严格模式下不在是window 而是 undefined
~~~
~~~
class B {
  fn() {
    console.log(this)
  }
}
var b = new B()
var fun = b.fn
fun() // undefined
~~~
>[info] ## 箭头函数
~~~
1.不绑定 arguments 对象，也就是说在箭头函数内访问 arguments 对象会报错；
2.不能用作构造器，也就是说不能通过关键字 new 来创建实例；
3.默认不会创建 prototype 原型属性；
4.不能用作 Generator() 函数，不能使用 yeild 关键字。
5.'this' 指向是由最外层最近的一层非箭头函数
~~~
~~~
1.this的指向主要分为五种，抛开(with 和 eval)，其中有四种属于
在'es5' 中就存在的，另一种是'es6'中才有的
    1.1.作为对象的方法调用（ 指向'对象'）
    1.2.作为普通函数调用（指向全局对象'Window）
    1.3.构造器调用（构造函数中的this 指向是返回的对象）
    1.4.'Function.prototype.call' 或 'Function.prototype.apply' 调用
    1.5.箭头函数的'this'调用(es6) （'this' 指向是由最外层最近的一层非箭头函数），因此不会受到call apply 的影响
~~~
>[danger] ##### 案例
* 案例一
~~~
1.'this' 指向是由最外层最近的一层非箭头函数,当然你也需要看着最外层非箭头函数的函数this指向
是谁，那么对应的箭头函数this指向就是谁
2.下面的getName 箭头函数虽然是a调用的但是要明确，箭头函数是看最近的非箭头函数的指向，
下面的getName 不存在被非箭头函数包裹，因此它的this 就是window
~~~
~~~
const a = {
    name:'w',
    getName:()=>{
        console.log(this) 
    }
}
a.getName()  // window
~~~
* 案例二
~~~
1.箭头t 最外层非箭头函数是getName，此时getName 是 a 调用，所以箭头函数就是this 就是a
~~~
~~~
const a = {
        name:'w',
        getName(){
            const t = ()=>{console.log(this)}
            t()
        }
    }
    a.getName() // a

~~~
* 案例三 mdn的案例
~~~
// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};

// 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
// 将返回的函数的引用赋值给fn。
var fn = obj.bar();

// 直接调用fn而不设置this，
// 通常(即不使用箭头函数的情况)默认为全局对象
// 若在严格模式则为undefined
console.log(fn() === obj); // true

// 但是注意，如果你只是引用obj的方法，
// 而没有调用它
var fn2 = obj.bar;
// 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
console.log(fn2()() == window); // true
~~~
>[info] ## 各种数组循环的指向
~~~
1.every()、find()、findIndex()、map()、some()等这些数组方法回调函数的指向经常蒙蔽，这个章节
就是解决蒙蔽
2.先明确这些方法的参数使用以find为例 'arr.find(callback[, thisArg])'我们常用一般是callback，但是其实
还有一个选填参数' thisArg' 可以指定内部this指向
~~~
>[danger] ##### 案例
* 案例一
~~~
1.forEach 它有两个参数，第一个是回调函数，第二个是 this 指向的对象，这里只传入了回调函数，
第二个参数没有传入，默认为 undefined，所以正确答案应该是输出全局对象。
~~~
~~~
var dx = {
  arr: [1]
}
dx.arr.forEach(function() {console.log(this)}
~~~
* 案例二
~~~
1.虽然dx是arrF调用，但是现在要打印this是回调函数，因为没设置第二个参数，所以是undefined
因此this 是window
~~~
~~~
const a = {}
var dx = {
    arr: [1],
    arrF(){
        this.arr.forEach(function(){console.log(this)})
    }
  }
  dx.arrF() // window
~~~
* 案例三
~~~
1.设置了forEach 的第二个参数因此指向是 a
~~~
~~~
var a = {}
var dx = {
    arr: [1],
    arrF(){
        this.arr.forEach(function(){console.log(this)},a )
    }
}
dx.arrF() // a
~~~
* 案例三
~~~
1.箭头函数指向里的最近的非箭头函数，并且 箭头函数的this 不能改变，此时是dx
~~~
~~~
var a = {}
var dx = {
    arr: [1],
    arrF(){
            this.arr.forEach(()=>{console.log(this)},a )
        }
    }
dx.arrF() // dx
~~~
>[success] # this 指向废话绕懵逼理解法

>[danger] ##### 作为对象的方法调用 -- 指向'对象'
~~~
1.下面案例如果是通过对象调用，自己的方法可以发现，此时的方式'this'
指向的是当前对象
~~~
~~~
var testObj = {
    a:1,
    getA:function () {
        console.log(this === testObj) // true
        console.log(this.a) // 1
    }
}

testObj.getA()
~~~
>[danger] ##### 作为普通函数调用 -- 指向全局对象'Window'
~~~
1.当调用者不是对象，也就是普通函数调用的时候，'this'的指向是全局对象，
这个全局对象也就是'windows'
~~~
* 案例一
~~~
window.name = 'wang'
const test = function () {
    console.log(this) // Window
    console.log(this.name) // wang
}
~~~
* 案例二
~~~
var testObj = {
    a:1,
    getA:function () {
        console.log(this === testObj) // false
        console.log(this.a) // undefined
    }
}

const test = testObj.getA

test()
~~~
* 案例三
~~~
1.要注意变量的作用域 和 this的改变，这时候作用域最近的是name，但是
this普通函数就是指向'window'
~~~
~~~
function test() {
    let name = 'wang'
    var callback = function () {
        console.log(name)
        console.log(this)
    }
    callback()
}
test()
~~~

>[danger] ##### 构造器调用 -- 构造函数中的this 指向是返回的对象
~~~
1.构造函数中的this 指向是返回的对象
~~~
~~~
function Person(){
    this.name = 'wang'
}
const obj = new Person()
console.log(obj.name) // wang
~~~
~~~
1.如果构造函数中返回的是一个对象类型，那么此时输出的是该对象中的内容
~~~
~~~
function Person(){
    this.name = 'wang'
    // 注意这里构造函数返回的是一个对象，但如果没有返回值或者返回值是非对象
    // 就不会出出现下面案例的问题 例如return 'yi' 也不会出现下面的问题
    return {
        name:'yi'
    }
}
const obj = new Person()
console.log(obj.name) // yi
~~~
>[danger] ##### 'Function.prototype.call' 或 'Function.prototype.apply' 调用
~~~
1.'call' 和 'apply' 会改函数的this指向
~~~
>[danger] ##### 箭头函数 --  'this' 指向是由最外层最近的一层非箭头函数

