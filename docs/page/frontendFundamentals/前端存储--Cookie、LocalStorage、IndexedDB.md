>[success] # 前端存储 -- Cookie、LocalStorage、IndexedDB、sessionStorage
~~~
1.'Cookie' 存储大小 4kb
2.'LocalStorage' 存储大小2.5m ~ 10mb
3.'IndexedDB' 存储大小可用磁盘空间的50％，关于'IndexedDB'特性
 3.1.浏览器提供的本地数据库，支持事务、索引
 3.2.键值对储存
 3.3.异步
 3.4.同源限制
 3.5.储存空间大
 3.6.支持二进制储存
~~~
>[danger] #####  常用
1. **localStorage**：本地存储，提供的是一种永久性的存储方法，在关闭掉网页重新打开时，存储的内容依然保留；

2. **sessionStorage**：会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除；

* 区别
1. 关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除
2. 在页面内实现跳转，localStorage会保留，sessionStorage也会保留
3. 打开新的页面, 并且是在新的标签中打开，localStorage会保留，sessionStorage不会被保留

* **方法和属性**
`属性`：
**Storage.length**：只读属性返回一个整数，表示存储在Storage对象中的数据项数量；
`方法`：
**Storage.key(index)**：该方法接受一个数值n作为参数，返回存储中的第n个key名称；
**Storage.getItem()**：该方法接受一个key作为参数，并且返回key对应的value；
**Storage.setItem()**：该方法接受一个key和value，并且将会把key和value添加到存储中。如果key存储，则更新其对应的值；
**Storage.removeItem()**：该方法接受一个key作为参数，并把该key从存储中删除；
**Storage.clear()**：该方法的作用是清空存储中的所有key；

* 同一调用类
~~~
class Cache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage: sessionStorage
  }

  setCache(key, value) {
    if (!value) {
      throw new Error("value error: value必须有值!")
    }

    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key) {
    const result = this.storage.getItem(key)
    if (result) {
      return JSON.parse(result)
    }
  }

  removeCache(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const localCache = new Cache()
const sessionCache = new Cache(false)

~~~

