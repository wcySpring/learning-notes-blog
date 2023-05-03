[TOC]
>[success] # js 模块化
1. 模块化出发点，**像后台一样将复杂的程序依据一定的规则（规范）封装成几个块（文件）**，并进行组合在一起的**内部数据/实现是私有的**，只是想**外部暴露一些接口（方法）与外部的模块通信**，让代码达到'**解耦的需要**'
2. 模块化的步骤就是 先将程序分成**一个个小的结构**，这个**结构**有自己逻辑代码，有自己的作用域，定义变量名词时不会影响到其他的结构，还可以对外暴露的变量、函数、对象等导出给其结构使用，也可以导入另外结构中的**变量、函数、对象**

3. web端模块化之后将文件大小缩小，并且利用减少文件大小，节约 Http 请求时间

>[danger] ##### 最初阶段实现模块化开发方式 -- stage-1
~~~
1.在早期开发，开发人员会将各部分的逻辑代码封装成，对应的js文件，通过文件的形式来进行代码
模块化的开发，当使用某个模块的时候通过'script'标签引入这些文件，一个 script 标签就对应一个模块
'缺点'：
    1.1.所有的模块都直接在全局范围去工作，并没有一个独立的私有空间，导致模块当中所有的成员都可以
        -在模块外部被任意的访问或修改，也就是污染全局作用域，
    1.2.模块多了过后还会存在命名冲突问题，也无法管理模块依赖的关系。它完全依靠约定，
        项目一但上了体量，就彻底不行了
~~~
* 这个阶段的代码
~~~
├── src      //  源码文件
|   ├── index.html
|   └── module-a.js
|   └── module-b.js  
~~~
* index.html
~~~
 <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    // 命名冲突
    function method1(){  }
    // 模块成员可以被修改
    name = 'foo'
  </script>-
~~~
* module-a.js
~~~
let  a = 1
// module a 相关状态数据和功能函数

var name = 'module-a'

function method1 () {
  console.log(name + '#method1')
}

function method2 () {
  console.log(name + '#method2')
}
~~~
* module-b.js
~~~
console.log(a) // 1 可以打印出a文件中的let 定义a变量
// module b 相关状态数据和功能函数

var name = 'module-b'

function method1 () {
  console.log(name + '#method1')
}

function method2 () {
  console.log(name + '#method2')
}

~~~
>[danger] ##### 解决变量名冲突采用对象的形式-- stage-2
~~~
1.为了解决命名冲突的问题，采用每个模块只暴露一个全局对象，所有模块成员都挂载到这个对象中，
通过将每个模块「包裹」为一个全局对象的形式实现，有点类似于为模块内的成员添加了「命名空间」的形式，
虽然解决了命名冲突的问题，但是'缺点':
    1.1.没有私有空间，所有模块成员也可以在模块外部被访问或者修改，
    1.2.无法管理模块之间的依赖关系
~~~
* 这个阶段的代码
~~~
├── src      //  源码文件
|   ├── index.html
|   └── module-a.js
|   └── module-b.js  
~~~
* index.html
~~~
  <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    moduleA.method1()
    moduleB.method1()
    // 模块成员可以被修改
    moduleA.name = 'foo'
  </script>
~~~
* module-a.js
~~~
// module a 相关状态数据和功能函数

var moduleA = {
  name: 'module-a',

  method1: function () {
    console.log(this.name + '#method1')
  },

  method2: function () {
    console.log(this.name + '#method2')
  }
}

~~~
* module-b.js
~~~
// module b 相关状态数据和功能函数

var moduleB = {
  name: 'module-b',

  method1: function () {
    console.log(this.name + '#method1')
  },

  method2: function () {
    console.log(this.name + '#method2')
  }
}
~~~
>[danger] ##### 解决模块变量被全局访问的问题 -- stage-3
~~~
1.这个阶段使用立即执行函数表达式（IIFE：Immediately-Invoked Function Expression）为模块提供私有空间，
   立即执行函数利用的就是函数执行后，执行函数内部变量就会被销毁因此实现了私有。
2.这种方式实现步骤：
    2.1.将每个模块成员都放在一个函数提供的私有作用域中，
    2.2.对于需要暴露给外部的成员，通过挂在到全局对象上的方式实现
~~~
[立即执行函数](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F)
[执行函数内部变量被销毁](https://www.kancloud.cn/cyyspring/more/1314922)
* index.html
~~~
 <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    moduleA.method1()
    moduleB.method1()
    // 模块私有成员无法访问
    console.log(moduleA.name) // => undefined
  </script>
~~~
* module-a.js
~~~
// module a 相关状态数据和功能函数

;(function () {
  var name = 'module-a'
  
  function method1 () {
    console.log(name + '#method1')
  }
  
  function method2 () {
    console.log(name + '#method2')
  }

  window.moduleA = {
    method1: method1,
    method2: method2
  }
})()
// 也可以用下面的形式声明变量接受返回立即执行返回值
let newsModule = (function () {
    let time = new Date();
    const query = function query() {
        // ...
    };
    const handle = function handle() {
        // ...
    };

    // 把供其它板块调用的方法，暴露到全局对象上「局限：暴露的内容比较多，则还会引发全局变量冲突」
    // window.query = query;

    return {
        // query:query
        query,
        handle
    };
})();
~~~
* module-b.js
~~~
// module b 相关状态数据和功能函数

;(function () {
  var name = 'module-b'
  
  function method1 () {
    console.log(name + '#method1')
  }
  
  function method2 () {
    console.log(name + '#method2')
  }

  window.moduleB = {
    method1: method1,
    method2: method2
  }
})()
~~~
* 这种形式如何解决管理模块之间的依赖关系
~~~
1.module-a.js 需要jq ，在文件引入的时候也需要按照执行顺序先引入'jq',配合立即执行函数传入
jq对象，这样a.js 就和jq形成了依赖关系
~~~
~~~
 <script src="https://unpkg.com/jquery"></script>
  <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    moduleA.method1()
    moduleB.method1()
  </script>
~~~
~~~
// module a 相关状态数据和功能函数

;(function ($) {
  var name = 'module-a'
  
  function method1 () {
    console.log(name + '#method1')
    $('body').animate({ margin: '200px' })
  }
  
  function method2 () {
    console.log(name + '#method2')
  }

  window.moduleA = {
    method1: method1,
    method2: method2
  }
})(jQuery)
~~~
>[danger] ##### 引入模块化期待解决的问题
~~~
避免命名冲突（减少命名空间污染）
更好的分离，按需加载
更高复用性
高可复用性
~~~
>[danger] ##### 实际前期模块化出现问题
~~~
1.我对模块化的理解，前端在尝试像后台一样采用将代码以模块为单位分离做了多次尝试，虽然每次都解决
了部分问题但依旧存在几个比较常见的问题
 1.1.加载的时候会停止渲染网页，引入的js文件越多，网页失去响应的时间越长；
 1.2.会污染全局变量；
 1.3.js文件之间存在依赖关系，加载是有顺序的，依赖性最大的要放到最后去加载；当项目规模较大时，
 依赖关系变得错综复杂。
 1.4.要引入的js文件太多，不美观，代码难以管理。
从而引发'请求过多'、'依赖模糊'、'难以维护'
2.由此出现了 cjs 、AMD 、CMD、ESM 、UMD 等解决方案，这里三大模块体系中，只有首字母不一样，
而后两个字母则都是 Module Definition 的缩写
~~~





