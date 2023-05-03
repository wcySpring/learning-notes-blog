>[success] # 30s Array -- 新增篇(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及数组比新增的代码知识点进行整理
~~~
>[info] ## 在数组指定项后面插入值
~~~
1.想在数组指定项后面插入数据举个例子数组[1,2,2,5] 想在第0项后面插入
~~~
>[danger] ##### 30s
~~~
const {log} = console

const insertAt = (arr, i, ...v) => {
    arr.splice(i + 1, 0, ...v);
    return arr;
  };
  
let myArray = [1, 2, 3, 4];
log(insertAt(myArray, 2, 5))// myArray = [1, 2, 3, 5, 4]
  
let otherArray = [2, 10];
log(insertAt(otherArray, 0, 4, 6, 8)) // otherArray = [2, 4, 6, 8, 10]
~~~
>[info] ## 查找应将值插入数组位置
~~~
1.判断将要插入值所在数组对应位置，先对数组中的内容排序，这里主要理解'isDescending' 这一步，
个人感觉整段代码实战作用较小
~~~
[sorted-index](https://www.30secondsofcode.org/js/s/sorted-index)
~~~
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};

sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1
~~~