>[danger] ##### 倒计时案例
~~~
<!DOCTYPE html>
<html lang="en" style="height: 200%">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style></style>
	</head>
	<body>
		<div class="cls"></div>
		<script>
			// 倒计时 用结束时间 减去 当前时间 得到时间戳 转换为倒计时

			// 将结束时间规定到 00：00：00
			const endDate = new Date()
			endDate.setHours(24)
			endDate.setMinutes(0)
			endDate.setSeconds(0)
			endDate.setMilliseconds(0)

			const cls = document.querySelector('.cls')

			setInterval(() => {
				const startDate = new Date()
				const time = Math.floor(
					(endDate.getTime() - startDate.getTime()) / 1000
				)
				const hours = Math.floor(time / 3600)
				const minute = Math.floor(time / 60) % 60
				const second = time % 60
				cls.textContent = `${hours}:${minute}:${second}`
			}, 1000)
		</script>
	</body>
</html>

~~~