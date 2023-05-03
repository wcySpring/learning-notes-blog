>[success] # 做一个树
![](images/screenshot_1659599072845.png)
* 说明：下面案例中可以发现并没有给每一个li 都绑定事件，先对时候用了事件冒泡，只给ul进行绑定，然后来进行展开收起逻辑
~~~
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>树UI</title>
		<style>
			html,
			body {
				width: 100%;
				height: 100%;
				padding: 0;
				margin: 0;
			}

			ul {
				list-style: none;
			}

			.tree li::before {
				color: #999;
				content: '';
				display: inline-block;
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 6px 10.4px;
				border-color: transparent;
				border-left-color: currentColor;
				transform: translateX(6px);
			}

			.tree li.expand::before {
				transform: rotate(90deg) translateX(6px);
			}

			.tree li > ul {
				display: none;
			}

			.tree li.expand > ul {
				display: block;
			}
		</style>
	</head>
	<body>
		<ul class="tree">
			<li>项目1</li>
			<li>项目2</li>
			<li class="expand">
				项目3
				<ul>
					<li>子项3.1</li>
					<li>子项3.2</li>
					<li>子项3.3</li>
				</ul>
			</li>
			<li>
				项目4
				<ul>
					<li>子项4.1</li>
					<li>子项4.2</li>
				</ul>
			</li>
			<li>项目5</li>
		</ul>
	</body>
	<script>
		const liDom = document.querySelector('.tree')
		liDom.addEventListener('click', (evt) => {
			console.log(evt.target.tagName)
			if (evt.target.tagName === 'LI') {
				evt.target.classList.toggle('expand')
			}
		})
	</script>
</html>

~~~

