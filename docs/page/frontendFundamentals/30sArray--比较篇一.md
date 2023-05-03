[TOC]
>[success] # 30s Array--比较篇(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及数组比较逻辑代码知识点进行整理
~~~
[整理内容来自30s 数组篇章](https://www.30secondsofcode.org/js/s/is-disjoint)
>[info] ## 检查两数组是否有交集返回交集内容
~~~
1.两个数组取交集
~~~
>[danger] ##### 30s
~~~
const {log} = console
const intersection = (a, b) => {
    const s = new Set(b);
    return [...new Set(a)].filter(x => s.has(x));
}
log(intersection([1, 2, 3], [4, 3, 2])) // [2, 3]
~~~
>[info] ## 检查对象数组指key交集
~~~
1.现在有两个数组 [{ title: 'Apple' }, { title: 'Orange' }] ， [{ title: 'Orange' }, { title: 'Melon' }]，
  得到title 字段的交集 [ { title: 'Orange' } ]
~~~
[intersection-by](https://www.30secondsofcode.org/js/s/intersection-by)
>[danger] ##### 30s
~~~
1.先通过map过滤出数组中指定字段形成一个value 集合的数组
2.在通过filter 进行过滤
~~~
~~~
const {log} = console
const intersectionBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return [...new Set(a)].filter(x => s.has(fn(x)));
  };
log(  intersectionBy(
    [{ title: 'Apple' }, { title: 'Orange' }],
    [{ title: 'Orange' }, { title: 'Melon' }],
    x => x.title
  )) // [ { title: 'Orange' } ]

log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // [2.1]
~~~
>[info] ## 提供比较器函数返回两个数组中都存在的元素
~~~
1.提供比较器函数返回两个数组中都存在的元素
~~~
[intersection-with](https://www.30secondsofcode.org/js/s/intersection-with)
>[danger] ##### 30s
~~~
1.下面代码要拆开看 b.findIndex(y => comp(x, y))  是一部分
~~~
~~~
const intersectionWith = (a, b, comp) =>
  a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1.5, 3, 0]
~~~
>[info] ## 检查两个可迭代对象是否是交集关系-- 返回boolean
~~~
1.需求有两个数组，如果两个数组中的每一项没有相同的返回true 否则返回false，举个例子
a = [1,2,3] 、b = [4,5,6] a和b 没有相同内容因此返回true
~~~
[is-disjoint](https://www.30secondsofcode.org/js/s/is-disjoint)
>[danger] ##### 代码案例
~~~
1.是否没有交集 ，就是一个可迭代的数据都不在另外一个可迭代数据中
2.思路将内容去重，减少比较，利用数组方法'every' 方法,'every' 本质是每一个相等，如果取这个api就能
实现每一个不相等，配合'set'has 方法即可实现当前需求
~~~
~~~
// 为什么没有用includes 原因是比较可迭代对象includes 是数组方法，所有的可迭代对象对
// 可以作为set初始化构造函数的参数，这样所有的可迭代对象间接都获得了set 的has方法
// const isDisjoint = (a,b)=> a.every(item => !b.includes(item))

// 检查两个迭代对象不存在交集
const isDisjoint = (a, b) =>{
    const sA = new Set(a), sB = new Set(b)
    return [...sA].every(v=>!sB.has(v))
}

// ---------------案例一------------------
const a = [1,2]
const b = [3,4]
// a 和 b 是否没交集
let flag = isDisjoint(a,b) // true
console.log(flag)
// ---------------案例二------------------
const c = [1,2]
const d = [1,4] 
// c he d 是否没有交集
flag = isDisjoint(c,d) // false
console.log(flag)
~~~
>[info] ## 是否是交集关系-- 返回boolean
~~~
1.现在想判断两数组中是否存在交集，返回true 和 false
~~~
[原文链接](https://www.30secondsofcode.org/js/s/includes-any)
>[danger] ##### 代码案例
~~~
1.利用some  和 includes 两个api 配合实现
~~~
~~~
const {log} =console

const includesAny = (arr, values) => values.some(v => arr.includes(v))

log(includesAny([1,2,3,4],[2,9])) // true
log(includesAny([1,2,3,4],[8,9])) // false
~~~
>[info] ## 检测一个元素是否包含在第二个元素
~~~
1.第一个数组中每一项是否包含在第二个数组中，举个例子[1, 4, 4], [2, 4, 1] 为false，因为第一个数组中
 4这一项存在两个，[1, 4], [2, 4, 1] true ，第一个的数组中1，4全部都包含在 第二个数组中2，4，1
~~~
[is-contained-in](https://www.30secondsofcode.org/js/s/is-contained-in)
>[danger] ##### 30s
~~~
 1.第一个数组是否包含在第二个数组隐藏两个条件
  1.1.要满足第一数组每一项的值是否在第二个数组中
  1.2.第一个数组和第二个数组相同的项，只能第二个数组相同项的个数大于等于第一个数组对应的项
  否则出现第一个不第二个多第二个就没有全部包含的问题
~~~
~~~
const {log} = console

const isContainedIn = (a, b) => {
    for (const v of new Set(a)) {
      if (
        !b.some(e => e === v) ||
        a.filter(e => e === v).length > b.filter(e => e === v).length
      )
        return false;
    }
    return true;
  };

  log(isContainedIn([1, 4, 4], [2, 4, 1])  ) // false
  log(isContainedIn([1, 4], [2, 4, 1])  ) // true

~~~
>[info] ## 数组的每一项是否相等
~~~
1.现在有个需求，要求查数组中每一项是否相等
~~~
[文章原链接](https://www.30secondsofcode.org/js/s/all-equal)
>[danger] ##### 代码实现
~~~
1.逻辑思维就是只要有一个不相等就说明数组中不是每一项都相等，因此每一项和第一项做比较即可,
数组的every 方法是每一项都符合条件则返回true 或 false，利用这个api来解决问题
~~~
~~~
const allEqual = (arr)=>arr.every(val=>val === arr[0])
let flag = allEqual([1,1,1,1,1])
console.log(flag) // true
flag = allEqual([1,1,2,4,5,6])
console.log(flag) // false

~~~

>[info] ## 检测两数组包含的元素是否相同
~~~
1. 检测两数组包含的元素是否相同，不关心两数组中元素的顺序
~~~
[原文链接](https://www.30secondsofcode.org/js/s/have-same-contents)
>[danger] ##### 30s
~~~
1.解决思路判断同一个值在两个数组中出现的频率是否一致，如果都一致那么存在的元素都一样
2.使用filter 来判断同一个元素在，两个数组中出现的频率是否相同，如果每个元素出现的评率相同说明
两个元素内容相同
~~~
~~~
const {log} =console

const haveSameContents = (a, b) => {
    for (const v of new Set([...a, ...b]))
      if (a.filter(e => e === v).length !== b.filter(e => e === v).length)
        return false;
    return true;
  };

log(haveSameContents([1, 2, 4], [2, 4, 5,1])) // false
~~~
>[info] ## 两个数组的差集
~~~
1.现在知道两个数组，相求两个数组的差集，例如[1,2,3] 和 [1,2,4] 的差集输出应该为 [3]
2.不过滤重复值
~~~
>[danger] ##### 代码实现
[原文链接](https://www.30secondsofcode.org/js/s/difference)
~~~
const {log} =console
const difference = (a, b) => {
    const s = new Set(b)
    return a.filter(x=>!s.has(x))    
  };
log(difference([1, 2, 3], [1, 2, 4])) // 3
~~~
>[info] ## 两个数组的差集
~~~
1.已知两个数组，取对应数组对另一个数组的差集，例如数组"a" [1,2,3,4] 和数组"b"[1,2,3,6,7]，
  获取a 对 b的差集，得到'[4]'
~~~
[原文difference-with](https://www.30secondsofcode.org/js/s/difference-with)
>[danger] ##### 30s案例思考
~~~
1.利用回调函数的思想解决问题，将这种未知的条件，通过回调函数的方式，让使用者去自行解决
2.先分析这类问题的本质，是找一个数组中的元素和另一个数组中元素的差集，整个过程涉及下面
  分别使用 'fittler' 和'findIndex' 两个api
3.com 回调函数是来决定'findIndex' 查找值过滤条件，没有使用find 原因如果本身内部是undefined，此时
   分不清是查询回来的 还是不存在的
~~~
~~~
// 下面案例中'val.findIndex((b)=>com(a,b)) ' 是一个整体
// val.findIndex((b)=>com(a,b)) ===-1 作为的是fittler的过滤条件

const differenceWith = (arr,val,com= (a,b)=>a===b) => 
    arr.filter(a=>val.findIndex((b)=>com(a,b)) ===-1)

log(differenceWith(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0],
    (a, b) => Math.round(a) === Math.round(b)
    )) // [1, 1.2]
 log(differenceWith([1, 1.2, 1.3], [1, 1.3, 1.5])) // [1.2]    
~~~
>[info] ## 两个数组的差集
~~~
1.和上面两个数组差集不同，这里我们更希望得到的是，根据条件查询更改后的值，例如
  数组 a [2.1, 1.2],数组 b [2.3, 3.4]想获取的是他们每个元素 Math.floor 之后的差集 a 对b 向下取整的
  差集 1
~~~
>[danger] ##### 案例
[源码链接](https://www.30secondsofcode.org/js/s/difference-by)
~~~
1.利用回调函数的思想解决问题，将这种未知的条件，通过回调函数的方式，让使用者去自行解决
2.利用map 的特性配合用户自己定义的方法，生成一个扁平化的数组，进行使用之前上面逻辑思维来解决
这类问题

注：先转换成需要的 格式，用转换后的格式做差集
~~~
~~~
const {log} =console

const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.map(fn).filter(el => !s.has(el));
  };

log(  differenceBy([2.1, 1.2,1.2], [2.1, 3.4], i=>i)) // [ 1.2, 1.2 ]
log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)) // [1]
log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x)) // [2]
~~~