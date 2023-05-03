>[success] # js 严格模式
1. JS 是向后兼容形式去升级，因此在一些不合理的语法地方是不能去轻易改动，但是又想解决提出了**严格模式的概念**，是一种具有限制性的JavaScript模式，从而使代码隐式的脱离了**懒散（sloppy）模式**
2. 开启严格模式可以**在js文件中开启严格模式**，也支持对**某一个函数开启**严格模式，开启方式式通过在文件或者函数开头使用 **use strict** 来开启,其中“**class**” 和 “**module**” ，它们会自动启用 **use strict**
>[danger] ##### 严格模式限制

1. 无法意外的创建全局变量
2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
3. 严格模式下试图删除不可删除的属性
4. 严格模式不允许函数参数有相同的名称
5. 不允许0的八进制语法
6. 在严格模式下，不允许使用with
7. 在严格模式下，eval不再为上层引用变量
8. 严格模式下，this绑定不会默认转成对象
~~~
    "use strict"
    // 1.不会意外创建全局变量
    // function foo() {
    //   message = "Hello World"
    // }

    // foo()
    // console.log(message)

    // 2.发现静默错误
    var obj = {
      name: "why"
    }

    Object.defineProperty(obj, "name", {
      writable: false,
      configurable: false
    })

    // obj.name = "kobe"
    console.log(obj.name)

    // delete obj.name
    console.log(obj)

    // 3.参数名称不能相同
    // function foo(num, num) {

    // }

    // 4.不能以0开头
    // console.log(0o123)

    // 5.eval函数不能为上层创建变量
    // eval(`var message = "Hello World"`)
    // console.log(message)

    // 6.严格模式下, this是不会转成对象类型的
    function foo() {
      console.log(this)
    }
    foo.apply("abc")
    foo.apply(123)
    foo.apply(undefined)
    foo.apply(null)
    
    // 独立函数执行默认模式下, 绑定window对象
    // 在严格模式下, 不绑定全局对象而是undefined
    foo()
~~~