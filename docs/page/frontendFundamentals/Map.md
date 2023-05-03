>[success] # Map 集合
~~~
1.Map 和 Object 很像，Map 也类似于对象，也是键值对的集合，
但是'键'的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也
就是说，Object 结构提供了'字符串—值'的对应，Map 结构提供了'值—值'的对应，
~~~
>[info] ## 使用Map
~~~
1.'Map' 是构造函数，因此创建的时候需要'new' 一个实例
~~~
>[danger] ##### 注意说明
~~~
1.即使Map 和Object在某些地方很像，但是Map也不可以像Object那样通过'点'和'[]'
取值value，还是需要遵循Map自己的存取方式
~~~
>[danger] ##### 创建Map/赋值Map/取值Map --- new / set/get
﻿
~~~
1.下面的案例可以看出Map和Objec 最大的不同可以接受非字符串作为key，
即使在有些情况下看到一些非字符串作为了Object 的key，但要注意他们会
偷偷执行key的toString方法转换成字符串，但是Map不会

2.赋值使用'set',第一参数是key 第二个参数是value，
~~~
~~~
let map = new Map()
    key1 = {}
    key2 = {}
map.set(key1,1)
map.set(key2,2)
console.log(map.get(key1)) // 1
console.log(map.get(key2)) // 2
~~~
>[danger] ##### 判断Map中的Key 是否存在/清除集合中内容 -- has 返回是true 和false / delete、clear
~~~
（1）has(key)检测指定的键名在Map集合中是否已经存在
（2）delete(key)从Map集合中移除指定键名及其对应的值
（3）clear()移除Map集合中的所有键值对
~~~
~~~
let map = new Map();
map.set("name", "huochai");
map.set("age", 25);
console.log(map.size); // 2
console.log(map.has("name")); // true
console.log(map.get("name")); // "huochai"
console.log(map.has("age")); // true
console.log(map.get("age")); // 25
map.delete("name");
console.log(map.has("name")); // false
console.log(map.get("name")); // undefined
console.log(map.size); // 1
map.clear();
console.log(map.has("name")); // false
console.log(map.get("name")); // undefined
console.log(map.has("age")); // false
console.log(map.get("age")); // undefined
console.log(map.size); // 0
~~~
>[danger] ##### 通过构造函数传参形式初始map
~~~
let map = new Map([["name",'wang'],['age',19]])
console.log(map) // Map(2) {"name" => "wang", "age" => 19}
~~~
>[danger] ##### map 的长度 属性是 -- size

>[danger] 遍历方法
~~~
1. 要注意Map便利要用of
Map.prototype.keys()：返回键名的遍历器。
Map.prototype.values()：返回键值的遍历器。
Map.prototype.entries()：返回所有成员的遍历器。
Map.prototype.forEach()：遍历 Map 的所有成员。
~~~
~~~javascript
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
~~~
* Map 和数组直接转换详细可以直接参考[阮一峰](http://es6.ruanyifeng.com/#docs/set-map)
* 简单的转换案例
~~~javascript
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]
[数组新功能](%E6%95%B0%E7%BB%84%E6%96%B0%E5%8A%9F%E8%83%BD.md)
[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
~~~
>[info] ## WeakMap  直接参考阮一峰老师文章即可
1. **WeakMap的key只能使用对象，不接受其他的类型作为key**
2. WeakMap的key对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么GC可以回收该对象
3. 常用的方法
~~~
set(key, value)：在Map中添加key、value，并且返回整个Map对象；
get(key)：根据key获取Map中的value；
has(key)：判断是否包括某一个key，返回Boolean类型；

delete(key)：根据key删除一个键值对，返回Boolean类型；
~~~
﻿*  [阮一峰](http://es6.ruanyifeng.com/#docs/set-map)
>[info] ## 总结
~~~
   要在WeakMap集合与普通的Map集合之间做出选择时，需要考虑的主要问题是，
是否只用对象作为集合的键名。如果是，那么Weak Map集合是最好的选择。
当数据再也不可访问后，集合中存储的相关引用和数据都会被自动回收，
这有效地避免了内存泄露的问题，从而优化了内存的使用
　　相对Map集合而言，WeakMap集合对用户的可见度更低，其不支持通过forEach()方法、
size属性及clear()方法来管理集合中的元素。如果非常需要这些特性，那么Map集合是一个
更好的选择，只是一定要留意内存的使用情况
　　当然，如果只想使用非对象作为键名，那么普通的Map集合是唯一的选择
~~~
