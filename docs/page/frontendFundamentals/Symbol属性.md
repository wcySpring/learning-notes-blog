[TOC]
>[success] # Symbol
[借鉴了阮一峰老师的es6](http://es6.ruanyifeng.com/#docs/symbol)
[MDN关于Symbol粗略了解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
~~~
1.ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 
JavaScript 语言的第七种数据类型

2.Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是
一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不
能添加属性。基本上，它是一种类似于字符串的数据类型。

3.Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，
主要是为了在控制台显示，或者转为字符串时，比较容易区分。

4. 在ts中想使用'Symbol' 需要在'tsconfig.json'的lib中配置 ["es6"]
~~~
>[danger] ##### Symbol -- 独一无二特性(因此比较为false)
~~~
1.下面的环境在js 中写的，因为'Symbol ' 是独一无二的，跟任何变量比较都
是'false' 因此ts中会提示不用做比较因为是'false',所以下面的案例是在浏览器
中直接运行的

2.'Symbol'函数的参数只是表示对当前 'Symbol' 值的描述，因此相同参数的
'Symbol'函数的返回值是不相等的。

3.下面案例中创建了两'Symbol' ,打印的结果为false也说明了Symbol独一无
二的特性
~~~
~~~
const s1 = Symbol()
console.log(s1)

const s2 = Symbol()
console.log(s2)
console.log(s1 === s2) // 在ts中会提示错误的
~~~
>[danger] ##### Symbol -- 接受参数用来区分
~~~
1.Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，
主要是为了在控制台显示，或者转为字符串时，比较容易区分。
2.下面的案例只是为了区分不同的'Symbol' 因此传递了 字符串用来标记
~~~
~~~
const s4 = Symbol('wang')
const s3 = Symbol('wang')

console.log(s3)
console.log(s4)
console.log(s4 === s3)
~~~
* 打印结果
~~~
Symbol(wang)
Symbol(wang)
false
~~~
>[danger] ##### Symbol -- 传递对象打印
~~~
1. 'Symbol' 的参数是一个对象，就会调用该对象的'toString'方法，将其转为
字符串，然后才生成一个 Symbol 值。
2.在'ts'中Symbol 只能是字符串类型或者数字类型，所以下面的案例是js中
~~~
* 对象没有 'toString'
~~~
const s3 = Symbol({ a: 'a' })
console.log(s3) // Symbol([object Object]) ts 这么写会报错
~~~
* 对象有'toString'
~~~
const obj = {
    toString() {
      return 'abc';
    }
  };
  const sym = Symbol(obj); // 在ts 不允许的传入对象，js中可以
  sym // Symbol(abc) 
~~~
>[danger] ##### Symbol -- 不能和其他值进行运算
~~~
1.'Symbol' 不能和其他值进行计算，但是可以将 'Symbol' 转成'布尔'和'字符串类型'
~~~
* 错误的不能和其他值进行计算
~~~
// const s4 = Symbol('wang')
// s4 += "wang"
~~~
* 可以转成布尔和字符
~~~
const s4 = Symbol('wang')

console.log(typeof s4.toString()) // string
console.log(typeof Boolean(s4)) // boolean
console.log(typeof !s4) // boolean
~~~
>[info] ## 在ts 中使用 Symbol 独一无二特性
~~~js
1.使用前了解 es6 新的定义对象key的变量写法形式:
    // 使用[] 接受动态形式的key
    let prop = 'name'
    const info = {
        // name: 'lison'
        [`my${prop}is`]: 'lison',
        [prop]:'wang'
    }
    console.log(info)
~~~
>[danger] ##### Symbol -- 作为对象key的使用
~~~
1.利用'Symbol' 的特性对象的属性名，就能保证不会出现同名的属性
2.在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之
中。
3.Symbol 值作为对象属性名时，不能用点运算符
~~~
~~~

const s5 = Symbol('name')
const info2 = {
    [s5]: 'wang',
    age: 18,
    sex: 'man'
}
console.log(info2) // {age: 18, sex: "man", Symbol(name): "wang"}
info2[s5] = 'haha'
// info2.s5 = 'haha' 错误写法
console.log(info2) //{age: 18, sex: "man", Symbol(name): "haha"}

~~~
* 但value 是方法的时候
~~~
 // 缩写
let obj = {
  [s](arg) { ... }
};
~~~
>[info] ## 获取对象中Symbol -- 里面的key
~~~js
1.找出对象中的key三种方式(这三种都不会输出key为Symbol的key)：
    1.1 for(i in obj)
    1.2.Object.keys()
    1.3.Object.getOwnPropertyNames()
2.只打印key为Symbol的key: Object.getOwnPropertySymbols
3.全都打印：ownKeys
~~~
* for(i in obj)
~~~
const names = Symbol('names')
let info2 = {
    [names]:'wang',
    age:16
}
for (const key in info2) {
    console.log(key)
}
打印结果：age
~~~
* Object.keys
~~~
const names = Symbol('names')
let info2 = {
    [names]:'wang',
    age:16
}
console.log(Object.keys(info2))
打印结果：["age"]
~~~
* Object.getOwnPropertyNames
~~~
const names = Symbol('names')
let info2 = {
    [names]:'wang',
    age:16
}
console.log(Object.getOwnPropertyNames(info2))
打印结果：["age"]
~~~
* JSON.stringify
~~~
const names = Symbol('names')
let info2 = {
    [names]:'wang',
    age:16
}
console.log(JSON.stringify(info2))

打印结果：{"age":16}
~~~
* Object.getOwnPropertySymbols
~~~
const names = Symbol('names')
let info2 = {
    [names]:'wang',
    age:16
}
console.log(Object.getOwnPropertySymbols(info2)) // [Symbol(names)]
~~~
* ownKeys
~~~
const names = Symbol('names')
let info2 = {
    [names]:'wang',
    age:16
}
console.log(Reflect.ownKeys(info2))  // ["age", Symbol(names)]
~~~

* 强制更改
~~~
const sy = Symbol('aaa')

const obj = {
	[sy]: 1,
}

const [s] = Object.getOwnPropertySymbols(obj)

obj[s] = 12

console.log(obj) // { [Symbol(aaa)]: 12 }
~~~
>[info] ## Symbol.for -- 使用同一个 Symbol 值
~~~
1.它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 
Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该
字符串为名称的 Symbol 值。

2.Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别
是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次
调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经
存在，如果不存在才会新建一个值
~~~
>[danger] ##### 案例
~~~
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
~~~
>[danger] ##### 使用Symbol.keyFor -- 找到Symbol.for 标记
~~~
1.用来找到Symbol.for 标记的字符串
~~~
~~~
const s10 = Symbol.for('haha')

console.log(Symbol.keyFor(s10)) // haha
~~~

>[info] ## 总结
1. Symbol是ES6中新增的一个**基本数据类型**
2. 可以解决类似比如原来有一个对象，我们希望在其中添加一个**新的属性和值**，但是我们在**不确定它原来内部有什么内容的情况下，很容易造成冲突，从而覆盖掉它内部的某个属性**