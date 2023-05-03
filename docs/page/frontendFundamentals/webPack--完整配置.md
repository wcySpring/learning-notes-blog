[TOC]
>[success] # 完整配置
~~~
1.上面将这个步骤一一拆解，现在是一个整体讲解
~~~
>[danger] ##### 步骤
* 项目目录
~~~
├── dist     // 打包后的文件
├── src      //  源码文件
|   ├── css
|   └── js
|   └── index.html  
|   └── main.js    // 这是 main.js 是我们项目的JS入口文件
├── package.json   // npm init 生成的NPM包的所有相关信息，其中sprict可以脚本
├── .babelrc //将高级语法转换成低级语法
└── webpack.config.js // 配置webpack的配置文件
~~~
~~~
1.创建一个上面的结构目录
2.nmp init 生成一个package.json 配置文件
3.安装webpack两种方式任选:npm i webpack -g全局安装/npm i webpack --save-dev安装开发环境中
4.如果使用的是webpack4 还需要安装:npm i webpack-cli -g 
5.在根目录创建 -- webpack.config.js 文件
6.安装 webpack-dev-server 内存中打包js，开启一个本地服务 -- npm i webpack-dev-server --save-dev
7.安装html-webpack-plugin  内存中生成html 并且将js自动加入html中 -- npm i html-webpack-plugin --save-dev
8.下载loader处理css 文件：
   8.1.npm i style-loader css-loader --save-dev  // 安装处理style  和css
   8.2.npm i less-loader less -D                 // 安装处理less
   8.3.npm i sass-loader node-sass --save-dev   // 安装处理 sas
9.下载loader处理css background中的url，和字体库中的字体 npm install url-loader file-loader --save-dev
10.把js 高级语法es6 转成低级语法:
    10.1.npm i babel-core babel-loader babel-plugin-transform-runtime -D
    10.2.npm i babel-preset-env babel-preset-stage-0 -D
11.配置吧高级语法转换低级语法的文件在根目录叫.babelrc
12..babelrc配置的内容:
    {
         "presets": ["env", "stage-0"],
          "plugins": ["transform-runtime"]
   }
13.在package.json 配置快速启动(运行指令是npm run dev)：
"scripts": {
    "dev": "webpack-dev-server"
  },

~~~
>[danger] ##### webpack.config.js -- 配置
~~~
const path = require('path');
const webpack = require('webpack'); // 启用热更新的 第2步
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:path.join(__dirname,'/src/main.js') , // 入口，表示，要使用 webpack 打包哪个文件
    output: {                                   // 输出文件相关的配置
        path: path.join(__dirname, '/dist'),   // 指定 打包好的文件，输出到哪个目录中去
        filename: 'bundle.js'                   // 这是指定 输出的文件的名称
    },
    devServer: {
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true // 启用热更新 的 第1步
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            filename: 'index.html' // 指定生成在内存的页面的名称
        })
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器
        rules: [ // 所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },
        ]
    }
}
~~~
>[danger] ##### main.js -- 所有js，css 导包的入口
~~~
import $ from 'jquery'
// 导入css文件下的index.css
import './css/index.css'

$(function () {
    $('li:odd').css('backgroundColor', 'red');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
});
~~~
>[danger] ##### 解惑 -- 为什么控制台输入指令后会执行打包
~~~
1.当我们想打包成实体文件在控制台输入 webpack 指令，当我们想执行在内存中
打包时候，在package.json 配置好指令直接运行npm run dev
2.当我们在控制台输入这两个指令后webpack 或 webpack-dev-server 的时候，工
具会发现，我们并没有提供 要打包 的文件的 入口 和 出口文件，此时，他会检查
项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个 配置对象，然
后根据这个对象，进行打包构建。
3.简单的说就是输入指令后会去找webpack.config.js 文件，并且找到
module.exports暴露出来的配置。
~~~
>[danger] ##### 细微配置
~~~
1.在 package.json 中 配置sprict 指令
2.配置好对应指令后 使用npm run dev 启动 webpack-sever
3.使用webpack 进行打包
~~~
>[danger] ##### 细节如何导入npm 下载文件中的css 文件，参考上个目录中对字体配置的讲解
