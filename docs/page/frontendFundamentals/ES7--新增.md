>[success] # ES7 -- includes
1. **Array.prototype.includes** ,用来判断一个数组是否包含一个指定的值，如果包含则返回 `true`，否则返回 `false`
2. 语法 `arr.includes(valueToFind[, fromIndex])`，`fromIndex` 可选 从`fromIndex` 索引处开始查找 `valueToFind`。如果为负值（即从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 0
3. 只能判断**简单类型的数据**，对于**复杂类型的数据**，比如对象类型的数组，二维数组，这些是**无法判断的**
4. 和`indexOf` 相比，`indexOf` 不能识别**NaN**
>[danger] ##### 案例
~~~
const arr = ['es6', 'es7', NaN, 'es8']
console.log(arr.includes(NaN)) // true
console.log(arr.indexOf(NaN)) // -1
~~~
>[success] # ES7 -- 幂运算符 **
1. 原来的求幂运算 `Math.pow(2, 5)` 现在可以 `2**5` 意思为 `$ 2^5 $`
