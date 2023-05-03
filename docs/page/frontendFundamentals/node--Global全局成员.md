[TOC]
>[success] # node -- Global 全局成员
~~~
1.可以去官网看了解更多关于Global 全局信息的内容
~~~
>[danger] ##### __filename  -- 包含文件名称的全路径
~~~
1.解释：包含文件路径指的是例如:C://myProject//a.txt
console.log('__filename');  // 打印当前文件整个地址
~~~
>[danger] ##### __dirname -- 文件的路径（不包含文件名称）
~~~
1.解释：包含文件路径指的是例如:C://myProject，和上面不同，没有得到当
前的文件，而是得到当前文件的保存目录
console.log('__dirname );  // 打印当前文件整个目录
~~~
>[danger] ##### global -- 全局变量
~~~
1.在Node.js中没有window对象，但是有一个类似的对象global，访问全局成
员的时候可以省略global
2例如:global.console.log(),平常直接写成console.log()
~~~
>[danger] #####  process.arch -- 打印当前系统的架构（64位或者32位）
~~~
1.console.log(process.arch)
~~~
>[danger] ##### process.argv -- 接受命令行参数
~~~
1.挡在cmd 执行node.js 的时候用来接受，在控制台输入的参数
2.argv是一个数组，默认情况下，前两项数据分别是：Node.js环境的路径；
当前执行的js文件的全路径，从第三个参数开始表示命令行参数
~~~
>[success] #  Global 全局成员 -- 模块化开发导入导出
~~~
1.CommonJS - Node.js  解释CommonJS 的模块导入就类似大多数语言的import
导入一样，但是因为node.js 的导入用的是 -- require模块帮忙引入.
2.让模块与模块之间进行通信，使用对象exports，exports 默认是一个空对象要做
的就是把所有需要被外部访问的成员挂载到这个 exports 对象中
3.因此node.js 使用模块的时候需要做两点第一点模块导出，第二点是模块导入
~~~
>[danger] ##### exports/ require -- 模块导出/模块导入
~~~
1.当只想导出模块中的单个方法或者单个属性的时候 -- module.exports
2.当想导出模块多个对象的时候可以使用 -- exports = {} 或者 module.exports = {}
~~~
* 做说明为什么 使用exports  分两种导出效果
~~~
1.首先其实在导出模块的时候，系统帮我们自动隐藏了个module 变量，这个变量的格式是
var module = {
  exports: {
    
  }
}
2.而最后被导出的是 -- return module.exports 这个变量
3.因此如果导出的时候写的是 module.exports = num(这个num是我假想的一个变
量)因此整个返回的就从return module.exports  变了了 return num 这样只能返回
单个变量。
4.如果想多个变量就可以使用exports = {}或者 module.exports = {} 这样返回的相当于一个对象，引入端就可以使用这个对象
5.根据上面总结导出是  module.exports，导入的是接受module.exports的返回值
~~~
* 列子
a.js -- 导出
~~~
var num = 1;
var num2 = 2;
module.exports = num; // 只导出num 变量
exports = {num:num,num2:num2}; // 导出一个对象，可以使用num 和num2
module.exports = {num:num,num2:num2};// 导出一个对象，可以使用num 和num2
~~~
b.js -- 导入
~~~
var objb = require('./a.js')
console.log(objb) // 如果从a.js单个导出返回值就是num，直接使用打印
console.log(objb.num) // 如果从a.js多个导出就要从对象中取出指定要使用的+
~~~
>[danger] ##### global -- 不推荐使用的导出
~~~
1.我们在使用普通的js写前端的代码的时候，经常会把一些全局变量存在window
中，在node.js 中global  也可以这么使用
2.当然导入导出的时候都使用了global
~~~
* 列子
a.js -- 导出
~~~
var flag = 123;
global.flag = flag;
~~~
b.js -- 导入
~~~
var a = require('./a.js');
console.log(global.flag)
~~~
>[danger] ##### 说明 -- 关于导入后缀省略的说明
~~~
1.导入的时候可以导入模块文件的后缀3种情况：.js .json .node
2.上述三种模块的加载在同名时候的优先级(不加文件后缀时的优先级)：.js -> .json -> .node
3.导入json 例子：const mime = require('./mime.json');
~~~
>[danger] ##### 对导入查找机制的说明
~~~
第一个步骤：路径分析
1.require接收一个表示符作为参数，标识符在node中分为以下几类：
    1.1.'核心模块：如http、fs'
    1.2.'.或..开始的相对路径文件模块'
    1.3.'以/开始的绝对路径文件模块'
    1.4.'分路径形式的文件模块'
前三类都很明确根据路径查找，不需要做过多的讲解。文件模块的路径生成规则
是：首先查找当前目录下的node_modules目录；其次查找父目录下的
node_modules目录；再次查找父目录的父目录下的node_modules；最后不断向
上递归查找，直到根目录的node_modules目录。总而言之一句话：一直向上找，
直到找到根目录，如果找不到会进入文件文件定位阶段。
 
第二个步骤：文件定位
 1.我们知道在我们写require的时可以不叫扩展名，这个时候就需要一个规则，来
判断到底使用的是什么后缀的文件，这里就会用到文件定位。首先会补全扩展名
查找，补全的顺序是：.js、.node、.json。如果补全之后还没有找到的话，会把这
个表示符作为一个目录查找，找到这个目录后会，查找当前目录下是否有
package.json，提取main的属性值进行定位，如果没有main的话，会查找index，
然后一次查找index.js、index.json、index.node，如果还是找不到的话，就会抛出
查找失败的异常。
~~~
<a href="https://www.cnblogs.com/xiaoheimiaoer/p/3803237.html?utm_source=tuicool&utm_medium=referral">内容节选地址跳转</a>
