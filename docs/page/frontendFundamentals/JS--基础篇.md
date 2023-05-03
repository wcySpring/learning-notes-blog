>[success] # 编程语言 和 计算机语言
1. **计算机语言**：计算机语言（computer language）指用于**人与计算机**之间通讯的语言，是人与计算机之间传递信息的介质。但是其概念比通用的编程语言要更广泛。例如，HTML是标记语言，也是计算机语言，但并不是编程语言。
2. **编程语言**：编程语言（英语：programming language），是用来定义**计算机程序的形式语言**。它是一种被标准化的交流技巧，**用来向计算机发出指令**，一种能够让程序员准确地定义计算机所需要使用数据的计算机语言，并精确地定义在不同情下所应当采取的行动，**具备数据解构，指令和流程控制，引用机械和重用，设计哲学**

>[success] # 编程语言的发展
1. 计算机存储识别是二进制形式即**0和1** 这种有规律的组合叫**机械码（二进制编码）**，这些用计算机指令编写的程序就叫做机器语言，这类语言虽然能被计算机直接识别，不用进行编译效率高，但是不易编写可读性质差
2. **汇编语言** 出现为了解决**机器语言的缺陷**，用特殊符号表示了某种二进制编码，但是产生问题就是移植性差不同底层系统的操作机械编码不同因此会有不同，符号多很难被记住
3. **高级语言**是接近自然语言,更符合人类的思维方式，因此简单容易操作，可移植到不同机器上，相对来说计算机不能直接识别因此需要进行翻译转换为二进制指令

>[success] # JavaScript
1. **ECMAScript是一种规范**，而JavaScript是这种规范的一种实现
2. **js组成**JavaScript是ECMAScript的语言层面的实现，JavaScript还需要对页面和浏览器进行各种操作因此还需要操作DOM 和 BOM，因此组成分为三个部分**ECMAScript定义语言规范**，**DOM操作文档API**,**BOM操作浏览器**
>[success] # js 引擎
1. 高级语言要在机器中运行都需要转换为机械码，这个过程需要js引擎，编写的JavaScript无论你交给浏览器或者Node执行，最后都是需要被CPU执行的，CPU只认识自己的指令集，实际上是机器语言，才能被CPU所执行，要JavaScript引擎帮助我们将JavaScript代码翻译成CPU指令来执行

>[success] # 小知识标记
1. script标签中不可以写JavaScript代码，并且script标签不能写成单标签
2. 在以前的代码中，标签中会使用 **type=“text/javascript”**，现在可以不用声明，因为JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言
>[danger] ##### 资料整理
1.需要整理的 判断空对象
2.多维数组变成一位数据组
3.v8引擎 https://blog.csdn.net/xiebaochun/article/details/85711635
https://zhuanlan.zhihu.com/p/26169639
4.跨域 https://www.artacode.com/posts/cross-origin/jsonp/
5. 好的博客继续学些https://blog.lbinin.com/frontEnd/JavaScript/JS-Closure.html#%E6%B4%BB%E5%8A%A8%E5%AF%B9%E8%B1%A1
6. 原型链 https://github.com/creeperyang/blog/issues/9
7.[https://www.npmjs.com/package/lru-cache](https://www.npmjs.com/package/lru-cache) -- 项目里用到的
8.[https://segmentfault.com/a/1190000005875954](https://segmentfault.com/a/1190000005875954) -- 前端路线文章
9[http://www.alloyteam.com/index.php](http://www.alloyteam.com/index.php)--腾讯
10.[https://jakearchibald.com/](https://jakearchibald.com/)  -- 谷歌浏览器的开发
11.[https://developers.google.com/web/fundamentals/primers/promises?hl=zh-cn](https://developers.google.com/web/fundamentals/primers/promises?hl=zh-cn) --谷歌开发文档
12.[github -- 国外文章翻译](https://github.com/xitu/gold-miner/blob/master/TODO/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with.md)
