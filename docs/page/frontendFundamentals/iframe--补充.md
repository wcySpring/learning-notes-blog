>[success] # iframe -- 补充
1. 设置本页面不被其他页面通过 `iframe` 嵌套,设置响应头属性`X-Frame-Options`
1.1. DENY：不能被嵌入到任何iframe或者frame中
1.2. SAMEORIGIN：页面只能被本站页面嵌入到iframe或者frame中
1.3. ALLOW-FROM uri：只能被嵌入到指定域名的框架中
![](images/screenshot_1650335808146.png)