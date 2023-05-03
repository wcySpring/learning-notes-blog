>[success] # settimeout 和for 经典案例
~~~
1.setTimeout 为宏任务，由于 JS 中单线程 eventLoop 机制，在主线程同步任务执行完后才去执行宏任务，
因此循环结束后 setTimeout 中的回调才依次执行。

2.因为 setTimeout 函数也是一种闭包，往上找它的父级作用域链就是 window，变量 i 为 window 上的全局
变量，开始执行 setTimeout 之前变量 i 已经就是 6 了，因此最后输出的连续就都是 6。
~~~
~~~
for(var i = 1; i <= 5; i ++){
  setTimeout(function() {
    console.log(i)
  }, 0)
}
~~~
>[danger] ##### 如何解决
~~~
1.除了利用 IIFE，let 也可以用settimeout第三个参数
~~~
~~~
for(var i=1;i<=5;i++){
  setTimeout(function(j) {
    console.log(j)
  }, 0, i)
}
~~~