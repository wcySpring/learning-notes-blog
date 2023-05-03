>[success] # for-of 循环的是什么 -- 循环的是可迭代协议
[关于可迭代协议MDN讲解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE)
~~~
1.for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）
上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
2.上面这些可以使用for-of的可迭代对象是因为具有'Symbol.iterator' 属性
3.要注意'Object'不能使用 'for-of',原因很简单他没有'Symbol.iterator' 属性，
想让他使用可以给他加一个这个属性
~~~
>[danger] ##### 举个例子
~~~
const list = [1,2,3]
 for(item of list){
    console.log(item)
 }
~~~
>[danger] ##### 'Symbol.iterator' 
~~~
1.'Symbol.iterator'  是可迭代对象所具有的因此，我们也可以直接调用
可迭代对象的'Symbol.iterator'属性 
~~~
~~~
const list = [1,2,3]
let iterator = list[Symbol.iterator]()
console.log(iterator.next()) // value: 1, done: false}
~~~
* 通过上面案例可以发现Symbol.iterator属性对应的一个方法
* 首先为什么是方法因为生成器是方法，所以你想迭代就给有生成器
* 有生成器就是一个方法，那么就可以利用这个来做一个判断当前是否是可迭代对象
~~~
function isIterable(object) {
    return typeof object[Symbol.iterator] === 'function'
}
~~~
>[danger] ##### 自定义的对象让其具有可迭代属性
~~~
1.想让不可迭代的对象使用'for-of',需要给他们加一个' *[Symbol.iterator]'
方法，需要在这个方里告诉'for-of'要迭代谁
~~~
~~~
let collection = {
   items:[],
   *[Symbol.iterator](){
        for(let item of this.items) {
            yield item
        }
    }
}

collection.items.push(1)
collection.items.push(2)
for(item of collection){
   console.log(item)
}
~~~
>[danger] ##### 仿写数组的Symbol.iterator 方法
~~~
1.for-of 循环的是循环的是可迭代协议,即就是符合迭代器函数的数据结构(有next 方法返回是具有done和value对象)
~~~
~~~
Array.prototype[Symbol.iterator] = function () {
    let assemble = this,
        index = 0;
    return {
        next() {
            if (index > assemble.length - 1) {
                return {
                    done: true,
                    value: undefined
                };
            }
            return {
                done: false,
                value: assemble[index++]
            };
        }
    };
};
~~~
>[danger] ##### 让for of 可以迭代的对象
~~~
1.首先对象不具备被for of 循环，需要给对象增加Symbol.iterator 方法
~~~
~~~
Object.prototype[Symbol.iterator] = function values() {
    let assemble = this,
        keys = Object.keys(assemble).concat(Object.getOwnPropertySymbols(assemble)),
        index = 0;
    return {
        next() {
            if (index > keys.length - 1) {
                return {
                    done: true,
                    value: undefined
                };
            }
            let key = keys[index++];
            return {
                done: false,
                value: assemble[key]
            };
        }
    };
};
~~~
>[danger] ##### 类数组对象
~~~
1.直接将数组的Symbol.iterator方法给予类数组，也可也使用call bind apply 
~~~
~~~
let obj = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    length: 4
};
obj[Symbol.iterator] = Array.prototype[Symbol.iterator];
for (let value of obj) {
    console.log(value);
}
~~~