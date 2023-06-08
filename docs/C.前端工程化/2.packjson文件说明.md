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


## scripts -- 指令集合

scripts属性用于配置一些脚本命令，以键值对的形式存在 ，配置后我们可以通过 npm run 命令的key来执行这个命令，对于常用的 start、 test、stop、restart可以省略掉run直接通过 npm start等方式运行

其实  npm run 指令全称是 `npm run-script <command> [--silent] [-- <args>...]`

~~~json
"scripts": {
  "serve": "vue-cli-service serve",
  ...
}
~~~

配置指令可以通过npm run 生效的，本质上执行的是'Shell（一般是 Bash）可以运行的命令',shell是依赖于平台的。查看执行'shell' 脚本位置 使用指令'npm config get shell',执行完后我的本机配置环境输出结果为'C:\Windows\system32\cmd.exe',就说明实际是'window'系统的'cmd'命令行工具。默认情况下, Unix-like 操作系统是'/bin/sh'指令, Windows 操作系统是'cmd.exe'。 实际的被'/bin/sh'引用的shell也依赖于平台。'npm@5.1.0'你可以使用'script-shell'自定义你的shell配置。

可以通过 `npm config set script-shell \"C:\\Program Files\\Git\\bin\\bash.exe\" `去设置shell 平台

利用钩子去设置
~~~json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "test": "echo 'Hello, World!'",
    "build": "npm run test",
    "start": "npm run build",
    "preinstall": "npm config set script-shell \"C:\\Program Files\\Git\\bin\\bash.exe\""
  }
}
~~~


### 可运行的脚本

在npm run 执行的scripts 本质是对应系统所对应的shell 脚本，因此 scripts 的脚本整体分为三种

* **内部自带指令**，在win 实际运行在'cmd'中执行的命令，因此系统cmd的内部命令，不需要安装额外的插件，就可以直接执行，在'npm'的'scripts'中都可以执行,举个例子：
~~~json
"scripts":{
	/*系统命令*/
      "ip":"ipconfig"
 }
 ~~~

* **执行外部命令**，我们如果安装了node,git等客户端，可以直接在cmd窗口执行（需配置了系统的环境变量）举个例子当安装了 node 后，我们可以直接在控制台输入'node -v' 来查看node 版本信息因此也可以执行下面列子
~~~json
"scripts":{

    /*全局外部命令*/
    "git":"git --version",
    "node":"node -v",

}
~~~

* **执行项目内部**,在安装类似'vuecli'、'webpack'、'eslint'等项目时，会自动将当前项目的'node_modules/.bin'找到对应的脚本，例如`{"test": "mocha test"} 等同于 {"test": " ./node_modules/.bin/mocha"}` 也就是说 mocha test 指令可以这么缩写完全是npm 帮我们自动找了组成实际应运行的脚本指令 " ./node_modules/.bin/mocha" 



### 全局安装的包和局部安装包

非全局安装的时候，当想执行eslint 时候需要我们在scripts 标签配置好脚本，举个例子 `scripts:{"eslint-version":"eslint --version"}` ,只需要执行'npm run eslint-version',如果不想配置'scripts' 其他的执行方法" .\node_modules\.bin\eslint.cmd --version" 直接指定运行"node_modules\.bin" 文件下的脚本 或者 'node  .\node_modules\eslint\bin\eslint.js --version' 直接具体到运行的脚本目录


全局安装一些包例如'eslint' 直接执行'eslint' 就可以在全局运行，这是因为你在全局安装时候会在node 的文件所在目录自动添加一个执行shell 脚本，并且node 路径在系统path 中因此可以直接调用

::: tip 
node 可以直接运行完全是 电脑 path 配置

![](/images/前端工程化_path.png)

:::

### 对npm 执行脚本一个总结
'npm run '在执行对应的'scripts' 是对应的执行窗口调用响应命令而非npm 去调用，是npm 去将具体调用shell指令给到了执行窗口，在通过node 进行了调用，之前介绍过本地的话会找到"node_modules\.bin" 以esbuild 的 "node_modules\.bin\esbuild" 文件内容去看也能发现（这里以cmd 的脚本） 是通过node执行的
~~~shell
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\esbuild\bin\esbuild" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\esbuild\bin\esbuild" %*
)
~~~

已经知道 脚本最后是node 执行了，现在也可以知道我们在执行一些命令时候他的传参原理 例如来分析一组指令
~~~json
"scripts": {
  "serve": "vue-cli-service serve --mode=dev --mobile -config build/example.js"
}
~~~
当执行'npm run serve' 实际执行的是"node_modules/cli-service'，帮我们间接执行了"node node_modules/@vue\cli-service\bin\vue-cli-service.js  --mode=dev --mobile -config build/example.js" '

* "node_modules/cli-service' 脚本如图
![](/images/前端工程化_vueclicmd.png)

已经知道本质是node 那就可以知道 'node' 调用时候可以通过'process.argv' 获取一个返回的数组于'process.argv'，这个数组包含了启动node进程时的命令行参数。第一个元素为启动node 进程的可执行文件的绝对路径名process.execPath，第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。如下图自己做的一个js 打印（可以去其他第三方包去看他们实现） **可以用一些第三方工具包 minimist 或者 yargs 等参数解析工具来对命令行参数进行解**
![](/images/前端工程化_processagv.png)

### 为啥能npm run 执行脚本

那为什么我的脚本在 scripts 通过npm 执行 scripts 脚本可以做到这种匹配，换句话说我我在 shell 脚本的控制台直接输入 "vue-cli-service" 或者 "npm vue-cli-service" 不生效呢？首先所有的脚本能直接在命令行上执行原因就是在他们已经 电脑系统的path 注册了

在windows 下你可以通过 cmd 下执行 set

![](/images/前端工程化_windowspaht.png)


在linux  下执行env 查看

![](/images/前端工程化_linuxpaht.png.png)


* node 可以直接运行完全是 电脑 path 配置

![](/images/前端工程化_path.png)

因此  "vue-cli-service"（全局安装是另外原因） 和  "npm vue-cli-service"（npx 特殊） 这种执行形式肯定是失效的，那在 npm run 时候会自动新建一个Shell，这个 Shell会将当前项目的node_modules/.bin的绝对路径加入到环境变量PATH中，执行结束后，再将环境变量PATH恢复原样。

执行查看 npm run env 的时候的环境变量，可以看到运行时的PATH环境变量多了两个路径：npm指令路径和**项目中node_modules/.bin的绝对路径**
![](/images/前端工程化_npmpath.png)

所以，通过npm run可以在不添加路径前缀的情况下直接访问当前项目node_modules/.bin目录里面的可执行文件

## bin

执行项目内部的script 会去执行 bin 文件，bin 文件生成是在package.json中的字段 bin 中配置的，表示的是一个可执行文件到指定文件源的映射。通过npm bin指令显示当前项目的bin目录的路径

~~~json
{ "bin" : { "myapp" : "./cli.js" } }
~~~
它的工作方式 模块安装的时候，若是全局安装，则'npm'会为'bin'中配置的文件在bin目录下创建一个软连接（对于windows系统，默认会在'C:\\Users\\username\\AppData\\Roaming\\npm'目录下），若是局部安装，则会在项目内的./node\_modules/.bin/目录下创建一个软链接。


如果你的模块只有一个可执行文件，并且它的命令名称和模块名称一样，你可以只写一个字符串来代替上面那种配置，例如：
~~~json
{ "name": "my-program"
, "version": "1.2.5"
, "bin": "./path/to/program" }
~~~
作用和如下写法相同:
~~~json
{ "name": "my-program"
, "version": "1.2.5"
, "bin" : { "my-program" : "./path/to/program" } }
~~~

::: tip 什么是软连接
软链接（符号链接）是一类特殊的可执行文件， 其包含有一条以绝对路径或者相对路径的形式指向其它文件或者目录的引用
:::

在举一个 cli-service 例子，'cli-service'的package.json 的bin 告诉了cli 执行脚本位置，也就是要创建软连接后对应文件地址


![](/images/前端工程化_bin说明.png)


在安装包之后会通过这 bin 字段生成 在 './node\_modules/.bin/'目录下创建一个脚本

![](/images/前端工程化_脚本生成.png)


