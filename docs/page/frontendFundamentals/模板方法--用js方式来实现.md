>[success] # js 简单粗暴的方式
~~~
1.我个人不会建议这种写法，因为随着'es6'的崛起class变得不再那么抽象，
'TS'也让js 有了新的灵魂，但是js依旧还是那个和其他语言不同，奔放自由
仍然是他的特点
2.在 JavaScript 中，我们很多时候都不需要依样画瓢地去实现一个模版方法模式，高阶函数
是更好的选择。这也是js的特点
~~~
>[danger] ##### 案例
~~~
var Beverage = function( param ){
    var boilWater = function(){
        console.log( '把水煮沸' );
    };
    var brew = param.brew || function(){
        throw new Error( '必须传递 brew 方法' );
    };
    var pourInCup = param.pourInCup || function(){
        throw new Error( '必须传递 pourInCup 方法' );
    };
    var addCondiments = param.addCondiments || function(){
        throw new Error( '必须传递 addCondiments 方法' );
    };
    var F = function(){};
    F.prototype.init = function(){
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    };
    return F;
};
// 传参调用形成类似继承效果
var Coffee = Beverage({
    brew: function(){
        console.log( '用沸水冲泡咖啡' );
    },
    pourInCup: function(){
        console.log( '把咖啡倒进杯子' );
    },
    addCondiments: function(){
        console.log( '加糖和牛奶' );
    }
});
var Tea = Beverage({
    brew: function(){
        console.log( '用沸水浸泡茶叶' );
    },
    pourInCup: function(){
        console.log( '把茶倒进杯子' );
    },
    addCondiments: function(){
        console.log( '加柠檬' );
    }
});
var coffee = new Coffee();
coffee.init();
var tea = new Tea()
~~~