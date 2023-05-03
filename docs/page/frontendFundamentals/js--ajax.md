>[success] # 前后端分离
1. **服务器端渲染（SSR，server side render）**：客户端发出请求 -> 服务端接收请求并返回相应HTML文档 -> 页面刷新，客户端加载新的HTML文档，页**面是通过后端渲染来完成的**
* 产生弊端
当用户点击页面中的某个按钮向服务器发送请求时，页面本质上只是**一些数据发生了变化**，而此时服务器却**要将重绘的整个页面再返回给浏览器加载**，这显然有悖于程序员的“DRY（ Don‘t repeat yourself ）”原则；只是一些数据的变化却迫使服务器要返回整个HTML文档，这本身也会给**网络带宽带来不必要的开销**

2. **客户端渲染**:只向服务器请求新的数据，并且在阻止页面刷新的情况下，动态的替换页面中展示的数据

>[success] # ajax
1. **ajax 全称 Asynchronous JavaScript + XML（异步JavaScript和XML）**,2005年被Jesse James Garrett提出的新术语，用来描述一种使用现有技术集合的新方法，包括: HTML 或 XHTML,  CSS, JavaScript, DOM, XML, XSLT, 以及最重要XMLHttpRequest。当使用结合了这些技术的AJAX模型以后， **网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面**。这使得程序能够更快地回应用户的操作。尽管X在Ajax中代表XML, 但**由于JSON的许多优势，比如更加轻量以及作为Javascript的一部分，目前JSON的使用比XML更加普遍**。JSON和XML都被用于在Ajax模型中打包信息。

[参考资料mdn Ajax](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX)

>[success] # 了解HTTP
1. **HTTP超文本传输协议**
2. 各个版本
2.1. **HTTP/0.9**，发布于1991年，只支持GET请求方法获取文本数据，当时主要是为了获取HTML页面内容
2.2. **HTTP/1.0**，发布于1996年，支持POST、HEAD等请求方法，支持请求头、响应头等，支持更多种数据类型(不再局限于文本数据)，但是浏览器的每次请求都需要与服务器建立一个TCP连接，请求处理完成后立即断开TCP连接，每次建立连接增加了性能损耗
2.3. **HTTP/1.1**，发布于1997年，增加了PUT、DELETE等请求方法，采用持久连接(Connection: keep-alive)，多个请求可以共用同一个TCP连接
2.4. **HTTP/2.0**，2015年
2.5. **HTTP/3.0**，2018年
>[danger] ##### 状态码
~~~
HTTP状态码  xhr.status/xhr.statusText
       + 200 OK 
       + 202 Accepted ：服务器已接受请求，但尚未处理（异步）
       + 204 No Content：服务器成功处理了请求，但不需要返回任何实体内容
       + 206 Partial Content：服务器已经成功处理了部分 GET 请求（断点续传 Range/If-Range/Content-Range/Content-Type:”multipart/byteranges”/Content-Length….）
       + 301 Moved Permanently 永久转移 「域名迁移」
       + 302 Move Temporarily 临时转移 「负载均衡」
       + 304 Not Modified
       + 305 Use Proxy
       + 400 Bad Request : 请求参数有误
       + 401 Unauthorized：权限（Authorization）
       + 403 Forbidden 服务器拒绝执行「为啥可能会已响应主体返回」
       + 404 Not Found 地址错误
       + 405 Method Not Allowed 请求方式不被允许
       + 408 Request Timeout 请求超时
       + 500 Internal Server Error  未知服务器错误
       + 503 Service Unavailable  超负荷
       + 505 HTTP Version Not Supported
~~~
>[danger] ##### 请求和响应
* 如图请求格式
![](images/screenshot_1640673068289.png)
![](images/screenshot_1640672623964.png)
* 如图响应格式
![](images/screenshot_1663570996292.png)
* get 请求
![](images/screenshot_1640674578592.png)

>[danger] ##### 请求头参数

1. **content-length**：文件的大小长度
2. **keep-alive**：http是基于TCP协议的，但是通常在进行一次请求和响应结束后会立刻中断；
2.1. 在http1.0中，如果想要继续保持连接：浏览器需要在请求头中添加 connection: keep-alive；服务器需要在响应头中添加 connection:keey-alive；当客户端再次放请求时，就会使用同一个连接，直接一方中断连接；
2.2. 在http1.1中，所有连接默认是 connection: keep-alive的；不同的Web服务器会有不同的保持 keep-alive的时间；Node中默认是5s中；
3. **accept-encoding**：告知服务器，客户端支持的文件压缩格式，比如js文件可以使用gzip编码，对应 .gz文件；
4. **accept**：告知服务器，客户端可接受文件的格式类型；
5. **user-agent**：客户端相关的信息；
>[danger] #####  content-type
1. 请求头和响应头中'**Content-Type**' ，用于定义用户的浏览器或相关设备如何显示将要加载的数据，或者如何处理将要加载的数据
* **value 值介绍**
1. **application/x-www-form-urlencoded**：表示数据被编码成以 '&' 分隔的键 - 值对，同时以 '=' 分隔键和值
2. **application/json**：表示是一个json类型；
3. **text/plain**：表示是文本类型；
4. **application/xml**：表示是xml类型；
5. **multipart/form-data**：表示是上传文件，指定传输数据为二进制类型，比如图片、mp3、文件；
6. **application/octet-stream** ： 二进制流数据（如常见的文件下载）
7. **image/png**： png图片格式
8. **text/xml** ： XML格式(忽略xml头所指定编码格式而默认采用us-ascii编码)
9. **text/html** ： HTML格式
*****
* **请求设置  `content-type`**
1. 设置在发送请求页面的**header**中
~~~html
<header>
  <meta content="text/html" charset="utf-8"/>
</header>
~~~
2. 设置在**form**表单提交的**enctype**参数中，只能指定**application/x-www-form-urlencoded和multipart/form-data**这两种类型默认是**application/x-www-form-urlencoded**类型，浏览器会把表单中发送的数据编码为`“key=value”`对的形式当向服务器发送大量的文本、包含非ASCII字符的文本或二进制数据时，例如**上传文件时**，选择**multipart/form-data**
~~~html
<form action="" enctype="multipart/form-data"></form>
<form action="" enctype="application/x-www-form-urlencoded"></form>
~~~
3. 当使用下面介绍`XMLHttpRequest` 可设置参数，xhr.send(data)中data参数的数据类型会影响请求头部content-type的默认值，如果用xhr.setRequestHeader()手动设置了中content-type的值，以上默认值就会被覆盖。
~~~
var str = 'DOMString就等同于JS中的普通字符串'；
var xhr = new XMLHttpRequest();
xhr.open('POST', '/server', true);
xhr.onload = function(e) {};
//xhr.send(data)的参数data是DOMString 类型，content-type默认值为text/plain;charset=UTF-8
xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
xhr.send(str);

~~~
*****
* **响应 设置`content-type`**
1. 当使用下面介绍`XMLHttpRequest` 可设置参数，**xhr.response的数据类型**，可设置的类型

|responseType值|	xhr.response 数据类型	|说明|
| --- | --- | --- |
|""	|String字符串	|默认值(在不设置responseType时)|
|"text"	|String字符串	| |
|"document"	|Document对象|	希望返回 XML 格式数据时使用|
|"json"	|javascript对象	|存在兼容性问题，IE10/IE11不支持|
|"blob"|	Blob对象	| |
|"arrayBuffer"	|ArrayBuffer对象	| |
————————————————
版权声明：本文为CSDN博主「借物小人」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u012894692/article/details/88846401
>[info] ## XMLHttpRequest
1. `XMLHttpRequest`（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容。`XMLHttpRequest`在[AJAX]编程中被大量使用
[参考资料MDN # XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
2. 使用四步骤
2.1. 创建网络请求的**AJAX**对象（使用XMLHttpRequest）
2.2. 监听XMLHttpRequest对象状态的变化，或者监听**onload**事件（请求完成时触发）
2.3. 配置网络请求（通过**open**方法）
2.4. 发送**send**网络请求
~~~
let xhr = new XMLHttpRequest; // 无参时候可以不加括号
xhr.open('GET', '/userInfo?id=1'); //=>router Query
// xhr.open('GET', '/userInfo/1'); //=>这种router Params后端处理解析url 获取参数

xhr.onreadystatechange = function () {
    if (xhr.status !== 200) return;
     /**监听请求的过程，在不同的阶段做不同的处理「包含获取服务器的响应信息」
     + ajax状态  xhr.readyState
       + 0 UNSENT  代理被创建，但尚未调用 open() 方法
       + 1 OPENED    方法已经被调用
       -----
       + 2 HEADERS_RECEIVED 响应头信息已经返回
       + 3 LOADING 响应主体信息正在处理
       + 4 DONE 响应主体信息已经返回**/
    if (xhr.readyState === 4) { // 要等到数据全部返回因此判断状态为4
        console.log(xhr.response);
    }
};
xhr.send();
~~~
>[danger] ##### XMLHttpRequest其他事件监听
1. **onloadstart**：请求开始。
2. **onprogress**： 一个响应数据包到达，此时整个 response body 都在 response 中。
3. **onabort**：调用 xhr.abort() 取消了请求。
4. **onerror**：发生连接错误，例如，域错误。不会发生诸如 404 这类的 HTTP 错误。
5. **onload**：请求成功完成。
6. **ontimeout**：由于请求超时而取消了该请求（仅发生在设置了 timeout 的情况下）。
7. **onloadend**：在 load，error，timeout 或 abort 之后触发。

* **注**: onreadystatechange 和 onload。区别只要进入onload请求中，一定是已经到4这个状态了
*****
* 下面案例中设置了` xhr.responseType` 类型决定 **`content-type`**  返回的类型，获取HTTP响应的网络状态，可以通过**status和statusText**来获取，不同的是，status 属性保存的状态码是以**数字表示**的，而 statusText 属性保存的状态码是以**字符串表示**的
~~~
  var formData = new FormData();
  formData.append('username', 'johndoe');
  formData.append('id', 123456);
  //创建xhr对象 
  var xhr = new XMLHttpRequest();
  //设置xhr请求的超时时间
  xhr.timeout = 3000;
  //设置响应返回的数据格式
  xhr.responseType = "text";
  //创建一个 post 请求，采用异步
  xhr.open('POST', '/server', true);
  //注册相关事件回调处理函数
  xhr.onload = function(e) { 
    if(this.status == 200||this.status == 304){
        alert(this.responseText);
    }
  };
  xhr.ontimeout = function(e) { ... };
  xhr.onerror = function(e) { ... };
  xhr.upload.onprogress = function(e) { ... };
  
  //发送数据
  xhr.send(formData);

~~~

>[danger] ##### 请求方式
~~~
 1.method 请求方式：GET(get/delete/head/options...) / POST(post/put/patch...) 
   1.1.GET请求传递给服务器的信息，除了请求头传递以外，要求基于URL问号传参传递给服务器 
         xhr.open('GET', './1.json?lx=1&name=xxx') 
   1.2.POST请求要求传递给服务器的信息，是基于请求主体传递
         xhr.send('lx=1&name=xxx')
2.如图是请求格式请求头和请求体直接会有'/r/n/r/n' 作为分割，其中post 请求参数会在请求体中
，get 请求参数是在链接上拼接的
~~~
* 如图请求格式
![](images/screenshot_1640673068289.png)
![](images/screenshot_1640672623964.png)
* get 请求
![](images/screenshot_1640674578592.png)
>[danger] ##### 发送请求和响应 设置content-type

1. 请求头和响应头中'**Content-Type**' ，用于定义用户的浏览器或相关设备如何显示将要加载的数据，或者如何处理将要加载的数据
2. **发送请求**设置 **'Content-Type**' 举例：
 2.1.格式为**urlencoded**，设置为 '`Content-Type:x-www-form-urlencoded`'格式的字符串（ **将键值对的参数用&连接起来，如果有空格，将空格转换为`+`加号；有特殊符号，将特殊符号转换为`ASCII HEX`值**），是浏览器默认的编码格式。对于Get请求，是将参数转换`?key=value&key=value`格式，连接到url后，**举个例子**参数在请求体中 格式 `'lx=1&name=xxx`' 我们在开发过程中使用'qs' 库`Qs.stringify/parse`:**实现对象和urlencoded格式字符串之间的转换**
~~~
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(Qs.stringify({
        lx: 0,
        name: 'xxx'
    }))
// 不用qs 自己拼接字符串
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
xhr.send("name=why&age=18&address=广州市")
~~~
当然如果不想引入qs 库也可以使用'URLSearchParams'但是URLSearchParams 不支持所有的浏览器
~~~
let param = new URLSearchParams()
param.append('username', 'admin')
param.append('pwd', 'admin')

param.toString() //  'username=admin&pwd=admin'
~~~
   2.2. **formdata** '`Content-Type:form-data`' 主要应用于文件的上传或者表单数据提交使用FormData,`form-data`格式一般是用来进行文件上传的。使用表单上传文件时，必须让表单的 enctype 等于`multipart/form-data`，因为该值默认值为`application/x-www-form-urlencoded`，`multipart/form-data`是基于**post**方法来传递数据的，另外，该格式会生成一个`boundary`字符串来分割请求头与请求体的
* 分割格式是 `boundary=${boundary}`之后就是请求体内容了，请求体内容各字段之间以`--${boundary}`来进行分割,以`--${boundary}--`来结束请求体内容
~~~
// 开始分割
boundary=----WebKitFormBoundaryyb1zYhTI38xpQxBK

------WebKitFormBoundaryyb1zYhTI38xpQxBK
Content-Disposition: form-data; name="city_id"

1

------WebKitFormBoundaryyb1zYhTI38xpQxBK  // 请求体内容各字段之间 分割
Content-Disposition: form-data; name="company_id"

2
------WebKitFormBoundaryyb1zYhTI38xpQxBK
Content-Disposition: form-data; name="file"; filename="chrome.png"
Content-Type: image/png

PNG ... content of chrome.png ...
------WebKitFormBoundaryyb1zYhTI38xpQxBK-- // 结束分割

~~~

~~~
   xhr.setRequestHeader('Content-Type', 'multipart/form-data');
   let fd = new FormData;
   fd.append('lx', 0);
   fd.append('name', 'xxx');
   xhr.send(fd);
~~~
 2.3. raw字符串格式
~~~
       普通字符串  -> text/plain
       JSON字符串 -> application/json  => JSON.stringify/parse  「常用」
       XML格式字符串 -> application/xml
~~~
 2.4. binary进制数据文件「buffer/二进制...」
~~~
   一般也应用于文件上传
   图片 -> image/jpeg
   EXCEL -> application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
~~~
3. **响应主体信息** xhr.response/responseText/responseXML， 服务器返回的响应主体信息的格式
3.1. 字符串「一般是JSON字符串」 「最常用」
3.2. XML格式数据
3.3. 文件流格式数据「buffer/二进制...」

[可参考链接谈谈axios配置请求头content-type ](https://www.cnblogs.com/dreamcc/p/10752604.html)
