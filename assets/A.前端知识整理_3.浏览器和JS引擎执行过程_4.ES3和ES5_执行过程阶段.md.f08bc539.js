import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ab95ac3d.js";const e="/learning-notes-blog/images/dc8f558f733f773db1f7451f24df2792cb12f43ecca48adec9bc8051f2ea480b.png",o="/learning-notes-blog/images/c8109fc11ac05b68c39bf408ec0bea2514a8f494defb501ce1757b573336b640.png",p="/learning-notes-blog/images/61c13385bdfa0e4973ffb7f486dd16bfe5d4f0f351e355bbe7eb7b223b27fcc1.png",t="/learning-notes-blog/images/1_bDebsOuhRx9NMyvLHY2zxA.gif",r="/learning-notes-blog/images/e42001d5666e0bcc77944fbeedb03c7cbd0aefd8af2892ef9117c643a2a588f6.png",c="/learning-notes-blog/images/372b8f42989446108e8bf8efb671bd5c03fd59642710704c069f46351a251793.png",C=JSON.parse('{"title":"","description":"ES3和ES5+编译和执行阶段中  VO / AO / GO / ECS / GEC / FEC / VE 名词解释 - js 代码执行过程","frontmatter":{"description":"ES3和ES5+编译和执行阶段中  VO / AO / GO / ECS / GEC / FEC / VE 名词解释 - js 代码执行过程"},"headers":[],"relativePath":"A.前端知识整理/3.浏览器和JS引擎执行过程/4.ES3和ES5+执行过程阶段.md","filePath":"A.前端知识整理/3.浏览器和JS引擎执行过程/4.ES3和ES5+执行过程阶段.md","lastUpdated":1687755134000}'),i={name:"A.前端知识整理/3.浏览器和JS引擎执行过程/4.ES3和ES5+执行过程阶段.md"},B=l(`<p>先提前了解名词定义</p><table><thead><tr><th>名词</th><th>解释</th></tr></thead><tbody><tr><td>ECS</td><td>执行上下文栈（Execution Context Stack）：JavaScript引擎在执行代码时，会将创建的执行上下文（Execution Context）按照顺序存储在一个栈结构中，这个栈结构被称为执行上下文栈。当函数被调用时，会创建一个新的执行上下文并将其压入栈顶；当函数执行完毕后，会将栈顶的执行上下文弹出，返回到下一个执行上下文。</td></tr><tr><td>GEC</td><td>全局执行上下文（Global Execution Context）：在JavaScript代码开始执行时，会首先创建一个全局执行上下文。全局执行上下文负责管理全局变量、函数声明以及全局对象（如window对象）。全局执行上下文只有一个，它是执行上下文栈的底部。</td></tr><tr><td>FEC</td><td>函数执行上下文（Functional Execution Context）：当一个函数被调用时，会创建一个新的函数执行上下文。函数执行上下文负责管理函数内的变量、函数声明以及this指针。每次调用函数时，都会创建一个新的函数执行上下文。</td></tr><tr><td>VO</td><td>Variable Object：在早期的ECMA规范中，变量对象（Variable Object）是用来存储执行上下文中的变量、函数声明和函数参数的对象。在最新的ECMA规范中，变量对象已经被替换为环境记录（Environment Record）。</td></tr><tr><td>VE</td><td>Variable Environment：在最新的ECMA规范中，变量环境（Variable Environment）是用来存储执行上下文中的变量、函数声明和函数参数的环境记录。环境记录有两种类型：词法环境记录（Lexical Environment Record）和全局环境记录（Global Environment Record）。</td></tr><tr><td>GO</td><td>全局对象（Global Object）：在JavaScript代码开始执行时，会创建一个全局对象。全局对象用于存储全局变量、函数声明以及其他全局性质的属性。在浏览器环境中，全局对象通常是window对象；在Node.js环境中，全局对象是global对象。全局执行上下文中关联的变量对象就是全局对象。</td></tr><tr><td>AO</td><td>函数对象（Activation Object）：当一个函数被调用时，会创建一个函数对象（Activation Object）。函数对象用于存储函数内的变量、函数声明和函数参数。函数执行上下文中关联的变量对象就是函数对象。在最新的ECMA规范中，函数对象已经被替换为词法环境记录。</td></tr></tbody></table><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>随着 es 升级，规范也和之前不一样做了升级。主要可以分为 es3 和 es5+ 两个分水岭</p><p>当然可以。以下是旧概念与新概念的对照表：</p><table><thead><tr><th>旧概念</th><th>新概念</th><th>描述</th></tr></thead><tbody><tr><td>变量对象（VO）</td><td>环境记录（Environment Record）</td><td>存储变量、函数声明和类声明等标识符</td></tr><tr><td>活动对象（AO）</td><td>环境记录（Environment Record）</td><td>存储变量、函数声明和类声明等标识符</td></tr><tr><td>全局对象（GO）</td><td>全局对象（Global Object）</td><td>JavaScript 运行时的全局作用域（如浏览器中的 <code>window</code> 对象，Node.js 中的 <code>global</code> 对象）</td></tr><tr><td>执行上下文栈（ECS）</td><td>执行上下文栈（Execution Context Stack）</td><td>存储和管理当前执行的所有执行上下文</td></tr><tr><td>全局执行上下文（GEC）</td><td>执行上下文（Execution Context）</td><td>包括全局执行上下文（在全局作用域中执行的代码）和函数执行上下文（在函数作用域中执行的代码）</td></tr><tr><td>函数执行上下文（FEC）</td><td>执行上下文（Execution Context）</td><td>包括全局执行上下文（在全局作用域中执行的代码）和函数执行上下文（在函数作用域中执行的代码）</td></tr><tr><td>变量环境（VE）</td><td>词法环境（Lexical Environment）</td><td>存储和管理变量、函数声明和类声明等标识符，实现作用域链和变量访问</td></tr></tbody></table><h3 id="execution-contexts-执行上下文" tabindex="-1">Execution Contexts 执行上下文 <a class="header-anchor" href="#execution-contexts-执行上下文" aria-label="Permalink to &quot;Execution Contexts 执行上下文&quot;">​</a></h3><p>执行上下文(EC)被定义为执行 JavaScript 代码的环境。也就是我们代码都将在一个创建好的一个环境中执行，这个环境具备在特定时间代码可以访问的执行上下文被称为 <strong>词法环境（Lexical Environment）</strong> 和 <strong>变量环境（Variable Environment）</strong> 。执行上下文的类型仍然可以分为三种：</p><ol><li><p><strong>全局执行上下文（Global Execution Context，GEC）</strong> ：这是 JavaScript 代码执行时的默认环境，包含全局对象（如 window 对象）、内置对象和全局变量。</p></li><li><p><strong>函数执行上下文（Functional Execution Context，FEC）</strong> ：当调用一个函数时，会为该函数创建一个新的执行上下文。这个环境包含了函数的参数、局部变量和内部函数。</p></li><li><p><strong>Eval 函数执行上下文（Execution Context inside Eval Function）</strong> ：当使用 eval 函数执行一段代码时，会为该代码创建一个特殊的执行上下文。</p></li></ol><h3 id="词法环境-lexical-environment" tabindex="-1">词法环境（Lexical Environment <a class="header-anchor" href="#词法环境-lexical-environment" aria-label="Permalink to &quot;词法环境（Lexical Environment&quot;">​</a></h3><p><strong>变量环境（VE）</strong> ：这个概念已经被 <strong>词法环境（Lexical Environment）</strong> 替代。用于描述代码在执行过程中如何访问变量和函数声明。每个代码块（如函数、模块或全局作用域）都有一个与之关联的 Lexical Environment。Lexical Environment 主要包含两个部分：<strong>Environment Record</strong> 和 <strong>Reference to outer lexical environment</strong>。</p><ul><li><strong>Environment Record（环境记录）</strong> ：这是词法环境的一个组成部分，它实际上是一个存储标识符与变量映射的数据结构。换句话说，环境记录就是用来存储在当前作用域中声明的变量、函数和类的地方</li><li><strong>Reference to outer lexical environment（对外部词法环境的引用）</strong> ：这是一个指向外部词法环境的引用，用于实现作用域链。当在当前作用域中找不到某个变量时，引擎会沿着这个引用查找外部词法环境，直到找到该变量或者到达全局作用域。</li></ul><p><strong>词法环境（Lexical Environment）</strong> 中 <strong>Environment Record（环境记录）</strong> 已经替代了之前 <strong>变量对象（VO）和活动对象（AO）</strong> 相比之前分类更细致，环境记录用于存储变量、函数声明和类声明等标识符。它包括声明式环境记录（用于存储 var、let、const 声明的变量，以及 function 和 class 声明的函数和类）和对象环境记录（用于存储通过 with 语句和全局对象创建的变量）又可以分为五类</p><ul><li>Declarative Environment Records（声明式环境记录）：记录 var、const、let、class、import、function 等声明。</li><li>Object Environment Records（对象环境记录）：与某一对象相绑定，记录该对象中具有 string 标识符的属性。主要用于 with 语句创建。</li><li>Global Environment Records（全局环境记录）：包含顶层声明和全局对象的属性，类似于声明式环境记录和对象环境记录的结合。</li><li>Function Environment Records（函数环境记录）：用于函数的顶层，提供 this 和 super 方法的绑定（如果非箭头函数和引用了 super）。</li><li>Module Environment Records（模块环境记录）：用于 ES module 的顶层，包含常量、变量声明和不可变的 import 绑定。</li></ul><p><strong>词法环境（Lexical Environment）</strong> 又可以分为三种 <code>LexicalEnvironment</code>/<code>VariableEnvironment</code>/<code>PrivateEnvironment</code></p><ul><li><p><code>LexicalEnvironment</code>：它是用于描述代码在执行过程中如何访问变量和函数声明的环境。<code>LexicalEnvironment</code> 主要用于处理 let、const 和函数声明等。</p></li><li><p><code>VariableEnvironment</code>：它与 <code>LexicalEnvironment</code> 类似，但主要用于处理 var 声明的变量。在 ES6 之前，JavaScript 只有 var 声明，因此 <code>VariableEnvironment</code> 和 LexicalEnvironment 实际上是相同的。从 ES6 开始，由于引入了 let 和 const，<code>LexicalEnvironment</code> 和 <code>VariableEnvironment</code> 开始有所区别。</p></li><li><p><code>PrivateEnvironment</code>：它是 ECMAScript 规范中描述私有字段（private fields）的概念。私有字段是 ES6 引入的类（class）中的一种特殊字段，它们以 # 开头，只能在类的内部访问。PrivateEnvironment 用于存储这些私有字段及其值</p></li></ul><h2 id="执行" tabindex="-1">执行 <a class="header-anchor" href="#执行" aria-label="Permalink to &quot;执行&quot;">​</a></h2><p>整个代码在执行最开始的过程时候，JS引擎为了执行代码，引擎内部会有一个执行上下文栈（Execution Context Stack，简称ECS），这是 JavaScript 代码执行时的默认环境，包含全局对象（如 window 对象）、内置对象和全局变量，它是用来执行代码的调用栈。</p><ul><li><p><strong>global object 全局对象</strong> (在不同环境中表现不同在浏览器中为window在node 中为global，当然在新es2020规范可以用globalThis代替)，新规范是为了解决，跨环境访问全局对象的标准方法中提出要提供全局变量，在过去览器中为window, frames在WebWorkers中self，node环境中为global,但现在为统一目前已经指定了对应的标准，称之为globalThis，使用场景假设我们的环境是一个浏览器，我们将在这里使用 window。如果脚本可能在其他环境中运行，最好使用 globalThis。在新的浏览器执行 <code>globalThis === window</code> 结果是 <code>true</code></p></li><li><p><strong>全局对象</strong>提供在任何地方都可用的变量和函数。默认情况下，那些内置在语言或环境中的一些属性和方法放一个单独的内存中（Date、Array、String、Number、setTimeout、setInterval），例如浏览器的window 中就包含了内部提供一些方法，还有通过var/function声明的变量是直接存储到全局对象中</p></li></ul><p>全局执行上下文（GEC）是在打开页面时、首次加载一个 JavaScript 文件或运行一段 JavaScript 代码之前创建的。在全局代码执行之前，JavaScript 引擎会先创建一个全局执行上下文，并将其压入执行环境栈中。因此，全局执行上下文位于执行环境栈的底部。它包含主要部分</p><ul><li>执行代码前的变量作用域提升（hoisting）和实际的代码执行。在这个过程中，<strong>全局定义的变量、函数等会被添加到全局对象中, 创建this并将其绑定到全局对象</strong></li><li>将变量声明存储在内存堆和全局执行上下文中的变量中，初始值为undefined,函数会提前声明,这个过程也称之为变量的作用域提升</li><li>在代码执行阶段，这些变量和函数会被赋予实际的值</li></ul><p>在这个js运行的生命周期中，<strong>【GEC将只创建一次，只有一个】</strong> ，即一个程序中只能存在一个全局执行上下文， 只有页面关闭时才会释放掉，刷新页面时，会把之前的上下文全都释放调，然后创建全新的上下文</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {}</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bFun</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// a</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;">bFun</span><span style="color:#ABB2BF;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="`+e+'" alt="图 1"></p><p>在上图中的 Global 中还包含了 我们常见的（Date、Array、String、Number、setTimeout、setInterval）这些全局对象,基于var/function声明的变量是直接存储到GO对象上,也就是说function 和 var声明的变量都是挂在到 &#39;window&#39; 上的</p><p><img src="'+o+'" alt="图 2"></p><h3 id="函数执行栈" tabindex="-1">函数执行栈 <a class="header-anchor" href="#函数执行栈" aria-label="Permalink to &quot;函数执行栈&quot;">​</a></h3><p>全局执行栈是 js 代码第一步必须有，这样才能创建一个 代码整体运行环境步骤，函数执行上下文（FEC）是在函数调用时创建的，而不是在声明函数时创建的。它的作用是为每个函数调用创建一个执行上下文，这个执行上下文可以保护函数内部的私有变量不受外界干扰。每次调用同一个函数时，都会创建一个新的私有执行上下文（<strong>这个环境包含了函数的参数、局部变量和内部函数。</strong>）</p><ol><li>函数执行上下文FEC,作用是为每个函数调用创建一个执行上下文。但它不是在声明函数时创建的，而是在调用函数时创建</li><li>创建一个新的函数的上下文会被添加到执行栈的顶部</li><li>这个私有上下文可以保护里面的私有变量和外界互不干扰</li><li>即使是同一个函数但每一次被调用，都会创建一个新的私有上下文。</li><li>每当一个函数执行完毕，则这个函数的私有执行上下文也将从栈中弹出，等到所有函数都运行完毕，要关闭页面的时候，全局上下文也将出栈释放，程序运行结束。</li><li>只要当前上下文中的某些内容，被当前上下文以外的东西占用，那么当前上下文是不能被释放的闭包</li><li>调用过程，在创建函数上下文过程中，默认情况下，JS 引擎会在本地执行上下文中创建一个 arguments 对象和一个this对象，函数内部预期的键值对参数存储在 arguments 对象中。它还有一个名为 length 的默认属性，用于计算该函数有多少个参数。当函数的参数为​​空时，参数对象默认为长度：0。根据调用函数的方式，函数执行上下文中的this对象会发生变化。如果使用对象引用来调用它，则 this 的值设置为该对象。否则，此变量的值将设置为gloab对象或严格模式下为undefined。</li></ol><p><img src="'+p+'" alt="图 3"></p><p><strong>动图</strong><img src="'+t+'" alt=""></p><ul><li>ES3 函数活动对象AO(Activation Object)，而一个函数内的变量包括：形参变量、局部变量、自身函数对象引用量、arguments、this。 为了保存这些变量，所以特意创建了一个对象，称它为AO，它在创建函数的过程中，函数内部的代码不管对还是错我都可以成功加载到页面中，因为我们还没有调用执行它，也就是我们声明一个函数时，你又没有调用它，那么它就失去了它的作用，相当于内部储存一堆字符串 在 ES5 + 换到了 Function Environment Records（函数环境记录）</li></ul><p><img src="'+r+`" alt="图 4"></p><h3 id="解决问题" tabindex="-1">解决问题 <a class="header-anchor" href="#解决问题" aria-label="Permalink to &quot;解决问题&quot;">​</a></h3><p>执行结果报错b is not defined 原因是 b 属于 函数自己执行上下文中的 Function Environment Records（函数环境记录）记录当执行完后自动也会被消失的不属于全局的Go</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">a</span><span style="color:#ABB2BF;">(){ </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">a</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">b</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="块执行上下文" tabindex="-1">块执行上下文 <a class="header-anchor" href="#块执行上下文" aria-label="Permalink to &quot;块执行上下文&quot;">​</a></h3><p>如果在大括号(判断体/循环体/代码块)即&#39;块&#39;，中出现了 let/const/function/class 等关键词声明变量，则当前大括号会产生一个&#39;块级私有上下文&#39;；它的上级上下文是所处的环境；var不产生，也不受块级上下文的影响,简单的说var 没有块级作用域</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">12</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">13</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">100</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">200</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E06C75;">打印结果</span><span style="color:#ABB2BF;">：</span></span>
<span class="line"><span style="color:#D19A66;">undefined</span></span>
<span class="line"><span style="color:#D19A66;">12</span></span>
<span class="line"><span style="color:#D19A66;">100</span></span>
<span class="line"><span style="color:#D19A66;">200</span></span>
<span class="line"><span style="color:#D19A66;">100</span></span>
<span class="line"><span style="color:#D19A66;">13</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><img src="`+c+`" alt="图 5"></p><p>在块级作用域中声明的function会在全局作用域创建一份副本。但需要注意的是，块级作用域中的function副本与全局作用域的function并不相互影响。在块级作用域之前调用全局作用域的function时，只会得到声明而没有定义的值，而在块级作用域内部，则会同时具备声明和定义的特性</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;">)  </span><span style="color:#7F848E;font-style:italic;">// 因为块级声明的foo function 在块级之前全局里调用只是声明不在具有定义性质因此undefined</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 在块级时候是声明加定义</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">foo</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 重新给foo 赋值</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 全局的foo function 会复制一份从块，此时二者没有关系，因此块级中function改变并不影响全局</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 打印结果</span></span>
<span class="line"><span style="color:#D19A66;">undefined</span></span>
<span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">Function</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">Function</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">foo</span><span style="color:#ABB2BF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="整体案例总结" tabindex="-1">整体案例总结 <a class="header-anchor" href="#整体案例总结" aria-label="Permalink to &quot;整体案例总结&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// global environment</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">f</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">arg1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">c</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arg1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">d</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;">f</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>在执行的时候创建 创建GEC</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">GEC</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">// lexicalEnvironment表示词法环境 </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">lexicalEnvironment</span><span style="color:#ABB2BF;">: { </span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;font-style:italic;">// environmentRecord表示环境记录 </span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E06C75;">environmentRecord</span><span style="color:#ABB2BF;">: { </span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;font-style:italic;">// type表示环境记录的类型，这里是全局环境</span></span>
<span class="line"><span style="color:#ABB2BF;">			 </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Global&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">			  </span><span style="color:#7F848E;font-style:italic;">// declarativeRecord表示声明式环境记录</span></span>
<span class="line"><span style="color:#ABB2BF;">				 </span><span style="color:#E06C75;">declarativeRecord</span><span style="color:#ABB2BF;">: { </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#7F848E;font-style:italic;">// type表示环境记录的类型，这里是声明式环境记录 </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Declarative&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#7F848E;font-style:italic;">// a和b是变量名，&lt;uninitialized&gt;表示未初始化 </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&lt;uninitialized&gt;&#39;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&lt;uninitialized&gt;&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#7F848E;font-style:italic;">// f是函数名，&lt;function&gt;表示函数对象	 </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E06C75;">f</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&lt;function&gt;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">				}, </span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#7F848E;font-style:italic;">// objectRecord表示对象式环境记录 </span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E06C75;">objectRecord</span><span style="color:#ABB2BF;">: { </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#7F848E;font-style:italic;">// type表示环境记录的类型，这里是对象式环境记录 </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Object&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#7F848E;font-style:italic;">// Infinity是全局对象的属性，表示正无穷大 </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E06C75;">Infinity</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;+∞&quot;</span><span style="color:#ABB2BF;">, </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#7F848E;font-style:italic;">// isFinite是全局对象的属性，表示判断一个数是否有限 </span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E06C75;">isFinite</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;&lt;function&gt;&quot;</span><span style="color:#ABB2BF;"> } </span></span>
<span class="line"><span style="color:#ABB2BF;">				}, </span></span>
<span class="line"><span style="color:#ABB2BF;">						</span><span style="color:#7F848E;font-style:italic;">// refToOuter表示对外部环境的引用，这里是null表示没有外部环境</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E06C75;">refToOuter</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">			} </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul><li><strong>函数被调用时候结构</strong></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">FEC</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">lexicalEnvironment</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">environmentRecord</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Function&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">Arguments</span><span style="color:#ABB2BF;">: {</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">},</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">c</span><span style="color:#ABB2BF;">: &lt;</span><span style="color:#E06C75;">uninitialized</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">      this: &lt;</span><span style="color:#E5C07B;">Global</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">Object</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    refToOuter: GEC // global execution context</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  variableEnvironment: </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">environmentRecord</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Function&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">d</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">this</span><span style="color:#ABB2BF;">: &lt;</span><span style="color:#E5C07B;">Global</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">Object</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    refToOuter: GEC // global execution context</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="文章参考" tabindex="-1">文章参考 <a class="header-anchor" href="#文章参考" aria-label="Permalink to &quot;文章参考&quot;">​</a></h2><p><a href="https://www.cnblogs.com/MomentYY/p/15785719.html" target="_blank" rel="noreferrer">JavaScript的执行过程</a></p><p><a href="https://mathiasbynens.be/notes/globalthis" target="_blank" rel="noreferrer">A horrifying globalThis polyfill in universal JavaScript</a></p><p><a href="https://javascript.info/global-object" target="_blank" rel="noreferrer">Global object</a></p><p><a href="https://tc39.es/ecma262/multipage/global-object.html#sec-global-object" target="_blank" rel="noreferrer">19 The Global Object</a></p><p><a href="https://github.com/tc39/proposal-global" target="_blank" rel="noreferrer">proposal-global</a></p><p><a href="https://www.javascripttutorial.net/javascript-execution-context/" target="_blank" rel="noreferrer">JavaScript Execution Context</a></p><p><a href="https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/" target="_blank" rel="noreferrer">JavaScript Execution Context – How JS Works Behind The Scenes</a></p><p><a href="https://blog.csdn.net/qq_35368183/article/details/103888311" target="_blank" rel="noreferrer">结合 JavaScript 规范来谈谈 Execution Contexts 与 Lexical Environments</a></p><p><a href="https://cabulous.medium.com/javascript-execution-context-part-1-from-compiling-to-execution-84c11c0660f5" target="_blank" rel="noreferrer">JavaScript execution context — from compiling to execution (part 1-4)</a></p><p><a href="https://www.atatus.com/blog/javascript-execution-context/" target="_blank" rel="noreferrer">A Complete Guide for JavaScript Execution Context</a></p><p><a href="https://blog.openreplay.com/explaining-javascript-s-execution-context-and-stack/" target="_blank" rel="noreferrer">Explaining JavaScript&#39;s Execution Context And Stack</a></p><p><a href="https://javascript.info/closure" target="_blank" rel="noreferrer">Variable scope, closure</a></p><p><a href="https://www.codingem.com/javascript-closures/" target="_blank" rel="noreferrer">JavaScript Closures: A Step-by-Step Guide (Examples)</a></p><p><a href="https://www.borderlessengineer.com/how-js-works-lexical-environment" target="_blank" rel="noreferrer">how-js-works-lexical-environment</a></p><p><a href="https://github.com/lizhongzhen11/lizz-blog/issues/49" target="_blank" rel="noreferrer">Executable Code and Execution Contexts</a></p><p><a href="https://2ality.com/2019/07/global-scope.html" target="_blank" rel="noreferrer">How do JavaScript’s global variables really work?</a></p>`,65),y=[B];function b(d,u,F,A,m,E){return n(),a("div",null,y)}const f=s(i,[["render",b]]);export{C as __pageData,f as default};
