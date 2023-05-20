import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ab95ac3d.js";const f=JSON.parse('{"title":"函数参数传值","description":"","frontmatter":{},"headers":[],"relativePath":"A.前端知识整理/JS基础/函数参数传递.md","filePath":"A.前端知识整理/JS基础/函数参数传递.md","lastUpdated":1683553278000}'),e={name:"A.前端知识整理/JS基础/函数参数传递.md"},p=l(`<blockquote class="success"><h1>函数参数传值</h1></blockquote><blockquote class="danger"><h5>基本类型</h5></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">const a = 1</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">function t(a){</span></span>
<span class="line"><span style="color:#abb2bf;">    a =2</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">// 下面打印结果 为1，当基本类型时候，函数体复制了一份参数值</span></span>
<span class="line"><span style="color:#abb2bf;">// 任何操作都不会影响原参数的实际值</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(a);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote class="danger"><h5>引用类型</h5></blockquote><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.当函数参数是引用类型的时候，函数体内修改这个参数值的某个值时候，</span></span>
<span class="line"><span style="color:#abb2bf;">将会对原来的参数进行修改</span></span>
<span class="line"><span style="color:#abb2bf;">2.如果直接修改这个参数的引用地址，相当于在函数内创建了一个新的引用</span></span>
<span class="line"><span style="color:#abb2bf;">任何操作都不会影响原来值</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">let a = {</span></span>
<span class="line"><span style="color:#abb2bf;">  name: &#39;Julia&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">  age: 20</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">function change(o) {</span></span>
<span class="line"><span style="color:#abb2bf;">  o.age = 24;</span></span>
<span class="line"><span style="color:#abb2bf;">  o = {</span></span>
<span class="line"><span style="color:#abb2bf;">    name: &#39;Kath&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    age: 30</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">  return o;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">let b = change(a);     </span></span>
<span class="line"><span style="color:#abb2bf;">console.log(b.age);    // 30</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(a.age); // 24</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,6),b=[p];function c(o,r,i,t,u,d){return n(),a("div",null,b)}const y=s(e,[["render",c]]);export{f as __pageData,y as default};
