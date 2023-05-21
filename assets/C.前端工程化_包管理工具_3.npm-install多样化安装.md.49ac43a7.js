import{_ as s,o as n,c as l,O as a}from"./chunks/framework.ab95ac3d.js";const e="/learning-notes-blog/images/前端工程_npm安装指定别名.png",o="/learning-notes-blog/images/前端工程_npm安装git.png",b=JSON.parse('{"title":"","description":"了解npm install 的各种安装包方式","frontmatter":{"description":"了解npm install 的各种安装包方式","tags":["工程化","npm"]},"headers":[],"relativePath":"C.前端工程化/包管理工具/3.npm-install多样化安装.md","filePath":"C.前端工程化/包管理工具/3.npm-install多样化安装.md","lastUpdated":1684680743000}'),t={name:"C.前端工程化/包管理工具/3.npm-install多样化安装.md"},p=a(`<p><code>npm install</code> 安装方式不仅仅可以是直接加包名安装，可以通过指定范围、tag、版本号等方式来安装特定的包，也可以通过git地址或者别名来安装。其他别名<code>npm i</code>, <code>npm add</code></p><p><strong>配置可用传递参数</strong> [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]</p><h2 id="其他配合安装指令" tabindex="-1">其他配合安装指令 <a class="header-anchor" href="#其他配合安装指令" aria-label="Permalink to &quot;其他配合安装指令&quot;">​</a></h2><p>npm 安装方式有下面六种形式</p><ol><li><code>@scope</code> 随着包越来越多起名出现重复的概率也会变，每个npm用户/组织都有自己的范围，只有在自己的范围内添加包。 <code>npm i @vue/cli-service</code></li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> [&lt;@scope&gt;/]&lt;name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li><code>@&lt;tag&gt;</code>来指定特定的版本类型,大多数情况我们默认安装的包tag 版本一般为&#39;latest&#39;,也就是默认值&#39;latest&#39;,安装时候可以指定其他tag 一般常见的三种</li></ol><ul><li>latest：最新版本，npm install vue</li><li>beta：测试版本，一般内测使用，需要指定版本号install，例如3.1.0-beta.0</li><li>next: 先行版本，npm install foo@next安装，例如3.0.2-alpha.0</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> [&lt;@scope&gt;/]&lt;name&gt;@&lt;tag&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li><code>@&lt;version&gt; / @&lt;version range&gt;</code>来安装特定版本的包，也可以指定版本范围。大多数版本范围必须放在引号中举个例子&#39;npm install pack@&quot;&gt;=0.1.0 &lt;0.2.0&quot;&#39;</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> [&lt;@scope&gt;/]&lt;name&gt;@&lt;version&gt;</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> [&lt;@scope&gt;/]&lt;name&gt;@&lt;version range&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>更多符号管理</p><details class="details custom-block"><summary>Details</summary><p><code>version</code> 精确匹配版本</p><p><code>&gt;version</code> 必须大于某个版本</p><p><code>&gt;=version</code> 大于等于</p><p><code>&lt;version</code> 小于</p><p><code>&lt;=versionversion</code> 小于</p><p><code>~version</code> &quot;约等于&quot;:</p><p><code>^version</code> &quot;兼容版本&quot;:</p><p><code>version1 - version2</code> 相当于 &gt;=version1 &lt;=version2.</p><p><code>range1 || range2</code> 范围1和范围2满足任意一个都行</p></details><ol><li>可以安装发布在仓库上的包，例如github</li><li>可以通过git地址来安装包</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">git-hos</span><span style="color:#ABB2BF;">t&gt;</span><span style="color:#98C379;">:</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#98C379;">git-use</span><span style="color:#ABB2BF;">r&gt;</span><span style="color:#98C379;">/</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#98C379;">repo-nam</span><span style="color:#ABB2BF;">e&gt;</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">repo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">ur</span><span style="color:#ABB2BF;">l&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li><code>&lt;alias&gt;@npm</code> 给包在&#39;node_modules&#39;</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">alia</span><span style="color:#ABB2BF;">s&gt;</span><span style="color:#98C379;">@npm:</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#98C379;">nam</span><span style="color:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h3><p><strong>全局安装</strong>，直接&#39;npm install&#39;，默认情况下，npm install将安装package.json下的所有依赖，直接&#39;npm install&#39;，默认情况下，npm install将安装package.json下的所有依赖</p><p><strong>项目安装到指定包</strong>，<code>npm install axios</code> 就可以安装&#39;axios&#39; 像上面说的变相等于<code>npm install axios@latest</code></p><p><strong>指定tag 安装</strong> <code>npm install @vue/cli@next</code> / <code>npm install axios@0.21.1</code> / <code> npm install sax@&quot;&gt;=0.1.0 &lt;0.2.0&quot;</code></p><p><strong>在自定义别名下安装包</strong> 指定别名<code>npm install mmzz@npm:jquery</code></p><p><img src="`+e+'" alt=""></p><p><strong>通过git地址安装 或者 github 安装</strong> ，举例子如果直接利用用户名和仓库名进行安装 <code> npm install easterCat/kiana-js</code></p><ul><li><p>在前面加上 github 前缀 -- <code>npm install github:easterCat/kiana-js</code></p></li><li><p>直接通过 git 上项目的地址进行安装 -- <code>npm install git+https://github.com/easterCat/kiana-js.git</code></p></li><li><p>以 ssh 的方式 -- <code>npm install git+ssh://github.com/easterCat/kiana-js.git</code></p></li><li><p><code>npm install axios/axios</code> 等同于<code>npm install github:axios/axios</code> 也就是说如果@省略符号，无论哪种情况，npm 都会尝试从 GitHub 安装</p></li></ul><p><img src="'+o+'" alt=""></p><p><strong>安装本地的模块文件</strong> <code>npm install ./package.tgz</code></p><p><strong>安装指定URL的模块</strong> <code>npm install https://github.com/indexzero/forever/tarball/v0.5.6</code></p>',28),i=[p];function c(r,d,g,m,u,B){return n(),l("div",null,i)}const v=s(t,[["render",c]]);export{b as __pageData,v as default};
