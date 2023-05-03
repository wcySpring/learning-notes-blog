|  语句段   |   例子   |  执行过程 |
| --- | --- | --- |
| begin    |   let i = 0   |  进入循环时执行一次(只执行一次) |
| condition |  i < 3    | 在每次循环迭代之前检查，如果为 false，停止循环。 |
| body|  （循环体）   |  lert(i) 条件为真时，重复运行。|
| step    |   i++   |在每次循环体迭代后执行  |

1. 第一次执行顺序 begin    =》condition =》body=》step
2. 往后执行顺序 condition =》body=》step
~~~
for(begin    ;condition ;step    ){  ...body}
~~~

