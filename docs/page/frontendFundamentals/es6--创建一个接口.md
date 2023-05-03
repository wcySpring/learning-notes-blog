>[success] # 实现接口
~~~
1.利用了 'new.target' 这样这个类只能被继承不能实例化 
~~~
~~~
class Rectangle{
    constructor(){
        if(new.target === Rectangle){
            throw new Error('这个类不能被实例化')
        }
    }
}
new Rectangle() // 报错
~~~