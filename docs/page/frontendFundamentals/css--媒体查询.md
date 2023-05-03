>[success] # 媒体查询
* 使用媒体查询能**针对不同屏幕区间设置不同的布局和样式**

>[info] ## 第一种使用 -- 通过@media和@import
~~~
<style>
/* 当屏幕小于等于 600px 使用 './css/backgroundColor.css' */
@import url('./css/backgroundColor.css') (max-width: 600px);
</style>
~~~
>[info] ## 第二种 media属性为, , 和其他HTML元素指定特定的媒体类型
~~~
<link rel="stylesheet" media="(max-width: 600px)" href="./css/backgroundColor.css">
~~~
>[info] ## 第三使用@media 包裹要变化的元素 
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		@media screen and (min-width:320px) and (max-width:375px) {
			.main{
				color: red;
			}
		}
		@media screen and (min-width:1110px) and (max-width:1800px) {
			.main{
				color: gold;
			}
		}
	</style>
</head>
<body>
	<div class="main">
		123
	</div>
</body>
</html>
~~~
>[success] # 媒体查询 - 媒体类型
上面案例种 `screen` 即是指定了随变化的媒体类型,如果不指定类型默认为`all`,分别可以指定以下类型
*  all：适用于所有设备。

* print：适用于在打印预览模式下在屏幕上查看的分页材料和文档。

* screen：主要用于屏幕。

* speech：主要用于语音合成器。
>[success] # 媒体查询 – 媒体特性
除了向上面案例设置宽度还可以设置如下属性
![](images/screenshot_1653806248896.png)
>[success] # 媒体查询 – 逻辑操作符
* and：and 操作符用于将多个媒体查询规则组合成单条媒体查询

* not：not运算符用于否定媒体查询，如果不满足这个条件则返回true，否则返回false。

* only：only运算符仅在整个查询匹配时才用于应用样式。

* , (逗号)：逗号用于将多个媒体查询合并为一个规则

>[success] # 综合案例
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            margin: 0;
            padding: 0;
        }
        .container{
            width: 100%;
            margin: 0 auto;
            height: 1000px;
            background: blue;
        }


        @media (min-width: 768px) {
            .container{
                width: 750px;
                background: green;
            }
        }

        @media (min-width: 992px) {
            .container{
                width: 970px;
                background: red;
            }
        }

        @media (min-width: 1200px){
            .container{
                width: 1170px;
                background: yellow;
            }
        }


    </style>
</head>
<body>
<!--
响应式容器：
1. 在超小屏设备的时候 768px以下      当前容器的宽度100%     背景蓝色
2. 在小屏设备的时候   768px-992px    当前容器的宽度750px    背景绿色
3. 在中屏设备的时候   992px-1200px   当前容器的宽度970px    背景红色
4. 在大屏设备的时候   1200px以上      当前容器的宽度1170px   背景黄色
-->
<div class="container"></div>
</body>
</html>
~~~