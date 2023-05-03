>[success] # includes  和 indexof
~~~
1.简单的使用体验上这两个api 都可以做一个属性是否是在数组中存在，细节上本质来说
indexof 采用的是 '===',incluedes 采用的和map set 比较相同元素一样的特性'SameVauleZero'
也就是类似'Object.is'api 特性可以用来判断Nan
~~~
>[danger] ##### includes  和 indexof 都有第二个参数fromIndex
~~~
1.非必填，默认是0，从该索引处开始搜索。如果是正值，且formIndex >= Array.length，则必定搜索不到结果。
如果是负值，且0 <= (Array.length+formIndex) < Array.length，则从(Array.length+formIndex)开始搜索；
如果是负值，且(Array.length+formIndex) < 0，则从位置0开始搜索。
~~~
~~~
const flag = [1, 2, 3].includes(3, 3);  // false
const flag1 = [1, 2, 3].includes(3, 2);  // true
console.log(flag,flag1);
~~~
>[danger] ##### 二者区别
~~~
1.includes 可以区分NaN indexof 不能
~~~
~~~
const ls = [1, 2, +0,-0,NaN]

const flag = ls.includes(NaN);  // true
const flag1 = ls.includes(0);   // true
const flag2 = ls.includes(+0);  // true
const flag3 = ls.includes(-0);  // true

const flag4 = ls.indexOf(NaN);  // -1
const flag5 = ls.indexOf(0);  // 2
const flag6 = ls.indexOf(+0);  // 2
const flag7 = ls.indexOf(-0);  // 2

console.log(flag,flag1,flag2,flag3);
console.log(flag4,flag5,flag6,flag7);
~~~