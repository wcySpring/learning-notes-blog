>[success] # 案例
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <div class="box">
    <button data-action="search">搜索~</button>
    <button data-action="new">新建~</button>
    <button data-action="remove">移除~</button>
    <button>1111</button>
  </div>

  <script>

    var boxEl = document.querySelector(".box")
    boxEl.onclick = function(event) {
      var btnEl = event.target
      var action = btnEl.dataset.action
      switch (action) {
        case "remove":
          console.log("点击了移除按钮")
          break
        case "new":
          console.log("点击了新建按钮")
          break
        case "search":
          console.log("点击了搜索按钮")
          break
        default:
          console.log("点击了其他")
      }
    }
  </script>

</body>
</html>
~~~