>[success] # js抽象类
~~~
1.想让js 可以实现抽象类第一种就是'es6' 使用'new.target'实现一个伪抽象类
2.第二种使用'TS'
3.第三种是用鸭子类型来模拟接口检查，以便确保子类中确实重写了父类的方法。但模
  拟接口检查会带来不必要的复杂性，而且要求程序员主动进行这些接口检查，这就要求
  我们在业务代码中添加一些跟业务逻辑无关的代码。
4.第四种让 Beverage.prototype.brew 等方法直接抛出一个异常，如果因为粗心忘记编
  写 Coffee.prototype.brew 方法，那么至少我们会在程序运行时得到一个错误
    // 例如 
    Beverage.prototype.brew = function(){
         throw new Error( '子类必须重写 brew 方法' );
    }; 
~~~
