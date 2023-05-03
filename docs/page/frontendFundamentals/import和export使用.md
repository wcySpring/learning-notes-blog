>[success] #  import 和 export 使用
1. **export**关键字将一个模块中的**变量、函数、类等**导出
2. **import**关键字负责从**另外一个模块中导入内容**
>[danger] ##### export
1. 在语句声明的前面直接加上export关键字
2. 将所有需要导出的标识符，放到**export后面的 {}中**
3. 导出时给标识符起一个别名,通过as关键字起别名

~~~
const a = 1

export const b = 1

export function c() {}

export { a }

export { a as newA }

~~~
>[danger] ##### import
1. **import {标识符列表} from '模块'**
2. 导入时给标识符起别名,通过**as关键字起别名**
3. 通过 * 将模块功能放到一个模块功能对象（ module object）上
~~~
import { a } from './bb.js'
import { a as zz } from './bb.js'
import * as all from './bb.js'
~~~
>[danger] ##### export和import 组合使用
~~~
/**
 * import { a } from './bb.js'
 * export { a }
 */
export { a } from './bb.js'
~~~
>[danger] ##### default
1. 默认导出export时可以**不需要指定名字**,在一个模块中，**只能有一个默认导出**
~~~
const a = 1

export default a
~~~
* 导入
~~~
import  a  from './bb.js'

~~~
>[danger] ##### 关于import 导入 注意点
1. 在 import 在导入模块时，from写的是导入模块的路径，它是一个字符串，在这个字符串当中，必须使用完整的文件名称，不能省略扩展名，不能省略文件后缀

2. 在原生 ES Modules 中不能自动载入 index.js 例如：
   import { lowercase } from './utils'   -- 这是错误示范不能省略index.js
   import { lowercase } from './utils/index.js' -- 正确写法

3.如果我们使用的是相对路径时的’./…'无法省略，如果省略以字母开头，ES Moudles 
  会认为是在加载第三方模块，例如在node_modules有一个loash库
  import _ from 'loash'

4.使用相对路径甚至是完整的 URL 去加载模块，当然前提是引入的URL 允许跨域
5.只需要去执行某个模块，并不需要提取其中的成员--" import ' 路径 ' "
6.如果一个模块需要导出的的成员特别多，且在导入时都会用到，则可以使用 -- import * as 对象名 from '路径' 
7.如果在一个模块中同时导出了命名成员和默认成员，可以简写为：
   import abc, { name, age } from './module.js'


>[danger] ##### 具体使用
[看阮一峰老师文章就够用了](https://es6.ruanyifeng.com/#docs/module)