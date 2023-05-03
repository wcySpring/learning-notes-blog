>[success] # 30s Object-- 查(一)
~~~
1.本章节代码通过整理30s 项目中数组篇章知识点，对涉及对象查询的片段整理
~~~ 
>[info] ## 通过vaule 查找匹配的key
~~~
1.想在有个想已知对象中的value，想找到符合这个value 所有key，举个例子
    {
      Leo: 20,
      Zoey: 21,
      Jane: 20,
    }
想找到年龄是20的人的名字(也就是20作为value 对应的所有key)
~~~
[find-keys](https://www.30secondsofcode.org/js/s/find-keys)
>[danger] ##### 代码实现
~~~
1.代码思路先通过' Object.keys' 获取所有key的一个数组，再用数组过滤方法'filter'过滤找到符合key
~~~
~~~
const log = console.log

const findKeys = (obj,val)=>
    Object.keys(obj).filter(keys=>obj[keys] === val)

const ages = {
    Leo: 20,
    Zoey: 21,
    Jane: 20,
};
log(findKeys(ages, 20))
~~~
>[danger] ##### findKey 只想找到一个符合
[find-key](https://www.30secondsofcode.org/js/s/find-key)
~~~
1.这里就采用find方法，这样就能获取一个
~~~
~~~
const log = console.log

const findKey = (obj, fn) => 
  Object.keys(obj).find(key => fn(obj[key]));

log(findKey(
    {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true }
    },
    x => x['active']
  )) // barney
~~~
>[danger] ##### 这个系列类似的文章
[从后找到第一个符合 -- find-last-key](https://www.30secondsofcode.org/js/s/find-last-key)
>[info] ## 查出第一个符合的指定key的值
~~~
1.当有一个对象时候，想查出第一个符合的指定key的值举个例子
    {
        name:'1',
        personInfo:{
            name:'2'
        }
    }
找到name 值，因为要查到一个符合name 为key 的值得到结果是 '1'
~~~
[dig](https://www.30secondsofcode.org/js/s/dig)
>[danger] ##### 30s
~~~
1.使用in运算符检查中是否target存在obj。
2.如果找到，则返回的值obj[target]。
3.否则，使用Object.values(obj)和Array.prototype.reduce()递归地调用dig每个嵌套对象，
直到找到第一个匹配的键/值对。
4.这里面的一个小思维，如果是我第一次写我可能直接是for...in 循环，本质上第一层可以直接通过
'in' 来找，如果in 没有找到符合的key，通过'Object.values'直接获取其他需要查找值。
~~~
~~~
const log = console.log
const dig = (obj,target) =>
    target in obj 
        ? obj[target] 
        : Object.values(obj).reduce((acc,val)=>{
            if (acc !== undefined) return acc;
            // 主要剩下查找的值 不是Object，说明没有要查找的必要了举个例子
            // {info:'我是信息',infoObj:{...}} 这个对象中想找name字段
            // info不是name字段，并且info对应的value是个字符串没有接下来需要
            // 探查其内部本身没必要因此这里递归触发条件是Object
            if (typeof val === 'object') return dig(val, target);
        },undefined)
const data = {
    level1: {
        level2: {
            level3:{
                  level2: {
                    level3: 'some data'
                  }
            }
        }
    },
    level12: {
        level21: {
            level31: 'some data31'
        }
    }
}

log(dig(data, 'level3')) // { level2: { level3: 'some data' } }
log(dig(data, 'level31')) // 'some data31'
log(dig(data, 'level4')) // undefined
~~~
 >[info] ## 直接看系列
[迭代对象的所有自身属性，为每个对象运行一个回调](https://www.30secondsofcode.org/js/s/for-own)