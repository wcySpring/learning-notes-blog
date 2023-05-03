[TOC]

 
>[success] # 淘宝镜像

>[danger] ##### 安装淘宝镜像
~~~
// 全局安装为了是可以全局使用
npm install --global cnpm 
~~~

>[danger] ##### 使用淘宝镜像
~~~
cnmp install jquery
~~~

>[danger] ##### 使用淘宝镜像源 但不想下载cnmp
*  指定下载地址
~~~
npm install jquery --registry=https://registry.npm.taobao.org
~~~

*  直接更换下载地址

~~~
npm config set registry https://registry.npm.taobao.org
~~~