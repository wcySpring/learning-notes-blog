[TOC]
>[success] # 30s Array--比较篇(二)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及数组比较逻辑代码知识点进行整理
~~~

>[info] ##  检查提供值是否为指定类型
~~~
1.先在有个需求'检测引用类型',最简单的办法是用'instanceof'直接做类型判断，
但是现在不想涉及到继承，只想判断到当前
~~~
>[danger] ##### 案例说明
~~~
1.首先需要排除null 和 'undefined' 特殊情况
2.需要知道的知识点 实例的构造函数属性(constructor) 和 类（js叫构造函数）判断是true
    const {log} =console
    
    class Test{}
    const test = new Test();
    log(test.constructor === Test) // true
~~~
[原文链接](https://www.30secondsofcode.org/js/s/is)
~~~
const {log} =console
class Test{}

class Test1 extends Test{}

const test = new Test();
const test1 = new Test1();

// 返回的true 因为instanceof 会一直往原型链上找
console.log(test1 instanceof Test) // true  

const is = (type, val) => ![, null].includes(val) && val.constructor === type;

// 只判断当前的不在像上找
log(is(Test,test1)) // false 
log(is(Test1,test1)) // true
// ----------更多例子---------------
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
~~~
>[info] ## 判断该类型是不是可迭代对象
~~~
const isArrayLike = obj =>
  obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike([1, 2, 3]); // true
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false

~~~
[原链接](https://www.30secondsofcode.org/js/s/is-array-like)
>[info] ## 检查数字数组是否已排序
~~~
1.举例子[0, 1, 2, 2] 是升序排序，[4, 3, 2] 是降序排序，[4, 3, 5] 没有进行排序
~~~
[is-sorted](https://www.30secondsofcode.org/js/s/is-sorted))
>[danger] ##### 30s
~~~
1.-1（降序）或1（升序），0为没排序
~~~
~~~
const {log} = console

const isSorted = arr => {
    if (arr.length <= 1) return 0;
    const direction = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
       //  这里的差值比，如果前后两次的差的乘积大于0
       // 说明前后两次 差值比都一样小 或者一样大
       // 注意说明 小于0 才返回0
      if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
    }
    return Math.sign(direction);
};
~~~
>[info] ## 两个可迭代对象，A是否为B的子集
~~~
1.现在有两个可迭代对象想知道，A是否为B的子集，现在有个两个数组
   [1, 5]，[1, 2, 3, 4] 这两个可迭代对象对比后得到结果false
   [1, 2]，[1, 2, 3, 4]这两个可迭代对象对比后得到结果true
~~~
[sub-set](https://www.30secondsofcode.org/js/s/sub-set)
>[danger] ##### 30s
~~~
1.使用set 让可迭代对象都具有has 属性
2.配合every 属性
~~~
~~~
const {log} = console


// 检查
const subSet = (a,b)=>{
    const sA = new Set(a),sB = new Set(b)
    return [...sA].every(v=>sB.has(v))
}    

log(subSet(new Set([1, 2]), new Set([1, 2, 3, 4])))
log(subSet(new Set([1, 5]), new Set([1, 2, 3, 4])))
~~~
>[info] ## 检测指定key是否存在数组对象中
~~~
1.现在有个对象数组
[
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
  ]
判断 数组中每一项是否都有sex字段的 key
~~~
[truth-check-collection](https://www.30secondsofcode.org/js/s/truth-check-collection)
>[danger] ##### 30s
~~~
const truthCheckCollection = (collection, pre) =>
  collection.every(obj => obj[pre]);

truthCheckCollection(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
  ],
  'sex'
); // true
~~~