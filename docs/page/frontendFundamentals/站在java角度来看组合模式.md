>[success] # java 角度看组合模式
~~~
1.组合模式可以想成一棵树，树的组成就是'枝'和'叶','java'又不像'js'动态自带多态效果，
让我们在写的时候不在意到底是'枝'还是'叶'
2.在'java'想实现多态的一种途径就是想上转型，因此只需要让'树'和'叶' 继承同一个类即可，
但是这个类具体要有怎么样的实现暂时未知就可以用'抽象类来编写'
3. 因此可以拆分三个部分：
    3.1.'Component（抽象构件）'：它可以是接口或抽象类，为叶子构件和容器构件对象声明接口，
在该角色中可以包含所有子类共有行为的声明和实现。在抽象构件中定义了访问及管理它的子
构件的方法，如增加子构件、删除子构件、获取子构件等。

    3.2.'Leaf（叶子构件）'：它在组合结构中表示叶子节点对象，叶子节点没有子节点，它实现了在抽象
构件中定义的行为。对于那些访问及管理子构件的方法，可以通过异常等方式进行处理。

    3.3.'Composite（容器构件）'：它在组合结构中表示容器节点对象，容器节点包含子节点，其子节点
可以是叶子节点，也可以是容器节点，它提供一个集合用于存储子节点，实现了在抽象构件中定
义的行为，包括那些访问及管理子构件的方法，在其业务方法中可以递归调用其子节点的业务方法。
~~~
>[danger] ##### JavaScript设计模式与开发实践 给出的案例代码
~~~
1.书中给的这个案例不太好，大概可以看出整个案例思路，如果是叶子节点当你调用
添加方法的时候会抛出异常告诉你不可以添加
~~~
~~~
public abstract class Component{
     //add 方法，参数为 Component 类型
     public void add( Component child ){}
     //remove 方法，参数为 Component 类型
     public void remove( Component child ){}
}
public class Composite extends Component{
     //add 方法，参数为 Component 类型
     public void add( Component child ){}
     //remove 方法，参数为 Component 类型
     public void remove( Component child ){}
}
public class Leaf extends Component{
     //add 方法，参数为 Component 类型
     public void add( Component child ){
         throw new UnsupportedOperationException() // 叶对象不能再添加子节点
     }
     //remove 方法，参数为 Component 类型
     public void remove( Component child ){}
}
public class client(){
     public static void main( String args[] ){
         Component root = new Composite();
         Component c1 = new Composite();
         Component c2 = new Composite(); 
         Component leaf1 = new Leaf();
         Component leaf2 = new Leaf();
         root.add(c1);
         root.add(c2);
         c1.add(leaf1);
         c1.add(leaf2);
         root.remove();
     }
} 

~~~
>[danger] ##### 更好的案例 和写法的文章地址
[简洁版本](http://blueskykong.com/2017/01/20/design-Composite/)
[复杂深入版本](https://juejin.im/post/5bb730e96fb9a05d0c37e66b#heading-2)
[案例一](https://juejin.im/post/587f841661ff4b00651ee174)
[案例二](https://juejin.im/post/59e653c46fb9a0452935d715#heading-1)
>[success] # 让js 的叶子节点也不能在随意添加
~~~
1.组合模式的透明性使得发起请求的客户不用去顾忌树中组合对象和叶对象的区别，但它们在 
本质上有是区别的。 组合对象可以拥有子节点，叶对象下面就没有子节点， 所以我们也许会发生
一些误操作， 比如试图往叶对象中添加子节点。
2.可以向java一样在叶子节点上增加异常抛出
~~~
~~~
var MacroCommand = function(){
    return {
        commandsList: [],
        add: function( command ){
            this.commandsList.push( command );
        },
        execute: function(){
            for ( var i = 0, command; command = this.commandsList[ i++ ]; ){
                command.execute();
            }
        }
    }
};
var openTvCommand = {
    execute: function(){
        console.log( '打开电视' );
    },
    add: function(){
        throw new Error( '叶对象不能添加子节点' );
    }
};
var macroCommand = MacroCommand();
macroCommand.add( openTvCommand );
openTvCommand.add( macroCommand ) // Uncaught Error: 叶对象不能添加子节点 
~~~