>[success] # 返回true 和 false
~~~
1.一个function 最后需要返回true 和false，简单的说就是需要
返回一个布尔值，没有过多逻辑方面的判断可以直接返回，条件
判读无需增加过多的if 分支
~~~
>[danger] ##### 举个例子
~~~
1.向下面这种简单的逻辑代码，最后整个函数只会根据简单的函数，
内部条件进行返回，可以考虑直接返回条件即可
~~~
* 错误示范
~~~
function isBoolean() {
    const name = 'wang'
    if(name === 'wang'){
        return true
    }else{
        return false
    }
}
~~~
* 正确写法
~~~
function isBoolean() {
    const name = 'wang'
    return name === 'wang'
}
~~~