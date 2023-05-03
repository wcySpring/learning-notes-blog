>[success] # 30s Array -- 创建数组篇(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及创建新数组的代码片段整理
~~~ 
>[info] ## 一直一个范围生成的数组每一项间隔和开始项值相等
~~~
1.从给定的正整数开始，直至指定的限制一个限制整数生成数组，举个例子给定项5，限制项25 生成的
结果[5,10,15,20,25]
~~~
>[danger] ##### 代码实现
[先了解Array.from](https://www.kancloud.cn/cyyspring/more/1328936)
[原文来源](https://www.30secondsofcode.org/js/s/arithmetic-progression)
~~~
const arithmeticProgression = (n,lim)=>Array.from({length:Math.ceil(lim/n)},(v,i)=>(i+1)*n)
console.log(arithmeticProgression(5,25)) // [ 5, 10, 15, 20, 25 ]
~~~

>[info] ## 通过回调函数动态作为参数生成数组
~~~
1.使用给定的函数生成具有给定数量的项的数组
~~~
[原文链接](https://www.30secondsofcode.org/js/s/generate-items)
>[danger] ##### 30s
~~~
const {log} =console

const generateItems = (n,fn)=>Array.from({length:n},(_,i)=>fn(i))

log(generateItems(10, Math.random))
~~~
>[info] ## 生成二维数组
~~~
1.生成二维数组
~~~
[原文链接](https://www.30secondsofcode.org/js/s/initialize2-d-array)
>[danger] ##### 30s
~~~
const {log} =console

const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

log(initialize2DArray(3, 2)) // [ [ null, null, null ], [ null, null, null ] ]
~~~
>[info] ## 根据给出数组首尾项和每项间隔生成一个等差数组
~~~
1.初始化一个范围数组，例如想生成一个0-9 每个值间隔为2的数组[0, 2, 4, 6, 8]
~~~
[原文链接](https://www.30secondsofcode.org/js/s/initialize-array-with-range)
>[danger] ##### 30s
~~~
const {log} =console

const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from(
    { length: Math.ceil((end - start + 1) / step) },
    (_, i) => i * step + start
  );
initializeArrayWithRange(5); // [0, 1, 2, 3, 4, 5]
initializeArrayWithRange(7, 3); // [3, 4, 5, 6, 7]
initializeArrayWithRange(9, 0, 2); // [0, 2, 4, 6, 8]
~~~
>[info] ## 用指定的值初始化并填充一个数组
~~~
1.用指定的值初始化并填充一个数组
~~~
[原文链接](https://www.30secondsofcode.org/js/s/initialize-array-with-values)
>[danger] ##### 30s
~~~
const {log} =console

const initializeArrayWithValues = (n, val = 0) =>
  Array.from({ length: n }).fill(val);

log(initializeArrayWithValues(5, 3)) // [ 3, 3, 3, 3, 3 ]
~~~

>[info] ## 根据给出数组首尾项和每项间隔生成一个等差数组 倒序
~~~
1.初始化一个范围数组，例如想生成一个0-9 每个值间隔为2的数组[8, 6, 4, 2, 0]
~~~
[原链接](https://www.30secondsofcode.org/js/s/initialize-array-with-range-right)
>[danger] ##### 30s
~~~
const {log} =console

const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

  log(initializeArrayWithRangeRight(7, 3)) // [ 7, 6, 5, 4, 3 ]
~~~
>[info] ## 创建一个N维数组并且填充
~~~
1.现在有个需求已知一个给定值，想用这个值填充自动生成的多维数组，举个例子，已知填充数字为'1'
   一共需要两层，每层三项，因此生成的数组为'[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ]'
~~~
[原链接]([https://www.30secondsofcode.org/js/s/initialize-nd-array](https://www.30secondsofcode.org/js/s/initialize-nd-array))
>[danger] ##### 30s
~~~
1.这种嵌套的逻辑，首先明确一点事递归，然后需要已知的参数，最终项的内容，以及每一层需要有
多少项
2.生成指定长度的数组，这里优先考虑'Array.from'api，每一项的内容参考'map' api
~~~
~~~

const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() =>
        initializeNDArray(val, ...args.slice(1))
      );

log(initializeNDArray(1,3,3))  // [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ]
~~~
>[info] ## 迭代器函数和初始种子值构建数组
~~~
1.下面代码是开阔思路，可以通过Array.from 实现类似效果
~~~
[unfold](https://www.30secondsofcode.org/js/s/unfold)
~~~
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

~~~
个需求相加
~~~