>[success] # 只能通过new创建实例
~~~
1.构造函数，不仅可以通过new 创建，也可以直接调用，但
如何限制构造函数只能通过new 创建实例es6 给了一个新的
方法new.target
2.js 函数中有两个不同的内部方法：'[[Call]]' 和 '[[Construct]]'
当通过'new' 关键字调用函数的时候，执行的是'[[Construct]]',
负责创建实例对象，然后执行函数体，将'this'绑定在实例上,如果不
通过'new' 创建，调用'[[Call]]' 直接执行函数体代码，具有 '[[Construct]]'
方法函数叫构造函数
~~~
>[danger] ##### es5 判断当前创建的是否是实例对象
~~~
1. 下面的方法就是利用'instanceof' 来判断'this' 类型，首先根据上面
第二条的解释如果通过'new'创建的，就会先执行'[[Construct]]'，再创建
实例，然后创建函数体，将this绑定在实例上，因此此时的'this'就可以用
'instanceof' 判断是不是通过'new'创建的
2.下面的第二个'Person.call(person)' 就是来说这种es5 的写法不是最安全的
因为只是单纯的判断'this'，因此可以用'call' 来绕过逻辑
3.下面的第三个就会直接报错因为不是通过'new'创建的
~~~
~~~
function Person(){
    if(this instanceof Person){
        this.name = 'wang'
    }else{
        throw new Error('必须通过new关键字调用person')
    }
}
const person = new Person() // 1
Person.call(person) // 2
Person() // 3
~~~
>[danger] ##### es6 新方法new.target
~~~
1.执行了'[[Call]]'方法 'new.target'就是 'undefined' 当调用 '[[Construct]]'
new操作符的目标也是就创建的对象实例
~~~
~~~
function Person(){
    if(typeof new.target !=='undefined'){
        console.log(new.target)
        this.name = 'wang'
    }else{
        throw new Error('必须通过new关键字调用person')
    }
}
const person = new Person() // 1
Person.call(person) // 报错

// 打印结果：
ƒ Person(){
        if(typeof new.target !=='undefined'){
            console.log(new.target)
            this.name = 'wang'
        }else{
            throw new Error('必须通过new关键字调用person')
        }
 …   
~~~
* 或者使用new.target判断调用的构造函数
~~~
function Person(){

    if( new.target ===Person){
        this.name = 'wang'
    }else{
        throw new Error('必须通过new关键字调用person')
    }
}
const person = new Person() // 正常创建
Person.call(person) // 报错
~~~