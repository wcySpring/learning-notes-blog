>[success] # 等距布局
* 项目中经常需要如下布局形式
![](images/screenshot_1653488902594.png)
* 如果使用flex 的**justify-content: space-between;** 当内容没有完全占满整个容器效果
![](images/screenshot_1653488982827.png)

* 想利用flex 达到效果，第一种方法计算法，以当前案例来说外层容器为430，每个容器宽度为100，则每个容器中间为10且最后4n的元素右边距为0
~~~
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.content{
			display: flex;
			flex-wrap: wrap;
			background-color: antiquewhite;
			width: 430px;
		}
		.content > .item{
			width: 100px;
			height: 100px;
			margin-right: 10px;
			margin-bottom: 10px;
			background-color: rebeccapurple;
		}
		.content > .item:nth-child(4n){
			margin-right: 0px;

		}
	</style>
</head>
<body>
	<div class="content">
		<div class="item">1</div>
		<div class="item">2</div>
		<div class="item">3</div>
		<div class="item">4</div>
		<div class="item">5</div>
		<div class="item">5</div>
	</div>
</body>
</html>

~~~
* **推荐**使用占位法，将占位元素宽度设置和内容元素一样，占位元素不要设置高度，占位元素个数为**列数减-2** 即当前四列则4-2，两个占位元素，好处不用计算
~~~
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.content{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			background-color: antiquewhite;
			width: 430px;
		}
		.content > .item{
			width: 100px;
			height: 100px;
			margin-bottom: 10px;
			background-color: rebeccapurple;
		}
		.content > i{
			width: 100px;

		}
	</style>
</head>
<body>
	<div class="content">
		<div class="item">1</div>
		<div class="item">2</div>
		<div class="item">3</div>
		<div class="item">4</div>
		<div class="item">5</div>
		<div class="item">5</div>
		<i></i><i></i>
	</div>
</body>
</html>

~~~