>[success] # ajax -- 文件上传

* 文件上传时候要使用 `formData` 格式
~~~
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<input class="file" type="file" />
		<button class="upload">上传文件</button>

		<script>
			// xhr/fetch

			const uploadBtn = document.querySelector('.upload')
			uploadBtn.onclick = function () {
				// 1.创建对象
				const xhr = new XMLHttpRequest()

				// 2.监听结果
				xhr.onload = function () {
					console.log(xhr.response)
				}

				xhr.onprogress = function (event) {
					console.log(event)
				}

				xhr.responseType = 'json'
				xhr.open('post', 'url')

				// 表单
				const fileEl = document.querySelector('.file')
				const file = fileEl.files[0]

				const formData = new FormData()
				formData.append('key', file)

				xhr.send(formData)
			}
		</script>
	</body>
</html>

~~~