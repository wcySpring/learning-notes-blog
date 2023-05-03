>[success] # js 引擎
1. **一般说的js是单线程，指的就是'js引擎'**,他主要做的'运行过程中解析JS源代码并将其转换成可执行的机器码并执行'
2. **虽然 JS引擎线程是单线程的，并不代表参与js执行过程的线程就只有一个**，其所在容器的其他线程也参与该过程，但是永远只有JS引擎线程在执行JS脚本程序，**其他线程只协助，不参与代码解析与执行**
3. **js 引擎的构成主要两个部分**
    2.1.'**内存堆**' 引用类型实际值、内存分配的地方
    2.2.'**调用栈**' 基本类型存储、引用类型地址名存储、代码逻辑执行的地方
* **说明**
**关于栈**:栈是一个临时存储空间，主要存储局部变量和函数调用（对于全局表达式会创建匿名函数并调用）,对于基本数据类型（**String、Undefined、Null、Boolean、Number、BigInt、Symbol**）的局部变量，会直接在栈中创建,栈中只存储它的引用地址，也就是我们常说的浅拷贝。全局变量以及闭包变量也是只存储引用地址。简单说栈中存储的**数据都是轻量的**。
**关于堆**，对象数据类型局部变量会存储在堆中，垃圾回收也是在这里



*  **js 引擎两个部分堆一个是栈** 
    ![](https://img.kancloud.cn/69/03/69032ccd4d553996f855bf9ba2d00a88_700x525.png)
[如果你对堆栈具体作用感兴趣可以参考这篇文章1](https://juejin.cn/post/6844903908452597768#heading-16)  
[如果你对堆栈具体作用感兴趣可以参考这篇文章2](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=180#/detail/pc?id=3183)

>[info] ## 在引擎中执行过程

[关于这部分可以参考的链接](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)

1.js 引擎是单线程程的，栈这种数据结构'**先进后出**'，只有一个进出的栈顶
2.已一段代码为例：
~~~

    function multiply(x, y) {
        return x * y;
    }
    function printSquare(x) {
        var s = multiply(x, x);
        console.log(s);
    }
    printSquare(5);

~~~

*   在栈中的效果  
    ![](https://img.kancloud.cn/40/4c/404c82ef303202195b60ef3fdb797aa3_700x525.png)
*   形象的动态图  
    ![](https://img.kancloud.cn/04/b6/04b6fe1451baecaa1a6771833dc50476_700x294.gif)

>[danger] ##### 关于堆栈溢出(blowing the stack)

~~~
1.'Blowing the stack'—当达到最大调用堆栈大小时,会发生这种情况。
   这可能会很容易发生,特别是如果你使用递归
2.例如代码案例
    function foo() {
        foo();
    }
    foo();

~~~

*   溢出  
    ![](https://img.kancloud.cn/6e/3e/6e3eb46acc222e966b09706d1e75e60f_700x525.png)

>[success] # GUI渲染线程，浏览器事件触发线程

1. 一个浏览器至少实现三个常驻线程：**'javascript引擎线程'，'GUI渲染线程'，'浏览器事件触发线程'。**


2. 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时,该线程就会执行。但需要注意** GUI渲染线程与JS引擎是互斥的**，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。


[csdn--setTimeout解决GUI渲染线程阻塞问题](https://blog.csdn.net/qq_26222859/article/details/77622222)

>[danger] ##### javascript引擎线程，GUI渲染线程 互斥一个小案例

![](https://img.kancloud.cn/e5/d8/e5d8d68f8f6196e00ee6285ae0668e62_657x351.png)

1. 下面代码运行会发现执行'**updateSync**'方法的按钮会一下在页面显示999，相反执行'updateAsync '方法的按钮数组会一点一点的涨，这是就很好解释了 **'javascript引擎线程，GUI渲染线程 互斥'** 在'updateSync'我没执行完你'GUI渲染线程'就在哪给我等着，这一等就直接变成'999',另一个则相反可以通过图更形象的看出来


~~~
<div id="output"></div>

<button onclick="updateSync ()">Run Sync</button>

<button onclick="updateAsync ()">Run Async</button>

<script>

function updateSync() {
    for (var i = 0; i < 1000; i++) {
        document.getElementById('output').innerHTML = i;
    }
}

function updateAsync() {
    var i = 0;

    function updateLater() {
        document.getElementById('output').innerHTML = (i++);
        if (i < 1000) {
            setTimeout(updateLater, 0);
        }
    }

    updateLater();
}
</script>

~~~