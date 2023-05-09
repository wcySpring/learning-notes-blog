import{_ as s,o as n,c as a,O as l}from"./chunks/framework.46ddca34.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"A.前端知识整理/JS基础/数据类型/2.数据类型检测.md","filePath":"A.前端知识整理/JS基础/数据类型/2.数据类型检测.md","lastUpdated":1683558867000}'),p={name:"A.前端知识整理/JS基础/数据类型/2.数据类型检测.md"},e=l(`<p>[TOC]</p><blockquote class="info"><h2>判断类型</h2></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.判断类型常用方法&#39;typeof&#39;、&#39;instanceof&#39;、&#39;Object.prototype.toString&#39;、&#39;constructor&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote class="info"><h2>使用typeof 区分数据类型</h2></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.&#39;typeof&#39; 是一个操作符，不是方法因此使用的时候可以加括号，也可以省略</span></span>
<span class="line"><span style="color:#abb2bf;">2.虽然&#39;typeof&#39;是用来区分数据类型的但是8个数据类型中&#39;null&#39;可以理解成是空</span></span>
<span class="line"><span style="color:#abb2bf;">对象(object),并多了一个function 检测 因此还是可以检测类型依旧是8种类依次是用来区分&#39;undefined&#39;,&#39;function&#39;,&#39;boolean&#39;,&#39;number&#39;,&#39;string&#39;,&#39;object&#39;,&#39;bigInt&#39;,&#39;symbol&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">3.因此简单的说&#39;null&#39; 在使用typeof 验证的时候是&#39;object&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">4.typeof检测未被声明的变量，不会报错，结果是 &#39;undefined&#39; 举个例子</span></span>
<span class="line"><span style="color:#abb2bf;">    // 报错 因为a变量没有声明</span></span>
<span class="line"><span style="color:#abb2bf;">    if (!a) {</span></span>
<span class="line"><span style="color:#abb2bf;">        console.log(a)</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    // typeof 即使对没声明的变量也不会报错</span></span>
<span class="line"><span style="color:#abb2bf;">    if (typeof a !== &#39;undefined&#39;) {</span></span>
<span class="line"><span style="color:#abb2bf;">        console.log(a)</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"> 针对这种特性在封装第三方包的时候就可以使用，在node 环境中是没有window 变量，相对的在浏览器环境中没有</span></span>
<span class="line"><span style="color:#abb2bf;"> module和module.exports这种cjs 导出变量，为了让我们封装的东西可以在两个环境运行就可以利用typeof 这种对</span></span>
<span class="line"><span style="color:#abb2bf;"> 未声明变量的不报错的性质做出下面形式的写法</span></span>
<span class="line"><span style="color:#abb2bf;">// 支持浏览器导入 &amp;&amp; 支持NODE端运行{CommonJS规范}</span></span>
<span class="line"><span style="color:#abb2bf;">(function () {</span></span>
<span class="line"><span style="color:#abb2bf;">    let utils = {</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;">    };</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    /!* 暴露API *!/</span></span>
<span class="line"><span style="color:#abb2bf;">    if (typeof module === &quot;object&quot; &amp;&amp; typeof module.exports === &quot;object&quot;) module.exports = utils;</span></span>
<span class="line"><span style="color:#abb2bf;">    if (typeof window !== &quot;undefined&quot;) window.utils = utils;</span></span>
<span class="line"><span style="color:#abb2bf;">})(); </span></span>
<span class="line"><span style="color:#abb2bf;">但是在es6出现后 let const在其被声明之前对块中的 let 和 const 变量使用 typeof 会抛出</span></span>
<span class="line"><span style="color:#abb2bf;">一个 ReferenceError。块作用域变量在块的头部处于“暂存死区”，直至其被初始化，在这</span></span>
<span class="line"><span style="color:#abb2bf;">期间，访问变量将会引发错误。</span></span>
<span class="line"><span style="color:#abb2bf;">    typeof undeclaredVariable === &#39;undefined&#39;;</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    typeof newLetVariable; // ReferenceError</span></span>
<span class="line"><span style="color:#abb2bf;">    typeof newConstVariable; // ReferenceError</span></span>
<span class="line"><span style="color:#abb2bf;">    typeof newClass; // ReferenceError</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    let newLetVariable;</span></span>
<span class="line"><span style="color:#abb2bf;">    const newConstVariable = &#39;hello&#39;;</span></span>
<span class="line"><span style="color:#abb2bf;">    class newClass{};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><blockquote class="danger"><h5>案例说明</h5></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">var num = 10;</span></span>
<span class="line"><span style="color:#abb2bf;">var str = &quot;小白&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">var flag = true;</span></span>
<span class="line"><span style="color:#abb2bf;">var nll = null;</span></span>
<span class="line"><span style="color:#abb2bf;">var undef;</span></span>
<span class="line"><span style="color:#abb2bf;">var obj = new Object();</span></span>
<span class="line"><span style="color:#abb2bf;">var a = function(){}</span></span>
<span class="line"><span style="color:#abb2bf;">//是使用typeof 获取变量的类型</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(typeof num); // number</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(typeof str); // string</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(typeof flag); // boolean</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(typeof nll); // object</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(typeof undef); // undefined</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(typeof obj); // object</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(typeof a); // function</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 这个小案例</span></span>
<span class="line"><span style="color:#abb2bf;">typeof object // undefined 未定义 他就是一个变量名</span></span>
<span class="line"><span style="color:#abb2bf;">typeof Object // function 他是一个构造函数</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">/ 除 Function 外的所有构造函数的类型都是 &#39;object&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">var str = new String(&#39;String&#39;);</span></span>
<span class="line"><span style="color:#abb2bf;">var num = new Number(100);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">typeof str; // 返回 &#39;object&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">typeof num; // 返回 &#39;object&#39;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">var func = new Function();</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">typeof func; // 返回 &#39;function&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote class="danger"><h5>为什么 typeof null === &#39;object&#39; 最开始的设计bug</h5></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.所有的数据类型值，在计算机底层中都是以2进制形式存储的{64位},并且相对的二进制检测类型效率更高，</span></span>
<span class="line"><span style="color:#abb2bf;">在js 中这也类型相应的储存形式信息：</span></span>
<span class="line"><span style="color:#abb2bf;">    000：对象</span></span>
<span class="line"><span style="color:#abb2bf;">    1：整数</span></span>
<span class="line"><span style="color:#abb2bf;">    010：浮点数</span></span>
<span class="line"><span style="color:#abb2bf;">    100：字符串</span></span>
<span class="line"><span style="color:#abb2bf;">    110：布尔</span></span>
<span class="line"><span style="color:#abb2bf;">    000000…. null</span></span>
<span class="line"><span style="color:#abb2bf;">可以发现由于 null 的存储单元（全是 0）最后三位和 object 完全一样是 000 因此判断null 也为</span></span>
<span class="line"><span style="color:#abb2bf;">Object但是内部识别为对象后，会再次检测这个对象有没有内部实现[[call]]，如果实现了，结果</span></span>
<span class="line"><span style="color:#abb2bf;">是&#39;function&#39;，没有实现就是&#39;object&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><a href="https://segmentfault.com/q/1010000011846328" target="_blank" rel="noreferrer">参考链接</a><a href="https://2ality.com/2013/10/typeof-null.html" target="_blank" rel="noreferrer">参考链接</a></p><blockquote class="danger"><h5>判断是否是对象</h5></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.在function 也是对象但是typeof function 得到是function  ，当想对是否为对象判断时候</span></span>
<span class="line"><span style="color:#abb2bf;">并且包含function 可以写成</span></span>
<span class="line"><span style="color:#abb2bf;">if (val !== null &amp;&amp; /^(object|function)$/i.test(typeof val)) {</span></span>
<span class="line"><span style="color:#abb2bf;">    // ...</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote class="info"><h2>instanceof -- 检测引用类型</h2></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.a instanceof B a是不是B的实例，即a的原型链上是否有B</span></span>
<span class="line"><span style="color:#abb2bf;">var a = [1,2,3]</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(a instanceof Array)  // 变量 A 是数组么</span></span>
<span class="line"><span style="color:#abb2bf;">打印结果:</span></span>
<span class="line"><span style="color:#abb2bf;">true</span></span>
<span class="line"><span style="color:#abb2bf;">2.在\`ECMAScript7\`规范中的\`instanceof\`操作符则是根据&#39;Symbol.hasInstance&#39; 进行，用于判断某对象是否为某构</span></span>
<span class="line"><span style="color:#abb2bf;">造器的实例。因此你可以用它自定义 instanceof 操作符在某个类上的行为。&#39;Symbol.hasInstance&#39; 属性特</span></span>
<span class="line"><span style="color:#abb2bf;">点&#39;writable/enumerable/configurable&#39;都为false 不可写，不可枚举 不可修改属性即不可以属性赋值</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">    var arr = []</span></span>
<span class="line"><span style="color:#abb2bf;">    Array[Symbol.hasInstance](arr) // true</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">数组构造函数上的&#39;Symbol.hasInstance&#39; 属性从哪里来，如图可以发现是继承Function 上的,\`ECMAScript7\`规范中，</span></span>
<span class="line"><span style="color:#abb2bf;">在\`Function\`的\`prototype\`属性上定义了\`Symbol.hasInstance\`属性</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    Array[Symbol.hasInstance] = function (){return false }</span></span>
<span class="line"><span style="color:#abb2bf;">    arr instanceof Array // true</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">上面的案例看起来并不像我们设想的那样，打印结果为false 因为之前说&#39;Symbol.hasInstance&#39; 属性 不可写，不可枚举</span></span>
<span class="line"><span style="color:#abb2bf;">不可修改，即在普通的构造函数上想直接修改是不行的</span></span>
<span class="line"><span style="color:#abb2bf;">MDN 中给案例通过class 是可以重写的</span></span>
<span class="line"><span style="color:#abb2bf;">class Fn {</span></span>
<span class="line"><span style="color:#abb2bf;">    static[Symbol.hasInstance](obj) {</span></span>
<span class="line"><span style="color:#abb2bf;">        console.log(&#39;OK&#39;);</span></span>
<span class="line"><span style="color:#abb2bf;">        if (Array.isArray(obj)) return true;</span></span>
<span class="line"><span style="color:#abb2bf;">        return false;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">let f = new Fn;</span></span>
<span class="line"><span style="color:#abb2bf;">let arr = [10, 20, 30];</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(f instanceof Fn); //=&gt;false</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(arr instanceof Fn); //=&gt;true</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(Fn[Symbol.hasInstance](f)); //=&gt;true </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">3.如果在没有Symbol.hasInstance 属性浏览器上则会像以前一样去原型链上中</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">4.弊端：不能检测原始值类型的值</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(new Number(1) instanceof Number); //=&gt;true</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(1 instanceof Number); //=&gt;false</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">5.小提示：</span></span>
<span class="line"><span style="color:#abb2bf;">O instanceof C在内部会调用InstanceofOperator(O, C)抽象操作，该抽象操作的步骤如下：</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">如果C的数据类型不是对象，抛出一个类型错误的异常</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><ul><li>图</li></ul><p><a href="https://segmentfault.com/a/1190000037689078" target="_blank" rel="noreferrer"> 参考ECMAScript7规范中的instanceof操作符</a></p><blockquote class="danger"><h5>参考案例</h5></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">class A extends Array{}</span></span>
<span class="line"><span style="color:#abb2bf;">const a = new A()</span></span>
<span class="line"><span style="color:#abb2bf;">a instanceof A // true</span></span>
<span class="line"><span style="color:#abb2bf;">a instanceof Array // true</span></span>
<span class="line"><span style="color:#abb2bf;">Array[Symbol.hasInstance](a) // true</span></span>
<span class="line"><span style="color:#abb2bf;">A[Symbol.hasInstance](a) // true</span></span>
<span class="line"><span style="color:#abb2bf;">A[Symbol.hasInstance](new Map) // false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote class="danger"><h5>实现一个instanceof</h5></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">function myInstanceof(left, right) {</span></span>
<span class="line"><span style="color:#abb2bf;">  // 这里先用typeof来判断基础数据类型，如果是，直接返回false</span></span>
<span class="line"><span style="color:#abb2bf;">  if(typeof left !== &#39;object&#39; || left === null) return false;</span></span>
<span class="line"><span style="color:#abb2bf;">  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象</span></span>
<span class="line"><span style="color:#abb2bf;">  let proto = Object.getPrototypeOf(left);</span></span>
<span class="line"><span style="color:#abb2bf;">  while(true) {                  //循环往下寻找，直到找到相同的原型对象</span></span>
<span class="line"><span style="color:#abb2bf;">    if(proto === null) return false;</span></span>
<span class="line"><span style="color:#abb2bf;">    if(proto === right.prototype) return true;//找到相同原型对象，返回true</span></span>
<span class="line"><span style="color:#abb2bf;">    proto = Object.getPrototypeof(proto);</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">// 验证一下自己实现的myInstanceof是否OK</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(myInstanceof(new Number(123), Number));    // true</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(myInstanceof(123, Number));                // false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote class="info"><h2>利用Object.prototype.toString</h2></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.toString() 是 Object 的原型方法，调用该方法，可以统一返回格式为 &#39;[object Xxx]&#39; 的字符串,Xxx 就是对象的类型</span></span>
<span class="line"><span style="color:#abb2bf;">Object 对象，直接调用 toString() 就能返回 [object Object]；其他对象，需要通过 call 来调用</span></span>
<span class="line"><span style="color:#abb2bf;">2.这是JS中唯一一个检测数据类型没有任何瑕疵的，可以检测内置类型例如</span></span>
<span class="line"><span style="color:#abb2bf;">&quot;[object Number/String/Boolen/Null/Undefined/Symbol/BigInt/Object/Function/Array/RegExp/Date/Math/Error...]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">3.检测返回值遵循规则,一般都是返回当前实例所属的构造函数信息但是如果实例对象拥有 &#39;Symbol.toStringTag&#39; 属性，</span></span>
<span class="line"><span style="color:#abb2bf;">属性值是啥，最后返回的就是啥，例如：Math[Symbol.toStringTag]=&quot;Math&quot;  =&gt; Object.prototype.toString.call(Math)  </span></span>
<span class="line"><span style="color:#abb2bf;">“[object Math]”</span></span>
<span class="line"><span style="color:#abb2bf;">正常没有重写&#39;Symbol.toStringTag&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">class Fn {</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">let f = new Fn;</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(Object.prototype.toString.call(f)); // [object Object]</span></span>
<span class="line"><span style="color:#abb2bf;">重写&#39;Symbol.toStringTag&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">class Fn {</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">    [Symbol.toStringTag] = &#39;Fn&#39;;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">let f = new Fn;</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(Object.prototype.toString.call(f)); //[object Fn]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">Object.prototype.toString({})       // &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call({})  // 同上结果，加上call也ok</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(1)    // &quot;[object Number]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(&#39;1&#39;)  // &quot;[object String]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(true)  // &quot;[object Boolean]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(function(){})  // &quot;[object Function]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(null)   //&quot;[object Null]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(undefined) //&quot;[object Undefined]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(/123/g)    //&quot;[object RegExp]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(new Date()) //&quot;[object Date]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call([])       //&quot;[object Array]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(document)  //&quot;[object HTMLDocument]&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.prototype.toString.call(window)   //&quot;[object Window]&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote class="danger"><h5>typeof 和 Object.prototype.toString 搭配来判断数据类型</h5></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">function getType(obj){</span></span>
<span class="line"><span style="color:#abb2bf;">    let type  = typeof obj;</span></span>
<span class="line"><span style="color:#abb2bf;">    if (type !== &quot;object&quot;) {    // 先进行typeof判断，如果是基础数据类型，直接返回</span></span>
<span class="line"><span style="color:#abb2bf;">      return type;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果或者用slice(8,-1)来截取获得</span></span>
<span class="line"><span style="color:#abb2bf;">    return Object.prototype.toString.call(obj).replace(/^\\[object (\\S+)\\]$/, &#39;$1&#39;);  // 注意正则中间有个空</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">  /* 代码验证，需要注意大小写，类型首字母大写就是toString 小写就是typeof */ </span></span>
<span class="line"><span style="color:#abb2bf;">  getType([])     // &quot;Array&quot; typeof []是object，因此toString返回</span></span>
<span class="line"><span style="color:#abb2bf;">  getType(&#39;123&#39;)  // &quot;string&quot; typeof 直接返回 </span></span>
<span class="line"><span style="color:#abb2bf;">  getType(window) // &quot;Window&quot; toString返回</span></span>
<span class="line"><span style="color:#abb2bf;">  getType(null)   // &quot;Null&quot;首字母大写，typeof null是object，需toString来判断</span></span>
<span class="line"><span style="color:#abb2bf;">  getType(undefined)   // &quot;undefined&quot; typeof 直接返回</span></span>
<span class="line"><span style="color:#abb2bf;">  getType()            // &quot;undefined&quot; typeof 直接返回</span></span>
<span class="line"><span style="color:#abb2bf;">  getType(function(){}) // &quot;function&quot; typeof能判断，因此首字母小写</span></span>
<span class="line"><span style="color:#abb2bf;">  getType(/123/g)      //&quot;RegExp&quot; toString返回</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote class="danger"><h4>为什么不能用 Object.toString.call()</h4></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.如果当你使用Object.toString.call 来判断类型你会发现，会报错，其中提示内容是报错内容如下</span></span>
<span class="line"><span style="color:#abb2bf;">&quot;Function.prototype.toString requires that &#39;this&#39; be a Function&quot;，内置的Object构造函数是一个 Function</span></span>
<span class="line"><span style="color:#abb2bf;">（就像所有的原生构造函数一样），所以它在它自己的原型属性之前从Function.prototype继承</span></span>
<span class="line"><span style="color:#abb2bf;">&#39;Object[[Prototype]] -&gt; Function.prototype -&gt; Object.prototype -&gt; null&#39;所以实际调用的是</span></span>
<span class="line"><span style="color:#abb2bf;">&#39;Function.prototype.toString&#39;，可以通过查看 下面的两个链接可以知道</span></span>
<span class="line"><span style="color:#abb2bf;">若 &#39;this&#39; 不是 Function 对象，则 toString() 方法将抛出 TypeError </span></span>
<span class="line"><span style="color:#abb2bf;"> (&quot;Function.prototype.toString called on incompatible object&quot;) 异常</span></span>
<span class="line"><span style="color:#abb2bf;">2.简单的理解Object.toString 此时是把Object 看作对象，要知道构造函数也是对象(虽然他的typeof 是function)</span></span>
<span class="line"><span style="color:#abb2bf;">作为对象时候掉属性自身没有会去[[Prototype]]去找此时链接查找路线就像第一条说那样</span></span>
<span class="line"><span style="color:#abb2bf;">举个例子说明</span></span>
<span class="line"><span style="color:#abb2bf;">var  a = new Object()</span></span>
<span class="line"><span style="color:#abb2bf;">a.toString.call(1) // &#39;[object Number]&#39; </span></span>
<span class="line"><span style="color:#abb2bf;">因为 a 是通过Object 创建的实列，此时a.toString 找到就是Object.prototype.toString ，也可以</span></span>
<span class="line"><span style="color:#abb2bf;">得到想要的效果</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">console.log(typeof Object); // function</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(typeof Object.prototype); // object</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// Object.toString.call([]) // 报错</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">function a () { }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Object.toString.call(a) // 不报错因为a 是function</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="http://www.ecma-international.org/ecma-262/5.1/index.html#sec-15.3.4" target="_blank" rel="noreferrer">ecma-262</a></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString" target="_blank" rel="noreferrer">Mdn-toString</a><a href="https://stackoverflow.com/questions/26333923/different-between-object-tostring-and-object-prototype-tostring" target="_blank" rel="noreferrer">阶段参考</a></p><blockquote class="info"><h2>constructor</h2></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">const array = []</span></span>
<span class="line"><span style="color:#abb2bf;">console.log( array.constructor)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">const num = 1</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(num.constructor)</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">打印结果</span></span>
<span class="line"><span style="color:#abb2bf;">ƒ Array() { [native code] }</span></span>
<span class="line"><span style="color:#abb2bf;">ƒ Number() { [native code] }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">var a = [];</span></span>
<span class="line"><span style="color:#abb2bf;">a.constructor === Array;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote class="info"><h2>总结关于检测数据类型</h2></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.typeof 在引用类型检测的时候不能具体，除了function 可以判断出来，剩下的引用类型和null统一都是&#39;object&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">2.instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；</span></span>
<span class="line"><span style="color:#abb2bf;">3.Object.prototype.toString 万能方法最终解</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,34),b=[e];function o(r,c,t,i,u,f){return n(),a("div",null,b)}const d=s(p,[["render",o]]);export{m as __pageData,d as default};
