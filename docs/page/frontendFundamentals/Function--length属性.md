>[success] # 一个有意思的属性Function 的length属性
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
~~~
1.MDN 里面解释:length 属性指明函数的形参个数。
2.'arguments.length' 是函数被调用时实际传参的个数,
 'Function.length'指该函数有多少个必须要传入的参数，即形参的个数
~~~
>[danger] #### MDN 上的案例
~~~
console.log(Function.length); // 1

console.log((function()        {}).length); // 0
console.log((function(a)       {}).length); // 1
console.log((function(a, b)    {}).length); // 2

// 0,不计算不定参数
console.log((function(...args) {}).length); 

// 1，只有在第一个参数之前
// a 形参计算默认值，只能算出a的参数
console.log((function(a, b = 1, c) {}).length); // 1
~~~