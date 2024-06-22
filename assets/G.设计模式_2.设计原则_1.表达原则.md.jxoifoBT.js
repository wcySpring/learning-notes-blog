import{_ as s,c as n,o as a,a8 as l}from"./chunks/framework.6k5lawSO.js";const m=JSON.parse('{"title":"","description":"表达原则尽量清晰准确地表达代码的意图，避免歧义和误解","frontmatter":{"description":"表达原则尽量清晰准确地表达代码的意图，避免歧义和误解"},"headers":[],"relativePath":"G.设计模式/2.设计原则/1.表达原则.md","filePath":"G.设计模式/2.设计原则/1.表达原则.md","lastUpdated":1690115031000}'),p={name:"G.设计模式/2.设计原则/1.表达原则.md"},e=l(`<p>可读性差的代码难以理解，这不仅会造成诸多误解和麻烦，还会导致项目交付效率变低，<strong>代码的可读性差，没能很好地串联起代码内在的逻辑</strong>,在维护代码时候或多或少会遇到</p><ul><li><p>接手维护项目，却发现文档缺失、代码无注释，加上维护人离职，基本只能靠猜来梳理代码逻辑。</p></li><li><p>代码风格过于抽象（命名过短、魔鬼数字、重名方法等），看不懂，也不敢轻易修改。</p></li><li><p>运行代码出现故障时，不打日志，不抛异常，导致定位问题需要耗费很长时间。</p></li><li><p>大段的<code>if-else</code>代码嵌套组合，调用逻辑复杂冗长，扩展性差，重构优化费时、费力。</p></li></ul><p>为了提高代码的可读性，就需要<strong>表达原则</strong>。</p><h3 id="提升代码可读性代码特点" tabindex="-1">提升代码可读性代码特点 <a class="header-anchor" href="#提升代码可读性代码特点" aria-label="Permalink to &quot;提升代码可读性代码特点&quot;">​</a></h3><p>为什么要提高代码可读性，通过四个方面可以理解</p><ol><li><strong>易于维护</strong>，设计文档、需求文档和口头交流只能表达部分业务逻辑的意图。可读性高的代码，能让阅读者在阅读时快速理解编写者的意图</li><li><strong>易于重构</strong>，代码的可读性太差在某种程度上决定了你重构意愿的大小</li><li><strong>易于测试</strong>，可读性高的代码，参数与输出都更清晰，在测试时能更精准地找到对应逻辑和问题点</li><li><strong>易于应用设计模式</strong>，好读懂代码跟方便理解分析出要使用较好的设计模式进行重构</li></ol><h3 id="表达原则" tabindex="-1">表达原则 <a class="header-anchor" href="#表达原则" aria-label="Permalink to &quot;表达原则&quot;">​</a></h3><p>虽说编写文档能够表达软件开发意图，但事实上，你可能很讨厌写文档，这是因为大部分文档都与代码没有直接关系，并且随着代码的不断调试与修改，文档会变得越来越难以与最新的真实情况同步。</p><p>另外，你可能也没有太多时间阅读文档，需求上线、Bug 修复、多项目并发是现在程序员的日常现状。因为时间紧、任务重，你可能只能边改代码边学习，这时一份逻辑清晰的代码才是你真正需要的。</p><p>这些情况下可以使用，表达原则（Program Intently and Expressively，简称 PIE），起源于敏捷编程，是指编程时应该有清晰的编程意图，并通过代码明确地表达出来，<strong>代码即文档</strong>，在开发代码时，<strong>应该更注重代码表达的意图是否清晰</strong></p><ul><li><strong>代码表现形式</strong>：在命名（变量名、方法名、类名）、代码格式、注释等方面的改进,无论是变量名、类名还是方法名，好的名字能快速准确地传达要表达的含义，而缩写、自定义名称会让代码变得难以理解,命名的优化加上注释的说明让源代码的逻辑变得清晰起，以下面代码为例需要去整阅读后也之态知道代码在做什么事</li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> class</span><span style="color:#C18401;"> T </span><span style="color:#383A42;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    private</span><span style="color:#C18401;"> Set</span><span style="color:#E45649;">&lt;</span><span style="color:#C18401;">String</span><span style="color:#E45649;">&gt; pns </span><span style="color:#383A42;">= </span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> HashSet</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    private</span><span style="color:#A626A4;"> int</span><span style="color:#E45649;"> s </span><span style="color:#383A42;">= </span><span style="color:#986801;">0</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    private</span><span style="color:#C18401;"> Boolean</span><span style="color:#4078F2;"> f</span><span style="color:#383A42;">(</span><span style="color:#C18401;">String</span><span style="color:#383A42;"> n) {</span><span style="color:#A626A4;">return</span><span style="color:#E45649;"> pns</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">contains</span><span style="color:#383A42;">(n);}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    int</span><span style="color:#4078F2;"> getS</span><span style="color:#383A42;">() {</span><span style="color:#A626A4;">return</span><span style="color:#383A42;"> s;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    int</span><span style="color:#4078F2;"> s</span><span style="color:#383A42;">(</span><span style="color:#C18401;">List</span><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">T</span><span style="color:#383A42;">&gt; ts, </span><span style="color:#C18401;">String</span><span style="color:#383A42;"> n) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        for</span><span style="color:#383A42;"> (</span><span style="color:#C18401;">T</span><span style="color:#E45649;"> t </span><span style="color:#A626A4;">:</span><span style="color:#383A42;">ts) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">            if</span><span style="color:#383A42;"> (</span><span style="color:#E45649;">t</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">f</span><span style="color:#383A42;">(n)) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">                return</span><span style="color:#E45649;"> t</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getS</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#986801;"> 0</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>在命名的优化加上注释的说明改造后代码变得清晰起来</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">/**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> * 获取球队比赛得分</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"> **/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">public</span><span style="color:#A626A4;"> class</span><span style="color:#C18401;"> Team </span><span style="color:#383A42;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    private</span><span style="color:#C18401;"> Set</span><span style="color:#E45649;">&lt;</span><span style="color:#C18401;">String</span><span style="color:#E45649;">&gt; playerNames </span><span style="color:#383A42;">= </span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> HashSet</span><span style="color:#383A42;">(); </span><span style="color:#A0A1A7;font-style:italic;">//保证名字不重复</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    private</span><span style="color:#A626A4;"> int</span><span style="color:#E45649;"> score </span><span style="color:#383A42;">= </span><span style="color:#986801;">0</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">//默认为零</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    /**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * 判断是否包含球员</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * </span><span style="color:#A626A4;font-style:italic;">@param</span><span style="color:#383A42;font-style:italic;"> playerName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * </span><span style="color:#A626A4;font-style:italic;">@return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    private</span><span style="color:#C18401;"> Boolean</span><span style="color:#4078F2;"> containsPlayer</span><span style="color:#383A42;">(</span><span style="color:#C18401;">String</span><span style="color:#383A42;"> playerName) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#E45649;"> playerNames</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">contains</span><span style="color:#383A42;">(playerName);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    /**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * 知道队伍，直接获取分数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * </span><span style="color:#A626A4;font-style:italic;">@return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    public</span><span style="color:#A626A4;"> int</span><span style="color:#4078F2;"> getScore</span><span style="color:#383A42;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#383A42;"> score;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    /**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * 通过队员名字查找所属队伍分数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * </span><span style="color:#A626A4;font-style:italic;">@param</span><span style="color:#383A42;font-style:italic;"> teams</span><span style="color:#A0A1A7;font-style:italic;"> 支持多个队伍</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * </span><span style="color:#A626A4;font-style:italic;">@param</span><span style="color:#383A42;font-style:italic;"> playerName</span><span style="color:#A0A1A7;font-style:italic;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     * </span><span style="color:#A626A4;font-style:italic;">@return</span><span style="color:#A0A1A7;font-style:italic;"> 兜底为0分，不出现负分</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    public</span><span style="color:#A626A4;"> int</span><span style="color:#4078F2;"> getTeamScoreForPlayer</span><span style="color:#383A42;">(</span><span style="color:#C18401;">List</span><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Team</span><span style="color:#383A42;">&gt; teams, </span><span style="color:#C18401;">String</span><span style="color:#383A42;"> playerName) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        for</span><span style="color:#383A42;"> (</span><span style="color:#C18401;">Team</span><span style="color:#E45649;"> team </span><span style="color:#A626A4;">:</span><span style="color:#383A42;">teams) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">            if</span><span style="color:#383A42;"> (</span><span style="color:#E45649;">team</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">containsPlayer</span><span style="color:#383A42;">(playerName)) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">                return</span><span style="color:#E45649;"> team</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getScore</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#986801;"> 0</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><ul><li><strong>控制流和逻辑</strong>：尽量分离控制流和逻辑，让代码变得更容易理解,如果过多<code>if</code>嵌套无法保证逻辑简单清晰</li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> List</span><span style="color:#383A42;">&lt;User&gt; </span><span style="color:#4078F2;">getUsers</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">int</span><span style="color:#383A42;"> id) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">    List</span><span style="color:#E45649;">&lt;</span><span style="color:#C18401;">User</span><span style="color:#E45649;">&gt; result </span><span style="color:#383A42;">= </span><span style="color:#A626A4;">new</span><span style="color:#C18401;"> ArrayList</span><span style="color:#383A42;">&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">    User</span><span style="color:#E45649;"> user </span><span style="color:#383A42;">= </span><span style="color:#4078F2;">getUserById</span><span style="color:#383A42;">(id);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (</span><span style="color:#986801;">null</span><span style="color:#383A42;"> != user) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">        Manager</span><span style="color:#E45649;"> manager </span><span style="color:#383A42;">= </span><span style="color:#E45649;">user</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getManager</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#383A42;"> (</span><span style="color:#986801;">null</span><span style="color:#383A42;"> != manager) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">            List</span><span style="color:#E45649;">&lt;</span><span style="color:#C18401;">User</span><span style="color:#E45649;">&gt; users </span><span style="color:#383A42;">= </span><span style="color:#E45649;">manager</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getUsers</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">            if</span><span style="color:#383A42;"> (</span><span style="color:#986801;">null</span><span style="color:#383A42;"> != users &amp;&amp; </span><span style="color:#E45649;">users</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">size</span><span style="color:#383A42;">() &gt; </span><span style="color:#986801;">0</span><span style="color:#383A42;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">                for</span><span style="color:#383A42;"> (</span><span style="color:#C18401;">User</span><span style="color:#E45649;"> user1 </span><span style="color:#A626A4;">:</span><span style="color:#383A42;"> users) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">                    if</span><span style="color:#383A42;"> (</span><span style="color:#E45649;">user1</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getAge</span><span style="color:#383A42;">() &gt;= </span><span style="color:#986801;">35</span><span style="color:#383A42;"> &amp;&amp; </span><span style="color:#50A14F;">&quot;MALE&quot;</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">equals</span><span style="color:#383A42;">(</span><span style="color:#E45649;">user1</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getSex</span><span style="color:#383A42;">())) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">                        result</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">add</span><span style="color:#383A42;">(user1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">            } </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">                System</span><span style="color:#383A42;">.</span><span style="color:#E45649;">out</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">println</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;获取员工列表失败&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        } </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">            System</span><span style="color:#383A42;">.</span><span style="color:#E45649;">out</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">println</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;获取领导信息失败&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    } </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">        System</span><span style="color:#383A42;">.</span><span style="color:#E45649;">out</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">println</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;获取员工信息失败&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> result;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>代码嵌套了大量的 if else随着判断条件逐渐增多，嵌套就会增多。代码逻辑越多，你就越容易搞不清楚逻辑是什么，因为看到最内层的代码时，你已经忘记前面每一层的条件判断是什么了。</p><p><strong>重新优化改变控制流，先判断会出现失败的条件，一旦出现优先退出</strong></p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">public</span><span style="color:#C18401;"> List</span><span style="color:#383A42;">&lt;User&gt; </span><span style="color:#4078F2;">getStudents</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">int</span><span style="color:#383A42;"> uid) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">    List</span><span style="color:#E45649;">&lt;</span><span style="color:#C18401;">User</span><span style="color:#E45649;">&gt; result </span><span style="color:#383A42;">= </span><span style="color:#A626A4;">new</span><span style="color:#C18401;"> ArrayList</span><span style="color:#383A42;">&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">    User</span><span style="color:#E45649;"> user </span><span style="color:#383A42;">= </span><span style="color:#4078F2;">getUserByUid</span><span style="color:#383A42;">(uid);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (</span><span style="color:#986801;">null</span><span style="color:#383A42;"> == user) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">        System</span><span style="color:#383A42;">.</span><span style="color:#E45649;">out</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">println</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;获取员工信息失败&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#383A42;"> result;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">    Manager</span><span style="color:#E45649;"> manager </span><span style="color:#383A42;">= </span><span style="color:#E45649;">user</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getManager</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (</span><span style="color:#986801;">null</span><span style="color:#383A42;"> == manager) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">        System</span><span style="color:#383A42;">.</span><span style="color:#E45649;">out</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">println</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;获取领导信息失败&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#383A42;"> result;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">    List</span><span style="color:#E45649;">&lt;</span><span style="color:#C18401;">User</span><span style="color:#E45649;">&gt; users </span><span style="color:#383A42;">= </span><span style="color:#E45649;">manager</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getUsers</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (</span><span style="color:#986801;">null</span><span style="color:#383A42;"> == users || </span><span style="color:#E45649;">users</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">size</span><span style="color:#383A42;">() == </span><span style="color:#986801;">0</span><span style="color:#383A42;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">        System</span><span style="color:#383A42;">.</span><span style="color:#E45649;">out</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">println</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;获取员工列表失败&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#383A42;"> result;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    for</span><span style="color:#383A42;"> (</span><span style="color:#C18401;">User</span><span style="color:#E45649;"> user1 </span><span style="color:#A626A4;">:</span><span style="color:#383A42;"> users) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#383A42;"> (</span><span style="color:#E45649;">user1</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getAge</span><span style="color:#383A42;">() &gt; </span><span style="color:#986801;">35</span><span style="color:#383A42;"> &amp;&amp; </span><span style="color:#50A14F;">&quot;MALE&quot;</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">equals</span><span style="color:#383A42;">(</span><span style="color:#E45649;">user1</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getSex</span><span style="color:#383A42;">())) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">            result</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">add</span><span style="color:#383A42;">(user1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> result;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><ul><li><strong>惯性思维</strong>：找出常犯的一些惯性思考方式并逐一改进，<strong>要避免一次性代码</strong>一次性代码一旦修改需要，多处就得跟着修改，而多次修改又可能会出现遗漏的风险，<strong>要避免复制粘贴代码</strong>复制代码往往都对内部逻辑不了解，等真正出现问题时候再去修改发现梳理逻辑更加困难， <strong>避免写超长代码</strong>，<strong>避免过度简化命名和表达式</strong>，<strong>避免写是什么的注释</strong>，代码的命名和结构如果能直接反映出来“是什么”的话，我们就不应该用注释去表达，因为看代码一眼就能明白，应该多写“为什么”的注释，比如，为什么要多加一个适配的方法，原因可能是线上 xxx 问题引起，或临时修复的Bug，后续可能随 xxx 接口调整而废弃，“为什么”的注释还有一个好处：尤其在早期快速迭代过程中，能给后来的维护者提供一个优化的切入点，而不至于交接代码后让维护代码的人看不懂、不敢动</li></ul><p><strong>表达原则的核心思想在于：通过代码清晰地表达我们的真实意图</strong>，虽然软件开发过程中会有诸多文档，比如，架构设计文档、流程文档、PRD 文档等，但这些文档并不足以帮助我们正确理解代码是如何运行和组织的，很多时候我们只能通过阅读代码来掌握软件的真实运行情况。</p><p>我们之所以应该把提高代码可读性作为第一要务，就是因为读代码的次数远比写代码的次数多</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>表达原则是指代码应该易于阅读、易于理解、易于维护、易于重构、易于测试和易于应用设计模式。这些特点可以提高代码的可读性，使得代码更易于被理解和修改。</p>`,24),r=[e];function o(c,t,i,y,b,A){return a(),n("div",null,r)}const g=s(p,[["render",o]]);export{m as __pageData,g as default};
