>[success] # es5 的解决方案
~~~
1.将对象放入另一个对象之中，这些对象以一条链的方式进行引用，形成一个聚合对象。
这些对象都拥有相同的接口，当请求达到链中的某个对象时，这个对象会执行自身的操作，
随后把请求转发给链中的 下一个对象。
2.第二种利用'js' 动态语言的特性直接改代码
3.第三种AOP装饰函数
~~~
>[danger] ##### 第一种方式对象传递形成链的方式
~~~
1.首先第一种方式我们将当前对象传递给另一个对象，两个对象都有相同的方法，这样用起来
对用户来说是透明的，像下面的案例'MissileDecorator' 和'AtomDecorator' 都有'fire'方法因此
只不过这两个类中的'fire' 方法会将我们'Plane'的'fire' 方法进行加工
~~~
~~~
var Plane = function(){}
Plane.prototype.fire = function(){
    console.log( '发射普通子弹' );
}
 // 接下来增加两个装饰类，分别是导弹和原子弹：
var MissileDecorator = function( plane ){
    this.plane = plane;
}
MissileDecorator.prototype.fire = function(){
    this.plane.fire();
    console.log( '发射导弹' );
}
var AtomDecorator = function( plane ){
    this.plane = plane;
}
AtomDecorator.prototype.fire = function(){
    this.plane.fire();
    console.log( '发射原子弹' );
}
var plane = new Plane();
plane = new MissileDecorator( plane );
plane = new AtomDecorator( plane );
plane.fire();
// 分别输出： 发射普通子弹、发射导弹、发射原子弹
~~~
>[danger] ##### js 动态语言的特性
~~~
1.这个思路就是先存起来之前的要被装饰的方法，然后重写要被装饰的方法并且将之前保存的该方法
放入在接着增加想要扩展的逻辑
~~~
~~~
var plane = {
    fire: function(){
        console.log( '发射普通子弹' );
    }
}
var missileDecorator = function(){
    console.log( '发射导弹' );
}
var atomDecorator = function(){
    console.log( '发射原子弹' );
}
var fire1 = plane.fire;
plane.fire = function(){
    fire1();
    missileDecorator();
}
// 保存一下原来的plane中fire逻辑
var fire2 = plane.fire;
// 直接给原来的plane中fire重写并将上次记录原来的fire逻辑放回来
plane.fire = function(){
    fire2();
    atomDecorator();
}
plane.fire();
// 分别输出： 发射普通子弹、发射导弹、发射原子弹
~~~
>[danger] ##### 第三种AOP装饰函数
~~~
Function.prototype.before = function( beforefn ){
    var __self = this; // 保存原函数的引用
    return function(){ // 返回包含了原函数和新函数的"代理"函数
        beforefn.apply( this, arguments ); // 执行新函数，且保证 this 不被劫持，新函数接受的参数
        // 也会被原封不动地传入原函数，新函数在原函数之前执行
        return __self.apply( this, arguments ); // 执行原函数并返回原函数的执行结果，
        // 并且保证 this 不被劫持
    }
}
Function.prototype.after = function( afterfn ){
    var __self = this;
    return function(){
        var ret = __self.apply( this, arguments );
        afterfn.apply( this, arguments );
        return ret;
    }
};
~~~
* 使用的小案例
~~~
<html>
 <button tag="login" id="button">点击打开登录浮层</button>
 <script>
 Function.prototype.after = function( afterfn ){
     var __self = this;
     return function(){
     var ret = __self.apply( this, arguments );
     afterfn.apply( this, arguments );
     return ret;
 }
 };
 var showLogin = function(){
     console.log( '打开登录浮层' );
 }
 var log = function(){
     console.log( '上报标签为: ' + this.getAttribute( 'tag' ) );
 }
 showLogin = showLogin.after( log ); // 打开登录浮层之后上报数据
 document.getElementById( 'button' ).onclick = showLogin;
 </script>
</html> 
~~~
* 表单验证的案例
~~~
Function.prototype.before = function( beforefn ){
    var __self = this;
    return function(){
        if ( beforefn.apply( this, arguments ) === false ){
            // beforefn 返回 false 的情况直接 return，不再执行后面的原函数
            return;
        }
        return __self.apply( this, arguments );
    }
}
var validata = function(){
    if ( username.value === '' ){
        alert ( '用户名不能为空' );
        return false;
    }
    if ( password.value === '' ){
        alert ( '密码不能为空' );
        return false;
    }
}
var formSubmit = function(){
    var param = {
        username: username.value,
        password: password.value
    }
    ajax( 'http:// xxx.com/login', param );
}
// 装饰器
formSubmit = formSubmit.before( validata );
submitBtn.onclick = function(){
    formSubmit();
}
~~~
