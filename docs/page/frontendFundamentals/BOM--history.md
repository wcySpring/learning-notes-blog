>[success] # history
1. **history**对象允许我们访问浏览器曾经的会话历史记录
* **方法**
1.1. **back()**：返回上一页，等价于history.go(-1)；
1.2. **forward()**：前进下一页，等价于history.go(1)；
1.3. **go()**：加载历史中的某一页；
1.4. **pushState()**：打开一个指定的地址；
1.5. **replaceState()**：打开一个新的地址，并且使用replace；
* **属性**
1.6. **length**：会话中的记录条数
1.7. **state**：当前保留的状态值