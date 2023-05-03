[TOC]

 
>[success] # 30s Array --过滤篇章(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及数组根据某些条件进行过滤知识点进行整理
~~~
>[info] ## 找到数组中不符合特定条件的一组值
~~~
1.当过滤多个条件的时候，记住使用 解构传参的思路解决
~~~
~~~
const {log} = console
const filtersItem =(arr,...args)=>
    arr.filter(val=> !args.includes(val))


log(filtersItem([5,7,8,8,8,7,6],5,7)) // [ 8, 8, 8, 6 ]

~~~
>[info] ## Boolean 最为回调函数
~~~
1.现在有个一需求，数组中存在undefined 0 null 这些转换为布尔类型值为false项，想在使用fillter some 
every 等这些数组方法一步到位的过滤
~~~
[all](https://www.30secondsofcode.org/js/s/all)
>[danger] ##### 代码案例 一
~~~
1.使用Boolean作为回调函数的默认值
~~~
~~~
const list1 = [null,undefined,0,'',2]
const filter = (arr,fn =Boolean)=>arr.filter(fn)

const filterCopy = filter(list1,(item) => item)
console.log(filterCopy) // [2]

const filterCopy1 = filter(list1)
console.log(filterCopy1) // [2]


// 
const all = (arr,fn=Boolean)=>arr.every(fn)

const list = [1,2,3,4,5]
let flag = all(list) // true
console.log(flag)

flag = all(list,(item)=>item>2)
console.log(flag) // false
~~~
>[danger] ##### 案例二
~~~
1.数组中至少一个元素布尔类型是true
~~~
[any](https://www.30secondsofcode.org/js/s/any)
~~~
const any = (arr,fn=Boolean)=>arr.some(fn)
let flag = any([1,0,0,0,0])
console.log(flag) // true
~~~
>[info] ## 按照指定间隔取出对应数组中的项
~~~
1.根据指定间隔作为过滤条件生成新数组
~~~
[原文链接](https://www.30secondsofcode.org/js/s/every-nth)
>[danger] ##### 代码实现
~~~
const {log} =console
const everyNth = (arr, nth) => arr.filter((e, i) => (i+1) % nth === 0);
log(everyNth([1, 2, 3, 4, 5, 6], 2))  // [ 2, 4, 6 ]

// 另一种实现思路
// const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
~~~


>[info] ## 返回对象数组中的最大值 或最小值
~~~
1.现在知道一个对象数组，想返回这个对象数组中指定key里面的最大值例如：
[{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }] 返回 8
~~~
>[danger] ##### 代码实现
[原文链接](https://www.30secondsofcode.org/js/s/max-by)
[最小值的参考链接](https://www.30secondsofcode.org/js/s/min-by)
~~~
// 返回最大值 
// 使用Math.max最大值最小值就使用'Math.min'
// 利用map 将对象数组要比较的值 集中到一个数组中
const maxBy = (arr,fn)=>Math.max(...arr.map(typeof fn === 'function' ?fn:val=>val[fn]))

log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)) // 8
log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')) // 8

~~~
>[info] ## 取出数组中指定位置的值
~~~
1.最简单的方法根据脚标来获取对应元素值，问题想更灵活给可以倒序取出这里使用了'slice'
~~~
[原文链接](https://www.30secondsofcode.org/js/s/nth-element)
>[danger] ##### 代码说明
~~~
1.这里选用了'slice',没有用'splice'主要原因就是'splice'会改变原数组
~~~
~~~
const {log} =console
const test = [1,2,3,4]
const nthElement = (arr,n=0) => (n===-1?arr.slice(n):arr.slice(n,n+1))[0]
log(nthElement(test)) // 1
log(nthElement(test,-2)) // 3

// 原数组没有改变
log(test) // [ 1, 2, 3, 4 ]
~~~

>[info] ## 取出只包含唯一项
~~~
1.有个需求去掉数组中相同项
~~~
[filter-non-unique](https://www.30secondsofcode.org/js/s/filter-non-unique)
>[danger] ##### 代码实现
~~~
1.可以最简单的方法使用Set 方法，下面方法的思路就是，利用indexOf 和lastIndexOf，从数组头 和数组
尾来查看是不是都在数组同一个位置，举个例子[1,2,1] => 1从头看第一个是脚标0，从尾看第一个是脚标2，
2从头尾第一个脚标位置都是 1
~~~
~~~
const {log} =console

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
log(filterNonUnique([1, 2, 2, 3, 4, 4, 5])) // [ 1, 3, 5 ]

~~~
>[info] ## 过滤出数组中不重复的项
~~~
1.现在有一个数组[1,1,2,3,3,5,6,6],其中2,5是唯一不重复的值，因此打印出的结果[2,5],现在有一个对象数组
[{ id: 0, value: 'a' },{ id: 1, value: 'b' },{ id: 2, value: 'c' },{ id: 1, value: 'd' },{ id: 0, value: 'e' }]，选出id
的唯一值[ { id: 2, value: 'c' } ]
~~~
[原文链接](https://www.30secondsofcode.org/js/s/filter-non-unique-by)
>[danger] ##### 我的第一印象的写法
~~~
1.找到 数组中不重复的值 思路，想用当前项去数值中值挨个比较，看有没有一样的
  但是这个一样的值是排除自己本身，如果有一样的就停止循环进入下一轮循环
~~~
~~~
const {log} =console
const filterNonUniqueBy = function(arr,fn){
    const newArr = []
    for(let outterIndex=0; outterIndex< arr.length;outterIndex++ ){
            const outerValue = arr[outterIndex]
            let flag = true
        for(let innerIndex=0;innerIndex< arr.length;innerIndex++){
            const innerValue = arr[innerIndex]
            // 可以这么写 方便理解 写出
            if( outterIndex !==innerIndex  && fn(outerValue,innerValue)){
                flag = false
                break
            }
        }
        if(flag){
            newArr.push(outerValue)
        }

    }
    return newArr
}

log(filterNonUniqueBy(
    [
      { id: 0, value: 'a' },
      { id: 1, value: 'b' },
      { id: 2, value: 'c' },
      { id: 1, value: 'd' },
      { id: 0, value: 'e' }
    ],
    (a, b) => a.id == b.id
  )) // [ { id: 2, value: 'c' } ]

~~~
>[danger] ##### 30s 写法
~~~
1.解决思路，利用'filter' 过滤，过滤的内容是当前项不能和其他项有相同的值，注意'every'里面的条件
'(i === j) === fn(v, x, i, j)' 如果是当前项 i 和 j的脚标是一个值为true ，因为是一个值因此回调函数比较
也是true ，所以true === true，如果 i和j不是同一个值脚标为false，回调函数条件比较也不是一个值
得到false,所以false ===false 为true 说明不是一个值，但是如果脚标不同为false 但是回调比较为
true，false === true 为false 说明这个值不是唯一的，every 要求每个值都是true 因此说明当前
这个值不是唯一的，反之则是唯一
~~~
~~~
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

log(filterNonUniqueBy(
    [
      { id: 0, value: 'a' },
      { id: 1, value: 'b' },
      { id: 2, value: 'c' },
      { id: 1, value: 'd' },
      { id: 0, value: 'e' }
    ],
    (a, b) => a.id == b.id
  )) // [ { id: 2, value: 'c' } ]

~~~

>[info] ## 实现一个findLastIndex 方法
~~~
1.举个例子数组'[1, 2, 3, 4]',找到这个数组中最后一位奇数的坐标位置,应该得到数组项'3'的位置也就是2
~~~
[原文链接](https://www.30secondsofcode.org/js/s/find-last-index)
>[danger] ##### 30s 写法
~~~
1.用于Array.prototype.map()将每个元素及其索引和值映射到数组。
2.使用Array.prototype.filter()删除元素为其fn返回falsy值
3.使用Array.prototype.pop()获得的最后一个元素的过滤阵列英寸
4.-1如果没有匹配的元素，则返回
~~~
~~~
const {log} =console

const findLastIndex = (arr, fn) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop() || [-1])[0];


log(findLastIndex([1, 2, 3, 4], n => n === 5)) // -1 (default value when not found)
log(findLastIndex([1, 2, 3, 2], n => n === 2)) // 3
~~~

