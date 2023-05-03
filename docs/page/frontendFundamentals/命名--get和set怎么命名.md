>[success] # get/set --- 命名
~~~
1.一下内容 还需要有准确资料来确保，目前只是个人理解
~~~
>[danger] get --命名
~~~
1.get 命名更多应该是返回一个内容，并且不应该方法传参数
~~~
* 错误
~~~
function getName(parmas) {
    let name = parmas
}
~~~
* 正确 一
~~~
function setName(parmas) {
    let name = parmas
}
~~~
* 正确 二(get起名的方法不要传参数)
~~~
function getName() {
    return 'wang'
}
~~~