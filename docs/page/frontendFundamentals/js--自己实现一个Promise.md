>[success] # 实现一个自己的Promise
~~~
1.Promise  三种状态 pending  fulfilled rejected ，三种状态依次为"进行中"、"操作成功已处理的状态"
"操作失失败的已处理状态"，状态不可逆即只能 'pending =》fulfilled' 和 'pending=>rejected '
2.Promise 的 executor（执行器） 里的代码是同步的,也就是构造函数传递的回调函数参数，
new Promise((resolve, reject) =>{}) => 其中(resolve, reject) =>{} 就是 executor
~~~
[# Promises/A+](https://promisesaplus.com/)
>[info] ## 实现一个Promise
~~~
1.{1} executor（执行器） 是同步的，因此这里是一个同步方法调用
2.如果忘了具体的参考前端开发核心知识阶级这本书复习一下
~~~
>[danger] ##### Promise 实现代码
~~~
function resolvePromise(promise2, x, resolve, reject) {
  var then
  var thenCalledOrThrow = false
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }
  if (x instanceof Promise) {
    if (x.status === 'pending') { 
      x.then(function(v) {
        resolvePromise(promise2, v, resolve, reject)
      }, reject)
    } else {
      x.then(resolve, reject)
    }
    return
  }
  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      then = x.then
      if (typeof then === 'function') {
        then.call(x, function rs(y) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvePromise(promise2, y, resolve, reject)
        }, function rj(r) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (thenCalledOrThrow) return
      thenCalledOrThrow = true
      return reject(e)
    }
  } else {
    resolve(x)
  }
}
~~~
* 这里是核心
~~~
function MPromise(exectutor){
    this.onFulfilledArray = []
    this.onRejectedArray = []

    this.status = "pending";
    this.value = null;
    this.reason = null;

    const resolve = value => {
        if(value instanceof Promise){
            return value.then(resolve, reject)
        }
        setTimeout(()=>{
            if(this.status === "pending"){
                this.value = value;
                this.status = "fulfilled";
                this.onFulfilledArray.forEach(fun=>{
                    fun(this.value)
                })
            }
        })
    }

    const reject = reason => {
        setTimeout(()=>{
            if(this.status === "pending"){
                this.reason = reason
                this.status = "rejected";
                this.onRejectedArray.forEach(fun=>{
                    fun(this.reason)
                })
            }
        })
    }

    try{
        exectutor(resolve, reject) // {1}
    }catch(e){
        reject(e)
    }
    
}


MPromise.prototype.then = function(onfulfilled , onrejected){
    // 根据标准，如果then的参数不是function，则需要忽略它
    onfulfilled = typeof onfulfilled === "function" ? onfulfilled:data=>data;
    onrejected = typeof onrejected === "function" ? onrejected : error=>{throw error}
    // Promise 链式调用 then 返回的依旧是一个promise
    let promise2 

    if(this.status === "fulfilled"){
        return promise2 = new MPromise((resolve, reject)=>{
            setTimeout(()=>{
                try{
                    // 因为promise的exectutor 是同步的相当于
                    // 此时声明promise2 时候 已经开始内部调用
                    // 这个 onfulfilled(this.value) 是当前的promise 执行拿到值
                    const res = onfulfilled(this.value)
                    // 链式调用拿到是上一个promsie 返回值 也就是此时res
                    // promise2的resolve 传递上个promise 值结果
                    resolvePromise(promise2, x, resolve, reject)
                }catch(e){
                    reject(e)
                }
            })
        })
        
    }
    if(this.status === "rejected"){
        return promise2 = new MPromise((resolve, reject)=>{
            setTimeout(()=>{
                try{
                    // 因为promise的exectutor 是同步的相当于
                    // 此时声明promise2 时候 已经开始内部调用
                    // 这个 onrejected(this.value) 是当前的promise 执行拿到值
                    const res = onrejected(this.value)
                    resolvePromise(promise2, x, resolve, reject)

                }catch(e){
                    reject(e)
                }
            })
        })
    }
    if(this.status === "pending"){
        return new Promise((resolve, reject) =>{
            this.onFulfilledArray.push((value)=>{
                try {
                    var x = onfulfilled(value)
                    resolvePromise(promise2, x, resolve, reject)
                  } catch (r) {
                    reject(r)
                  }
            })
            this.onRejectedArray.push((reason)=>{
                try {
                    var x = onrejected(reason)
                    resolvePromise(promise2, x, resolve, reject)
                  } catch (r) {
                    reject(r)
                  }
            })
        })
       
    }
}

const promise = new MPromise((resolve, reject) =>{
    // setTimeout(()=>{
        console.log(100)
        resolve(101)
    // },1000)
})

promise.then((data)=>{
    console.log(777);
    console.log(data);
})

promise.then((data)=>{
    console.log(888);
    console.log(data);
})


// const promise = new Promise((resolve, reject) =>{
//     resolve(new Promise((a, b) =>{a(100)}))
// })

// promise.then((data)=>{
//     console.log(data);
//     // data.then((res)=>{
//     //     console.log(res)
//     // })
// })

~~~
>[info] ## 更多实现

>[danger] ##### 简易版
~~~
// 构造函数
function Promise(executor) {
    var self = this;
    if (typeof executor !== 'function') throw new TypeError('Promise resolver ' + executor + ' is not a function');
    if (!(self instanceof Promise)) throw new TypeError('undefined is not a promise');

    // 私有属性：状态 & 值
    self.state = 'pending';
    self.value = undefined;
    self.onfulfilledCallbacks = [];
    self.onrejectedCallbacks = [];

    // 用来修改实例的状态和值「立即」 & 把之前基于then存储的onfulfilled/onrejected方法执行「异步」
    var change = function change(state, value) {
        if (self.state !== 'pending') return;
        self.state = state;
        self.value = value;
        setTimeout(function () {
            var callbacks = self.state === "fulfilled" ? self.onfulfilledCallbacks : self.onrejectedCallbacks;
            for (var i = 0; i < callbacks.length; i++) {
                var callback = callbacks[i];
                if (typeof callback === 'function') callback(self.value);
            }
        });
    };

    // 控制如何修改状态
    try {
        executor(function resolve(value) {
            change('fulfilled', value);
        }, function reject(reason) {
            change('rejected', reason);
        });
    } catch (err) {
        change('rejected', err.message);
    }
}

// 向原型上扩展方法:供其实例调用的
Promise.prototype = {
    constructor: Promise,
    then: function then(onfulfilled, onrejected) {
        // 第一类：.then的时候已经知道了实例的状态，此时我们创建一个”异步微任务”，执行对应的onfulfilled/onrejected
        // 第二类：.then的时候还不知道实例的状态呢，此时我们onfulfilled/onrejected先存储起来，后期状态修改后，通知对应的方法执行，只不过此时也是一个”异步微任务”
        // 在不使用queueMicrotask这个方法的时候，我们无法创建异步微任务，所以我们可以拿定时器模拟一个异步宏任务来代替微任务
        var self = this;
        switch (self.state) {
            case 'fulfilled':
                setTimeout(function () {
                    onfulfilled(self.value);
                });
                break;
            case 'rejected':
                setTimeout(function () {
                    onrejected(self.value);
                });
                break;
            default:
                self.onfulfilledCallbacks.push(onfulfilled);
                self.onrejectedCallbacks.push(onrejected);
        }
    },
    catch: function my_catch() {}
};
if (typeof Symbol !== "undefined") Promise.prototype[Symbol.toStringTag] = 'Promise';

// 当做对象扩展的静态私有方法:工具类方法
Promise.resolve = function resolve(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
};
Promise.reject = function reject(reason) {
    return new Promise(function (_, reject) {
        reject(reason);
    });
};
Promise.all = function all() {};
~~~
>[danger] ##### 完整版
~~~
(function () {
    // 构造函数
    function Promise(executor) {
        var self = this;
        if (typeof executor !== 'function') throw new TypeError('Promise resolver ' + executor + ' is not a function');
        if (!(self instanceof Promise)) throw new TypeError('undefined is not a promise');

        self.state = 'pending';
        self.value = undefined;
        self.onfulfilledCallbacks = [];
        self.onrejectedCallbacks = [];

        var change = function change(state, value) {
            if (self.state !== 'pending') return;
            self.state = state;
            self.value = value;
            setTimeout(function () {
                var callbacks = self.state === "fulfilled" ? self.onfulfilledCallbacks : self.onrejectedCallbacks;
                for (var i = 0; i < callbacks.length; i++) {
                    var callback = callbacks[i];
                    if (typeof callback === 'function') callback(self.value);
                }
            });
        };

        try {
            executor(function resolve(value) {
                change('fulfilled', value);
            }, function reject(reason) {
                change('rejected', reason);
            });
        } catch (err) {
            change('rejected', err.message);
        }
    }

    // 向原型上扩展方法:供其实例调用的
    var resolvePromise = function resolvePromise(promise, x, resolve, reject) {
        if (x === promise) throw new TypeError('Chaining cycle detected for promise #<Promise>');
        if (x !== null && /^(object|function)$/i.test(typeof x)) {
            var then;
            try {
                then = x.then;
            } catch (err) {
                reject(err);
            }
            if (typeof then === 'function') {
                // 说明返回值x是一个promie实例
                var called = false;
                try {
                    then.call(x, function onfulfilled(y) {
                        if (called) return;
                        called = true;
                        resolvePromise(promise, y, resolve, reject);
                    }, function onrejected(r) {
                        if (called) return;
                        called = true;
                        reject(r);
                    });
                } catch (err) {
                    if (called) return;
                    reject(err);
                }
                return;
            }
        }
        resolve(x);
    };
    var handle = function handle(callback, value, promise, resolve, reject) {
        try {
            var x = callback(value);
            resolvePromise(promise, x, resolve, reject);
        } catch (err) {
            reject(err);
        }
    };
    Promise.prototype = {
        constructor: Promise,
        then: function then(onfulfilled, onrejected) {
            var self = this,
                promise = null;
            if (typeof onfulfilled !== 'function') {
                onfulfilled = function onfulfilled(value) {
                    return value;
                };
            }
            if (typeof onrejected !== 'function') {
                onrejected = function onrejected(reason) {
                    throw reason;
                };
            }
            promise = new Promise(function (resolve, reject) {
                switch (self.state) {
                    case 'fulfilled':
                        setTimeout(function () {
                            handle(onfulfilled, self.value, promise, resolve, reject);
                        });
                        break;
                    case 'rejected':
                        setTimeout(function () {
                            handle(onrejected, self.value, promise, resolve, reject);
                        });
                        break;
                    default:
                        self.onfulfilledCallbacks.push(function (value) {
                            handle(onfulfilled, value, promise, resolve, reject);
                        });
                        self.onrejectedCallbacks.push(function (reason) {
                            handle(onrejected, reason, promise, resolve, reject);
                        });
                }
            });
            return promise;
        },
        catch: function my_catch(onrejected) {
            return this.then(null, onrejected);
        }
    };
    if (typeof Symbol !== "undefined") Promise.prototype[Symbol.toStringTag] = 'Promise';

    // 当做对象扩展的静态私有方法:工具类方法
    Promise.resolve = function resolve(value) {
        return new Promise(function (resolve) {
            resolve(value);
        });
    };
    Promise.reject = function reject(reason) {
        return new Promise(function (_, reject) {
            reject(reason);
        });
    };

    // 验证x是否为一个符合规范的promise实例 
    var isPromise = function isPromise(x) {
        if (x !== null && /^(object|function)$/i.test(typeof x)) {
            if (typeof x.then === 'function') {
                return true;
            }
        }
        return false;
    };
    Promise.all = function all(promises) {
        if (!Array.isArray(promises)) throw new TypeError('promises must be an Array');
        var n = 0,
            results = [];
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < promises.length; i++) {
                (function (i) {
                    var promise = promises[i];
                    if (!isPromise(promise)) promise = Promise.resolve(promise);
                    promise.then(function onfulfilled(value) {
                        n++;
                        results[i] = value;
                        if (n >= promises.length) resolve(results);
                    }).catch(function onrejected(reason) {
                        reject(reason);
                    });
                })(i);
            }
        });
    };

    // 测试规范性:promises-aplus-tests
    Promise.deferred = function deferred() {
        var result = {};
        result.promise = new Promise(function (resolve, reject) {
            result.resolve = resolve;
            result.reject = reject;
        });
        return result;
    };

    /* 暴露API */
    if (typeof window !== 'undefined') window.Promise = Promise;
    if (typeof module === 'object' && typeof module.exports === 'object') module.exports = Promise;
})();
~~~
 