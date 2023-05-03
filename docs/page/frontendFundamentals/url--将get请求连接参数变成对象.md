>[success] # 将get请求参数变成对象
~~~
1.需要'location'对象中'sreach' 属性 -- 返回url查新字符串，
以问号开头的内容例如:' ?q="js" '
~~~
>[danger] ##### 案例
~~~
1.下面代码学习到的知识点，如果有些在循环中需要重新，
被初始化的参数，可以在循环体外定义，例如里面的'item',
'value','name' 都是在循环体外定义初始化值
2.decodeURIComponent -- 将对应的'urlencode'格式转换成
对应的汉字符串
3.加一些可以预料的结果代判断，让代码更加健硕类似
'const items = qs.length?qs.split("&"):[]'
~~~
~~~
function getQueryStringArgs() {
    /**
     * 判断当前连接中是否含有问号往后的参数
     * 思路另一种直接拿到完整的url然后用?号进行分割
     * substring -- 截取字符从指定开始位置结束位置，顾头不顾腚截取
     **/
    const qs = location.search.length?location.search.substring(1):''
    const args = {}
    const items = qs.length?qs.split("&"):[]
    let item = null
    let name = null
    let value = null
    items.forEach(sreachItem=>{
        item = sreachItem.split('=')
        name = decodeURIComponent(item[0])
        value = decodeURIComponent(item[1])
        if(name.length){
            args[name] = value
        }
    })
    return args
}
~~~