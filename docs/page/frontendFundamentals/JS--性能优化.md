>[success] # 性能优化
[性能优化文章](https://www.jianshu.com/p/5d83eb1c2e6d)
~~~
1.使用推荐文章中的'Benchmark.js' 做性能统计，如果可以打开'https://jsperf.com/' 也可以直接使用
该网站做测试
~~~
>[info] ## 使用Benchmark.js
~~~
1.'Benchmark.js' 项目地址'https://github.com/bestiejs/benchmark.js'
~~~
>[danger] ##### 代码案例
~~~
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;


// add tests
suite.add('全局变量', function () {

        for (var i = 0; i < 1000; i++) {
            let str = i
        }

    })
    .add('局部变量', function () {
        let str = ''
        for (let i = 0; i < 1000; i++) {
            str = i
        }

    })
    // 这里往下是固定这样写
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({
        'async': true
    });
~~~