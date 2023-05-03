>[success] # npm
~~~
1.建议给每一个项目都配上 package.json 文件，这个文件主要记录这个项目所用的 所有第三方包，初始化命令 --  npm init
~~~
~~~
1.全称node package manager
2.即是一个网站也是一个管理工具
3.全局安装 -g：
  全局安装的包位于Node.js环境的node_modules目录下，全局安装的包一般用于
命令行工具。
4.本地安装：
  本地安装的包在当前目录下的node_modules里面，本地安装的包一般用于实际的开发工作。
~~~
>[danger] ##### 常用指令
~~~
1.安装包（如果没有指定版本号，那么安装最新版本）
    npm install -g 包名称 (全局安装)
    npm install 包名称 (本地安装)
    npm install -g 包名称@版本号
2.卸载包
    npm uninstall -g 包名
3.更新包（更新到最新版本）
    npm update -g 包名
4.开发环境（平时开发使用的环境）
  生产环境（项目部署上线之后的服务器环境）
  --save 向生产环境添加依赖 dependencies
  --save-dev（-D） 向开发环境添加依赖 DevDependencies 
5. npm rebuild -- 强制重新build
~~~
>[danger] ##### yarn 和 npm
~~~
yarn工具基本使用
安装yarn工具：npm install -g yarn
1.初始化包
    npm init
    yarn init
2.安装包
    npm install xxx --save
    yarn add xxx
3.移除包
    npm uninstall xxx
    yarn remove xxx
4.更新包
    npm update xxx
    yarn upgrade xxx
5.安装开发依赖的包
    npm install xxx --save-dev
    yarn add xxx --dev
6.全局安装
    npm install -g xxx
    yarn global add xxx
7.设置下载镜像的地址
    npm config set registry url
    yarn config set registry url
8.安装所有依赖
    npm install
    yarn install
9.执行包
    npm run
    yarn run
~~~