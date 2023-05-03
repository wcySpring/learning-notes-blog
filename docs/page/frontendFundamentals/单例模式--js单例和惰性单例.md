[TOC]

 
>[success] # js 的单例
~~~
1.首先单例模式是只能创建一次实例，如果我们在代码中写 var a = {}
你会发现不论我们怎么调用a里面的方法，实际a只被调用了一次，其实
js自带单例
2.不好的地方需要全局变量命名
~~~
>[success] # 惰性单例
~~~
1.惰性单例是指在需要的时候才创建，和之前的几个案例写法上是一样的，当
使用的时候去new 或者去调用静态方法创建实例
2.创建弹窗或者那些只要执行一次就可以全局使用的实例都可以用单例
~~~
* 例如+
~~~
var Singleton = function (name) {
    this.name = name
}

// 静态属性（类属性）
Singleton.instance = null

Singleton.prototype.getName = function () {
    console.log(this.name)
}
// 静态
Singleton.getInstance = function (name) {
    if(!this.instance){
        this.instance = new Singleton(name)
    }
    return this.instance
}
var a = Singleton.getInstance('wang')
var b = Singleton.getInstance('Yi')

console.log(a.name) // wang
console.log(b.name) // wang
console.log(a === b ) // true
~~~
>[info] ## 通用惰性单例
~~~
1.举个书中的例子，登陆的弹窗可能在ifram 中或者非ifram中都需要弹出，
那么我们使用单例模式的时候是否还需要在ifram中适配一个符合在ifram可以
通用的弹窗，这时候就可以使用'通用惰性单例'
2.再举个例子遮罩层，如果登录页的遮罩层和非登录页的不同，是否我们需要
写两个单例，一个给遮罩层用，一个给登录页用
~~~
>[danger] ##### 通用代码
~~~
var singleton = function(fn) {
    var instance;
    return function() {
        return instance || (instance = fn.apply(this, arguments));
    }
};
~~~
* 弹窗案例代码
~~~
var singleton = function(fn) {
    var instance;
    return function() {
        return instance || (instance = fn.apply(this, arguments));
    }
};
// 创建遮罩层
var createMask = function(){
    // 创建div元素
    var mask = document.createElement('div');
    // 设置样式
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.right = '0';
    mask.style.bottom = '0';
    mask.style.left = '0';
    mask.style.opacity = 'o.75';
    mask.style.backgroundColor = '#000';
    mask.style.display = 'none';
    mask.style.zIndex = '98';
    document.body.appendChild(mask);
    // 单击隐藏遮罩层
    mask.onclick = function(){
        this.style.display = 'none';
    }
    return mask;
};

// 创建登陆窗口
var createLogin = function() {
    // 创建div元素
    var login = document.createElement('div');
    // 设置样式
    login.style.position = 'fixed';
    login.style.top = '50%';
    login.style.left = '50%';
    login.style.zIndex = '100';
    login.style.display = 'none';
    login.style.padding = '50px 80px';
    login.style.backgroundColor = '#fff';
    login.style.border = '1px solid #ccc';
    login.style.borderRadius = '6px';

    login.innerHTML = 'login it';

    document.body.appendChild(login);

    return login;
};

document.getElementById('btn').onclick = function() {
    var oMask = singleton(createMask)();
    oMask.style.display = 'block';
    var oLogin = singleton(createLogin)();
    oLogin.style.display = 'block';
    var w = parseInt(oLogin.clientWidth);
    var h = parseInt(oLogin.clientHeight);
}

~~~