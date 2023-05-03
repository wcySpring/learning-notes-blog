>[success] # DOM -- 元素大小和滚动
1. **clientWidth**：contentWith+padding（不包含滚动条）
2. **clientHeight**：contentHeight+padding
3. **clientTop**：border-top的宽度
4. **clientLeft**：border-left的宽度
5. **offsetWidth**：元素完整的宽度
6. **offsetHeight**：元素完整的高度
7. **offsetLeft**：距离父元素的x
8. **offsetHeight**：距离父元素的y
9. **scrollHeight**：整个可滚动的区域高度
10. **scrollTop**：滚动部分的高度
![](images/screenshot_1658047856796.png)
~~~
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.box {
				height: 100px;
				overflow: scroll;
				width: 100px;
			}
		</style>
	</head>
	<body>
		<div class="box">
			测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
		</div>
		<script>
			const boxDom = document.querySelector('.class')

			const height = boxDom.clientHeight // contentHeight+padding(不包含边框)
			const width = boxDom.clientWidth // contentWith+padding（不包含滚动条，不包含边框）
			const top = boxDom.clientTop // border-top的宽度
			const left = boxDom.clientLeft // border-left的宽度

			const ensembleWidth = boxDom.offsetWidth // 元素完整的宽度
			const ensembleHeight = boxDom.offsetHeight // 元素完整的高度
			const x = boxDom.offsetLeft // 距离父元素的x
			const y = boxDom.offsetHeight // 距离父元素的y

			const sH = boxDom.scrollHeight // 整个可滚动的区域高度
			const sT = boxDom.scrollTop // 滚动部分的高度
		</script>
	</body>
</html>

~~~