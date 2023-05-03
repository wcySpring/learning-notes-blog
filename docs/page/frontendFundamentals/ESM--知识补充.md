>[success] # Es Module
1. **CJS AMD 不是原生 JavaScript 模块**，JavaScript 标准制定者在 TC39（该标准定义了 ECMAScript 的语法与语义）为 **ECMAScript 6 引入了内置的模块系统**（ES6 Modules, **ESM**）。
2. **CommonJS 和 AMD 模块**，都只能在**运行时**确定这些东西 因为他们不是语言层面，ES6 的模块不是对象，**import 命令会被 JavaScript 引擎静态分析**，**在'编译'时就引入模块代码**，而不是在代码运行时加载，并且现在也支持**动态引用的方式**
3. **静态化**，使得**编译时**就能确定模块的**依赖关系**，以及输入和输出的变量
4. **劣势** ES Modules 是ECMAScript2015当中定义的最新的模块系统，也就是说它是最近几年才被定义的一个标准，所以它肯定会存在各种各样的环境兼容性问题（现在来看劣势已经可以忽略） [关于兼容可查看](https://caniuse.com/?search=modules)




>[danger] ##### 一定要看系列
[es-modules-a-cartoon-deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
[推荐一定要看的文章系列](https://nanyang.io/post/es-module)
>[danger] ##### 可读系列
[链接](https://zhuanlan.zhihu.com/p/33843378?group_id=947910338939686912)
>[danger] ##### 问答
[链接](https://mp.weixin.qq.com/s/Be-hUjPbtOPCdIpHIJX4ow)