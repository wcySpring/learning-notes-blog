>[success] # 将数组转换成字符串
~~~
1.首先'Array' 属于'Object'类型，因此数组也有'Object'所有的属性
 例如'toLocaleString()'、'toString()'、'valueOf()' 属性
2.'valueOf()' 返回的数组本身，'toString()' 和 'toLocaleString()' 返回
的是将数组中的每一项用','分割的字符串，这里要说明虽然两个返回
的都是逗号分割的字符串，但是两者实际调用的不同，他们调用的是
该数组项中，每项自己的'toString()' 和 'toLocaleString()' 方法
3.这里还有个小知识点，有时候当我们用'alert'输出 内容的时候，实际
会调用要输出元素的'toString()'方法
4.也可以用数组自带的方法'join()'将数组转换成字符串
~~~
>[danger] ##### 对数组的toLocaleString()、toString()、valueOf() 以及join()说明
~~~
1.toLocaleString()、toString()、valueOf()  这三个方法属于'Object',是数组
从'Object'继承来的。'join()'是数组本身的方法
~~~
~~~
var array = ['wang','wang2']
console.log(array.join()) // 什么不写默认逗号分割
console.log(array.toString())
console.log(array.toLocaleString())
console.log(array.valueOf())

打印结果：
wang,wang2
wang,wang2
wang,wang2
["wang", "wang2"]
~~~
* 解释上面第二条说明
~~~
const {log} = console

//-------------更新笔记----------------
const date = new Date('2016-7-8')
log(date.toString())
log(date.toLocaleString())

const tt = [new Date('2016-7-8')]
log(tt.toString())
log(tt.toLocaleString())

// 上面的打印结果都是都是
Fri Jul 08 2016 00:00:00 GMT+0800 (GMT+08:00)
2016-7-8 00:00:00

~~~