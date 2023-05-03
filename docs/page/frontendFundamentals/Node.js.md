[TOC]
>[success] # Node.js 篇章
~~~
1.首先浏览器运行前端代码分两个部分，一个部分是专门用来解析html、css，另一
个部分就是提供js运行的环境部分，node.js 就是将这个部分提取出来并且增加了一
些自己的模块，产生的一种可以在服务端运行的代码。
2.Node.js 是一种建立在Google Chrome’s v8 engine上的 non-blocking (非阻塞）, 
event-driven （基于事件的） I/O平台. Node.js平台使用的开发语言是JavaScript，
平台提供了操作系统低层的API，方便做服务器端编程，具体包括文件操作、进程
操作、通信操作等系统模块
~~~
>[danger] ##### 使用前了解win 命令行操作
* 打开常用应用指令，前提 win+r 输入对应指令
~~~
1.notepad   -- 打开记事本 
2.mspaint   -- 打开画图 
3.calc      -- 打开计算机 
4.write     -- 写字板 
5.sysdm.cpl -- 打开环境变量设置窗口
~~~
>[danger] ##### node-- 版本更新
~~~
1.这里接受的是win 更新方式，输入where node 看一下node 安装的盘符
2.在node 官网下载一个新的版本包，然后安装刚才查看的盘符
~~~
>[danger] ##### 安装
* 普通安装
~~~
1.去官网直接安装即可
~~~
* 多版本切换安装，需要安装nvm
~~~
1.卸载已有的Node.js 
2.下载[nvm](https://github.com/coreybutler/nvm-windows)
3.在C盘创建目录dev 
4.在dev目中中创建两个子目录nvm和nodejs 
5.并且把nvm包解压进去nvm目录中 
6.在install.cmd文件上面右键选择【以管理员身份运行】
7.打开的cmd窗口直接回车会生成一个settings.txt文件，修改文件中配置信息 
8.配置nvm和Node.js环境变量
    * NVM_HOME:C:\\dev\\nvm 
    * NVM_SYMLINK:C:\\dev\\nodejs
9.把配置好的两个环境变量加到Path中，也就是吧NVM_HOME/ NVM_SYMLINK加入path中
~~~
* 安装后使用nvm，安装node.js版本
~~~
1.nvm list 查看当前安装的Node.js所有版本
2.nvm install 版本号 安装指定版本的Node.js
3.nvm uninstall 版本号 卸载指定版本的Node.js 
4.nvm use 版本号 选择指定版本的Node.js
~~~