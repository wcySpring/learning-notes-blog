>[success] # 前端自带命令模式
~~~
1.分析刚才的命令模式构成：
    Invoker ： 请求的调用者，内部持有具体请求的引用，统一调用指令即
    'ConcreteCommand' 定义的收口方法execute 
    
    ConcreteCommand ：封装的请求对象，内部持有Receiver对象，因为所谓
    指令是将Receiver 中的方法分成详细条数通过统一收口来调用Receiver 中的方法


    Receiver：请求接受者，就是一个对象里面有一堆方法，'ConcreteCommand '
   会根据里面方法去拆分对应的指令

2.通过js函数是一等公民的概念，让命令模式成为了js与生俱来的特性，如果我们将'Receiver'
这个接受者中的方法直接传递给'Invoker'这个调用者利用回调函数来写就会是下面的案例
~~~
>[danger] ##### 代码的实现
~~~
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <button id="button1">点击按钮1</button>
    <button id="button2">点击按钮2</button>
    <button id="button3">点击按钮3</button>
</body>
<script>
    var button1 = document.getElementById('button1')
    var button2 = document.getElementById('button2')
    var button3 = document.getElementById('button3')

    var bindClick = function (button, func) {
        button.onclick = func
    }

    var MenuBar = {
        refresh:function () {
            console.log('刷新菜单目录')
        }
    }

    var SubMenu = {
        add:function () {
            console.log('增加子菜单')
        },
        del:function () {
            console.log('删除子菜单')
        }
    }

    // 这种使用和刚才案例还是有不同点上面的案例对指令统一收口
    // 最后都是 execute 作为调用，可以不用关系新这些对象开发人员方法定义
    // 内部实现，只要他们将指令和 对应的处理指令的对象关联即可 
    bindClick( button1, MenuBar.refresh );
    bindClick( button2, SubMenu.add );
    bindClick( button3, SubMenu.del );
</script>

</html>
~~~
>[danger] ##### 方案二使用闭包
~~~
1.在Java中你可能需要针对指令还需要声明一个接口，然策略模式都继承，在'Invoker '请
求通过传入的对象同一调用上篇案例的'execute'方法
2.但是现在不想向上面的案例没有每一个单独的策略对象，又不想像上一篇文章需要封装那么多
策略类，就个可以使用闭包
~~~
~~~
var setCommand = function( button, func ){
    button.onclick = function(){
        func();
    }
};
var MenuBar = {
    refresh: function(){
        console.log( '刷新菜单界面' );
    }
};

// 利用闭包封装单个指令
var RefreshMenuBarCommand = function( receiver ){
    return function(){
        receiver.refresh();
    }
};
var refreshMenuBarCommand = RefreshMenuBarCommand( MenuBar );
setCommand( button1, refreshMenuBarCommand );
~~~