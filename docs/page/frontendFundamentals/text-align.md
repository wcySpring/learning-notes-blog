>[success] # text--align
* 定义行内内容（例如文字,行内块元素，图片）如何相对它的块父元素对齐
   * **left**：左对齐
  * **right**：右对齐
  * **center**：正中间显示
  * **justify**：两端对齐
  
[text-align mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align)
>[danger] ##### 案例
* 子元素是行元素，父元素设置了`text--align` 也无效
~~~
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style>
            .outer {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="outer">
            <div style="width: 200px">1111111</div>
        </div>
    </body>
</html>

~~~
* 文字,行内块元素，图片 这类对`text--align`有效
~~~
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style>
            .outer {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="outer">
            <!-- 行内 -->
            <div style="display: inline">1111111</div>
            <div>---------------------分割----------------</div>
            <!-- 行内块 -->
            <div style="display: inline-block">222222</div>
            <div>---------------------分割----------------</div>
            <!-- img 行内块-->
            <img src="./img/1" />
        </div>
    </body>
</html>

~~~