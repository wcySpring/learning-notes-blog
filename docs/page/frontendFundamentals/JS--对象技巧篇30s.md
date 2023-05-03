>[success] # js 30s
[这个章节的文章 都是来自30s 笔记，方便自己看](https://www.30secondsofcode.org/js/t/object/e/1)

>[danger] ##### 当处理对象时候可以先变成数组在处理
~~~
1.在对象循环的时候不单可以使用for...in 的形式循环，可以采用利用'Object.keys'
 或者'Object.values' 这些对象方法将数组转换为数组，在利用reduce 特性将其重洗
变回对象
~~~
* 举个例子想将对象中的key都小写后重新输出
[lowercase-keys](https://www.30secondsofcode.org/js/s/lowercase-keys)
~~~
const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});

const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
~~~
* 类似的解决思路案例
[map-keys](https://www.30secondsofcode.org/js/s/map-keys)