---
description: 关于 package.json 字段和使用说明
tags:
  - 工程化
  - package.json
---

在使用包管理工具对项目初始化的时候，会出现一个文件 `package.json`,能够帮我们列出项目所依赖的包，可以指定项目可以使用的包版本等等,这个json 文件中的一些字段对项目起到了解释作用

| 字段                    | 含义                                                         |
| ----------------------- | ------------------------------------------------------------ |
| version                 | 当前的版本                                                   |
| name                    | 应用程序/软件包的名称                                        |
| description             | 应用程序/软件包的简短描述                                    |
| main                    | 应用程序的入口点                                             |
| private                 | 如果设置为 true，则可以防止应用程序/软件包被意外地发布到 npm |
| scripts                 | 一组可以运行的 node 脚本                                     |
| dependencies            | 作为业务依赖安装的 npm 软件包的列表                         |
| devDependencies         | 作为开发依赖安装的 npm 软件包的列表                         |
| peerDependencies        | 作为同伴依赖安装的 npm 软件包的列表                         |
| bundledDependencies     | 打包时需要包含的依赖列表                                     |
| optionalDependencies    | 可选依赖安装的 npm 软件包的列表                             |
| engines                 | 此软件包/应用程序在哪个版本的 Node.js 上运行                |
| browserslist            | 告知要支持哪些浏览器（及其版本）                             |
| author                  | 作者相关信息（发布时用到）                                   |
| license                 | 开源协议（发布时用到）                                       |
| repository              | 代码仓库的位置                                               |
| keywords                | 一组关键字，用于描述软件包的内容                             |
| homepage                | 应用程序/软件包的主页                                        |

## 包管理工具的钩子

在包管理 也存在一些钩子函数 在不同时机可以用来触发 ，大多数包管理工具都可以使用的钩子


| 钩子名称        | 触发时机                                                     |
| --------------- | ------------------------------------------------------------ |
| `preinstall`    | 在安装依赖之前运行，可以用于检查环境或者进行一些准备工作     |
| `postinstall`   | 在安装依赖之后运行，可以用于执行一些额外的安装步骤或者进行一些配置 |
| `preuninstall`  | 在卸载依赖之前运行，可以用于进行一些清理工作或者备份数据   |
| `postuninstall` | 在卸载依赖之后运行，可以用于执行一些额外的清理步骤或者进行一些配置 |
| `prepublish`    | 在发布软件包之前运行，可以用于进行一些检查或者构建           |
| `prepare`       | 在软件包安装或者更新时运行，可以用于进行一些构建或者配置     |
| `prepack`       | 在打包软件包之前运行，可以用于进行一些检查或者构建           |
| `postpack`      | 在打包软件包之后运行，可以用于执行一些额外的打包步骤或者进行一些配置 |

举个最常见的配置使用钩子案例
~~~json
 "scripts": {
    "prepare": "husky install",
  },
~~~

::: details npm 的钩子这些钩子里面并不是所有的 包管理工具都支持
| 钩子名称           | 触发时机                                                     |
| ------------------ | ------------------------------------------------------------ |
| `preinstall`       | 在安装依赖之前运行，可以用于检查环境或者进行一些准备工作     |
| `postinstall`      | 在安装依赖之后运行，可以用于执行一些额外的安装步骤或者进行一些配置 |
| `preuninstall`     | 在卸载依赖之前运行，可以用于进行一些清理工作或者备份数据   |
| `postuninstall`    | 在卸载依赖之后运行，可以用于执行一些额外的清理步骤或者进行一些配置 |
| `prepublish`       | 在发布软件包之前运行，可以用于进行一些检查或者构建           |
| `prepare`          | 在软件包安装或者更新时运行，可以用于进行一些构建或者配置     |
| `prepack`          | 在打包软件包之前运行，可以用于进行一些检查或者构建           |
| `postpack`         | 在打包软件包之后运行，可以用于执行一些额外的打包步骤或者进行一些配置 |
| `prepublishOnly`   | 在发布软件包之前运行，但只有在使用 `npm publish` 命令时才会触发 |
| `preversion`       | 在更新软件包版本号之前运行，可以用于进行一些检查或者构建     |
| `version`          | 在更新软件包版本号之后运行，可以用于执行一些额外的步骤或者进行一些配置 |
| `postversion`      | 在更新软件包版本号之后运行，可以用于执行一些额外的步骤或者进行一些配置 |
| `prestop`          | 在停止软件包之前运行，可以用于进行一些清理工作或者备份数据   |
| `poststop`         | 在停止软件包之后运行，可以用于执行一些额外的清理步骤或者进行一些配置 |
| `prestart`         | 在启动软件包之前运行，可以用于进行一些检查或者配置           |
| `poststart`        | 在启动软件包之后运行，可以用于执行一些额外的步骤或者进行一些配置 |
| `prerestart`       | 在重启软件包之前运行，可以用于进行一些检查或者配置           |
| `postrestart`      | 在重启软件包之后运行，可以用于执行一些额外的步骤或者进行一些配置 |
| `pretest`          | 在运行测试之前运行，可以用于进行一些准备工作或者配置         |
| `posttest`         | 在运行测试之后运行，可以用于执行一些额外的测试步骤或者进行一些配置 |
| `prepublishToProd` | 在发布软件包到生产环境之前运行，可以用于进行一些检查或者构建 |
| `postpublish`      | 在发布软件包之后运行，可以用于执行一些额外的步骤或者进行一些配置 |
:::

### 配合脚本本身的钩子
pre,post两类钩子，一个是执行前，一个是执行后。举个例子例如我想，给我在scripts 中定义的server 脚本增加钩子，分别在原有指令前增加了'pre' 和'post'前缀 , 下面案例中 在执行 例如 `npm run serve`命令时，会依次执行`npm run preserve`、`npm run serve`、`npm run postserve`
~~~json
"scripts": {
  "preserve": "xxxxx",
  "serve": "vue-cli-service serve",
  "postserve": "xxxxxx"
}
~~~

在不同的包管理工具中可以在 `process.env` 中去获取 这些运行钩子以 npm 为例子，我们创建一个项目，项目pack.json 脚本配置部分

process.env.npm_lifecycle_event是npm特有的环境变量，因此在yarn和pnpm中并不支持。不过，yarn和pnpm都提供了类似的环境变量来获取当前的脚本命令

~~~json

	"scripts": {
		"preserve": "echo 我是前置钩子",
		"serve": "node app.js",
		"postserve": "node post.js"
	}
~~~

在 app.js 中内容

~~~js

const _event = process.env.npm_lifecycle_event
if (_event === 'preserve') {
	console.log('Running the preserve task!')
} else if (_event === 'serve') {
	console.log('Running the serve task!')
}

~~~

在 post.js 中内容

~~~js
const _event = process.env.npm_lifecycle_event
if (_event === 'postserve') {
	console.log('Running the postserve task!')
} else if (_event === 'serve') {
	console.log('Running the serve task!')
}

~~~

最后打印结果
~~~
> preserve
> echo 我是前置钩子

我是前置钩子

> serve
> node app.js

Running the serve task!

> postserve
> node post.js

Running the postserve task!
~~~

## main 配置字段的说明
当我们开发一个npm包时，需要在package.json文件中指定main配置项，这个配置项的值是一个js文件的路径，它将作为程序的主入口文件，以qs包为例，当我们使用 `import qs from 'qs'` 实际运行的是 lib/index.js 文件

![](/images/前端工程化_qsmain.png)

如果没有配置main 字段整个包查询过程其实是这样的 举个例子
~~~js
require('./find.js');
require('./find');
~~~
1. 模块后缀省略，先找同名JS文件再找同名JS文件夹
2. 找到了同名文件夹，找文件夹中的index.js
3. 如果文件夹中没有index.js就会去当前文件夹中的package.json文件中查找main选项中的入口文件（具体路径也可以是指定到node_modules）所以找package.json也是一种情况
4. 如果找指定的入口文件不存在或者没有指定入口文件就会报错，模块没有被找到

**如果没有具体路径的包，此时会直接去去node_modules文件夹中 查找**
~~~ js
require('find');
~~~
1. 首先看是否有该名字的JS文件
2. 再看是否有该名字的文件夹
3. 如果是文件夹看里面是否有index.js
4. 如果没有index.js查看该文件夹中的package.json中的main选项确定模块入口文件否则找不到报错

往往来说main 就已经足够了当然可以参看这个文章中其他配置  https://segmentfault.com/a/1190000019438150