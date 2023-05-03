[TOC]

 
>[success] # 30s Array --过滤篇章(二)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及数组根据某些条件进行过滤知识点进行整理
~~~
>[info] ## 找到某个元素在对应的索引位置
~~~
1.现在有一个数组[1, 2, 3, 1, 2, 3]想找到所有元素为1的脚标，得到 [0, 3]
~~~
[原文](https://www.30secondsofcode.org/js/s/index-of-all)
>[danger] ##### 30s
~~~
const {log} =console

const indexOfAll  = (arr,value) =>
    arr.reduce((acc,curr,i) =>(
        curr === value ? [...acc, i] : acc
    ),[])

log( indexOfAll([1, 2, 3, 1, 2, 3], 1)) // [0, 3]
log(indexOfAll([1, 2, 3], 4)) // []
~~~
>[info] ## 返回数组中的最大元素  最小元素
~~~
1.返回数组中指定的n项，最大 最小元素
~~~
[max-n](https://www.30secondsofcode.org/js/s/max-n)
[min-n](https://www.30secondsofcode.org/js/s/min-n)
>[danger] ##### 30s 最大元素
~~~
1.在sort前进行一次浅copy，因为sort 会改变原数组，因此注意这个小技巧
~~~
~~~
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3, 2]
~~~
>[danger] ##### 30s 最小元素
~~~
1.在sort前进行一次浅copy，因为sort 会改变原数组，因此注意这个小技巧
~~~
~~~
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1, 2]
~~~
>[info] ## 返回数组中的中位数
~~~
1.长度是奇数，则返回中间的数字，否则返回两个中间数字的平均值
~~~
[median](https://www.30secondsofcode.org/js/s/median)
>[danger] ##### 30s
~~~
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
median([5, 6, 50, 1, -5]); // 5
~~~
>[info] ## 找到数组中出现频率最高的值
~~~
1.现在想统计一个数组中，出现最高频率的值，例如['a','b','a','c','a'] ,出现频率最高的'a'
~~~
[原链接](https://www.30secondsofcode.org/js/s/most-frequent)
>[danger] ##### 30s
~~~
1.结局思路先将数据结构变成对象，统计出某个值的出现频率'{ a: 3, b: 1, c: 1 }'
2."[ [ 'a', 3 ], [ 'b', 1 ], [ 'c', 1 ] ]"在当前值和之前值做比较看出现频率大小，采用reduce
~~~
~~~
const {log} =console

const mostFrequest = (arr)=>
    Object.entries(
        arr.reduce((acc,cur)=>{
        acc[cur] = acc[cur]? acc[cur]+1 : 1 
        return acc
        },{})
    ).reduce((a,v)=>(v[1]>=a[1]?v:a),[null,0])

log(mostFrequest(['a','b','a','c','a']))
~~~
>[info] ## 根据条件过滤对象数组并且滤掉未指定的键
~~~
1.现在有个场景已知一个对象数组，现在想做的是根据某些条件获取对象数组中指定的的key形成的新的
对象数组，举个例子：
[
    {
      id: 1,
      name: 'john',
      age: 24
    },
    {
      id: 2,
      name: 'mike',
      age: 50
    }
 ];
现在要做的是，过滤出年龄大于24 并且只带有id 和name的数组对象
~~~
[reduced-filter](https://www.30secondsofcode.org/js/s/reduced-filter)
>[danger] ##### 30s
~~~
1.先分析需要做什么，需要过滤 使用的api -- 'filter'，需要生成新的和之前内部结构不同的数组--'map'
2.现在可以确定好的两个api，下一步就是'map'中获取返回值的代码怎么去写,抛开for循环的形式，
数组中还有那个api可以做返回指定类型格式api -- 'reduce'
~~~
~~~
const {log} = console

const reducedFilter = (data, keys, fn) =>
  // 先过滤
  data.filter(fn).map(el =>
    // 在用reduce 重组返回 map需要的 return 返回值
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

const data = [
    {
      id: 1,
      name: 'john',
      age: 24
    },
    {
      id: 2,
      name: 'mike',
      age: 50
    }
  ];
 log( reducedFilter(data, ['id', 'name'], item => item.age > 24))
~~~
>[info] ## 返回指定规则中数组最大值或者最小值
~~~
1.返回指定规则中数组最大值或者最小值
~~~
[reduce-which](https://www.30secondsofcode.org/js/s/reduce-which)
>[danger] ##### 30s
~~~
1.思维转换以前都是通过指定一个默认最大值或者最小值在一次比较，现在有了'reduce'它具备获取
当前值和上一次值的能力
~~~
~~~
const {log} = console

const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

reduceWhich([1, 3, 2]); // 1
reduceWhich([1, 3, 2], (a, b) => b - a); // 3
reduceWhich(
  [
    { name: 'Tom', age: 12 },
    { name: 'Jack', age: 18 },
    { name: 'Lucy', age: 9 }
  ],
  (a, b) => a.age - b.age
); // {name: 'Lucy', age: 9}
~~~
>[info] ## 指定条件过滤数组
~~~
1.按照指定条件过滤数组
~~~
[remove](https://www.30secondsofcode.org/js/s/remove)
>[danger] ##### 30s
~~~
1.正常数组过滤用filter，但是这个 是想既有返回值又可以将原数组改变
~~~
~~~
const {log} = console


const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
      arr.splice(arr.indexOf(val), 1);
      return acc.concat(val);
    }, [])
    : [];


 const t =  [1, 2, 3, 4]

 log(remove(t, n => n % 2 === 0) ) // [ 2, 4 ]
 log(t) // [ 1, 3 ]
~~~
>[info] ## 过滤数组对象中指定key返回的val
~~~
1.现在有个需求想将数组对象中指定key的val 获取
 [
  { name: 'lisa', age: 8 },
  { name: 'homer', age: 36 },
  { name: 'marge', age: 34 },
  { name: 'bart', age: 10 }
]
想取出key 为 age 的val 得到的效果[8, 36, 34, 10]
~~~
[pluck](https://www.30secondsofcode.org/js/s/pluck)
>[danger] ##### 30s
~~~
const pluck = (arr, key) => arr.map(i => i[key]);

const simpsons = [
  { name: 'lisa', age: 8 },
  { name: 'homer', age: 36 },
  { name: 'marge', age: 34 },
  { name: 'bart', age: 10 }
];
pluck(simpsons, 'age'); // [8, 36, 34, 10]
~~~
>[info] ## 两个数组之间相互差值
~~~
1.之前都是只找,A对B 或者B对A的单向差值，现在想做找到A,B互相整体差值举个例子
   [1, 2, 2], [1, 3, 1]  =》[2, 2, 3]
~~~
[symmetric-difference](https://www.30secondsofcode.org/js/s/symmetric-difference)

>[danger] ##### 30s
~~~
1.利用set 和 filter 两个api 进行过滤查找
~~~
~~~
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]
~~~
>[danger] ##### 这一个系列
[unique-symmetric-difference](https://www.30secondsofcode.org/js/s/unique-symmetric-difference)
[symmetric-difference](https://www.30secondsofcode.org/js/s/symmetric-difference)
[symmetric-difference-by](https://www.30secondsofcode.org/js/s/symmetric-difference-by)
[symmetric-difference-with](https://www.30secondsofcode.org/js/s/symmetric-difference-with)

>[danger] ##### 不做过多说明系列直接去30s看
[union-by](https://www.30secondsofcode.org/js/s/union-by)
[unique-elements-by-right](https://www.30secondsofcode.org/js/s/unique-elements-by-right)