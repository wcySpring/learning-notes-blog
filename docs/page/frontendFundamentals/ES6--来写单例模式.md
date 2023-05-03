>[success] # ES6 -- 写单例模式
[有参考价值的文章](https://juejin.im/post/5d6105e75188251031357b2b)
>[danger] ##### 第一个案例写法
~~~
1.这里有个尴尬的问题就是 在java的单例模式中构造函数是私有的这样，
这样该类就不会被实例化，但是现在js 没有私有属性这个说法，因此这个
单例你既可以new 出来也可以通过'getInstance' 使用
~~~
~~~
class Singleton{
    static instance = null

    constructor(name ){
        this.name = name
    }

    getName(){
        console.log(this.name)
    }

    static getInstance(name){
        if(!Singleton.instance){
            Singleton.instance = new Singleton(name)
        }
        return Singleton.instance
    }
}
const a = Singleton.getInstance('wang')
const b = Singleton.getInstance('yi')
a.getName()
b.getName()
~~~
>[danger] ##### 透明单例的实现（可以通过new创建就是透明单例）
~~~
1.可以同new的形式创建了，也比es5的代码好理解了，利用静态属性'instance'
用来存当前类有没有被实例过
~~~
~~~

class Singleton{
    static instance = null

    constructor (name ){
        if(Singleton.instance){
            return Singleton.instance
        }
        this.name = name
        return Singleton.instance = this
    }

    getName(){
        console.log(this.name)
    }

}
const a = new Singleton('wang')
const b = new Singleton('yi')
a.getName()
b.getName()
console.log(a === b)
~~~
>[danger] ##### 代理模式实现单例
~~~
class Person{
    constructor (name ){
        this.name = name
    }

    getName(){
        console.log(this.name)
    }

}
// 我是代理
var CreateSinglePerson = (function () {
    var instance;
    return function (name) {
        if (!instance) {
            instance = new Person(name);
        }
        return instance;
    };
})()
var a = new CreateSinglePerson('a');
var b = new CreateSinglePerson('b');
console.log(a === b); // true
~~~

>[danger] ##### 一段比较有想法的代码
~~~
class Image {}
class Link {}
class Text {}

class ElementFactory {
    createElement(type, option){
         const ELEMENT = {
            "image" : Image,
            "text"  : Text,
            "link"  : Link
        }
        let ElementConstructor = ELEMENT[type],
            element = null;
        if(ElementConstructor){
            element = new ElementConstructor(option);
        }
        return element;
    }
}
~~~