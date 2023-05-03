[TOC]
>[success] # 30s Array--  删除篇(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及数组进行删除的逻辑
代码片段的整理
~~~
>[info] ## 从数组末尾删除元素
~~~
1.根据条件从数组末尾删除元素，例如数组[1, 3,2,3, 3, 4], n => n < 3，从末尾开始删除这些不符合
的元素直到最先符合的元素截止 得到'[ 1, 3, 2 ]'
~~~
>[danger] ##### 案例说明
~~~
1.这个问题的本质不在要删除那些元素，可以想象成截取，只要知道符合元素的位置即可，这样在原数组
  上通过通过'slice'解决即可
2.利用while 来做一些动态条件，让while 停止整个代码下面的运行，直到直到符合条件后在向下执行
~~~
~~~
const {log} =console

const dropRightWhile = (arr, func) => {
    let rightIndex = arr.length;
    // 注意这里的while 取值对回调取反，并且也不会先入死循环因为rightIndex- 终会到0
    while (rightIndex-- && !func(arr[rightIndex]));
    return arr.slice(0, rightIndex + 1);
  };
log(dropRightWhile([1, 3,2,3, 3, 4], n => n < 3)  ) // [ 1, 3, 2 ]
~~~
>[info] ## 从数组首位删除数组
~~~
1.通过这个案例明白一个问题，没有使用shift 这种删除，因为他会改变原数组，有时候选择一些不会改变
原数组的api
2.根据条件从数组头删除元素，例如数组[1, 2, 3, 4], n => n < 3，从头开始删除这些不符合
的元素直到最先符合的元素截止 得到 [3, 4]
~~~
[原文链接](https://www.30secondsofcode.org/js/s/drop-while)
>[danger] ##### 案例说明
~~~
const {log} =console

const dropWhile = (arr,fun)=> {
    while (arr.length>0 && !fun(arr[0])) arr = arr.slice(1)
    return arr
}

log(dropWhile([1, 2, 3, 4], n => n >= 3)) // [3, 4]
~~~