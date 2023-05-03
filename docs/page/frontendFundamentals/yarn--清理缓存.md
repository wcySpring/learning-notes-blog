>[success] # yarn 清除缓存问题
~~~
1.出现报错信息 error https://registry.yarnpkg.com/...: Integrity check failed for "..." 
(computed integrity doesn't match our records, got "sha512-... sha1-...")
~~~
>[danger] ##### 解决
Yarn建议清除缓存，您可以使用以下方法：

~~~
$ yarn cache clean

~~~

这对我不起作用，因为完整性校验和存储在`yarn.lock`文件中。一种选择是删除该文件并通过运行来重新生成它：

~~~
$ yarn install

~~~

那对我也不起作用，这也不是一个好习惯。在这种情况下，当您实际上只遇到一个问题时，您可能会更新所有软件包。

相反，我运行了以下命令：

~~~
$ yarn --update-checksums

~~~

这样就更新了所有完整性校验和，然后我就可以安装其余的软件包并使项目正常工作。

>[danger] ##### 文章来源

[参考](https://www.seancdavis.com/blog/fix-yarn-integrity-check-failed/)