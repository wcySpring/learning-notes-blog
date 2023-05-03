[TOC]
>[success] # ES Modules 用法

1. ESM 自动采用**严格模式**，忽略 'use strict'
2. 每个 ES Module 都是运行在**单独的私有作用域中**，在不导出的情况下其他文件访问不到别的文件变量
3. ESM 是通过 **CORS（跨源资源共享） 的方式请求外部 JS 模块的**  （[CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)）

4. ESM 的 script 标签会延**迟执行脚本(等同于 script 标签的 defer 属性)**，就是说HTML 文件呈现完成后才开始**执行下载的资源**并不会阻碍**dom 树渲染**

>[danger] ##### 在页面执行 ESM 标准的Js 代码
1. HTML页面可以使用带有特殊 **type="module" 属性的 `<script>` 标记添加模块**，浏览器自动当作ES module引入内联脚本或者外部脚本,这样就可区分`script`标签采用的是那种方式引用

2. 下面案例可以发现在没有 type="module" 属性的 `<script>` 标签中 使用import和 export 会报错的，只有在加**type="module"  属性的`<script>`标签才可以使用import和 export**
~~~html
 <script type="module">
  import num from './test.js'
  export default 2
</script>

<!-- 报错信息 Uncaught SyntaxError: Cannot use import statement outside a module -->
<!-- <script>
  import num from './test.js'
  export default 2
</script>-->
~~~
>[danger] ##### ESM 采用了严格模式
1. ESM 自动采用**严格模式**,严格模式下'禁止this关键字指向全局对象',下面案例使用ESM 规范打印的this 是undefined，非ESM 打印的是window 对象
~~~html
<script type="module">
  console.log(this,1) // undefined
</script>
<script>
  console.log(this, 2) // window
</script>
~~~
 >[danger] ##### 每个 ES Module 都是运行在单独的私有作用域中
1. 之前在了解js模块化历史的时候，有一段时间大家都在变相解决模块成员不可以在模块外部被访问或者修改在ESM 新的规范里已经支持了'**每个 ES Module 都是运行在单独的私有作用域中**'
2. 下面案例中使用ESM 规范的foo变量是在其他模块**不能访问**的，但是非ESM标准的foo1 就可以在其他模块被访问
~~~html
<script type="module">
  var foo = 100
  console.log(foo)
</script>
<script type="module">
  console.log(foo) // 报错foo is not defined
</script>

<script>
  var foo1 = 100
  console.log(foo1)
</script>
<script>
  console.log(foo1) // 100
</script>
~~~
>[danger] ##### ESM 是通过 CORS 的方式请求外部 JS 模块的
1. 在没有 type="module" 属性的 `<script>` 标签，我通常利用`<script>`能过跨域来解决一些跨域问题但是在有 type="module" 属性的 `<script>` 标签，想访问外部链接形式是会**产生跨域问题**，想解决需要将这个外部链接的cors头配置正确
2. 下面例子中，**第一个案例**访问的是本地文件不会有跨域，**第二个案例**访问了一个不支持跨域的cdn导致请求失败，**第三个**通过一个支持跨域cdn 请求成功
3. src 也不能是文件形式（**通过本地加载Html 文件 (比如一个 file:// 路径的文件), 你将会遇到 CORS 错误，因为Javascript 模块安全性需要**），需要启动一个服务来
4. 当通过import xx from 'url' 这个url的cors头配置正确是**必修允许跨域的**
[参考文章](https://zhuanlan.zhihu.com/p/44362738)
~~~html
<!-- 案例一 -->
<script type="module" src='./test.js'></script>
<!-- 案例二 会产生跨域报错-->
<script type="module" src='https://lib.baomitu.com/react/17.0.1/cjs/react-jsx-dev-runtime.development.js'></script>
<!-- 案例三 cdn开启了跨域所以不报错-->
<script type="module" src="https://lib.baomitu.com/vue/3.0.2/vue.esm-browser.prod.js"></script>
~~~
>[danger] ##### ESM 的 script 标签会延迟执行脚本(等同于 script 标签的 defer 属性)
1. **defer 属性的 JS 文件将与其他文件同时下载**，仅在 HTML 文件呈现完成后才开始**执行下载的资源**，而不是像 async 在资源下载完成后立即执行。 因此，**延迟文件的下载和执行都不会阻塞渲染。**
2. defer **加载顺序将始终按照执行**它会等待**DOM Tree**构建完成，DOMContentLoaded事件之前先执行defer中的代码

[参考链接](https://www.kancloud.cn/cyyspring/more/2401820)