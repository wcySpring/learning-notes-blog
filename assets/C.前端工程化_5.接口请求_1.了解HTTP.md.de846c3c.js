import{_ as s,o as n,c as o,V as t}from"./chunks/framework.96db2af4.js";const l="/learning-notes-blog/images/2023-10-05-19-31-15.png",e="/learning-notes-blog/images/2023-10-05-19-31-31.png",a="/learning-notes-blog/images/2023-10-05-19-32-50.png",A=JSON.parse('{"title":"","description":"了解HTTP","frontmatter":{"description":"了解HTTP"},"headers":[],"relativePath":"C.前端工程化/5.接口请求/1.了解HTTP.md","filePath":"C.前端工程化/5.接口请求/1.了解HTTP.md","lastUpdated":1697158280000}'),p={name:"C.前端工程化/5.接口请求/1.了解HTTP.md"},r=t('<p><strong>HTTP超文本传输协议</strong>，HTTP最初的目的是为了提供一种发布和接收HTML页面的方法。通过HTTP或者HTTPS协议请求的资源由统一资源标识符（URI）来标识，后续出现了版本升级</p><ul><li><strong>HTTP/0.9</strong>，发布于1991年，只支持GET请求方法获取文本数据，当时主要是为了获取HTML页面内容</li><li><strong>HTTP/1.0</strong>，发布于1996年，支持POST、HEAD等请求方法，支持请求头、响应头等，支持更多种数据类型(不再局限于文本数据)，但是浏览器的每次请求都需要与服务器建立一个TCP连接，请求处理完成后立即断开TCP连接，每次建立连接增加了性能损耗</li><li><strong>HTTP/1.1</strong>，发布于1997年，增加了PUT、DELETE等请求方法，采用持久连接(Connection: keep-alive)，多个请求可以共用同一个TCP连接</li><li><strong>HTTP/2.0</strong>，2015年</li><li><strong>HTTP/3.0</strong>，2018年</li></ul><h2 id="请求格式" tabindex="-1">请求格式 <a class="header-anchor" href="#请求格式" aria-label="Permalink to &quot;请求格式&quot;">​</a></h2><p><img src="'+l+'" alt=""></p><p><img src="'+e+'" alt=""></p><h2 id="响应格式" tabindex="-1">响应格式 <a class="header-anchor" href="#响应格式" aria-label="Permalink to &quot;响应格式&quot;">​</a></h2><p><img src="'+a+`" alt=""></p><h2 id="http-状态码" tabindex="-1">HTTP 状态码 <a class="header-anchor" href="#http-状态码" aria-label="Permalink to &quot;HTTP 状态码&quot;">​</a></h2><p><strong>2xx（成功）</strong></p><ul><li><p><code>200 OK</code>：请求成功。这是最常见的状态码，表示服务器已成功处理了请求。</p></li><li><p><code>202 Accepted</code>：服务器已接受请求，但尚未处理。通常用于异步操作，表示请求已被接受，但处理可能在后台进行，可能需要一些时间。</p></li><li><p><code>204 No Content</code>：服务器成功处理了请求，但不需要返回任何实体内容。例如，当客户端使用DELETE方法请求删除资源时，服务器可以返回此代码。</p></li><li><p><code>206 Partial Content</code>：服务器已经成功处理了部分 GET 请求。这通常用于断点续传，允许客户端在中断后继续下载或获取部分数据。</p></li></ul><p><strong>3xx（重定向）</strong></p><ul><li><p><code>301 Moved Permanently</code>：请求的URL已被永久移除，并被永久地分配到了新的URL。常用于域名迁移。</p></li><li><p><code>302 Move Temporarily</code>：请求的资源现在临时从不同的URL响应。常用于负载均衡或临时的资源重定向。</p></li><li><p><code>304 Not Modified</code>：资源自上次请求后没有被修改，通常与缓存头一起使用，告诉客户端可以使用缓存的版本。</p></li><li><p><code>305 Use Proxy</code>：请求的资源必须通过代理访问。</p></li></ul><p><strong>4xx（客户端错误）</strong></p><ul><li><p><code>400 Bad Request</code>：请求参数有误，服务器无法理解或无法处理客户端的请求。</p></li><li><p><code>401 Unauthorized</code>：权限不足。表示客户端尝试访问需要身份验证的资源，但提供的凭证是无效的或没有提供。通常需要客户端提供有效的身份验证凭证。</p></li><li><p><code>403 Forbidden</code>：服务器拒绝执行请求。与401不同，403表示客户端的身份已被服务器确认，但它没有权限访问请求的资源。服务器可能会在响应主体中返回更多信息，解释为什么请求被拒绝。</p></li><li><p><code>404 Not Found</code>：请求的资源在服务器上不存在或地址错误。</p></li><li><p><code>405 Method Not Allowed</code>：请求的HTTP方法不适用于目标资源。</p></li><li><p><code>408 Request Timeout</code>：客户端没有在服务器预期的时间内完成请求。</p></li></ul><p><strong>5xx（服务器错误）</strong></p><ul><li><p><code>500 Internal Server Error</code>：服务器遇到了一个未知的错误，导致无法完成客户端的请求。</p></li><li><p><code>503 Service Unavailable</code>：服务器目前无法处理请求，通常是因为超负荷或维护。客户端应稍后重试。</p></li><li><p><code>505 HTTP Version Not Supported</code>：服务器不支持请求中使用的HTTP版本。</p></li></ul><h2 id="请求头中的一些参数" tabindex="-1">请求头中的一些参数 <a class="header-anchor" href="#请求头中的一些参数" aria-label="Permalink to &quot;请求头中的一些参数&quot;">​</a></h2><p><strong>1. content-length</strong></p><ul><li><strong>描述</strong>：指定HTTP消息正文的长度。这是一个十进制数，表示在Content-Type头字段中指定的数据的八位字节长度。</li><li><strong>示例</strong>：<code>Content-Length: 1234</code></li><li><strong>用途</strong>：允许接收方知道何时消息/传输结束，特别是对于持久连接。</li></ul><p><strong>2. keep-alive</strong></p><ul><li><strong>描述</strong>：用于管理持久连接的超时和最大请求数。</li><li><strong>示例</strong>：<code>Keep-Alive: timeout=5, max=1000</code></li><li><strong>用途</strong>：在HTTP/1.0中，连接默认为非持久。使用Keep-Alive头可以使连接持久。在HTTP/1.1中，所有连接默认都是持久的。</li></ul><p><strong>3. accept-encoding</strong></p><ul><li><strong>描述</strong>：告知服务器客户端支持的内容编码方式。</li><li><strong>示例</strong>：<code>Accept-Encoding: gzip, deflate, br</code></li><li><strong>用途</strong>：允许服务器返回最适合客户端的编码格式，从而进行内容压缩，加快传输速度。</li></ul><p><strong>4. accept</strong></p><ul><li><strong>描述</strong>：告知服务器客户端可以处理的媒体类型。</li><li><strong>示例</strong>：<code>Accept: text/html, application/xhtml+xml, application/xml</code></li><li><strong>用途</strong>：允许服务器返回最适合客户端的内容类型。</li></ul><p><strong>5. user-agent</strong></p><ul><li><strong>描述</strong>：提供关于客户端（如浏览器或其他客户端）的信息。</li><li><strong>示例</strong>：<code>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537</code></li><li><strong>用途</strong>：服务器可以根据User-Agent提供的信息为特定的客户端类型或版本提供定制的内容。</li></ul><p><strong>6. content-type</strong></p><ul><li><strong>描述</strong>：定义数据的媒体类型，告诉接收方如何解析正文内容。</li><li><strong>示例</strong>：<code>Content-Type: application/json</code></li><li><strong>用途</strong>：确保接收方正确解析消息正文。</li></ul><h3 id="content-type-中属性补充说明" tabindex="-1">content-type 中属性补充说明 <a class="header-anchor" href="#content-type-中属性补充说明" aria-label="Permalink to &quot;content-type 中属性补充说明&quot;">​</a></h3><p><strong>值介绍</strong>：</p><ul><li><strong>application/x-www-form-urlencoded</strong>：通常用于提交表单数据，数据被编码为键值对。</li><li><strong>application/json</strong>：JSON格式数据，常用于现代web应用程序的API请求和响应。</li><li><strong>text/plain</strong>：纯文本格式，不包含任何格式化的数据。</li><li><strong>application/xml</strong>：XML格式数据，常用于数据交换。</li><li><strong>multipart/form-data</strong>：用于文件上传，允许发送表单数据和文件。</li><li><strong>application/octet-stream</strong>：二进制流数据，通常用于文件下载。</li><li><strong>image/png</strong>：PNG图片格式。</li><li><strong>text/xml</strong>：XML格式，但与application/xml略有不同。</li><li><strong>text/html</strong>：HTML格式，常用于web页面。</li></ul><p><strong>HTTP请求的<code>Content-Type</code>头部设置 <code>content-type</code></strong> 三种设置<code>Content-Type</code>的方法及其用途的整理：</p><ol><li>使用HTML的<code>&lt;meta&gt;</code>标签设置页面字符集,这并不直接设置HTTP请求的<code>Content-Type</code>，但它确实告诉浏览器如何解码和显示页面内容。</li></ol><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">header</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">content</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;text/html&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">charset</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;utf-8&quot;</span><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">header</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><strong>用途</strong>：确保浏览器正确解码和显示页面内容。</li><li><strong>注意</strong>：这不会影响到服务器的HTTP请求的<code>Content-Type</code>。</li></ul><ol start="2"><li>使用HTML的<code>&lt;form&gt;</code>标签的<code>enctype</code>属性 当提交一个表单时，<code>enctype</code>属性定义了数据应该如何被编码。</li></ol><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 默认方式，适用于大多数情况，数据以&quot;key=value&quot;的形式编码 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">form</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">action</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">enctype</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;application/x-www-form-urlencoded&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">form</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 当表单包含文件上传时使用，数据以多部分消息格式编码 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">form</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">action</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">enctype</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;multipart/form-data&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">form</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>用途</strong>：定义提交表单数据的编码方式。</li><li><strong>注意</strong>：<code>multipart/form-data</code>是处理文件上传的标准方法。</li></ul><ol start="3"><li>使用XMLHttpRequest设置<code>Content-Type</code> 当使用JavaScript发送HTTP请求时，可以使用<code>XMLHttpRequest</code>对象来设置请求头。</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">str</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;DOMString就等同于JS中的普通字符串&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">xhr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">XMLHttpRequest</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">open</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;POST&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;/server&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onload</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) {};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 设置请求头部的Content-Type</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setRequestHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Content-Type&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;text/plain;charset=UTF-8&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">send</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">str</span><span style="color:#ABB2BF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><strong>用途</strong>：在使用JavaScript发送HTTP请求时，定义请求体的数据格式。</li><li><strong>注意</strong>：如果不设置<code>Content-Type</code>，<code>XMLHttpRequest</code>会根据发送的数据类型为其选择一个默认值。</li></ul><p>第二种和第三种 ,对比来说第二种。浏览器会根据enctype属性的值自动设置HTTP请求的Content-Type头部。并且限制：只有两个可选的值——application/x-www-form-urlencoded和multipart/form-data。</p><p><strong>响应设置 <code>content-type</code></strong>：</p><ol><li>服务器在响应头中设置，告诉客户端如何解析响应正文。</li><li>使用<code>XMLHttpRequest</code>时，可以通过<code>xhr.responseType</code>属性获取或设置预期的响应类型。</li></ol><table><thead><tr><th>responseType值</th><th>xhr.response 数据类型</th><th>说明</th></tr></thead><tbody><tr><td>&quot;&quot;</td><td>String字符串</td><td>默认值(在不设置responseType时)</td></tr><tr><td>&quot;text&quot;</td><td>String字符串</td><td></td></tr><tr><td>&quot;document&quot;</td><td>Document对象</td><td>希望返回 XML 格式数据时使用</td></tr><tr><td>&quot;json&quot;</td><td>javascript对象</td><td>存在兼容性问题，IE10/IE11不支持</td></tr><tr><td>&quot;blob&quot;</td><td>Blob对象</td><td></td></tr><tr><td>&quot;arrayBuffer&quot;</td><td>ArrayBuffer对象</td><td></td></tr></tbody></table>`,46),c=[r];function i(d,B,g,y,u,T){return n(),o("div",null,c)}const h=s(p,[["render",i]]);export{A as __pageData,h as default};
