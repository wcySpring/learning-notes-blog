>[success] # 使用babel 进行模块打包
~~~
1.当使用babel 默认打包时候发现将打包好的js 文件直接引入html 使用，得不到想要的运行结果，
原因是因为打包类型，需要根据你打包选择，来需要对应的解析库配合
https://babeljs.io/docs/en/babel-preset-env#modules
2.举个例子选择了 'cjs' 就需要'cjs' 解析规范的第三方库来在客户端运行打包后文件
~~~

>[success] # 使用webpack
~~~
1.当代打包工具webpack是支持CommonJS规范的，最后按照CommonJS把各个模块进行打包，编译为浏览器可以支
持的代码「webpack本身是基于node环境运行的，基于webpack打包后的代码，是webpack自己实现了一套CMD规范」
2.webpack 打包后自带内置类似AMD CMD 等对应规范解析实现从而让cjs代码打包后也可以浏览器运行
~~~