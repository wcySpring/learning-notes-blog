>[success] # css 常用函数
* 比如**rgb/rgba/translate/rotate/scale**等

>[danger] ##### 其他常用函数 --  var
* **var:** 使用CSS定义的变量，css 也可以自定义属性，自定义规则需要，**属性名**需要以**两个减号**（--）**开始**，定义属性值可以是**任意有效的css值**
* 规则集定义的选择器, 是自定义属性的可见作用域(只在选择器内部有效)，为了让全局自定义属性生效推荐将自定义属性定义在**html**中，也可以使用 `:root` 选择器;

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		:root{
			/* 自定义的变量名需要-- 开头，后面可以配置任意css 属性
				下面案例定义两个属性名分别是--background-color 和
				--main-widthA
			*/
			--background-color:red;
			--main-widthA:130px;
		}
		.main{
			/* 通过var 使用自定义函数 */
			width: var(--main-widthA);
			background-color: var(--background-color);

			/* 不生效不在同一个作用域 */
			color: var(--font-color);

		}
		.other{
			/* 定义 */
			--font-color:#eee;
			/* 使用 */
			color: var(--font-color);

		}
	</style>
</head>
<body>
	<div class="other">123</div>
	<div class="main">
		123
	</div>
</body>
</html>
~~~
>[danger] 其他常用函数 -- calc
* 计算支持加减乘除的运算,**\+ 和 -** 运算符的两边必须要有**空白字符**
~~~
div{
 calc(100% - 23px);
}
~~~