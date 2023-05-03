>[success] # event 事件对象
1. 当事件被触发时候，点击事件一些信息会被封装到一个**Event**对象中，这个对象由浏览器创建，称之为**event对象**
2. `event` 通过事件回调函数的参数获取
>[danger] ##### event 属性和方法
* **属性**
1. **type**：事件的类型；
2. **target**：当前事件发生的元素；
3. **currentTarget**：当前处理事件的元素；
4. **eventPhase**：事件所处的阶段；
5. **offsetX、offsetY**：事件发生在元素内的位置；
6. **clientX、clientY**：事件发生在客户端内的位置；
7. **pageX、pageY**：事件发生在客户端相对于document的位置；
8. **screenX、screenY**：事件发生相对于屏幕的位置；
![](images/screenshot_1658563642880.png)


~~~
<!DOCTYPE html>
<html lang="en" style="height: 200%">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.box {
				width: 100px;
				height: 100px;
				background-color: aquamarine;
			}
		</style>
	</head>
	<body>
		<div class="box">
			<span>点击</span>
		</div>
		<script>
			const spanDom = document.querySelector('span')
			spanDom.onclick = function (event) {
				// 1.偶尔会使用
				console.log('事件类型:', event.type) 
				console.log('事件阶段:', event.eventPhase) // 冒泡被触发事件 3 / 自己被触发是2/ 捕获被触发 1/ https://developer.mozilla.org/zh-CN/docs/Web/API/Event/eventPhase

				// 2.比较少使用
				console.log('事件元素中位置', event.offsetX, event.offsetY)
				console.log('事件客户端中位置', event.clientX, event.clientY)
				console.log('事件页面中位置', event.pageX, event.pageY)
				console.log('事件在屏幕中位置', event.screenX, event.screenY)

				// 3.target/currentTarget
				console.log(event.target) // 元素本身
				console.log(event.currentTarget) // 如果是冒泡或者是捕获触发 此时是冒泡和捕获元素对象
				console.log(event.currentTarget === event.target) 
			}
		</script>
	</body>
</html>

~~~
* currentTarget/target

~~~
<!DOCTYPE html>
<html lang="en" style="height: 200%">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.box {
				width: 100px;
				height: 100px;
				background-color: aquamarine;
			}
		</style>
	</head>
	<body>
		<div class="box">
			<span>点击</span>
		</div>
		<script>
			const divDom = document.querySelector('div')
			const spanDom = document.querySelector('span')
			divDom.onclick = function (event) {
				console.log(event.target) // 元素本身
				console.log(event.currentTarget) // 如果是冒泡或者是捕获触发 此时是冒泡和捕获元素对象
				console.log(event.currentTarget === event.target)
			}
			spanDom.onclick = function () {}
		</script>
	</body>
</html>
~~~
![](images/screenshot_1658563846245.png)

* 事件
1. **preventDefault**：取消事件的默认行为；
2. **stopPropagation**：阻止事件的进一步传递（冒泡或者捕获都可以阻止）；
>[danger] ##### 事件处理中的this
1. 可以通过this来获取当前的发生元素
![](images/screenshot_1658563995177.png)
~~~
<!DOCTYPE html>
<html lang="en" style="height: 200%">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.box {
				width: 100px;
				height: 100px;
				background-color: aquamarine;
			}
		</style>
	</head>
	<body>
		<div class="box">
			<span>点击</span>
		</div>
		<script>
			const divDom = document.querySelector('div')
			const spanDom = document.querySelector('span')
			divDom.onclick = function (event) {
				console.log(event.target) // 元素本身
				console.log(event.currentTarget) // 如果是冒泡或者是捕获触发 此时是冒泡和捕获元素对象
				console.log(event.currentTarget === event.target)
				console.log(this) // div class="box"
			}
			spanDom.onclick = function () {
				console.log(this) // span
			}
		</script>
	</body>
</html>


~~~