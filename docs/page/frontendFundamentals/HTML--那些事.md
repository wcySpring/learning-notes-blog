>[success] # 浏览器页面加载过程
~~~
1.浏览器是多线程在加载页面的时候会用到 'GUI渲染线程'和 'JavaScript 引擎线程'
 1.1.'GUI 渲染线程'负责渲染浏览器界面 HTML 元素
 1.2.'JavaScript 引擎线程'负责处理 JavaScript 脚本程序。
 1.3.'HTTP网络线程，可以开辟N多个：从服务器获取资源和数据的'
 1.4.'DOM监听线程'
 ....
2.'js'在执行过程中还可能会改动界面结构和样式，因此两个线程是互斥的关系。当 JS 引擎执
  行时，GUI 线程会被挂起。
3.html 结构可以看作为三部分组成：
 3.1.'<html>'元素是页面的根元素，它描述完整的网页；
 3.2.'<head>'元素包含了我们想包含在 HTML 页面中，但不希望显示在网页里的内容；
 3.3.'<body>'元素包含了我们访问页面时所有显示在页面上的内容，是用户最终能看到的内容。
~~~
![](images/screenshot_1651991497136.png)
>[info] ## 打开页面加载过程
~~~html
1.浏览器会从服务器中获取到 HTML 内容
2.浏览器获取到 HTML 内容后，就开始从上到下解析 HTML 的元素
3.'<head>'元素内容会先被解析，此时浏览器还没开始渲染页面。当遇到'head' 标签内部一般会有
 3.1.页面元数据的<meta>元素
 3.2.还有一些<link>元素涉及外部资源（如图片、CSS 样式等），此时浏览器会去获取这些外部 
  资源。
 3.3.<script>元素通过src属性指向外部资源。
4.当浏览器解析<script>，会暂停解析并下载 JavaScript 脚本。
5.当 JavaScript 脚本下载完成后，浏览器的控制权转交给 JavaScript 引擎。当脚本执行完成后，
控制权会交回给渲染引擎，渲染引擎继续往下解析 HTML 页面。
6.<body>元素内容开始被解析，浏览器开始渲染页面。
~~~
>[danger] ##### DOM 树 -- 处理 HTML 标记，构建 DOM 树
~~~
1.从服务器基于HTTP网路请求回来的数据先是'16进制的文件流' =>'浏览器把它解析为字符串（HTML字符串）'
=>'按照W3C规则识别成为一个个的节点「词法解析」' =>'生成树'
~~~
![](images/screenshot_1641294384314.png)
>[danger] ##### CSSOM树
~~~
1.在处理HTML时，解析器可能会碰到引用外部样式表的link元素。
2.然后，使用CSS对象模型规范将此CSS样式表解析为地图 。
3.然后可以将生成的代码应用于DOM中的元素 。

4.CSSOM 依赖DOM 树 ，既然已经有了DOM树结构来表示HTML文档结构，那为什么不把CSS
顺便放在在DOM上，以便我们直接从Element上获取所有样式信息呢？
很明显，如果把CSS信息一起建模在DOM结构上，就会违背'单一职责原则'。因为正如在网页中HTML承担了
语义职能，CSS承担了表现职能一样，在计算机中DOM承担了语义职能，而CSSOM承担了表现职能。仔细看
下图仅仅是对dom 节点的css做了生成树，这时候并没有节点中的内容
~~~
![](images/screenshot_1641297287649.png)
>[danger] ##### Render-Tree渲染树
1. 当有了**DOM Tree**和 **CSSOM Tree**后，就可以两个结合来构建**Render Tree**了
2. **link**元素不会阻塞**DOM Tree**的构建过程，但是会阻塞**Render Tree**的构建过程，这是因为Render Tree在构建时，需要对应的CSSOM Tree
3. **Render Tree和DOM Tree**并不是一一对应的关系，比如对于display为none的元素，压根不会出现在render tree中
![](images/screenshot_1641297641926.png)
>[danger] ##### 布局绘制
1. 在渲染树（Render Tree）上运行布局（Layout）以计算每个节点的几何体，渲染树会表示显示哪些节点以及其他样式，但是不表示每个节点的**尺寸、位置**等信息，**布局**是确定呈现树中所有节点的**宽度、高度和位置**信息
![](images/screenshot_1658653740866.png)
>[danger] ##### 将每个节点绘制（Paint）到屏幕上
1. 在绘制阶段，浏览器将布局阶段计算的每个frame转为屏幕上实际的像素点；
2. 包括将元素的可见部分进行绘制，比如文本、颜色、边框、阴影、替换元素（比如img）
![](images/screenshot_1658653831174.png)
>[danger] ##### 放置顺序产生问题
~~~html
1.<head>中放置的<script>元素会阻塞页面的渲染过程因为上面说过,当 JS 引擎执行时，GUI 线
程会被挂起。因此把 JavaScript 放在<head>里，意味着必须把所有 JavaScript 代码都下载、解
析和解释完成后，才能开始渲染页面。
对应问题：外部脚本加载时间很长（比如一直无法完成下载），就会造成网页长时间失去响应，
浏览器就会呈现“假死”状态，用户体验会变得很糟糕

2.将 JavaScript 脚本放在<body>的最后面。这样可以避免资源阻塞，页面得以迅速展示
~~~
>[danger] ##### 为什么加载script 会阻止dom
~~~
1. HTML 解析器找到 <script> 标签后，它将暂停 HTML 文档的解析，并且
必须加载、解析和执行 JavaScript 代码。因为 JavaScript 可以使用诸如 
document.write() 更改整个 DOM 结构之类的东西来更改文档的形状，因此 
HTML 解析器必须等待 JavaScript 运行才能恢复HTML文档解析。 
~~~
>[danger] ##### 总结
~~~
1.整个过程如下
DOM TREE（DOMContentLoaded事件触发） -> 「执行JS」没完成会阻止接下来的渲染 -> CSSOM TREE
-> RENDER TREE渲染树「浏览器未来是按照这个树来绘制页面的」-> Layout布局计算「回流/重排」
-> Painting绘制「重绘」{ 分层绘制 }
~~~
![](images/screenshot_1641301484743.png)
 [DOMContentLoaded与load的区别 读一下](https://www.cnblogs.com/caizhenbo/p/6679478.html)
>[info] ## 关于defer/async
~~~
1.通过下面案例在'script 引入 index.js' 其中'index.js' 是一个从10000打印到0的一个方法，下面
是四种不同形式的使用

'注':当你在你本地想查看同等案例的时候需要一次仅放开一种情况来查看效果

2.运行产生的效果
 2.1.第一种情况'sprict'放置顶部，运行后'<p>我在开始渲染</p>' 没有立刻渲染
 2.2.第二种情况'sprict' 增加了'defer'属性，运行后'<p>我在开始渲染</p>' 立刻渲染
 2.3.第三种情况'sprict' 增加了'async'属性，运行后'<p>我在开始渲染</p>' 立刻渲染
 2.4.第四种情况'sprict' 放到底部，运行后'<p>我在开始渲染</p>' 立刻渲染

3.关于第二种和第三种，了解之前需要知道一个概念，sprict 这里需要两部分来看，第一部分
是'下载'，第二部分是'执行'，像第一种和第四种他们都是'下载和执行'全部阻碍html渲染,并且浏览
器一次只能执行一个文件。 也就是说，异步加载允许浏览器同时'下载'多个文件以及执行单个文
件，但不能同时'执行'多个文件,简单的说'下载'不会阻止其他文件的下载和其他文件的执行，但是
一个文件的'执行'会阻止其他文件的'执行' 但不阻止下载，那么因此实际可以做到优化的位置就
是'下载'，让第一种和第四种出现'下载'和'执行'的问题拆解，因此问题就变得何时触发执行



~~~
* 第一种 和 第四种情况图
~~~
1.JS 引擎执行时，GUI 线程会被挂起，所以像下图展示效果先html 解析，遇到'sprict' 下载
 对应资源，下载后解析资源，在重新渲染html，但由于第一种和第四种位置放置区别，产生
了两种不同效果
~~~
![](images/screenshot_1629960699228.png)
* html
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 第一种 -->
    <script  src="index.js"></script> 
    <!-- 第二种 -->
    <script defer src="index.js"></script>
    <!-- 第三种 -->
    <script async src="index.js"></script>
</head>
<body>
    <p>我在开始渲染</p>
    <!-- 第四种 -->
    <script  src="index.js"></script>
</body>
</html>
~~~
* index.js
~~~
let count = 10000
while (count) {
    count -= 1
    console.log(count);
}
~~~
>[danger] ##### Async -- 异步
~~~
1.async 允许在浏览器执行其他操作时并行动作去下载指定的 JS 资源，一旦文件的下载完成，
浏览器将立即开始执行它。 因此只要文件下载完 JS 文件的执行将阻止网页/HTML 文件的当前渲
染。'简单'的说解决下载，让下载和其他操作可以同步，但当下载完成后的立即执行效果依旧
会阻止'html' 渲染
2.async 脚本执行的顺序是不可预测 如图二，将三个脚本，每个脚本将一个数字记录到控制台
中，使用async加载顺序将变得不可预测。
3.async不会能保证在DOMContentLoaded之前或者之后执行
~~~
![](images/screenshot_1629961031752.png)
* 图二
![](images/screenshot_1629965640266.png)
>[danger] #####  defer-- 延迟
~~~
1.defer 属性的 JS 文件将与其他文件同时下载，仅在 HTML 文件呈现完成后才开始执行下载的资
源，而不是像 async 在资源下载完成后立即执行。 因此，延迟文件的下载和执行都不会阻塞渲
染。 
2.defer 加载顺序将始终按照指定
3. 它会等待DOM Tree构建完成，在DOMContentLoaded事件之前先执行defer中的代码
~~~
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./js/test.js" defer></script>
  <script src="./js/demo.js" defer></script>
</head>
<body>
  
  <div id="app">app</div>
  <div class="box"></div>
  <div id="title">title</div>
  <div id="nav">nav</div>
  <div id="product">product</div>

  <!-- 1.下载需要很长的事件, 并且执行也需要很长的时间 -->
  <!-- 总结一: 加上defer之后, js文件的下载和执行, 不会影响后面的DOM Tree的构建 -->
  <script>
    // 总结三: defer代码是在DOMContentLoaded事件发出之前执行
    window.addEventListener("DOMContentLoaded", () => {
      console.log("DOMContentLoaded")
    })
  </script>
  
  <h1>哈哈哈哈啊</h1>

</body>
</html>
~~~
![](images/screenshot_1629966010217.png)
![](images/screenshot_1629967041042.png)
>[danger] ##### 总结
~~~
1.遇到 <script src='xxx/xxx.js'>，会阻碍GUI的渲染
 1.1.defer：和link是类似的机制了，不会阻碍GUI渲染，当GUI渲染完，才会把请求回来的JS去渲染...
 1.2.async：请求JS资源是异步的「单独开辟HTTP去请求」，此时GUI继续渲染；但是一但当JS请求回来，
会立即暂停GUI的处理，接下来去渲染JS


2.加入我们有5个JS的请求，如果不设置任何属性，肯定是按照顺序请求和渲染JS的「依赖关系是有效的」；
但是如果设置async，谁先请求回来就先渲染谁，依赖关系是无效的；如果使用defer是可以建立依赖关系的
(浏览器内部在GUI渲染完成后，等待所有设置defer的资源都请求回来，再按照编写的依赖顺序去加载渲染js)；
 
3.真实项目开发，我们一般把link放在页面的头部「是为了在没有渲染DOM的时候，就通知HTTP去请求CSS了，
这样DOM渲染玩，CSS也差不多回来了，更有效的利用时间，提高页面的渲染速度」；我们一般把JS放在页面
的底部，防止其阻碍GUI的渲染，如果不放在底部，我们最好设置上async/defer...；
~~~
>[danger] ##### 浏览器渲染过程 未读
https://web.dev/howbrowserswork/
>[danger] ##### 关于二者使用场景参考
[How and when to use Async and Defer attributes](https://zellwk.com/blog/javascript-async-and-defer/)
>[info] ## 文章来源
[01 | 重识 HTML，掌握页面基本结构和加载过程2021/04/09 王贝珊（被删）](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=822#/detail/pc?id=7196)
[Async vs Defer vs Preload vs Server Push](https://webspeedtools.com/async-vs-defer-vs-preload-vs-server-push/#Async)
[How and when to use Async and Defer attributes](https://zellwk.com/blog/javascript-async-and-defer/)
[更快地构建DOM: 使用预解析, async, defer 以及 preload](https://www.w3cplus.com/javascript/building-the-dom-faster-speculative-parsing-async-defer-and-preload.html)