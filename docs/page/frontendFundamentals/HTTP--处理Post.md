>[success] # 处理Post
~~~
1.Post请求都是通过请求头进行传递的，一般遵循urlencode格式例如foo=bar&abc=xyz&abc=123
2.使用require('querystring') 对这种格式进行格式化处理，变成对象使用
3.在利用parse方法的作用就是把字符串转成对象
~~~
* 简单的案例
~~~
const querystring = require('querystring');
const http = require('http');

// parse方法的作用就是把字符串转成对象
let param = 'username=lisi&password=123';
let obj = querystring.parse(param);
console.log(obj);

// stringify的作用就是把对象转成字符串
let obj1 = {
    flag : '123',
    abc : ['hello','hi']
}
let str1 = querystring.stringify(obj1);
console.log(str1);
~~~
>[danger] ##### 具体案例
~~~
1.利用on 监听请求对象中data 事件不断接受请求头
2.利用on 监听请求对象中的end 获取所有的请求数据在进行格式化处理
~~~
~~~
const querystring = require('querystring');
const http = require('http');

http.createServer((req,res)=>{
    if(req.url.startsWith('/login')){
        let pdata = '';
        req.on('data',(chunk)=>{
            // 每次获取一部分数据
            pdata += chunk;
        });

        req.on('end',()=>{
            // 这里才能得到完整的数据
            console.log(pdata);
            let obj = querystring.parse(pdata);
            res.end(obj.username+'-----'+obj.password);
        });
    }
}).listen(3000,()=>{
    console.log('running...');
})
~~~