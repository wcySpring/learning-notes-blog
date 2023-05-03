>[success] # URLSearchParams
1. **URLSearchParams**定义了一些实用的方法来处理 URL 的查询字符串 
2. 可以将一个字符串转化成**URLSearchParams**类型
3. 也可以将一个**URLSearchParams**类型转成字符串
~~~
const urlSearch = new URLSearchParams('aaa=1&bbb=2')
// 获取对应val
const aaa = urlSearch.get('aaa')
// 转为字符串
urlSearch.toString()
~~~
* 其他方法
1. **get**：获取搜索参数的值；
2. **set**：设置一个搜索参数和值；
3. **append**：追加一个搜索参数和值；
4. **has**：判断是否有某个搜索参数；

注：https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams