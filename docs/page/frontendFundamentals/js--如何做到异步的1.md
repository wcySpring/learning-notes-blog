>[success] #  js 如何做到异步的
**js是单线程，如何做到异步的呢？是谁来处理异步这部分**
1. 同时做多件事情是'异步编程'；一次只能处理一件事，上一件事情处理完，下一件才能开始处理，这种操作是'同步编程',异步编程实现机制有例如 **'多线程机制' ，'EventLoop事件循环机制'**
2. js 采用了 **'EventLoop事件循环机制'**
>[info] ## js 运行容器
1. j**s是解释型语言**，因此在执行过程中需要将**源码转换成字节码等中间代码或者是机器码**，在执行的过程中**实时编译**，边编译边执行这个过程需要'**js 引擎**'。常见的js 引擎 **Chrome V8引擎 (chrome、Node、Opera）、SpiderMonkey （Firefox）
  Nitro (Safari）、Chakra （Edge)**
2. '**JS 引擎往往不是单独运行的**' 它运行在一个宿主环境中，对于大多数开发者来说就是典型的**浏览器和 Node.js**
3. 这些环境都有一个共同点，就是都拥有一个'**事件循环**'的内置机制，它随着时间的推移每次都去调用JS 引擎去处理程序中多个块的执行


>[danger] ##### 浏览器这个容器为例

1.  目前多数的浏览器其实都是**多进程**的，当我们打开一个tab页面时就会开启一个新的进程，这是为了**防止一个页面卡死而造成所有页面无法响应**，整个浏览器需要强制退出
2.  每个进程中又有很**多的线程**，其中包括执**行JavaScript代码的线程**
 2.1. **GUI渲染线程**:渲染页面 & 绘制图形
 2.2. **JS引擎线程**:渲染和解析JS代码
 2.3. **事件触发线程**:监听事件触发
 2.4. **定时触发器线程**:给定时器计时的
 2.5. **异步HTTP请求线程**:基于HTTP网络从服务器端获取资源和信息
 2.6. **WebWorker**
3.  JavaScript的代码执行是在一个单独的线程中执行的，javaScript的代码，在**同一个时刻只能做一件事**；如果这件事是非常耗时的，就意味着**当前的线程就会被阻塞**
4.  **浏览器的每个进程是多线程的比如网络请求、定时器,其他线程可以来完成**

* 总结：浏览器为例主要的两个部分'渲染引擎','js引擎'，渲染引擎主要工作内容就是根据我们HTML、CSS、JS的定义，绘制出相应的页面结构及展现形式，常见的渲染引擎**Webkit (safari、老版本的chrome)、Blink (新版本的chrome)、Trident (IE)、Gecko (Firefox)**

>[info] ## 运行时Runtime
1. **首先Javascript引擎是工作在一个环境(容器)内的**，**这个环境暴露一些额外的对象（API），它们可以在我们的代码在执行的时候可以使用这些特性与JS代码做交互**
2. 简单的说**'Javascript Runtime' 就是JS宿主环境创建的一个scope**， 在这个**scope内JS可以访问宿主环境提供的一系列特性**
3. 有了 **'Javascript Runtime' 就可以相同的JS引擎，在不同的环境下，便有不同的能力**
4. js 常见提供 **'Javascript Runtime'宿主'web 浏览器','node.js'**


*   **两个环境中，对应的引擎和runtime**

| 宿主环境 | JS引擎 | 运行时特性 |
| --- | --- | --- |
| 浏览器 | chrome V8引擎 | DOM、 window对象、用户事件、Timers等 |
| node.js | chrome V8引擎 | require对象、 Buffer、Processes、fs 等 |

[Javascript v8引擎和Web API](https://stackoverflow.com/questions/59316975/the-javascript-v8-engine-and-web-apis)

>[danger]  ##### webApi

1. 现在有一个问题要弄清楚'**setTimeout，setInterval**',和 **XHR**，他们在MDN 上的归类属于的是'**WebApi**',并且定义他们组织是'**whatwg**',而定义js组织是'**ECMAScript**，''**webApi**' 可以理解成是**浏览器容器额外提供的一些浏览器api方法**，**简单的说'Web api'它们不是  JavaScript规范的一部分**
2. '**webApi**'就是浏览器这个容器提供的'**Javascript Runtime**'
3. 从本质上讲，它们是你**无法访问的线程**，但是你**能够调用它们**。它们是浏览器并行启动的一部分。如果你是一个 Node.js 的开发者，这些就是 C++ 的一些 API
4. '**webApi**' 主要能力
  4.1. Event Listeners
  4.2. HTTP request
  4.3. Timing functions
5. 现在可以发现**setTimeout，setInterva 这类我们认为的js的异步能力是所在容器所提供的，并不是js引擎**


[关于whatwg链接](https://segmentfault.com/q/1010000002408941)

>[info] ## 结论
1. **js引擎是单线程的，但是运行js引擎的容器是多线程的**,异步api是**容器提供**的并且**容器提供的单独执行他们的线程**

[javascript 到底如何实现异步？](https://www.zhihu.com/question/22852515)
 