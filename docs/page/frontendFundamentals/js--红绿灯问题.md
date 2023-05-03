>[success] # 异步红绿灯问题
~~~
1.红灯3s 亮一次，绿灯1s亮一次，黄灯2s亮一次，让三个灯不断重复
~~~
>[info] ## 代码分析
~~~
1.将整体部分抽离
~~~
~~~
function red(){
    console.log('red')
}

function green(){
    console.log("green");
}

function yellow(){
    console.log("yellow");
}
~~~
 
>[danger] ##### 写法一
~~~


const task = (timer,light,callback) =>{
    setTimeout(()=>{
        if(light === "red"){
            red()
        }else if(light === "green"){
            green()
        }else{
            yellow()
        }
        callback()
    },timer);
}

// 只能一次
task(3000,'red',()=>{
    task(2000,'green',()=>{
        task(1000,'yellow',Function.prototype)
    })

// 想循环 你要循环的是整体这个整体
const step = ()=>{
    task(3000,'red',()=>{
        task(2000,'green',()=>{
            // 我在将整组循环调用
            task(1000,'yellow',step)
        })
    })
}
step()
~~~
>[danger] ##### 写法二
~~~
// 通过 new Promise 来做
const task = (timer,light)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(light === "red"){
                red()
            }else if(light === "green"){
                green()
            }else{
                yellow()
            }
            resolve()
        },timer);
    })
}

const setp = ()=>{
    task(3000,'red').then(_=>{
        task(2000,'green').then(_=>{
            task(1000,'yellow').then(setp)
        })
    })
}

setp()
~~~
>[danger] ##### 写法三
~~~
// 通过 new Promise 来做
const task = (timer,light)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(light === "red"){
                red()
            }else if(light === "green"){
                green()
            }else{
                yellow()
            }
            resolve()
        },timer);
    })
}



// 通过async 和 await
const taskRunner = async ()=>{
    await task(3000,'red')
    await task(3000,'green')
    await task(3000,'yellow')
    taskRunner()
}
taskRunner()
~~~