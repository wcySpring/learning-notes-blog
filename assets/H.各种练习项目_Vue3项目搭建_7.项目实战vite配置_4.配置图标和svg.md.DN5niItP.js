import{_ as s,c as n,o as a,a8 as l}from"./chunks/framework.6k5lawSO.js";const m=JSON.parse('{"title":"","description":"svg 图片上传","frontmatter":{"description":"svg 图片上传"},"headers":[],"relativePath":"H.各种练习项目/Vue3项目搭建/7.项目实战vite配置/4.配置图标和svg.md","filePath":"H.各种练习项目/Vue3项目搭建/7.项目实战vite配置/4.配置图标和svg.md","lastUpdated":1695881925000}'),p={name:"H.各种练习项目/Vue3项目搭建/7.项目实战vite配置/4.配置图标和svg.md"},e=l(`<p>svg 是一种基于可扩展标记语言（XML）的图形格式，具有 不会失真 ，更小的体积。为了在项目中更好的使用 svg, vite + vue 这种形式下 有三种</p><p><code>unplugin-icons</code> , 能够识别本地 svg 文件，并且可以配合 iconify 图标库，利用 <code>unplugin-auto-import</code> 可以实现自动下载 使用到的 iconify 图标集</p><p><code>vite-plugin-svg-icons</code>, 针对本地 svg 图标插件管理，通过配合 封装的 svg 组件，利用其精灵图的特性可以优化 svg 数量</p><p><code>@iconify/vue</code>,一个已经封装好的 vue 组件用来直接使用 iconify 图标库，支持cdn 加载图片，并且会将加载后的图标存储在本地，也可以使用 本地下载好的 iconify 图标库</p><h2 id="具体使用-unplugin-icons" tabindex="-1">具体使用 -- unplugin-icons <a class="header-anchor" href="#具体使用-unplugin-icons" aria-label="Permalink to &quot;具体使用 -- unplugin-icons&quot;">​</a></h2><p>安装插件</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">npm</span><span style="color:#50A14F;"> i</span><span style="color:#986801;"> -D</span><span style="color:#50A14F;"> unplugin-icons</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建文件 <code>svgIconsPlugin.ts</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">name</span><span style="color:#C18401;font-style:italic;">  svgIconsPlugin</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">description</span><span style="color:#A0A1A7;font-style:italic;"> 配置使用svg图标</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> Icons</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &#39;unplugin-icons/vite&#39;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">FileSystemIconLoader</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;unplugin-icons/loaders&#39;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> path</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#4078F2;"> svgIconsPlugin</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#4078F2;"> Icons</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // @default 默认vue3</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // compiler:&#39;vue3&#39;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * 按需引入这个选项会自动为你的应用安装必要的运行时。这意味着你不需要手动导入或注册图标组件，它们会自动被引入并可用。</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     *  */</span></span>
<span class="line"><span style="color:#E45649;">    autoInstall</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * 这个选项允许你定义自己的图标集合。每个集合都是一个键值对，其中键是集合的名称，值是一个加载器函数，用于加载和处理图标。</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#E45649;">    customCollections</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      /**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">       * FileSystemIconLoader</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">       * 第一个参数是 SVG 图标的路径，文件名（不包括扩展名）将被用作图标的名称</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">       * 第二个参数是这是一个处理函数，用于处理加载的 SVG 内容。在这个例子中，它将 SVG 的开头替换为 &lt;svg fill=&quot;currentColor&quot; 。</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">       * 这意味着图标的颜色会使用 CSS 的 currentColor 值，从而允许你通过 CSS 控制图标的颜色。</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">       */</span></span>
<span class="line"><span style="color:#E45649;">      home</span><span style="color:#0184BC;">:</span><span style="color:#4078F2;"> FileSystemIconLoader</span><span style="color:#383A42;">(path.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;src&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;assets/svg&#39;</span><span style="color:#383A42;">), (svg) </span><span style="color:#A626A4;">=&gt;</span></span>
<span class="line"><span style="color:#383A42;">        svg.</span><span style="color:#4078F2;">replace</span><span style="color:#383A42;">(</span><span style="color:#0184BC;">/</span><span style="color:#A626A4;">^</span><span style="color:#0184BC;">&lt;svg /</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;&lt;svg fill=&quot;currentColor&quot; &#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">      )</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">  })</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>在 <code>autoRegistryCmpPlugin</code> 创建配合自动导入组件的图标库的配置方法 <code>IconsResolver</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">name</span><span style="color:#C18401;font-style:italic;">  autoRegistryCmpPlugin</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">description</span><span style="color:#A0A1A7;font-style:italic;"> 按需加载，自动引入组件</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> Components</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">ElementPlusResolver</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> path</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> IconsResolver</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &#39;unplugin-icons/resolver&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#4078F2;"> autoRegistryCmpPlugin</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#4078F2;"> Components</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // Auto register Element Plus components</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // 自动导入 Element Plus 组件</span></span>
<span class="line"><span style="color:#E45649;">    resolvers</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#4078F2;">      ElementPlusResolver</span><span style="color:#383A42;">(),</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // 自动导入 svg 图标 用来配合 \`unplugin-icons\` 使用的</span></span>
<span class="line"><span style="color:#4078F2;">      IconsResolver</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        // prefix: &#39;icon&#39;, // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀</span></span>
<span class="line"><span style="color:#E45649;">        enabledCollections</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span><span style="color:#50A14F;">&#39;home&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;ic&#39;</span><span style="color:#383A42;">] </span><span style="color:#A0A1A7;font-style:italic;">// 这是可选的，默认启用 Iconify 支持的所有集合 ic 是Iconify 集合</span></span>
<span class="line"><span style="color:#383A42;">      })</span></span>
<span class="line"><span style="color:#383A42;">    ],</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // 指定生成的 组件的 ts 文件目录</span></span>
<span class="line"><span style="color:#E45649;">    dts</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> path.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;types&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;components.d.ts&#39;</span><span style="color:#383A42;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">    directives</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span></span>
<span class="line"><span style="color:#383A42;">  })</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="具体使用-vite-plugin-svg-icons" tabindex="-1">具体使用 -- vite-plugin-svg-icons <a class="header-anchor" href="#具体使用-vite-plugin-svg-icons" aria-label="Permalink to &quot;具体使用 -- vite-plugin-svg-icons&quot;">​</a></h2><p>安装</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">yarn</span><span style="color:#50A14F;"> add</span><span style="color:#50A14F;"> vite-plugin-svg-icons</span><span style="color:#986801;"> -D</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#4078F2;">npm</span><span style="color:#50A14F;"> i</span><span style="color:#50A14F;"> vite-plugin-svg-icons</span><span style="color:#986801;"> -D</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#4078F2;">pnpm</span><span style="color:#50A14F;"> install</span><span style="color:#50A14F;"> vite-plugin-svg-icons</span><span style="color:#986801;"> -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>创建文件 <code>svgSpriteIcons</code> 文件配置插件</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">name</span><span style="color:#C18401;font-style:italic;">  svgSpriteIcons</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">description</span><span style="color:#A0A1A7;font-style:italic;"> 配置使用svg图标,需要配合组件 SvgIcon使用 用来优化svg 雪碧图效果</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">example</span><span style="color:#A0A1A7;font-style:italic;">   &lt;svg-icon icon-class=&quot;文件名.svg&quot; /&gt;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">createSvgIconsPlugin</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;vite-plugin-svg-icons&#39;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> path</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#4078F2;"> svgSpriteIcons</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span></span>
<span class="line"><span style="color:#4078F2;">  createSvgIconsPlugin</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // 指定需要缓存的图标文件夹</span></span>
<span class="line"><span style="color:#E45649;">    iconDirs</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [path.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;src&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;assets/svg&#39;</span><span style="color:#383A42;">)],</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // 指定symbolId格式</span></span>
<span class="line"><span style="color:#E45649;">    symbolId</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;icon-[dir]-[name]&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * custom dom id</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">default</span><span style="color:#A0A1A7;font-style:italic;">: __svg__icons__dom__</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#E45649;">    customDomId</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;__svg__icons__dom__&#39;</span></span>
<span class="line"><span style="color:#383A42;">  })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>配合全局组件 <code>SvgIcon</code> 进行使用</p><h2 id="iconify-vue" tabindex="-1">@iconify/vue <a class="header-anchor" href="#iconify-vue" aria-label="Permalink to &quot;@iconify/vue&quot;">​</a></h2><p>安装</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">npm</span><span style="color:#50A14F;"> install</span><span style="color:#986801;"> --save-dev</span><span style="color:#50A14F;"> @iconify/vue</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果想使用本地的 iconify 图标，下载</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">npm</span><span style="color:#50A14F;"> install</span><span style="color:#986801;"> --save-dev</span><span style="color:#50A14F;"> @iconify-icons/xx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>为了将图库自动导入参考创建了一个脚本</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">name</span><span style="color:#C18401;font-style:italic;"> registryIconifyIcons</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * </span><span style="color:#383A42;font-style:italic;">@</span><span style="color:#A626A4;font-style:italic;">description</span><span style="color:#A0A1A7;font-style:italic;"> 注册 从 @iconify-icons 自动导入的svg</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> toCamelCase</span><span style="color:#383A42;">(str</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> str.</span><span style="color:#4078F2;">replace</span><span style="color:#383A42;">(</span><span style="color:#0184BC;">/-(</span><span style="color:#986801;">[a-z0-9]</span><span style="color:#0184BC;">)/</span><span style="color:#A626A4;">g</span><span style="color:#383A42;">, </span><span style="color:#A626A4;">function</span><span style="color:#383A42;"> (_, letter) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> letter.</span><span style="color:#4078F2;">toUpperCase</span><span style="color:#383A42;">()</span></span>
<span class="line"><span style="color:#383A42;">  })</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> function</span><span style="color:#4078F2;"> registryIconifyIcons</span><span style="color:#383A42;">(customCollections</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">, icons</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">[]) {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> fromPrefix</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> \`@iconify-icons/</span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">customCollections</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> icons.</span><span style="color:#4078F2;">reduce</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#383A42;">    (acc, icon) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">      const</span><span style="color:#986801;"> fromKey</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> \`</span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">fromPrefix</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">/</span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">icon</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">\`</span></span>
<span class="line"><span style="color:#383A42;">      acc[fromKey] </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> [[</span><span style="color:#50A14F;">&#39;default&#39;</span><span style="color:#383A42;">, </span><span style="color:#4078F2;">toCamelCase</span><span style="color:#383A42;">(icon)]]</span></span>
<span class="line"><span style="color:#A626A4;">      return</span><span style="color:#383A42;"> acc</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">    {} as { [key</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">]</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [[</span><span style="color:#0184BC;">string</span><span style="color:#383A42;">, </span><span style="color:#0184BC;">string</span><span style="color:#383A42;">]] }</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,24),o=[e];function c(t,r,i,y,A,b){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
