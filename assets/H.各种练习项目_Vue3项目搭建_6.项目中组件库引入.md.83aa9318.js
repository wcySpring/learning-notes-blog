import{_ as s,o as n,c as a,V as l}from"./chunks/framework.96db2af4.js";const F=JSON.parse('{"title":"","description":"项目帮助自动化去引入组件依赖","frontmatter":{"description":"项目帮助自动化去引入组件依赖"},"headers":[],"relativePath":"H.各种练习项目/Vue3项目搭建/6.项目中组件库引入.md","filePath":"H.各种练习项目/Vue3项目搭建/6.项目中组件库引入.md","lastUpdated":1693183072000}'),p={name:"H.各种练习项目/Vue3项目搭建/6.项目中组件库引入.md"},e=l(`<p>在项目开发使用组件时候，分全量安装 和 按需引入 自动导入三种方式</p><h2 id="全局引入" tabindex="-1">全局引入 <a class="header-anchor" href="#全局引入" aria-label="Permalink to &quot;全局引入&quot;">​</a></h2><p><strong>全局引入（Global Import）</strong> 全局引入意味着一旦组件被引入，它就可以在整个 Vue 应用中使用，无需在每个单文件组件（SFC）中单独引入。这种使用方式 一般在在你的主入口文件（通常是 <code>main.js</code> 或 <code>main.ts</code>）中,以 Element Plus 为例：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">ElementPlus</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;element-plus&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 全部组件导入</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;element-plus/lib/theme-chalk/index.css&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 全部样式导入</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createApp</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">App</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ElementPlus</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果想让组件有ts 提示可以导入 <code>ElementPlus</code> 的类型声明文件，你需要先使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/// </span><span style="color:#ABB2BF;font-style:italic;">&lt;</span><span style="color:#E06C75;font-style:italic;">reference</span><span style="color:#ABB2BF;font-style:italic;"> </span><span style="color:#D19A66;font-style:italic;">types</span><span style="color:#56B6C2;font-style:italic;">=</span><span style="color:#98C379;font-style:italic;">&quot;element-plus/global&quot;</span><span style="color:#ABB2BF;font-style:italic;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// tsconfig.json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;compilerOptions&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;types&quot;</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;element-plus/global&quot;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>优点: 简单易用，不需要在每个组件中单独引入。</li><li>缺点: 可能会增加最终的打包体积，因为即使你没有使用某个组件，它也会被包括在内</li></ul><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h2><p>按需引入（On-Demand Import）意味着只有当组件实际被使用时，它才会被引入和打包。我们可以手动在页面引入需要的组件 和 组件样式</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;">&gt;Primary Button&lt;/</span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">&gt;Default Button&lt;/</span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;dashed&quot;</span><span style="color:#ABB2BF;">&gt;Dashed Button&lt;/</span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">&lt;!-- 其他Button的使用方式 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">setup</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 注意修改引入路径</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lang</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;scss&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">@import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue/lib/button/style&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">// </span><span style="color:#C678DD;">添加其他样式导入</span></span>
<span class="line"><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>当然也可以在入口文件将这个事解决掉，这样就不用在每个页面都引入了</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">createApp</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">App</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./App.vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">Input</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">DatePicker</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">/* 其他组件 */</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 导入需要的组件</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue/lib/button/style&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 导入组件的样式</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue/lib/input/style&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 导入Input组件的样式</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue/lib/date-picker/style&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 导入DatePicker组件的样式</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 导入其他组件的样式 */</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">router</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./router&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 如果使用了路由，导入路由实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createApp</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">App</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 注册需要的组件</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">Input</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">DatePicker</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 注册其他组件 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 如果使用了路由，挂载路由实例</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">router</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mount</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#app&#39;</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>也可以将这部分注册的方法进行封装</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">App</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">Input</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">DatePicker</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">/* 其他组件 */</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 封装的批量注册方法</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">registerAntDesignComponents</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">App</span><span style="color:#ABB2BF;">): </span><span style="color:#E5C07B;">void</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">components</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">Input</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">DatePicker</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/* 其他组件 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">components</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">component</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">component</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">registerAntDesignComponents</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>在 main.ts 中使用</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">createApp</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">App</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./App.vue&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">registerAntDesignComponents</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./registerAntDesignComponents&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 导入注册方法</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue/lib/button/style&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 导入组件的样式</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue/lib/input/style&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 导入Input组件的样式</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue/lib/date-picker/style&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 导入DatePicker组件的样式</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 导入其他组件的样式 */</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">router</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;./router&#39;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 如果使用了路由，导入路由实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createApp</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">App</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用封装的注册方法</span></span>
<span class="line"><span style="color:#61AFEF;">registerAntDesignComponents</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">app</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 如果使用了路由，挂载路由实例</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">router</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mount</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#app&#39;</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>也可以自定义组件名导入</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">ElButton</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">component</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ElButton</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">ElButton</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面的方法还需要每次都要手动导入css 因此后来诞生了新的方法，通过<code>babel-plugin-import</code>来解决引入组件还需要引入样式 来进行按需加载，加入这个插件后，可以省去 style 的引入。就可以直接写法如下不用引入css</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">Button</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;ant-design-vue&#39;</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但这种仍然需要手动引入组件，而且还必须使用 babel</p><p>但在element-plus中，可以使用 <a href="https://github.com/element-plus/unplugin-element-plus/blob/main/README.zh-CN.md" target="_blank" rel="noreferrer"><code>unplugin-element-plus</code></a> 插件来替代 <code>babel-plugin-import</code>，当使用插件会自动转换，针对不同打包工具使用可以<a href="https://github.com/element-plus/unplugin-element-plus/blob/main/README.zh-CN.md" target="_blank" rel="noreferrer">参考</a> 或者可以使用 <a href="https://github.com/vbenjs/vite-plugin-style-import/issues" target="_blank" rel="noreferrer">vite-plugin-style-import</a>：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">ElButton</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;element-plus&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//    ↓ ↓ ↓ ↓ ↓ ↓</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">ElButton</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;element-plus/es/components/button/style/css&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>优点: 减少了最终的打包体积，只有实际使用的组件会被包括。</li><li>缺点: 需要在每个使用组件的文件中单独引入，稍微繁琐。</li></ul><h2 id="自动导入重点" tabindex="-1">自动导入重点 <a class="header-anchor" href="#自动导入重点" aria-label="Permalink to &quot;自动导入重点&quot;">​</a></h2><p><code>unplugin-vue-components</code> 可以不需要手动引入组件，能够让开发者就像全局组件那样进行开发，但实际上又是按需引入，且不限制打包工具，不需要使用 babel，<strong>注意这个插件的作用范围是在 一些组件和指令（只做 HTML 中使用的常规组件例如各种 .vue 组件的引入以及指令的自动引入）</strong></p><p>正常况下，该插件会导入位于 src/components 路径下的组件，但你也可以通过 dirs 选项进行自定义。如果你使用 TypeScript，该插件能提供自动导入组件的类型支持。</p><p>通过自动导入组件意味着开发者不需要在每个文件中手动导入组件，从而提高开发速度。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">unplugin-vue-components</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># or</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">unplugin-vue-components</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>另一个主要 <code>unplugin-auto-import</code> 该插件主要用于自动导入 JavaScript 语法和库。它可以自动导入 Vue Composition API、JavaScript 语法、甚至是你自己定义的函数或对象。减少了手动引入的步骤</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">unplugin-auto-import</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">unplugin-auto-import</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>知道这两个库后以element-plus为例，组件可以分为两种，一种就是正常的组件这类组件使用 <code>unplugin-vue-components </code> 就能帮助自动导入，一种事反馈组件，这类组件需要使用 <code>unplugin-auto-import</code> 来帮助自动导入 整体最基本使用如下</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// vite.config.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">AutoImport</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">Components</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">ElementPlusResolver</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">AutoImport</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">resolvers</span><span style="color:#ABB2BF;">: [</span><span style="color:#61AFEF;">ElementPlusResolver</span><span style="color:#ABB2BF;">()], </span><span style="color:#7F848E;font-style:italic;">// 解决 import { ElMessage } from &#39;element-plus&#39; 这类组件的导入</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">Components</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">resolvers</span><span style="color:#ABB2BF;">: [</span><span style="color:#61AFEF;">ElementPlusResolver</span><span style="color:#ABB2BF;">()],</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>使用的是ts 版本那么他会 生成两个文件 <code>auto-imports.d.ts</code> 和 <code>components.d.ts</code> 一个是自动导入api声明文件，一个是自动导入的组件类型声明文件，这样就可以在ts中使用组件的时候有提示了，需要将这两个文件 配置在 <code>tsconfig.json</code> 中的 <code>include</code> 中，这样就可以在ts中使用组件的时候有提示了<code> &quot;include&quot;: [ &quot;auto-imports.d.ts&quot;, &quot;components.d.ts&quot;],</code></p>`,36),o=[e];function t(r,c,B,i,y,u){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{F as __pageData,m as default};
