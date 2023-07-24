import{_ as s,o as n,c as a,V as l}from"./chunks/framework.96db2af4.js";const u=JSON.parse('{"title":"","description":"以卫语句取代嵌套的条件表达式（Replace Nested Conditional with Guard Clauses）。","frontmatter":{"description":"以卫语句取代嵌套的条件表达式（Replace Nested Conditional with Guard Clauses）。"},"headers":[],"relativePath":"G.设计模式/3.代码编写/4.解决if多层嵌套问题.md","filePath":"G.设计模式/3.代码编写/4.解决if多层嵌套问题.md","lastUpdated":1690115031000}'),p={name:"G.设计模式/3.代码编写/4.解决if多层嵌套问题.md"},e=l(`<p>我们经常会遇到嵌套的条件表达式，例如if...else if...else if...else这样的结构。这种结构虽然在逻辑上没有问题，但是在阅读和理解代码的时候，可能会造成一定的困扰，因为需要跟踪多个条件和分支。</p><p>造成缩进的原因是 if 语句。通常来说，if 语句造成的缩进，很多时候都是在检查某个先决条件，只有条件通过时，才继续执行后续的代码。<strong>这样的代码可以使用卫语句（guard clause）来解决，也就是设置单独的检查条件，不满足这个检查条件时，立刻从函数中返回。</strong></p><p>这种解决问题的方法叫做以卫语句取代嵌套的条件表达式（Replace Nested Conditional with Guard Clauses）。他是一种典型的重构手法</p><h2 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">void</span><span style="color:#E06C75;"> </span><span style="color:#61AFEF;">distributeEpub</span><span style="color:#E06C75;">(</span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Epub</span><span style="color:#E06C75;"> epub) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (</span><span style="color:#E5C07B;">epub</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isValid</span><span style="color:#ABB2BF;">()</span><span style="color:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    </span><span style="color:#C678DD;">boolean</span><span style="color:#E06C75;"> registered </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">registerIsbn</span><span style="color:#ABB2BF;">(epub);</span></span>
<span class="line"><span style="color:#E06C75;">　　    </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (registered) {</span></span>
<span class="line"><span style="color:#E06C75;">　　      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sendEpub</span><span style="color:#ABB2BF;">(epub);</span></span>
<span class="line"><span style="color:#E06C75;">　　    }</span></span>
<span class="line"><span style="color:#E06C75;">　　  }</span></span>
<span class="line"><span style="color:#E06C75;">　　}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>卫语句（Guard Clauses）是一种替代嵌套条件表达式的方法。卫语句是一种早期退出的策略，当函数的某个条件被满足时，就直接返回，不再执行后面的代码。这样可以减少代码的复杂性，提高代码的可读性。</li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">void</span><span style="color:#E06C75;"> </span><span style="color:#61AFEF;">distributeEpub</span><span style="color:#E06C75;">(</span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Epub</span><span style="color:#E06C75;"> epub) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">epub</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isValid</span><span style="color:#ABB2BF;">()</span><span style="color:#E06C75;">) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">boolean</span><span style="color:#E06C75;"> registered </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">registerIsbn</span><span style="color:#ABB2BF;">(epub);</span></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">registered) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  }</span></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sendEpub</span><span style="color:#ABB2BF;">(epub);</span></span>
<span class="line"><span style="color:#E06C75;">　　}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="减少else" tabindex="-1">减少else <a class="header-anchor" href="#减少else" aria-label="Permalink to &quot;减少else&quot;">​</a></h2><p>函数至多有一层缩进，这是“对象健身操（《ThoughtWorks 文集》书里的一篇）”里的一个规则。前面讲“[大类]”的时候，我曾经提到过“对象健身操”这篇文章，其中给出了九条编程规则，下面我们再来讲其中的一条：不要使用 else 关键字。</p><p>没错，else 也是一种坏味道，这是挑战很多程序员认知的。在大多数人印象中，if 和 else 是亲如一家的整体，它们几乎是比翼齐飞的</p><p>举个例子</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">double</span><span style="color:#E06C75;"> </span><span style="color:#61AFEF;">getEpubPrice</span><span style="color:#E06C75;">(</span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">boolean</span><span style="color:#E06C75;"> highQuality</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> chapterSequence) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">double</span><span style="color:#E06C75;"> price </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (highQuality </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E06C75;"> chapterSequence </span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> START_CHARGING_SEQUENCE) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    price </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">4.99</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  } </span><span style="color:#C678DD;">else</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (sequenceNumber </span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">START_CHARGING_SEQUENCE</span></span>
<span class="line"><span style="color:#E06C75;">　　        </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E06C75;"> sequenceNumber </span><span style="color:#56B6C2;">&lt;=</span><span style="color:#E06C75;"> FURTHER_CHARGING_SEQUENCE) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    price </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">1.99</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  } </span><span style="color:#C678DD;">else</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (sequenceNumber </span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> FURTHER_CHARGING_SEQUENCE) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    price </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">2.99</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  } </span><span style="color:#C678DD;">else</span><span style="color:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;">　　    price </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">0.99</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  }</span></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">return</span><span style="color:#E06C75;"> price</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>如果想不使用 else，一个简单的处理手法就是让每个逻辑提前返回，这和我们前面提到的卫语句的解决方案如出一辙：</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">double</span><span style="color:#E06C75;"> </span><span style="color:#61AFEF;">getEpubPrice</span><span style="color:#E06C75;">(</span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">boolean</span><span style="color:#E06C75;"> highQuality</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> chapterSequence) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (highQuality </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E06C75;"> chapterSequence </span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> START_CHARGING_SEQUENCE) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    </span><span style="color:#C678DD;">return</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">4.99</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (sequenceNumber </span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">START_CHARGING_SEQUENCE</span></span>
<span class="line"><span style="color:#E06C75;">　　        </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E06C75;"> sequenceNumber </span><span style="color:#56B6C2;">&lt;=</span><span style="color:#E06C75;"> FURTHER_CHARGING_SEQUENCE) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    </span><span style="color:#C678DD;">return</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">1.99</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">if</span><span style="color:#E06C75;"> (sequenceNumber </span><span style="color:#56B6C2;">&gt;</span><span style="color:#E06C75;"> FURTHER_CHARGING_SEQUENCE) {</span></span>
<span class="line"><span style="color:#E06C75;">　　    </span><span style="color:#C678DD;">return</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">2.99</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">　　  }</span></span>
<span class="line"><span style="color:#E06C75;">　　  </span><span style="color:#C678DD;">return</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">0.99</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="圈复杂度" tabindex="-1">圈复杂度 <a class="header-anchor" href="#圈复杂度" aria-label="Permalink to &quot;圈复杂度&quot;">​</a></h2><p>无论上面那种方式，都是为了解决<strong>一段代码的分支过多，其复杂度就会大幅度增加</strong></p><p>在软件开发中，有一个衡量代码复杂度常用的标准，叫做圈复杂度（Cyclomatic complexity，简称 CC），圈复杂度越高，代码越复杂，理解和维护的成本就越高。在圈复杂度的判定中，循环和选择语句占有重要的地位。</p><p>只要我们能够消除嵌套，消除 else，代码的圈复杂度就不会很高，理解和维护的成本自然也就会随之降低。</p>`,18),o=[e];function r(c,t,i,y,C,E){return n(),a("div",null,o)}const B=s(p,[["render",r]]);export{u as __pageData,B as default};
