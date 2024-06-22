import{_ as s,c as n,o as a,a8 as l}from"./chunks/framework.6k5lawSO.js";const u=JSON.parse('{"title":"","description":"了解node连接mongoDB","frontmatter":{"description":"了解node连接mongoDB","tags":["服务端","node","mongoDB"]},"headers":[],"relativePath":"B.NodeJS学习/12.node连接数据库/1.node连接mongoDB.md","filePath":"B.NodeJS学习/12.node连接数据库/1.node连接mongoDB.md","lastUpdated":1686742832000}'),p={name:"B.NodeJS学习/12.node连接数据库/1.node连接mongoDB.md"},e=l(`<p>可以通过客户端连接数据库，在实际开发的过程中需要代码和数据库进行连接，因此如何通过node 连接 mongoDB</p><h2 id="使用-npm-mongodb-进行连接" tabindex="-1">使用 npm mongodb 进行连接 <a class="header-anchor" href="#使用-npm-mongodb-进行连接" aria-label="Permalink to &quot;使用  npm mongodb 进行连接&quot;">​</a></h2><p>官网提供的参考 <a href="https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/" target="_blank" rel="noreferrer"> https://www.mongodb.com/developer/languages/</a> 找到对应 语言推荐包</p><p>在使用上查找的api 和使用方式基本和 mongoDB 直接通过shell 脚本操作的形式是一样的。只要去看mongoDB shell 一些curd 指令即可上手</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">npm</span><span style="color:#50A14F;"> install</span><span style="color:#50A14F;"> mongodb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#383A42;"> { </span><span style="color:#986801;">MongoClient</span><span style="color:#383A42;">, </span><span style="color:#986801;">ObjectID</span><span style="color:#383A42;"> } </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;mongodb&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> uri</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &#39;mongodb://127.0.0.1:27017&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 连接数据库</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> client</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> MongoClient</span><span style="color:#383A42;">(uri)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">async</span><span style="color:#A626A4;"> function</span><span style="color:#4078F2;"> run</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">	try</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 连接数据库</span></span>
<span class="line"><span style="color:#A626A4;">		await</span><span style="color:#383A42;"> client.</span><span style="color:#4078F2;">connect</span><span style="color:#383A42;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 选择数据库</span></span>
<span class="line"><span style="color:#A626A4;">		const</span><span style="color:#986801;"> db</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> client.</span><span style="color:#4078F2;">db</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;test&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 选择集合</span></span>
<span class="line"><span style="color:#A626A4;">		const</span><span style="color:#986801;"> collection</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> db.</span><span style="color:#4078F2;">collection</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;documents&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 插入文档</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// const insertResult = await collection.insertMany([</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 	{</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 		name: &#39;w&#39;,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 		age: 18,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 		hobbies: [&#39;吃&#39;, &#39;睡觉&#39;],</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 	},</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 	{</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 		name: &#39;ww&#39;,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 		age: 18,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 		hobbies: [&#39;吃&#39;, &#39;睡觉&#39;],</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 	},</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// ])</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// /**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  * 打印插入返回的信息</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  *{</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  *		acknowledged: true,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  *		insertedCount: 2,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  *	insertedIds: {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  *		&#39;0&#39;: new ObjectId(&quot;64756522a8b1ea25fc59b62b&quot;),</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  *		&#39;1&#39;: new ObjectId(&quot;64756522a8b1ea25fc59b62c&quot;)</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  *	}</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  *}</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//  * */</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// console.log(insertResult)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 查询文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 查看</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		/**</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		 * 注意的是 collection.find({}).toArray() 是一个整体 分开写的话</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		 * const findResult =  collection.find({})</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		 * console.log( await findResult.toArray())</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		 */</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// const findResult = await collection.find({}).toArray()</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// console.log(findResult)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 只查看一条</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// const oneFindResult = await collection.findOne({ name: &#39;w&#39; })</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// console.log(oneFindResult)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 删除文档时候要注意使用 id 时候需要使用 ObjectID 包裹</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// const ret = await collection({</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		//   _id: ObjectID(&#39;5fa5164f95060000060078b1&#39;)</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// })</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// console.log(ret)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 更新文档 使用参看mongodb 语法用法</span></span>
<span class="line"><span style="color:#A626A4;">		const</span><span style="color:#986801;"> ret</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> await</span><span style="color:#383A42;"> collection.</span><span style="color:#4078F2;">updateOne</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#383A42;">			{</span></span>
<span class="line"><span style="color:#E45649;">				_id</span><span style="color:#0184BC;">:</span><span style="color:#4078F2;"> ObjectID</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;5fa5164f95060000060078af&#39;</span><span style="color:#383A42;">),</span></span>
<span class="line"><span style="color:#383A42;">			},</span></span>
<span class="line"><span style="color:#383A42;">			{</span></span>
<span class="line"><span style="color:#E45649;">				$set</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">					qty</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 100</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">				},</span></span>
<span class="line"><span style="color:#383A42;">			}</span></span>
<span class="line"><span style="color:#383A42;">		)</span></span>
<span class="line"><span style="color:#383A42;">	} </span><span style="color:#A626A4;">catch</span><span style="color:#383A42;"> (e) {</span></span>
<span class="line"><span style="color:#383A42;">		console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(e)</span></span>
<span class="line"><span style="color:#383A42;">	} </span><span style="color:#A626A4;">finally</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// 关闭数据库连接</span></span>
<span class="line"><span style="color:#A626A4;">		await</span><span style="color:#383A42;"> client.</span><span style="color:#4078F2;">close</span><span style="color:#383A42;">()</span></span>
<span class="line"><span style="color:#383A42;">	}</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">run</span><span style="color:#383A42;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 开始连接</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// client.connect().then(() =&gt; {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//   // 连接成功了</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// }).catch(() =&gt; {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//   console.log(&#39;连接失败了&#39;)</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><p><a href="https://www.yuque.com/lipengzhou/mongodb/vgudno" target="_blank" rel="noreferrer">更多用法参考</a></p><h2 id="使用-mongoose" tabindex="-1">使用 mongoose <a class="header-anchor" href="#使用-mongoose" aria-label="Permalink to &quot;使用 mongoose&quot;">​</a></h2><p>Mongoose 是一个对象文档模型库，官网 <a href="http://www.mongoosejs.net/" target="_blank" rel="noreferrer">http://www.mongoosejs.net/</a></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">//1. 安装 mongoose</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//2. 导入 mongoose</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> mongoose</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;mongoose&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//设置 strictQuery 为 true你可以将 Mongoose 的 strictQuery 选项设置为 true，这将强制 Mongoose</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 检查查询条件中的所有字段是否已定义。如果查询条件中存在未定义的字段，则 Mongoose 会引发一个错误</span></span>
<span class="line"><span style="color:#383A42;">mongoose.</span><span style="color:#4078F2;">set</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;strictQuery&#39;</span><span style="color:#383A42;">, </span><span style="color:#986801;">true</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//3. 连接 mongodb 服务                        数据库的名称</span></span>
<span class="line"><span style="color:#383A42;">mongoose.</span><span style="color:#4078F2;">connect</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;mongodb://127.0.0.1:27017/bilibili&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//4. 设置回调</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 设置连接成功的回调  once 一次   事件回调函数只执行一次</span></span>
<span class="line"><span style="color:#383A42;">mongoose.</span><span style="color:#E45649;">connection</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">once</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;open&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;连接成功&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // app.listen(8080);</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 设置连接错误的回调</span></span>
<span class="line"><span style="color:#383A42;">mongoose.</span><span style="color:#E45649;">connection</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">on</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;error&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;连接失败&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">}); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//设置连接关闭的回调</span></span>
<span class="line"><span style="color:#383A42;">mongoose.</span><span style="color:#E45649;">connection</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">on</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;close&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;连接关闭&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">}); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//关闭 mongodb 的连接</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//   mongoose.disconnect();</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// }, 2000)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,10),o=[e];function t(c,r,i,A,y,b){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
