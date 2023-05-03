[TOC]
>[success] # 30s Array-- 特定规则生成新数组篇(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及数组进行某些逻辑生成新数组的逻辑
代码片段的整理
~~~
[整理内容来自30s 数组篇章](https://www.30secondsofcode.org/js/s/is-disjoint)
>[info] ## 最后一项为数组合计切去掉原最后一项值
~~~
1.现在有个需求 给一组数或者一个数组 例如 1, 2, 3, 4 或 [1, 3, 6, 4]，返回的结果内容要变成[1, 3, 6, 10],
其原目标值的最后一项变为合计
~~~
[原文參考](https://www.30secondsofcode.org/js/s/accumulate)
>[danger] ##### 代码案例
~~~
1.使用Array.prototype.reduce()，Array.prototype.slice(-1)和'一元+'操作者到每个值。配合数组的解构，
让数组中最后一项进行累加即可
2.关于一元操作符操作数组小案例,但是这个数组需要只有一项且只能是数字
const aa = [6]
console.log(+aa) // 6
// -----------------------------
const bb = [6,7]
console.log(+bb) // NaN
~~~
~~~
// 利用... 将参数转换为数组
// 使用函数式编程思想封装成函数
const accumulate = (...nums) => nums.reduce((acc,n)=>[...acc,n + +acc.slice(-1)],[])
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
console.log(accumulate(...[1, 2, 3, 4])) // [1, 3, 6, 10]
~~~
>[danger] ##### 逻辑延伸生成新数组最后一项为其他项的总和
~~~
1.举个例子例如现在有数组[1,2,3,4,5] 想生成的新数组为[ 1, 3, 6, 10, 15 ]
~~~
~~~
var a = [1,2,3,4,5]

var accumulate = (...nums)=> nums.reduce((acc,cur,index,arr)=>{
    if(index === nums.length-1){ 
        return [...arr,acc]
    }
    return acc + cur
},0)
console.log(accumulate(...a))// [ 1, 3, 6, 10, 15 ]
~~~
>[info] ## 求组数中数字内容的平均值
~~~
1.现在有个需求，已知一组数 1，2，3，4，5 相求他们的平均值
~~~
>[danger] #####  代码实现
[原文来源](https://www.30secondsofcode.org/js/s/average)
~~~
1.求平均值的思路就是，'数的总和'/'数的个数' ，求总和可以利用数组'reduce'方法
~~~
~~~
const average = (...nums)=> nums.reduce((acc,curr)=>acc+curr,0)/nums.length
const num1 = average(1,2,3,4,5)
const num2 = average(...[1,2,3,4,5])
console.log(num1) // 3
console.log(num2) // 3
~~~
>[info] ## 将数字转换为数字数组
~~~
1.有一个需求，当输入的数字想要他的输出结果以数组的形式进行展示例如
  123 =》[1,2,3]
~~~
[原文链接](https://www.30secondsofcode.org/js/s/digitize)
>[danger] ##### 代码实现
~~~
1.需要先将数字转换成字符串(因为字符才具备可迭代性质)，然后将这些字符串转换会数字
进行输出
~~~
~~~
const {log} =console
 const digitize = n=>[...`${Math.abs(n)}`].map(i=>parseInt(i))
 log(digitize(123)) // [ 1, 2, 3 ]
 log(digitize(-123)) // [ 1, 2, 3 ]
 log(digitize(-123.22)) // [ 1, 2, 3, NaN, 2, 2 ] 可以用fittler替换map解决这个问题
~~~

>[info] ## 给定格式的数组变成对象或将对象变成指定格式数组
~~~
1.现在有一个二维数组[['a', 1], ['b', 2]] ，想转换成对象
~~~
[原文链接](https://www.30secondsofcode.org/js/s/object-from-pairs)

[对象变数组](https://www.30secondsofcode.org/js/s/object-to-entries)
[直接使用entries](https://www.30secondsofcode.org/js/s/object-to-pairs)
~~~
1.数组转换其他格式，或者需要上一次的值的时候优先想到'reduce'
~~~
>[danger] ##### 代码说明
~~~
const {log} =console
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {}); 
log(objectFromPairs([['a', 1], ['b', 2]])) // { a: 1, b: 2 }
~~~
* 将对象变成数组
~~~
const objectToEntries = obj => Object.keys(obj).map(k => [k, obj[k]]);
objectToEntries ({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
~~~
* 对象变数组直接使用'entries'
~~~
const objectToPairs = obj => Object.entries(obj)
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
~~~
>[info] ## 将指定数量的元素移动到数组的末尾
~~~
1.将指定数量的元素移动到数组的末尾，例如'[5,6,7,8]' 中前两项移动到尾部 [ 7, 8, 5, 6 ]
~~~
[原文](https://www.30secondsofcode.org/js/s/offset)
>[danger] ##### 代码说明
~~~
const {log} =console
const offset = (arr,offset) =>[...arr.slice(offset),...arr.slice(0,offset)]
log(offset([5,6,7,8],2)) // [ 7, 8, 5, 6 ]
~~~
>[info] ## 计算数组中某个值的出现次数
~~~
1.计算数组中某个值的出现次数。
~~~
>[danger] ##### 案例
~~~
const {log} =console
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// 统计1在数组中的个数  
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
~~~

>[info] ## 展平数组
~~~
1.遇到数组嵌套解决方案，例如[1, [2], [[3], 4], 5] = 》[ 1, 2, 3, 4, 5 ]
~~~
>[danger] ##### 30s 案例
[原文链接](https://www.30secondsofcode.org/js/s/deep-flatten)
~~~
const {log} =console

const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
log(deepFlatten([1, [2], [[3], 4], 5])) // [1, 2, 3, 4, 5]
~~~
>[danger] ##### js 自带api -- flat
[mdn链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
~~~
const {log} =console
// flat 不会改变原数组
const list2 = [1, [2], [[3], 4], 5]
log(list2.flat(Infinity)) // [ 1, 2, 3, 4, 5 ]
~~~
>[danger] ##### 利用js concat可以展开一层嵌套问题
~~~
1.这种仅限解决一层问题，因为concat 参数可以是数组 也可以是单个值
~~~
~~~
const {log} =console

// 只能针对内部一层数组嵌套
const list1 = [1,2,[3,4],5]
log([].concat(...list1)) // [ 1, 2, 3, 4, 5 ]
~~~
>[info] ## 数组内的项按照指定分隔符拼接
~~~
1.想将数组内的字符串按照指定分隔符进行拼接，其中最后一项使用另外指定的分割符，例如
~~~
[原链接]([https://www.30secondsofcode.org/js/s/join](https://www.30secondsofcode.org/js/s/join))
>[danger] ##### 30s
~~~
const {log} =console

const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  );
 log( join(['pen', 'pineapple','s'], ',','$')) // pen,pineapple$s
 log( join(['pen', 'pineapple'], ',','$')) // pen$pineapple
 log( join(['pen', 'pineapple','s'], ',')) // pen,pineapple,s

~~~
>[info] ## 接受任意数量的可迭代对象或具有length属性的对象，并返回最长的一个
~~~
const longestItem = (...vals) =>
  vals.reduce((a, x) => (x.length > a.length ? x : a));

longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'

~~~
[原链接](https://www.30secondsofcode.org/js/s/longest-item)
>[info] ## 使用函数将数组的值映射到对象
[map-object](https://www.30secondsofcode.org/js/s/map-object)
~~~
const mapObject = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {});

mapObject([1, 2, 3], a => a * a); // { 1: 1, 2: 4, 3: 9 }
~~~
>[info] ## 多个对象中相同key中的值合并
~~~
1.当有多个对象,想把这些对象合并成一个对象，其中如果多个对象中有相同的key，将这些相同key
的val 合并到一个数组中，举个例子下面有三个对象
  const object = {
    a: [{ z: 2 }, { y: 4 }],
    b: 1,
    c:'zzz'
  };
  const other = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
  };
  const other1 = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
  };
最终想合并成：
{
  a: [ { z: 2 }, { y: 4 }, { z: 3 }, { z: 3 } ],
  b: [ 1, 2, 3, 2, 3 ],
  c: [ 'zzz', 'foo', 'foo' ]
}
~~~
[原链接](https://www.30secondsofcode.org/js/s/merge)
>[danger] ##### 30s
~~~
1.拿到这类问题先思考，有没有更好的api去解决这类问题，不要率先停留在for 这类简单解决方法上，
 让代码更加语义化，别人通过你使用的api 更加容易知道你在做一件什么事
2.多个对象一起处理，最好的方式都是在同一个数组中，在数组中又可以返回的是其他类型的api，优先
 想到reduce，并且符合可以和上一次操作作比较性质
~~~
~~~
const {log} =console

const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k];
        return acc;
      }, {}),
    {}
  );

  const object = {
    a: [{ z: 2 }, { y: 4 }],
    b: 1,
    c:'zzz'
  };
  const other = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
  };
  const other1 = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
  };
 log( merge(object, other,other1))
// 打印结果：
{
  a: [ { z: 2 }, { y: 4 }, { z: 3 }, { z: 3 } ],
  b: [ 1, 2, 3, 2, 3 ],
  c: [ 'zzz', 'foo', 'foo' ]
}
~~~
>[info] ## 数组对象按照指定key 进行规则排序
~~~
1.现在想将数组对象中的内容按照指定key，进行排序举个例子：
[
  { name: 'fred', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' },
]
想将改数组根据'language' 作为key按照['Javascript', 'TypeScript', 'Java'] 顺序排序得到结果
[
  { name: 'fred', language: 'Javascript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' }
]
~~~
[order-with](https://www.30secondsofcode.org/js/s/order-with)
>[danger] ##### 30s
~~~
1.用于Array.prototype.reduce()从order数组创建一个对象，将值作为键，并将其原始索引作为值。
2.使用Array.prototype.sort()给定的数组进行排序，跳过元素，其prop是空的或不是在order阵列。
~~~
~~~
const orderWith = (arr, prop, order) => {
  const orderValues = order.reduce((acc, v, i) => {
    acc[v] = i;
    return acc;
  }, {});
  return [...arr].sort((a, b) => {
    if (orderValues[a[prop]] === undefined) return 1;
    if (orderValues[b[prop]] === undefined) return -1;
    return orderValues[a[prop]] - orderValues[b[prop]];
  });
};

const users = [
  { name: 'fred', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' },
];
orderWith(users, 'language', ['Javascript', 'TypeScript', 'Java']);
/* 
[
  { name: 'fred', language: 'Javascript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' }
]
*/
~~~
>[info] ## 模仿splice
~~~
1.splice 的操作是改变原数组的，现在需求想有个一函数和splic具有一样的功能但是不改变原数组
~~~
[shank](https://www.30secondsofcode.org/js/s/shank)
>[danger] ##### 30s
~~~
1.splice具有新增删除功能，对应具有新增删除且不会改变原数组的api有'slice' 和 'concat'
~~~
~~~
const {log} = console

const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index) // 插入数据开始点
    .concat(elements) // 要插入数据
    .concat(arr.slice(index + delCount)); // 插入数据的结束点 

const names = ['alpha', 'bravo', 'charlie'];
const namesAndDelta = shank(names, 1, 0, 'delta');
// [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
console.log(names); // ['alpha', 'bravo', 'charlie']
~~~
>[info] ## 获取数组，对象或字符串的大小
~~~
1.获取数组，对象或字符串的大小
~~~
[size](https://www.30secondsofcode.org/js/s/size)
>[danger] ##### 30s
~~~
1.如果是对象类型我们依次去看有没有size(Map),length(Array)，最后看key的长度
~~~
~~~
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
      ? val.size || val.length || Object.keys(val).length
      : typeof val === 'string'
        ? new Blob([val]).size
        : 0;

size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3
size('中国') // 6
~~~
>[info] ## 对象指定字段求和
~~~
const sumBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0);

sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 20
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
~~~
[sum-by](https://www.30secondsofcode.org/js/s/sum-by)