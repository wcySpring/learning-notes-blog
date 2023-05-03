>[success] # axios 封装
[axios中文文档|axios中文网](http://www.axios-js.com/zh-cn/docs/)

* 注意下面封装项目需要是 URLENCODED 格式才进行了transformRequest 拦截转码
~~~
/* 
  axios二次封装：把每一次基于axios发送请求的公共部分进行提取
    + axios.defaults.xxx
    + axios.interceptors.request/response  拦截器 
 */
import axios from 'axios';
import qs from 'qs';
const isPlainObject = function isPlainObject (obj) {
  let proto, Ctor;
  if (!obj || Object.prototype.toString.call(obj) !== "[object Object]") return false;
  proto = Object.getPrototypeOf(obj);
  if (!proto) return true;
  Ctor = proto.hasOwnProperty('constructor') && proto.constructor;
  return typeof Ctor === "function" && Ctor === Object;
};

// 请求URL地址没有加前缀，则默认把BASE-URL加上；如果请求时候，自己设置前缀了，则以自己写的为主；
// 真实开发的时候，我们项目有各种不同的环境「开发、测试、灰度、生产」：我们需要针对不同的环境，有不同的BASE-URL
//  1)在运行编译的时候，设置环境变量
//    + 安装cross-env插件   $ npm i cross-env
//    + package.json的scripts中做处理
//      开发环境 serve:"cross-env NODE_ENV=development vue-cli-service serve",
//      生产环境 build:"cross-env NODE_ENV=production vue-cli-service build"
//  2)在代码中获取环境变量的值，根据不同值，设置不同的BASE-URL
let env = process.env.NODE_ENV || 'development',
  baseURL = '';
switch (env) {
  case 'development':
    baseURL = 'http://127.0.0.1:9999';
    break;
  case 'production':
    baseURL = 'http://api';
    break;
}
axios.defaults.baseURL = baseURL;

// 一些可以提取的小东西:超时时间 & CORS跨域中是否允许携带资源凭证(例如:cookie)
//   + 客户端的withCredentials:true，那么服务器端也要设置为允许
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// POST系列请求中:请求主体中传递给服务器的信息，项目要求需要是URLENCODED格式；当代浏览器中，我们请求主体传递给服务器的格式是啥，浏览器会自动在请求头中，更新Content-Type!
axios.defaults.transformRequest = data => {
  // 只有我们写的DATA是一个纯粹的对象，才需要按需求处理
  if (isPlainObject(data)) data = qs.stringify(data);
  return data;
};

// 自己规定，服务器返回的状态码，值是多少算是请求成功
//   成功:服务器正常返回响应信息，且返回的HTTP状态码是经过validateStatus校验通过的
//   失败:
//   + 服务器有返回的信息，但是返回的HTTP状态码并没有经过validateStatus的校验
//   + 请求超时或者请求中断  reason.code==='ECONNABORTED'
//   + 服务器没有返回任何信息「可能是断网了」
//   + ...
axios.defaults.validateStatus = status => {
  return status >= 200 && status < 400;
};

// 请求拦截器:在axios内部已经把config的那些配置项处理差不多了，并且打算按照配置项，向服务器发送请求之前进行拦截；拦截目的是把配置项中的一些信息再改改！
axios.interceptors.request.use(config => {
  // 常见需求：在每一次发送请求的时候，通过请求头把token信息传递给服务器
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

// 响应拦截器:onfulfilled/onrejected，发生在请求成功/失败，在业务层具体.then/catch之前进行拦截处理
axios.interceptors.response.use(response => {
  // 请求成功:一般我们会返回响应主体信息
  return response.data;
}, reason => {
  // 请求失败:一般我们会做统一的错误提示
  if (reason && reason.response) {
    let response = reason.response;
    // 有响应信息，但是状态码不对，我们根据不同的状态码做不同的提示
    switch (response.status) {
      case 400:
        // ...
        break;
      case 401:
        // ...
        break;
      case 404:
        // ...
        break;
    }
  } else {
    if (reason && reason.code === 'ECONNABORTED') {
      // 请求超时或者中断
    }
    if (!navigator.onLine) {
      // 断网了
    }
  }
  return Promise.reject(reason);
});

export default axios;
~~~