>[success] # 导航栏
~~~
1.以前需要浮动定位布局现在flex 直接解决
~~~
![](images/screenshot_1627611479162.png)
~~~html
<!DOCTYPE html>
<html lang="en">

<body>
    <ul class="navigation">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

</body>
<style>
 .navigation{
     display:flex;
     justify-content: flex-end;
     list-style: none;
     margin: 0; 
     background: deepskyblue;
 }

 /* 屏幕八百的时候均匀分配 */
 @media all and (max-width: 800px) {
  .navigation {
    justify-content: space-around;
  }
 }
 /* 小屏幕的时候列排列 */
@media all and (max-width: 600px) {
  .navigation {
    flex-flow: column wrap;
    padding: 0;
  }
}
 a{
    padding: 1em;
 }
 
</style>
</html>
~~~