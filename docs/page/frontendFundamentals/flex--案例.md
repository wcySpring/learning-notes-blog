>[success] # 内容居中
~~~
1.利用flex 解决内容剧中问题，设置auto将使项目在两个轴上都处于中心位置
~~~
![](images/screenshot_1627609276608.png)
~~~html
<!DOCTYPE html>
<html lang="en">

<body>
    <div class="parent">
        <div>1</div>
    </div>

</body>
<style>
.parent {
  display:flex;
  height:300px;
  border:1px solid red
}

.parent div {
    width: 100px;
    height:100px;
   margin: auto;
   border:1px solid red
}

</style>
</html>
~~~
