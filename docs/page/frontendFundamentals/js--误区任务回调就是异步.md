>[success] # js -- 误区任务回调就是异步
1. 下面案例虽然满足了有回调函数，但是是个同步过程还是等待a中函数执行完接着往下执行


~~~
function a(callback) {
    console.log('a1')
    callback()
    console.log('a2')
}
function b() {
    console.log('b')
}
function c() {
    console.log('c')
}
a(b)
c()
// 打印结果：
a1
b
a2
c
~~~