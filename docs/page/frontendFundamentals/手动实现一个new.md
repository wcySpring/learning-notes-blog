>[success] # 思想上
利用工厂函数创建对象，因此可以发现下面手动实现一个new ，其中new 很像一个构造函数语法糖
~~~
function createPerson(name,age){
	const per = {}
	per.name = name
	per.age =age
	return per
}
const p1 = createPerson('w',15)
const p2 = createPerson('ww',155)
~~~
>[success] # 手动实现一个new
~~~
1.创建一个新对象；
2.将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）；
3.执行构造函数中的代码（为这个新对象添加属性）；
4.返回新对象。
~~~
>[danger] ##### 跟着分析来看
~~~
分析下面这段代码new 做了什么
function F(init) {}
var f = new F(args)

1.创建一个临时的空对象，为了表述方便，我们命名为 fn，让对象 fn 的隐式原型指向函数 F 的显式原型；
2.执行函数 F()，将 this 指向对象 fn，并传入参数 args，得到执行结果 result；
3.判断上一步的执行结果 result，如果 result 为非空对象，则返回 result，否则返回 fn。
    var fn = Object.create(F.prototype)
    var obj = F.apply(fn, args)
    var f = obj && typeof obj === 'object' ? obj : fn;
~~~
>[danger] ##### 手动实现一个new
[知识点参考文章，不过本文章有的是数组的截取方法 ](https://www.jianshu.com/p/f76011a705f6)
~~~
1.根据上面的知：
  1.1.首先需要一个空对象，这里采用的是通过'new Object()'创建，
  1.2.改变我们创建新对象的原型指向，也是就改变'__proto__',默认是指向'Object',将这个指向改变成
      我们想使用的构造函数的原型
  1.3.将这个构造函数的this指向变成我们创建的'对象'
2.知识点：[].shift.call( arguments ) -- 首先arguments 是数组，这个写法就会把
数组指向了 arguments 并且取出他的第一项，他的第一项也是就当前的构造函数
~~~
~~~
function Person( name ){
    this.name = name;
};

Person.prototype.getName = function(){
    return this.name;
};

var objectFactory = function(){
    // 创建一个 空对象
    var obj = new Object();
    // 获取构造函数
    var  Constructor = [].shift.call( arguments )
    // 改变当前obj 空对象原型链的指向
    obj.__proto__ = Constructor.prototype
    // 改变构造函数指向
    var ret = Constructor.apply( obj, arguments );    
    return typeof ret === 'object' ? ret : obj;     // 确保构造器总是会返回一个对象
}

// 这个写法等同  console.log(new Person('wang'))
var a = objectFactory( Person, 'sven' ); 
console.log(a)
console.log( a.name );    // 输出：sven
console.log( a.getName() );     // 输出：sven
console.log( Object.getPrototypeOf( a ) === Person.prototype );
~~~
>[danger] ##### 解答疑惑
~~~
1.return typeof ret === 'object' ? ret : obj;     // 确保构造器总是会返回一个对象
真的是这种简单的考虑么？
真正的原因new 关键词执行之后总是会返回一个对象，要么是实例对象，要么是 return 语句指定的对象。
2.也就是定义的构造函数如果内部 return 是一个对象那么就需要返回是构造函数返回的对象
~~~
* 当构造函数有返回值的时候
~~~
1.当构造函数最后 return 出来的是一个和 this 无关的对象时，new 命令会直接返回这个新对象，
而不是通过 new 执行步骤生成的 this 对象
~~~
~~~
function Person(){
   this.name = 'Jack'; 
   return {age: 18}
}
var p = new Person(); 
console.log(p)  // {age: 18}
console.log(p.name) // undefined
console.log(p.age) // 18
~~~
* 当返回时候是非对象
~~~
1.构造函数中 return 的不是一个对象时，那么它还是会根据 new 关键词的执行逻辑，
生成一个新的对象（绑定了最新 this），最后返回出来
~~~
~~~
function Person(){
   this.name = 'Jack'; 
   return 'tom';
}
var p = new Person(); 
console.log(p)  // {name: 'Jack'}
console.log(p.name) // Jack
~~~