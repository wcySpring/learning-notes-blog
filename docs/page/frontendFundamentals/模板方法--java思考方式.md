>[success] # java思考
~~~
1.首先模板方法需要抽象类的概念，什么是抽象类呢？
    1.1抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造
       方法的访问方式和普通类一样。
    1.2由于抽象类不能实例化对象，所以抽象类必须被继承
2.但在es5 是没有抽象类的概念，'es6'可以实现伪抽象类或者使用'TS'
3.抽象类,不能被实例化，其实也是出于现实考虑的，书中举了个例子：
    3.1我们口渴了，去便利店想买一瓶饮料，我们不能直接跟店员说：“来一
    瓶饮料。”如果我们这样说了，那么店员接下来肯定会问：“要什么饮料？”饮料只是一个抽象名
    词，只有当我们真正明确了的饮料类型之后，才能得到一杯咖啡、茶、或者可乐。
    3.2.根据这个例子可以分析得出，'抽象类'是一个没有庞大概念的统称，需要我们具体进一步去
    实现里面的特性才能进而被使用
    3.3 java 不是像js 天生多态，因此抽象方法让子类继承其实更好的还是为了向下转型的验证
~~~
>[dsanger] ##### java 代码的实现
~~~
// Java 代码
public abstract class Beverage { // 饮料抽象类
 final void init(){ // 模板方法
     boilWater();
     brew();
     pourInCup();
     addCondiments();
 }
void boilWater(){ // 具体方法 boilWater
     System.out.println( "把水煮沸" );
 }
     abstract void brew(); // 抽象方法 brew
     abstract void addCondiments(); // 抽象方法 addCondiments
     abstract void pourInCup(); // 抽象方法 pourInCup
}
public class Coffee extends Beverage{ // Coffee 类
 @Override
 void brew() { // 子类中重写 brew 方法
     System.out.println( "用沸水冲泡咖啡" );
 }
 @Override
void pourInCup(){ // 子类中重写 pourInCup 方法
     System.out.println( "把咖啡倒进杯子" );
 }
 @Override
void addCondiments() { // 子类中重写 addCondiments 方法
     System.out.println( "加糖和牛奶" );
 }
}
public class Tea extends Beverage{ // Tea 类
 @Override
void brew() { // 子类中重写 brew 方法
     System.out.println( "用沸水浸泡茶叶" );
 }
 @Override 
void pourInCup(){ // 子类中重写 pourInCup 方法
     System.out.println( "把茶倒进杯子" );
 }
 @Override
 void addCondiments() { // 子类中重写 addCondiments 方法
     System.out.println( "加柠檬" );
 }
}
public class Test {
     private static void prepareRecipe( Beverage beverage ){
     beverage.init();
}
 public static void main( String args[] ){
     Beverage coffee = new Coffee(); // 创建 coffee 对象
     prepareRecipe( coffee ); // 开始泡咖啡
     // 把水煮沸
     // 用沸水冲泡咖啡
     // 把咖啡倒进杯子
     // 加糖和牛奶
     Beverage tea = new Tea(); // 创建 tea 对象
     prepareRecipe( tea ); // 开始泡茶
     // 把水煮沸
     // 用沸水浸泡茶叶
     // 把茶倒进杯子
     // 加柠檬
     }
} 

~~~