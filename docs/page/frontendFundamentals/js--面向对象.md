>[success] # 基础了解
[基础了解参考](https://www.kancloud.cn/cyyspring/html_js_cs/717196)
~~~
1.本章节的所有内容都是来自JavaScript 高级程序设计书中，
只是调整了对应的阅读顺序，方便理解
~~~
>[success] # 创建对象
1. 利用**字面量**的形式大量的手动创建对象，弊端创建同样的对象时，需要编写重复的代码
2. **工厂函数**（函数像工厂一样批量创建对象），们可以封装一个函数，这个函数用于帮助我们创建一个对象，我们只需要重复调用这个函数即可弊端，我们在打印对象时，对象··的类型都是Object类型
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
3. 构造函数的方式，在其他面向的编程语言里面，构造函数是存在于类中的一个方法，称之为构造方法； 但是JavaScript中的构造函数有点不太一样，构造函数扮演了其他语言中类的角色
* java
~~~
public class Person {
  Person() { // 构造函数
    System.out.println("无参的构造方法");
  }
}
~~~
* js -- es5
~~~
function Person(){} // 构造函数
new Person()
~~~
* js -- es6
~~~
class Person{
    constructor(){} // 构造函数
}
~~~
>[success] # 关于window
1. 浏览器中存在一个全局对象object -> window
2.  查找变量时, 最终会找到window头上
3. 将一些浏览器全局提供给我们的变量/函数/对象, 放在window对象上面
4. 使用var定义的变量会被默认添加到window上面
>[info] ## 小说明
1. 前端大多数情况都是在渲染后台生成对象，因此类使用感觉上较少