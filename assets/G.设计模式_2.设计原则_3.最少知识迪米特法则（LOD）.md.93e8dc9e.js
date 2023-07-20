import{_ as s,o as n,c as a,V as l}from"./chunks/framework.96db2af4.js";const u=JSON.parse('{"title":"","description":"最少知识迪米特法则（LOD），一个对象应该对其他对象保持最少的了解，尽量降低类与类之间的耦合。","frontmatter":{"description":"最少知识迪米特法则（LOD），一个对象应该对其他对象保持最少的了解，尽量降低类与类之间的耦合。"},"headers":[],"relativePath":"G.设计模式/2.设计原则/3.最少知识迪米特法则（LOD）.md","filePath":"G.设计模式/2.设计原则/3.最少知识迪米特法则（LOD）.md","lastUpdated":1689761722000}'),p={name:"G.设计模式/2.设计原则/3.最少知识迪米特法则（LOD）.md"},e=l(`<p><strong>迪米特法则</strong>：也叫<code>最少知识原则</code>，是一种面向对象设计原则，也称为迪米特法则（Principle of Least Knowledge，简称 POLA），该原则的核心思想是：一个对象应该对其他对象有尽可能少的了解如果两个类不必彼此直接通信，那这两个类就不应该发生直接的相互作用。如果其中一个类需要调用另一个类的某一个方法的话，可以通过第三者转发这个调用。</p><p>迪米特法则首先强调的前提是在类的结构设计上，每一个类都尽量降低成员的访问权限，也就是说一个类包装好自己的private状态，不需要让别的类知道的字段或行为就不要公开。迪米特法则的根本思想是强调类之间的松耦合。类之间的耦合越弱，越有利于复用，一个处于弱耦合的类被修改，不会对有关系的类造成波及，也就是信息的隐藏促进了软件的复用。</p><p><strong>因此该原则的核心思想是</strong>：一个对象应该对其他对象有尽可能少的了解，只与其直接的朋友通信。直接的朋友是指当前对象本身、被当做参数传入的对象、当前对象所创建或实例化的对象以及其组件。这样可以降低对象之间的耦合度，提高代码的可维护性和可重用性。</p><h2 id="购物案例" tabindex="-1">购物案例 <a class="header-anchor" href="#购物案例" aria-label="Permalink to &quot;购物案例&quot;">​</a></h2><p>假设一个在超市购物的场景：顾客选好商品后，到收银台找收银员结账。这里我们定义一个顾客类（Customer）、收银员类（PaperBoy ）、钱包类（Wallet ），示例代码如下(逻辑是 收银员获取顾客钱包，从顾客钱包中检查钱是否够支付的，够就从钱包拿钱，不够就是就把钱包还给顾客)</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//顾客</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Customer</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">String</span><span style="color:#E06C75;"> firstName</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">String</span><span style="color:#E06C75;"> lastName</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Wallet</span><span style="color:#E06C75;"> myWallet</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">String</span><span style="color:#61AFEF;"> getFirstName</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> firstName;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">String</span><span style="color:#61AFEF;"> getLastName</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> lastName;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">Wallet</span><span style="color:#61AFEF;"> getWallet</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> myWallet;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//钱包类</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Wallet</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">float</span><span style="color:#E06C75;"> value</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">float</span><span style="color:#61AFEF;"> getTotalMoney</span><span style="color:#ABB2BF;">()</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> setTotalMoney</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">newValue</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        value </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> newValue;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> addMoney</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">deposit</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        value </span><span style="color:#56B6C2;">+=</span><span style="color:#ABB2BF;"> deposit;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> subtractMoney</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">debit</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        value </span><span style="color:#56B6C2;">-=</span><span style="color:#ABB2BF;"> debit;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//收银员</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Paperboy</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> charge</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Customer</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">myCustomer</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">payment</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        payment </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2f</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">Wallet</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">theWallet</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">myCustomer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getWallet</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">theWallet</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getTotalMoney</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> payment) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">theWallet</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">subtractMoney</span><span style="color:#ABB2BF;">(payment);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">//钱不够的处理</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><ul><li><p>逻辑看似荒诞收银员去哪了顾客的钱包进行了支付，但违背了<strong>迪米特法则</strong>，<code>收银员的类</code>完全没必要和<code>钱包类</code>进行通信，如果非要使用<code>钱包类</code> 应该是通过第三者转发，钱包属于顾客，顾客才能作为中转使用钱包。因此这种在 Paperboy 类中，它直接调用了 Customer 类的 getWallet 方法，这样就导致了 Paperboy 类和 Customer 类之间的耦合度过高，这种耦合过高因为 Paperboy 类需要了解 Customer 类的内部实现，即它需要知道 Customer 类中有一个名为 getWallet 的方法，而且这个方法返回的是一个 Wallet 对象。这样就使得 Paperboy 类和 Customer 类之间的关系变得紧密，一旦 Customer 类的实现发生变化，就可能会影响到 Paperboy 类的实现。</p></li><li><p>按照最少知识迪米特法则的原则，Paperboy 类只应该调用 Customer 类的公共方法，而不应该了解它的内部实现，实现我们可以在顾客类中增加一个公共方法用来付钱<code>myCustomer.pay</code></p></li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//顾客</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Customer</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">String</span><span style="color:#E06C75;"> firstName</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">String</span><span style="color:#E06C75;"> lastName</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Wallet</span><span style="color:#E06C75;"> myWallet</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">String</span><span style="color:#61AFEF;"> getFirstName</span><span style="color:#ABB2BF;">()</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> firstName;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">String</span><span style="color:#61AFEF;"> getLastName</span><span style="color:#ABB2BF;">()</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> lastName;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#E5C07B;">Wallet</span><span style="color:#61AFEF;"> getWallet</span><span style="color:#ABB2BF;">()</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> myWallet;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">float</span><span style="color:#61AFEF;"> pay</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">bill</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;font-style:italic;">// if (myWallet != null) {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;font-style:italic;">// 	if (myWallet.getTotalMoney() &gt; bill) {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;font-style:italic;">// 		myWallet.subtractMoney(bill);</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;font-style:italic;">// 		return bill;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;font-style:italic;">// 	}</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#7F848E;font-style:italic;">// return 0;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">wallet</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">subtractMoney</span><span style="color:#ABB2BF;">(amount)</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 钱包类</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Wallet</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">float</span><span style="color:#E06C75;"> value</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">float</span><span style="color:#61AFEF;"> getTotalMoney</span><span style="color:#ABB2BF;">()</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> setTotalMoney</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">newValue</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">		value </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> newValue;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> addMoney</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">deposit</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">		value </span><span style="color:#56B6C2;">+=</span><span style="color:#ABB2BF;"> deposit;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> subtractMoney</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">debit</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">		value </span><span style="color:#56B6C2;">-=</span><span style="color:#ABB2BF;"> debit;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#7F848E;font-style:italic;">// 扣除金额</span></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">float</span><span style="color:#61AFEF;"> subtractMoney</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">amount</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (totalMoney </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#ABB2BF;"> amount) {</span></span>
<span class="line"><span style="color:#ABB2BF;">					totalMoney </span><span style="color:#56B6C2;">-=</span><span style="color:#ABB2BF;"> amount;</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> amount;</span></span>
<span class="line"><span style="color:#ABB2BF;">			} </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 收银员</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">PaperBoy</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">	</span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> charge</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Customer</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">myCustomer</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">payment</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        payment </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2f</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// “我要收取2元!”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">paidAmount</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">myCustomer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pay</span><span style="color:#ABB2BF;">(payment);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (paidAmount </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> payment) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 说声谢谢，欢迎下次光临</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 可以稍后再来</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>当一个对象需要调用另一个对象的方法时，最少知识迪米特法则建议只调用以下几种对象的方法：</p><ol><li><p>当前对象本身的方法：当前对象可以直接调用自己的方法，因为它们是同一个对象，不存在耦合问题。</p></li><li><p>作为参数传递给当前对象的对象的方法：当前对象可以调用作为参数传递给它的对象的公共方法，因为这些方法是公共的，不会影响到对象之间的耦合关系。</p></li><li><p>当前对象所创建或实例化的对象的方法：当前对象可以调用它所创建或实例化的对象的公共方法，因为这些对象是由当前对象创建或实例化的，不存在耦合问题。</p></li><li><p>当前对象的组件的方法：当前对象可以调用它的组件的公共方法，因为组件是当前对象的一部分，不存在耦合问题。</p></li></ol><p>这样可以避免对象之间的紧密耦合，降低代码的复杂度和维护成本。同时，这也符合单一职责原则和开闭原则的要求，使得代码更加灵活和易于扩展。</p><p>以上面对例子带入来看</p><ol><li>Paperboy 类只调用 Customer 类的 getWallet 方法，获取顾客的钱包对象，而不需要了解钱包对象的内部实现。</li><li>Paperboy 类只调用 Wallet 类的 getTotalMoney 和 subtractMoney 方法，获取钱包的余额和扣除金额，而不需要了解钱包对象的内部实现。</li><li>Customer 类只调用 Wallet 类的公共方法，获取钱包的余额和扣除金额，而不需要了解钱包对象的内部实现。</li></ol><p>这样，代码遵循了最少知识迪米特法则的原则，降低了对象之间的耦合度，提高了代码的可维护性和可重用性。同时，也符合单一职责原则和开闭原则的要求，使得代码更加灵活和易于扩展。</p><h2 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h2><p><a href="https://baike.baidu.com/item/%E9%97%A8%E9%9D%A2%E6%A8%A1%E5%BC%8F/764642?fromModule=lemma_inlink" target="_blank" rel="noreferrer">门面模式</a></p><p>（<a href="https://baike.baidu.com/item/Facade/2954918?fromModule=lemma_inlink" target="_blank" rel="noreferrer">Facade</a>）和中介模式（Mediator），都是迪米特法则应用的例子</p>`,18),o=[e];function r(c,t,B,i,y,b){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
