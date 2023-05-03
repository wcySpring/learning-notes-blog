>[success] # 使用标签跳出多层循环
~~~
1.break只能跳出当前循环，那么多层循环的时候，想指定跳出某个循环可以使用标签
~~~
~~~
outer:for(let i = 0; i < 100; i++)
    inner:for(let j = 0; j < 100; j++)
        if( i == 50 && j == 50)
            break outer;
outer:for(let i = 0; i < 100; i++)
    inner:for(let j = 0; j < 100; j++)
        if( i >= 50 && j == 50)
            continue outer;****
~~~