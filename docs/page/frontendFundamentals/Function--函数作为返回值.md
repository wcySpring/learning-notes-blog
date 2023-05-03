>[success] # 函数作为返回值
~~~
1.函数作为返回值使用，在一些'ui' 框架提供的一些方法上很实用，例如
'element-ui',用'element-ui'vue的tree举个例子：
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
你会发现官方告诉你'node-click' 对应的使用方法是：
 handleNodeClick(data) {
        console.log(data);
 }
提出一个疑问，如果我想在传值怎么办？
2.这里可以发现'@node-click'接受的是一个函数，想传值我们只要在外面在套一层函数，返回值是一个函数即可，描述有些含糊，写成下面
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick(1)"></el-tree>
 handleNodeClick(num) {
        return function(data){
            console.log(num,data)
    }
 }
2.另一种思路，对一些具有函调函数作为参数函数近些一些扩展
function createComparisonFunction(propertyName){
    return function(object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else{
            return 0;
        }
    };
}

var data = [{name:"Zachary",age:"28"},{name:"Nicholas",age:"29"}];

data.sort(createComparisonFunction("name"));
alert(data[0].name); //Nicholas

data.sort(createComparisonFunction("age"));
alert(data[0].name); //Zachary
~~~