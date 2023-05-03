这是一个未完成章节，需要新的大量知识体系，暂时只记录学习的表面

* 说明这个笔记 所有文章内容都是学习记录笔记，用来做个人复习使用

>[danger] ##### 相关文章

[函数式编程指北](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch1.html)
[阮一峰函数式编程入门教程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
[阮一峰Pointfree 编程风格指南](http://www.ruanyifeng.com/blog/2017/03/pointfree.html)
[函数式编程资料](http://www.taoweng.site/index.php/archives/197/)
[Functors, Applicatives, And Monads In Pictures](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)
[掘金--函数式编程，真香](https://juejin.im/post/6844903743117361165)
[掘金--JavaScript 函数式编程（一）](https://juejin.im/post/6844903655397654535#heading-2)
[函数式相关的csdn 一个系列文章](https://blog.csdn.net/zhang6223284/article/details/82560211)
>[success] # js 函数式编程
~~~
1.函数式编程是随着 'React' 的流行受到越来越多的关注，'Vue 3'也开始拥抱函数式编程，函数式编程可以抛弃 'this'
打包过程中可以更好的利用 'tree shaking' 过滤无用代码，方便测试、方便并行处理，并且也出现了很多库进
行函数式开发的库：'lodash'、'underscore'、'ramda'
2.'函数式编程(Functional Programming, FP)'，FP 是编程范式之一。
~~~
>[danger] ##### 编程范式介绍
[编程范式总结](https://www.cnblogs.com/huilei/p/10535713.html)
~~~
1.编程范式常听见的有面向过程编程、面向对象编程、函数式编程。
    1.1.'面向对象'编程的思维方式：把现实世界中的事物抽象成程序世界中的类和对象，通过封装、继承和
        多态来演示事物事件的联系
    1.2.'函数式编程'的思维方式：把现实世界的事物和事物之间的联系抽象到程序世界（对运算过程进行抽象）
        1.2.1.程序的本质：根据输入通过某种运算获得相应的输出，程序开发过程中会涉及很多有输入和
             输出的函数
        1.2.2.x -> f(联系、映射) -> y，y=f(x)
        1.2.3.函数式编程中的函数指的不是程序中的函数(方法)，而是数学中的函数即映射关系，例如：y
               = sin(x)，x和y的关系
        1.2.4.相同的输入始终要得到相同的输出(纯函数)
        1.2.5.函数式编程用来描述数据(函数)之间的映射
~~~
>[danger] ##### 函数式编程的特点
~~~
1.stateless：函数不维护任何状态。函数式编程的核心精神是 stateless，简而言之就是它不能存在状态，
你给我数据我处理完扔出来，里面的数据是不变的。
2.immutable：输入数据是不能动的，动了输入数据就有危险，所以要返回新的数据集(想一下js 数组map方法返回
  的就是新数组)
3.'函数第一位':即函数可以出现在任何地方，比如你可以把函数作为参数传递给另一个函数，不仅如此你还可
  以将函数作为返回值
~~~
>[danger] ##### 举个例子求和
~~~
// 非函数式 面向过程 
let num1 = 1
let num2 = 2
let sum = num1 + num2
console.log(sum)


// 函数式
/*
    1. 根据输入通过某种运算获得相应的输出,下面案例输入了2，3 得到了5
    2. x - > f(联系、 映射) - > y， y = f(x) ，下面案例 sum = add(num1,num2)
    特点：
    1.丢给我2，3 我直接处理完还给你给5
    2.输入的2，3是没动的没有改变的直接返回新的数据 5
*/
function add(num1,num2){
    return num1 + num2
}
let sum = add(2,3)
console.log(sum)
~~~
