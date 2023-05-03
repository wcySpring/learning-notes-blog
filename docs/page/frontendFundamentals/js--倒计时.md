>[success] # js 倒计时
制作倒计时思路就是将**setTimeout** 通过**promise**进行包裹，利用while 循环去持续调用封装好的倒计时
~~~
// 异步倒计时
function wait(ms) {
	return new Promise((res) => {
		setTimeout(res, ms)
	})
}

// 倒计时执行方法
async function starting(el, count = 3) {
	while (count--) {
		await wait(1000)
		el.innerText = count
	}
	el.innerText = ''
}
// 使用时候
const startingEl = document.getElementById('starting')
starting(startingEl )
~~~
* 时分秒倒计时
~~~
async function countDown(el, sec) {
  while(sec--) {
    const minute = Math.floor(sec / 60);
    const second = sec % 60;
    const time = `${minute > 10 ? minute: `0${minute}`}:${second > 10 ? second: `0${second}`}`;
    el.innerText = time;
    await wait(1000);
  }
}
~~~