import{_ as s,c as n,o as a,a8 as l}from"./chunks/framework.6k5lawSO.js";const d=JSON.parse('{"title":"","description":"函数是程序中最基本的代码单元之一，编写规范的函数可以提高代码的可读性和可维护性","frontmatter":{"description":"函数是程序中最基本的代码单元之一，编写规范的函数可以提高代码的可读性和可维护性"},"headers":[],"relativePath":"G.设计模式/3.代码编写/2.函数的编写.md","filePath":"G.设计模式/3.代码编写/2.函数的编写.md","lastUpdated":1690115031000}'),p={name:"G.设计模式/3.代码编写/2.函数的编写.md"},e=l(`<ol><li><p>函数名应该是一个动词或动词短语，表示函数的作用和功能。</p></li><li><p>函数应该尽量保持简短，只做一件事情，并且只有一个返回值。</p></li><li><p>函数的参数应该尽量少，最好不要超过 4 个。如果参数过多，可以考虑将参数封装成一个对象。甚至可以考虑是否应该使用 职责单一，是否能通过拆分成多个函数的方式来减少参数</p></li></ol><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> User</span><span style="color:#4078F2;"> getUser</span><span style="color:#383A42;">(</span><span style="color:#C18401;">String</span><span style="color:#383A42;"> username, </span><span style="color:#C18401;">String</span><span style="color:#383A42;"> telephone, </span><span style="color:#C18401;">String</span><span style="color:#383A42;"> email);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 拆分成多个函数</span></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> User</span><span style="color:#4078F2;"> getUserByUsername</span><span style="color:#383A42;">(</span><span style="color:#C18401;">String</span><span style="color:#383A42;"> username);</span></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> User</span><span style="color:#4078F2;"> getUserByTelephone</span><span style="color:#383A42;">(</span><span style="color:#C18401;">String</span><span style="color:#383A42;"> telephone);</span></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> User</span><span style="color:#4078F2;"> getUserByEmail</span><span style="color:#383A42;">(</span><span style="color:#C18401;">String</span><span style="color:#383A42;"> email);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="4"><li><p>函数应该尽量避免副作用，即不要修改函数外部的变量或状态。</p></li><li><p>函数应该尽量避免使用全局变量，因为全局变量会增加代码的复杂度和不可预测性。</p></li><li><p>函数应该尽量避免使用嵌套，因为嵌套会增加代码的复杂度和不可读性。</p></li><li><p>函数应该尽量避免使用过长的参数列表，可以使用默认参数或者参数对象的方式来简化参数列表。</p></li><li><p>函数应该尽量避免使用复杂的控制流程，可以使用早返回或者异常处理的方式来简化控制流程。</p></li><li><p>函数应该尽量避免使用魔法数字或者魔法字符串，可以使用常量或者枚举来代替。例如在代码中出现了数字 7，但是不清楚这个数字的含义是什么。这样的代码不仅难以理解，而且在修改时容易出错。为了避免这种情况，我们可以使用常量或者枚举来代替魔法数字或者魔法字符串。常量和枚举都可以为数字或字符串赋予明确的含义，使得代码更加易读、易懂。例如，我们可以定义一个常量 MAX_LENGTH 来表示字符串的最大长度，或者定义一个枚举来表示一组相关的常量。</p></li></ol><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> double</span><span style="color:#4078F2;"> CalculateCircularArea</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">double</span><span style="color:#383A42;"> radius) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span><span style="color:#986801;">3.1415</span><span style="color:#383A42;">) * radius * radius;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 常量替代魔法数字</span></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> static</span><span style="color:#A626A4;"> final</span><span style="color:#C18401;"> Double</span><span style="color:#E45649;"> PI </span><span style="color:#383A42;">= </span><span style="color:#986801;">3.1415</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> double</span><span style="color:#4078F2;"> CalculateCircularArea</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">double</span><span style="color:#383A42;"> radius) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> PI * radius * radius;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="10"><li>函数应该尽量避免使用复杂的表达式，可以使用中间变量或者函数来简化表达式。</li></ol><p>函数在起名的时候还可以配合参数名字组合，例如下面方法checkUserIfExisting 检查用户是否存在，至于根据具体什么判断根据传入参数名就可以判断上，根据 手机号 用户名 邮箱 判断用户是否存在</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> boolean</span><span style="color:#4078F2;"> checkUserIfExisting</span><span style="color:#383A42;">(</span><span style="color:#C18401;">String</span><span style="color:#383A42;"> telephone, </span><span style="color:#C18401;">String</span><span style="color:#383A42;"> username, </span><span style="color:#C18401;">String</span><span style="color:#383A42;"> email)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>建议上函数的代码行数不要超过一屏幕的大小，比如 50 行甚至可以理解为<strong>把函数写短，越短越好</strong>。对于比较长的函数，为了让逻辑更加清晰，可以使用空行来分割各个代码块。在类内部，成员变量与函数之间、静态成员变量与普通成员变量之间、函数之间，甚至成员变量之间，都可以通过添加空行的方式，让不同模块的代码之间的界限更加明确</p><h2 id="注意勿用函数参数来控制逻辑" tabindex="-1">注意勿用函数参数来控制逻辑 <a class="header-anchor" href="#注意勿用函数参数来控制逻辑" aria-label="Permalink to &quot;注意勿用函数参数来控制逻辑&quot;">​</a></h2><p>不要在函数中使用布尔类型的标识参数来控制内部逻辑，true 的时候走这块逻辑，false 的时候走另一块逻辑。这明显违背了单一职责原则和接口隔离原则。一般拆分为两个函数，<strong>这种手法叫做移除标记参数（Remove Flag Argument）</strong></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> void</span><span style="color:#4078F2;"> buyCourse</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">long</span><span style="color:#383A42;"> userId, </span><span style="color:#A626A4;">long</span><span style="color:#383A42;"> courseId, </span><span style="color:#A626A4;">boolean</span><span style="color:#383A42;"> isVip);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 将其拆分成两个函数</span></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> void</span><span style="color:#4078F2;"> buyCourse</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">long</span><span style="color:#383A42;"> userId, </span><span style="color:#A626A4;">long</span><span style="color:#383A42;"> courseId);</span></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> void</span><span style="color:#4078F2;"> buyCourseForVip</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">long</span><span style="color:#383A42;"> userId, </span><span style="color:#A626A4;">long</span><span style="color:#383A42;"> courseId);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>或者例如除了布尔类型作为标识参数来控制逻辑的情况外，还有一种“根据参数是否为 null”来控制逻辑的情况。针对这种情况，我们也应该将其拆分成多个函数。拆分之后的函数职责更明确，不容易用错。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> List</span><span style="color:#383A42;">&lt;Transaction&gt; </span><span style="color:#4078F2;">selectTransactions</span><span style="color:#383A42;">(</span><span style="color:#C18401;">Long</span><span style="color:#383A42;"> userId, </span><span style="color:#C18401;">Date</span><span style="color:#383A42;"> startDate, </span><span style="color:#C18401;">Date</span><span style="color:#383A42;"> endDate) {</span></span>
<span class="line"><span style="color:#A626A4;">  if</span><span style="color:#383A42;"> (startDate != </span><span style="color:#986801;">null</span><span style="color:#383A42;"> &amp;&amp; endDate != </span><span style="color:#986801;">null</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // 查询两个时间区间的transactions</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A626A4;">  if</span><span style="color:#383A42;"> (startDate != </span><span style="color:#986801;">null</span><span style="color:#383A42;"> &amp;&amp; endDate == </span><span style="color:#986801;">null</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // 查询startDate之后的所有transactions</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A626A4;">  if</span><span style="color:#383A42;"> (startDate == </span><span style="color:#986801;">null</span><span style="color:#383A42;"> &amp;&amp; endDate != </span><span style="color:#986801;">null</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // 查询endDate之前的所有transactions</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A626A4;">  if</span><span style="color:#383A42;"> (startDate == </span><span style="color:#986801;">null</span><span style="color:#383A42;"> &amp;&amp; endDate == </span><span style="color:#986801;">null</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // 查询所有的transactions</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 拆分成多个public函数，更加清晰、易用</span></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> List</span><span style="color:#383A42;">&lt;Transaction&gt; </span><span style="color:#4078F2;">selectTransactionsBetween</span><span style="color:#383A42;">(</span><span style="color:#C18401;">Long</span><span style="color:#383A42;"> userId, </span><span style="color:#C18401;">Date</span><span style="color:#383A42;"> startDate, </span><span style="color:#C18401;">Date</span><span style="color:#383A42;"> endDate) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#4078F2;"> selectTransactions</span><span style="color:#383A42;">(userId, startDate, endDate);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> List</span><span style="color:#383A42;">&lt;Transaction&gt; </span><span style="color:#4078F2;">selectTransactionsStartWith</span><span style="color:#383A42;">(</span><span style="color:#C18401;">Long</span><span style="color:#383A42;"> userId, </span><span style="color:#C18401;">Date</span><span style="color:#383A42;"> startDate) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#4078F2;"> selectTransactions</span><span style="color:#383A42;">(userId, startDate, </span><span style="color:#986801;">null</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> List</span><span style="color:#383A42;">&lt;Transaction&gt; </span><span style="color:#4078F2;">selectTransactionsEndWith</span><span style="color:#383A42;">(</span><span style="color:#C18401;">Long</span><span style="color:#383A42;"> userId, </span><span style="color:#C18401;">Date</span><span style="color:#383A42;"> endDate) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#4078F2;"> selectTransactions</span><span style="color:#383A42;">(userId, </span><span style="color:#986801;">null</span><span style="color:#383A42;">, endDate);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> List</span><span style="color:#383A42;">&lt;Transaction&gt; </span><span style="color:#4078F2;">selectAllTransactions</span><span style="color:#383A42;">(</span><span style="color:#C18401;">Long</span><span style="color:#383A42;"> userId) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#4078F2;"> selectTransactions</span><span style="color:#383A42;">(userId, </span><span style="color:#986801;">null</span><span style="color:#383A42;">, </span><span style="color:#986801;">null</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">private</span><span style="color:#C18401;"> List</span><span style="color:#383A42;">&lt;Transaction&gt; </span><span style="color:#4078F2;">selectTransactions</span><span style="color:#383A42;">(</span><span style="color:#C18401;">Long</span><span style="color:#383A42;"> userId, </span><span style="color:#C18401;">Date</span><span style="color:#383A42;"> startDate, </span><span style="color:#C18401;">Date</span><span style="color:#383A42;"> endDate) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // ...</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,13),o=[e];function r(t,c,i,y,A,u){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{d as __pageData,m as default};
