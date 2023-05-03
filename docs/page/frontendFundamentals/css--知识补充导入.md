>[success] # css 导入@import
[参考](https://segmentfault.com/a/1190000000369549)

>[success] # link 元素导入
* **link元素**是**外部资源链接**元素，规范了**文档与外部资源**的关系
* 一般声明在`head` 元素中，常见两个元素`href` 和 `rel`
* * **href属性**指定被链接资源的URL。 URL 可以是绝对的，也可以是相对的
* * **rel**指定链接类型,例如`icon：站点图标`,`stylesheet：CSS样式` [更多类型参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types)
~~~html
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- 导入css 外部资源 -->
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <!-- 导入 站点图标 -->
        <link rel="icon" href="img/favicon.ico" />
    </head>
~~~
