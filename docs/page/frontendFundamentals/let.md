[TOC]
>[success] # es6之前的作用域
[关于var更详细的作用域文章](https://www.kancloud.cn/cyyspring/html_js_cs/664497)
说明：var 声明永远作用于脚本、模块和函数体这个级别，在预处理阶段，不关心赋值的部分，
只管在当前作用域声明这个变量。
~~~
1.在其他语言中都有类似块级作用域的概念即所声明的变量只能
在块级内使用。
2.在es6之前，js的变量都是通过 'var' 声明，被声明的变量，就会
变成全局变量(除了在function 中声明的变量)
~~~
>[danger] ##### 在非function 中使用var定义变量
~~~
1.在其他语言中'{}'即为一个作用域，因此下面的案例在其他语言中
在'{}'外是访问不到在'{}'定义的变量，但在'js'中不是这样，if中通过
'var' 声明的变量name在'{}' 作用域外可以访问到
~~~
~~~
if(true){
    var name = 'wang'
}
console.log(name)

打印结果：
wang
~~~
>[danger] ##### 在function 中var 定义变量
~~~
1.在function 中定义的变量，在function 外打印'age'变量时候
控制台报出未定义的提示
~~~
~~~
function test() {
    var age = 17
}
console.log(age)

打印结果：
age is not defined
~~~
>[danger] ##### 变量提升机制 -- 解释var变量声明访问
[预解析机制](https://www.kancloud.cn/cyyspring/html_js_cs/665715)
~~~
1.把变量的声明提前了----提前到当前所在的作用域的最上面
2.函数(function)的声明也会被提前---提前到当前所在的作用域的最上面
3.为什么在函数中声明的变量外部不能访问，因为在函数退出后函数内部
的变量会被销毁
4.抛开函数来说，声明'var'的变量它会创建一个全新的全局变量作为全局对
象，即声明一个'window'对象
5.第四条的问题就是，好多js自带的变量都是在'window'变量中，就会导致变量
覆盖问题：
    var RegExp = 'wang'
    console.log(window.RegExp) // wang  覆盖了原先的正则对象
6.所谓'var' 声明能被提前使用”的效果，事实上是'var' 变量总是被引擎预先初始化为 'undefined'的一种后果。
~~~
* 解释第四条
~~~
if(true){
    var name = 'wang'
}
console.log(name) // wang
console.log(window.name) // wang
~~~
>[success] # 新的变量声明 const /let
~~~
1.为了解决'var' 或多多少的问题，es6 引入了let/const
2.let/const 可以很好的限制变量的作用域使用范围，不会出现和var将window
变量覆盖的问题，变量是不会挂载到window 全局上
3.let和const 也不会出现像'var' 一样的变量提升问题
~~~
>[danger] ##### let 
~~~
1.使用let 后的变量也可以像其他语言一样作用域只在'{}' 生效，并且不会出现将
window 中的同名变量覆盖问题
~~~
~~~
if(true){
    let sex = '妖'
}
console.log(window.sex) // undefined
console.log(sex) // 报错
~~~
>[danger] ##### const
~~~
1.const 和let 作用域基本一致，只是使用起来的场景不同，const声明的是常量，
被设置后事不允许被修改的
2.如果声明的变量是对象，是允许修改绑定对象的值，但不允许修改被绑定的对象，
换成其他对象
3.const 声明的变量不能重新指向新的内存空间
4.const 是常量因此声明时候必须要赋值,下面的写法let 和 var 都可以但是const会报错
    const name
    name = 'w'
~~~
~~~
if(true){
    const sex = '妖'
}
console.log(window.sex) // undefined
console.log(sex) // 报错
~~~
~~~
const name = 'wang'
name = 'yi' // 会报错不允许修改
~~~
>[danger] ##### let const  和var 为什么会有这种区别
~~~
1.js 引擎在扫描代码发现变量声明的时候，当发现变量是'var'声明的，会将该变量
提升到所在作用域的最上面，也就是如果是function 就会在function最上面，如果是
非function 就会在整个代码的最上面
2.let 和const 会放到'临时锁死区' 也就是'TDZ' 这个区域，凡是在这个区域里的变量，
会放到其所在作用域中('{}'),并且必须执行过变量声明语句，变量才会从临时锁死区中移除
才能访问其变量内容，简单说：这些变量会被创建在包含他们的词法环境被实例化
时，但是是不可以访问它们的，直到词法绑定被求值
~~~
~~~
// 解释 根据上面第二条的解释，value 所在的作用域'{}' 当在这个作用域的时候，value
// 被let 声明所以放到了对应的TDZ 区域，但想获取必须还要执行，因此没有执行过所以报错
if(true){
    console.log(typeof value) // Cannot access 'value' before initialization 初始化前无法访问value
    let value = 'bule'
}
~~~
~~~
// 这时候value 和if 中的value 所在的区域不同
// 所以打印结果是undefined
console.log(typeof value)
if(true){
    // 这时候的value他 的作用域只在if中
    let value = 'bule'
}
~~~
>[danger] ##### 三者要注意的问题-- 不允许重复声明
~~~
1.let/const不允许在相同作用域内，重复声明同一个变量。
2. 即使同一个变量名用三个不同修饰也是不允许的，一个变量名
只能有唯一的修饰，下面的写法是错误的
let name = 'wang'
var name = 'wang'    
const name = 'wang'
~~~
>[info] ## 循环中的let / const / var 变量

>[danger] ##### var 循环
~~~
1.下面第一个案例打印0到10，第二个是打印10次10，第一个案例是在我们预料中的
，第二个案例和我们期待的略有差别这是因为使用var，内部创建的函数最后引用了
相同的变量引用导致打印是十次10
2.想解决可以通过let 或者闭包形式解决
~~~
~~~
for(var i =0;i<10;i++){
    console.log(i) // 0..4..9 0到10
}
 console.log(i)  // 10
~~~
~~~
const list = []
for(var i =0;i<10;i++){
    list.push(()=>{
        console.log(i)
    })
}
list.forEach(item=>{
    item() // 打印10次10
})
console.log(i) // 10
~~~
* 闭包的形式解决
~~~
1.所谓的闭包 就是利用函数作用域来解决问题，在没有let 和const 的时代，有作用域的也仅仅只有函数，
因此相当于将整个函数作用域变相的代替了那个时代的 let 和const
~~~
~~~
const list = []
for(var i =0;i<10;i++){
    list.push(((value)=>{
       return ()=>{ console.log(value)}
    })(i))
}
list.forEach(item=>{
    item() // 打印0-9
})
console.log(i) // 10
~~~
>[danger] ##### let 循环
~~~
const list = []
for(let i =0;i<10;i++){
    list.push(()=>{
        console.log(i)
    })
}
list.forEach(item=>{
    item() // 打印0-9
})
console.log(i) // 报错此时i作用域只在for循环的{}中
~~~
>[danger] ##### const 循环
~~~
1.下面的案例直接报错因为i++,将const 赋值i 进行了更改
2.但在for...in  和 ...of 是const 和let 都可以
~~~
~~~
const list = []
for(const i =0;i<10;i++){
    list.push(()=>{
        console.log(i)
    })
}
list.forEach(item=>{
    item() 
})
console.log(i)
~~~
>[danger] ##### 循环案例二
~~~
1.下面{1}打印出来的次数不想想象中打印了9次，就是因为作用域声明的问题，内外的for相当于用的
都是同一个i，内层循环的时候，已经将i的整体变为了3，因此外层只循环了一次，可以用闭包 let  const
来解决计数器内外名相同的问题，但是开发原则上是不建议相同的名字
~~~
~~~
for(var i=0;i<3;i++){
    console.log(i,'外')
    for (var i = 0; i < 3; i++) {
        console.log(i) // {1}
    }
    console.log(i,'内')   
}
// 打印结果：
0 '外'
0
1
2
3 '内'
~~~
>[danger] #####  循环案例三
~~~
1.下面的案例使用了let 声明了变量i，只不过分别在for 里面 和 for 外面都声明了，但最后执行结果是
打印了三遍'foo' 这段代码可以理解成，两个i分别在不同的作用域因此是不会相互影响的
// let i = 0

// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }

// i++

// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }

// i++

// if (i < 3) {
//   let i = 'foo'
//   console.log(i)
// }

// i++
~~~
~~~
for (let i = 0; i < 3; i++) {
  let i = 'foo'
  console.log(i)
}
// 打印结果：
foo
foo
foo
~~~
* var 会怎么样
~~~
1.产生这个问题的原因是var 声明的i共享了，当下一次进入for循环时候其实是 'foo'<3 是false 因此循环结束了
~~~
~~~
for (var i = 0; i < 3; i++) {
    var i = 'foo'
    console.log(i)
}
// 打印结果：
foo
~~~
>[danger] ##### 总结
~~~
1.在实践时候明确可以使用es6的情况下，应该不用var，主要const ，配合let
~~~