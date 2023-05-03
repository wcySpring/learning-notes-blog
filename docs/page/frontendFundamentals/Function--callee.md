>[success] # callee
~~~
1.arguments的主要用途是保存函数参数，但这个对象还有一个名叫callee的
属性，该属性是一个指针，指向拥有这个arguments对象的函数。
~~~
>[danger] ##### 用途可以在递归的时候让代码更加解耦
* 递归方法
~~~
function factorial(num){
        if(num<=1){
            return 1;
        }else{
            return num * factorial(num-1);
        }
 }
~~~
* 如果是函数表达式或者是用其他函数接收递归函数调用
~~~
    const test = function (num){
        if(num<=1){
            return 1;
        }else{
            return num * arguments.callee(num-1);
        }
    }
   console.log( test(10))
~~~