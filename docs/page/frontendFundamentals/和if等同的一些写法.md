>[success] # 和if 一些等同的写法
~~~
1.条件语句应该是我们在写代码中最常见的写法，下面介绍了一些和条件语句等同的更有意思的写法
~~~
>[danger] ##### 三目运算
~~~
var status = false    
if(status){
    console.log('11111')
}
// 上面的代码等同
status?console.log('111'):''
~~~
>[danger] ##### 利用&& 短路运算符
~~~
var status = false
if(status){
    console.log('11111')
}
// 上面的代码等同
status&&console.log('111')
~~~
>[danger] ##### 单行语句
~~~
1.要知道 {} 是个语法表示块的意思，不是if自己带的哟
~~~
~~~
var status = false
if(status){
    console.log('11111')
}

if(status) console.log('11111')
~~~