>[success] # Web字体
通过**font-family** 属性设置**font字体**，设置完后浏览器会在所在系统找到可用的字体，如果不设置会找到浏览器默认设置的系统字体，想设置系统额外的字体就需要第三方的字体包，整个过程
 1. 如果有系统字体使用系统字体
 2. 系统没有对应字体的画但且指定引入的字体包文件，字体包会被下载
 3. 浏览器会根据使用的字体在下载的字体文件中查找、解析、使用对应的字体
 4. 在浏览器中使用对应的字体显示内容
 
>[danger] ##### 使用下载的字体包
* 常见的字体格式
~~~
1.	字体格式
不同浏览器所支持的字体格式是不一样的，我们有必要了解一下有关字体格式的知识。
1、TureTpe(.ttf)格式
.ttf字体是Windows和Mac的最常见的字体，是一种RAW格式，支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+；
2、OpenType(.otf)格式
.otf字体被认为是一种原始的字体格式，其内置在TureType的基础上，支持这种字体的浏览器有Firefox3.5+、Chrome4.0+、Safari3.1+、Opera10.0+、iOS Mobile、Safari4.2+；
3、Web Open Font Format(.woff)格式
woff字体是Web字体中最佳格式，他是一个开放的TrueType/OpenType的压缩版本，同时也支持元数据包的分离，支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+；
4、Embedded Open Type(.eot)格式
.eot字体是IE专用字体，可以从TrueType创建此格式字体，支持这种字体的浏览器有IE4+；
5、SVG(.svg)格式
.svg字体是基于SVG字体渲染的一种格式，支持这种字体的浏览器有Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+
~~~
* **@font-face** 用于加载一个自定义的字体 **font-family** 给引入字体资源统一起一个名字，然后在body使用 **font-family** 来注明使用的字体
* **url**指定资源的路径，**format**用于帮助浏览器快速识别字体的格式;
~~~css
@font-face {
    font-family: 'wjs'; //自定义的字体名称
    src: url('../fonts/MiFie-Web-Font.eot'); /* IE9*/
    src: url('../fonts/MiFie-Web-Font.eot') format('embedded-opentype'), /* IE6-IE8 */
    url('../fonts/MiFie-Web-Font.woff') format('woff'), /* chrome、firefox */
    url('../fonts/MiFie-Web-Font.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../fonts/MiFie-Web-Font.svg') format('svg'); /* iOS 4.1- */
}
body{
 font-family: "wjs" // 使用起名字的字体
}
~~~
>[danger] ##### 字体图标
1. 字体可以设计成各式各样的形状，因此也可将一些图标设置成字体，好处是
 1.1. 放大不会失真
 1.2. 可以任意切换颜色
 1.3. 用到很多个图标时，文件相对图片较小
* 使用原理
常见的字体图标使用时候都需要先指定一个class 在指定一个图标class 大概用法如下
~~~
<i class="iconfont icon-xxx"></i>
~~~
其实是先引入了字体图标例如
~~~
@font-face {font-family: 'iconfont';
    src: url('iconfont.eot');
    src: url('iconfont.eot?#iefix') format('embedded-opentype'),
    url('iconfont.woff') format('woff'),
    url('iconfont.ttf') format('truetype'),
    url('iconfont.svg#iconfont') format('svg');
}
~~~
然后指定一个class 名使用这个指定图标字体`iconfont`
~~~css

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
~~~
在使用伪类将对应字写入到class 中例如
~~~css
.icon-xxx::before{
    content: "\e908"; //指定显示的内容
}
~~~
* 字体库
[阿里字体库](https://www.iconfont.cn/)

>[danger] ##### 网站字体库
https://www.fonts.net.cn/fonts-zh-1.html
>[danger] ##### 字体库格式转换
https://font.qqe2.com/#