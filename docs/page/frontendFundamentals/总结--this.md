>[success] # this -- 总结
总体来说this 绑定形式分为四种，**默认绑定**、**隐式绑定**、**显示绑定**、**new绑定**
1. **默认绑定**函数没有被绑定到某个对象上进行调用，这类调用指向**window**，可以理解成是**window调用这些函数**
~~~
function a() {
	console.log(this)
}
a()
~~~
2. **隐式绑定**：是通过某个**对象发起的函数调用**，这类this 指向往往是发起对象
~~~
const a = {
	fun(){
		console.log(this)  // a
	}
}
a.fun()
~~~
3. **显示绑定**:使用**call和apply**方法,间接的将**this**绑定到了这个对象上,这类操作们明确的绑定了this指向的对象
~~~
const a = {}
function b() {
	console.log(this) // a
}
b.call(a)
~~~
4.**new绑定**：这里this指向是其返回新函数（注：前提构造函数没有返回其他对象）

* 注：总体来说常见日常使用都是遵循谁调用指向谁的规则
>[info] ## 优先级
**默认绑定** < **隐式绑定** < **显示绑定** <**new绑定**
~~~
// function foo() {
//   console.log("foo:", this)
// }

// 比较优先级:

// 1.显式绑定绑定的优先级高于隐式绑定
// 1.1.测试一:apply高于默认绑定
// var obj = { foo: foo }
// obj.foo.apply("abc")
// obj.foo.call("abc")

// 1.2.测试二:bind高于默认绑定
// var bar = foo.bind("aaa")
// var obj = {
//   name: "why",
//   baz: bar
// }
// obj.baz()


// 2.new绑定优先级高于隐式绑定
// var obj = {
//   name: "why",
//   foo: function() {
//     console.log("foo:", this)
//     console.log("foo:", this === obj)
//   }
// }
// new obj.foo()


// 3.new/显式
// 3.1. new不可以和apply/call一起使用

// 3.2. new优先级高于bind
// function foo() {
//   console.log("foo:", this)
// }
// var bindFn = foo.bind("aaa")
// new bindFn()


// 4.bind/apply优先级
// bind优先级高于apply/call
function foo() {
	console.log("foo:", this)
}
var bindFn = foo.bind("aaa")
bindFn.call("bbb")
~~~