>[success] # call、apply 的指向 
 [参考文章](https://www.kancloud.cn/cyyspring/html_js_cs/725531)
~~~
1.call、apply 和 bind 是挂在 Function 对象上的三个方法，调用这三个方法的必须是一个函数，
三者区别bind 虽然改变了 func 的 this 指向，但不马上执行，'call、apply'是在改变了函数的 this 指向
之后立马执行
    func.call(thisArg, param1, param2, ...)
    func.apply(thisArg, [param1,param2,...])
    func.bind(thisArg, param1, param2, ...)
如果是非严格模式'thisArg 为null/undefined' 指向是window,基本类型指向其包装对象，严格模式'null/undefined' 指向是`undefined`，基本类型为本身
2.使用它们仅仅是改变this这么简单么？现在来想举个例子忽然你只是一下想玩游戏机了，但是你没有，你去
借了一台玩完了 换了回去，首先游戏机你是临时想玩，如果去买一个以后大概率吃灰了，借一下你却体验了
游戏的感觉还没有花钱，这个白嫖的过程带入'call' 'apply' 'bind' 来看，有些方法我对象没有但是我只是忽然间
用一下我向你白嫖一下'既达到了目的，又节省重复定义，节约内存空间'
~~~
>[danger] ##### 举个例子
~~~
1. b 没有getName 但我就偶尔用那么一下，我去问a借一下
~~~
~~~
let a = {
  name: 'jack',
  getName: function(msg) {
    return msg + this.name;
  } 
}
let b = {
  name: 'lily'
}
console.log(a.getName('hello~'));  // hello~jack
console.log(a.getName.call(b, 'hi~'));  // hi~lily
console.log(a.getName.apply(b, ['hi~']))  // hi~lily
let name = a.getName.bind(b, 'hello~');
console.log(name());  // hello~lily
~~~
>[danger] ##### 有意思的案例
~~~
document.getElementById('div1').onclick = function () {
    alert(this.id)
    // 如果不用call 等改变this 指向，此时的this指向的是windows
    // 因为属于函数的调用
    const func = function () {
        alert(this.id)
    }
    func().call(this)
}
~~~
~~~
// max 不能接受数组 但可以用apply 来变相实现
Math.max.apply(null,[1,2,3])
// es6 中可以直接用展开语法
Math.max(...[1,1,3])
~~~
>[danger] ##### 数组指向
~~~
1.下面案例可以发现'arguments '虽然看似像数组，但是却不是数组，因此
就没有数组的方法，为了让'arguments' 具有数组这类方法可以使用call、apply
~~~
* 没有使用打印 false
~~~
function test(a, b) {
    console.log(arguments instanceof Array) // false
}
test(1,2)
~~~
* 使用
~~~
function test(a, b) {
    // 下面也可以写成[].slice.call(argments)
    let argumentsSlice = Array.prototype.slice.call(arguments)
    console.log(argumentsSlice) // 1
}
test(1,2)
~~~
* 什么样的可以使用数组指向
~~~
1.首先对象本身是有存取属性的
2.对象的length 属性是可以读取的
3.key 要是数字
~~~
* 根据上面两条 下面案例
~~~
const test = {
    0:1,
    length:3,
}
console.log([].slice.call(test)) // 1
~~~
>[danger] ##### es6 利用Array.of 方法
~~~
function test() {
        const a = Array.of.apply(null,arguments)
}
test(1,2,3) 
~~~
>[danger] ##### 实现call 和 apply
~~~
1.首先call 和 apply 只有方法才能调用，因此需要让每个方法都要具备这两个功能
2.指向对象 要有借这个动作，并且借完之后就销毁（理解成游戏机还回去了）
~~~
~~~
Function.prototype.newCall = function(context,...args){
    // this 谁调用指向谁，此时是function

    context.fn = this
    var context = context || window;
     // 我要借你的function 方法，这里fn 不是固定的
    // 相当于context 对象 借了一个叫fn 先存起来
    context.fn = this;
    // 我使用一下 到了我玩一下这个 你也可以直接context.fn(...args) 使用
    var result = eval('context.fn(...args)');
    // 用完了还给你
    delete context.fn
    return result;
}
// apply 同理
Function.prototype.newApply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');
  delete context.fn
  return result;
}
~~~
>[danger] ##### 实现一个bind
~~~
1.call 和 apply 与bind 的区别是前者立即执行，后者是返回函数，但是二者本质都是改变
this指向，这其实利用闭包思考，我返回的一个函数但是函数内部通过call 执行
 function bind(context, ...params) {
        let self = this;
        return function proxy(...args) {
            params = params.concat(args);
            return self.call(context, ...params);
        };
    };
~~~
* 更更多情况思考案例
~~~
Function.prototype.newBind = function (context, ...args) {
    if (typeof this !== "function") {
      throw new Error("this must be a function");
    }
    var self = this;
    // 本质上来思考 bind是和 apply 和 call 很类似，区别是bind返回的是function
    // apply 和 call 是直接执行 因此本质上借用bind借用apply但是包裹在function
    // 中不让其执行并且返回function
    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }
    if(this.prototype) {
      fbound.prototype = Object.create(this.prototype);
    }
    return fbound;
}
~~~