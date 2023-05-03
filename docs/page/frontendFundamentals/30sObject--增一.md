>[success] # 30s Object -- 增(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及对象增逻辑的片段整理
~~~ 
>[info] ## 根据给定的键值对创建一个对象
~~~
1.现在给定了一个键值对数组，想转换将 [['a', 1], ['b', 2]] =》{a: 1, b: 2}
~~~
[object-from-pairs](https://www.30secondsofcode.org/js/s/object-from-pairs)
>[danger] ##### 30s
~~~
const log = console.log

const objectFromPairs = arr=> arr.reduce((acc,[key,val])=>(acc[key]= val,acc),{})

log(objectFromPairs([['a', 1], ['b', 2]]))
~~~
>[danger] ##### 30s 从对象到数组

[object-to-entries](https://www.30secondsofcode.org/js/s/object-to-entries)

~~~
1.将对象反解析成数组key,val 形式
2.先通过Object.keys 和map 组合形成想要的格式展示 或者直接使用'Object.entries'
~~~
~~~
const log = console.log

const objectToEntries  = obj=> Object.keys(obj).map(key=>[key,obj[key]])

log(objectToEntries({ a: 1, b: 2 })) // [ [ 'a', 1 ], [ 'b', 2 ] ]
// Object.entries
const objectToPairs = obj => Object.entries(obj);
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
~~~