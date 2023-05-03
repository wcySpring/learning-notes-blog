>[success] # data-\*
当想给一些 html 元素中增加一些自定义元素方便在使用js进行获取和保存，例如
~~~html
<div name="w" age="12" sex="1">测试</div>
~~~
上面这种情况在取值时候需要一个一个属性进行取值，html5提供了全局属性的特性
1. **data-开头**
2. **data-后必须至少有一个字符**，多个单词使用-连接
3. 将data-后面的单词使用**camel命名法连接**:必须使用camel合法法获取值否则有可能无法获取到值
4. **dataset 获取**
~~~html
<!--定义-->
<!--规范：
1.data-开头
2.data-后必须至少有一个字符，多个单词使用-连接
建议：
1.名称应该都使用小写--不要包含任何的大写字符
2.名称中不要有任何的特殊符号
3.名称不要副作用纯数字-->
<p data-school-name="itcast">12</p>
<p data-name="itcast">12</p>

<!--取值-->
<script>
    window.onload=function(){
        var p=document.querySelector("p");
        /*获取自定义属性值*/
        /*将data-后面的单词使用camel命名法连接:必须使用camel合法法获取值否则有可能无法获取到值*/
        //var value=p.dataset["schoolname"];//data-schoolname
        var value=p.dataset["schoolName"];//data-school-name
        console.log(value);
    }
</script>
~~~