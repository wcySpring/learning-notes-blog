[TOC]
>[success] # 30s Array -- 分组篇(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及数组分组代码片段整理
~~~  
>[info] ## 数组中的元素按照指定规则分组
~~~
1.有一组数据，需要按照提条件分成两组
~~~
>[danger] ##### 代码说明
~~~
1.设计思路用回调函数做条件，用'reduce' 高阶函数来定义使用保存的数据格式，根据回调条件true false
来决定
~~~
[bifurcate-by](https://www.30secondsofcode.org/js/s/bifurcate-by)
~~~
const {log} =console

const bifurcateBy = (arr, fn) =>
arr.reduce((acc, val, i) => (acc[fn(val) ? 0 : 1].push(val), acc), [[], []]);
log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b')) // [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
~~~
>[info] ## 数组内容按照每组规定数量分组
~~~
1.将[1,2,3,4,5,6,7,8,9] 数组中的内容以每两项为一组分割成一个二维数组表现形式
[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]
~~~
>[danger] ##### 代码实现
[原文链接](https://www.30secondsofcode.org/js/s/chunk)
~~~
const {log} =console
const chunk = (arr,size)=> Array.from({length:Math.ceil(arr.length/size)},(v,i)=>arr.slice(i * size, i * size + size))
log(chunk([1,2,3,4,5,6,7,8,9],2)) // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]
~~~
>[info] ## 将数组内容规定分组分割
~~~
1.上面的案例是规定了每个小组中的数据进行分割，这个案例是将数据分割成固定组
~~~
>[danger] ##### 代码实现
[chunk-into-n](https://www.30secondsofcode.org/js/s/chunk-into-n)
~~~
const {log} =console

const chunkIntoN=(arr,n)=>{
    const size = Math.ceil(arr.length/n)
    return Array.from({length:n},(v,i)=>arr.slice(i*size,i*size+size))
}

log(chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4)) // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
~~~
>[info] ## 根据给定的函数对数组的元素进行分组，并返回每个组中元素的计数
~~~
1.根据给定的函数对数组的元素进行分组，并返回每个组中元素的计数,例如数组
[{ count: 5 }, { count: 10 }, { count: 5 }] 统计成 {5: 2, 10: 1}
~~~
>[danger] ##### 案例
~~~
const {log} =console

const countBy = (arr,fn)=>
    arr.map(typeof fn === 'function'?fn:val=>val[fn]).reduce((acc,val)=>{
        // 标记这个元素出来多少次 以这个元素作为key
        acc[val] = (acc[val]||0)+1
        return acc
    },{})

 
log(countBy([6.1, 4.2, 6.3], Math.floor)) // {4: 1, 6: 2}
log(countBy(['one', 'two', 'three'], 'length')) // {3: 2, 5: 1}
log(countBy([{ count: 5 }, { count: 10 }, { count: 5 }], x => x.count)) // {5: 2, 10: 1}
log(countBy([{ count: 5 }, { count: 10 }, { count: 5 }],'count')) // {5: 2, 10: 1}
~~~
>[info] ## 组合两个对象数组，使用指定的键来匹配对象
~~~
1.现在有两组数组对象，像将他们按照指定相同key中value 相同项进行合并，例如：
const x = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Maria' }
];
const y = [
    { id: 1, name:'w',age: 28 },
    { id: 3, age: 26 },
    { age: 3}
];
合并成：
[ 
  { id: 1, name: 'w', age: 28 },
  { id: 2, name: 'Maria' },
  { id: 3, age: 26 } 
]
~~~
[原文链接](https://www.30secondsofcode.org/js/s/combine)
>[danger] ##### 代码实现
~~~
1.这种相同合并逻辑代码，要先想只能做唯一项的数据类型，确定好数据类型后，在进行逻辑整理，
   优先想到对象这种结构来做
2.先用reduce循环，可以定义返回的基础数据类型，利用定义基础数据对象这个类型的特点
   以指定key的value作为唯一标识的key，来判断当前内容是否是二次出现来决定合并
3.利用reduce 返回一个对象，在利用Object.values，将value 取出变成数组
~~~
~~~
const {log} =console

const combine = (a, b, prop) =>
  Object.values(
    [...a, ...b].reduce((acc, v) => {
      if (v[prop])
        acc[v[prop]] = acc[v[prop]]
          ? { ...acc[v[prop]], ...v }
          : { ...v };
      return acc;
    }, {})
);

const x = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Maria' }
];
const y = [
    { id: 1, name:'w',age: 28 },
    { id: 3, age: 26 },
    { age: 3}
];
 log( combine(x, y, 'id'))
// 打印结果：
[ 
  { id: 1, name: 'w', age: 28 },
  { id: 2, name: 'Maria' },
  { id: 3, age: 26 } 
]
~~~

>[info] ## 统计数组中每个项出现次数
~~~
1.现在想统计数组中可每个元素出现的次数，举个例子['a', 'b', 'a', 'c']得到的结果为{a:2,b:1,c:1}
~~~
[原文链接](https://www.30secondsofcode.org/js/s/frequencies)
>[danger] ##### 30s
~~~
const {log} =console

const frequencies = arr=> 
    arr.reduce((acc, curr)=>{
        acc[curr] = acc[curr]? ++acc[curr] :1
        return acc
},{})


log(frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']))// { a: 4, b: 2, c: 1 }
log(frequencies([...'ball'])) // { b: 1, a: 1, l: 2 }
~~~
>[info] ## 根据给定的函数对数组的元素进行分组
~~~
1.现在有一个需求，需要按特定的条件将数组中的内容划分成组，举个例子['one', 'two', 'three']
根据长度划分成{3: ['one', 'two'], 5: ['three']}
~~~
[原文链接](https://www.30secondsofcode.org/js/s/group-by)
>[danger] ##### 30s
~~~
1.先将数组转换，在利用转换数组值做key，再利用 转换和 未转换的数组长度一致特点做分配
~~~
~~~
const {log} =console

// 先将数组转换，在利用转换数组值做key，再利用 转换和 未转换的数组长度一致特点做分配

const groupBy  = (arr,fn)=>arr
                        .map(typeof fn === 'function'? fn:val=>val[fn])
                        .reduce((acc,curr,i)=>{
                            acc[curr] = (acc[curr]||[]).concat(arr[i])
                            return acc
                        },{})


log(groupBy([6.1, 4.2, 6.3], Math.floor))// {4: [4.2], 6: [6.1, 6.3]}
log(groupBy(['one', 'two', 'three'], 'length'))// {3: ['one', 'two'], 5: ['three']}
~~~
>[info] ## 将数组对象按照指定规则分为两组
~~~
1.现在有一个数组对象，想按照指定条件分成两组举个例子
[
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
]
将active 字段根据 true 和false 分为两组数据
 [
   [{ user: 'fred', age: 40, active: true }],
   [{ user: 'barney', age: 36, active: false }]
 ]
~~~
[partition](https://www.30secondsofcode.org/js/s/partition)
>[danger] ##### 30js
~~~
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
];
partition(users, o => o.active);
// [
//   [{ user: 'fred', age: 40, active: true }],
//   [{ user: 'barney', age: 36, active: false }]
// ]
~~~
>[info] ## 将两个数组合并成对象
~~~
1.现在有两个数组，想分别作为新对象的key 和 val，举个例子
 ['a', 'b', 'c'], [1, 2] =》 {a: 1, b: 2, c: undefined}
~~~
[zip-object](https://www.30secondsofcode.org/js/s/zip-object)
>[danger] ##### 30s
~~~
1.用reduce 的特性，初始化时候是对象，依次取值key val
~~~
~~~
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});

zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
~~~
