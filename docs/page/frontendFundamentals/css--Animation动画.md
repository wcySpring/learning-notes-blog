>[success] # CSS Animation
1. **transition** 只能定义**开始状态和结束状态**，不能定义中间状态，也就是说只有两个状态，举个例子从200宽度到400宽度，不能先200在220在400
2. **transition**不能重复执行，除非一再触发动画
3. **transition**需要在特定状态下会触发才能执行，比如某个属性被修改了

想摆脱上面说的局限就可以使用**Animation**，它可以指定关键帧，即可以对动画过程中指定多种效果

>[danger] ##### 使用
可以指定关键帧因此需要配合**keyframes**定义动画序列，然后在执行刚才配置的动画、持续时间、动画曲线、延迟、执行次数、方向等

* 定义了一个叫 `go` 的动画效果，其中百分数含义是**0%表示动画的第一时刻，100%表示动画的最终时刻**，也可直接设置**from和to** 表示**from相当于0% to相当于100%**
~~~
 @keyframes go {
    0% { /*起始位置，等价于 form*/
        transform: translate3d(0, 0, 0) ;
    }
    25% {
        transform: translate3d(800px, 0, 0);
    }
    50% {
        transform: translate3d(800px, 400px, 0);

    }
    75% {
        transform: translate3d(0, 400px, 0);

    }
    100% {
        transform: translate3d(0, 0, 0);  /*100% 相当于结束位置 to*/

    }
}
~~~
* 定义完动画执行定义的动画 使用**animation属性**
    * **animation-name**：指定执行哪一个关键帧动画
    * **animation-duration**：指定动画的持续时间
    * **animation-timing-function**：指定动画的变化曲线
    * **animation-delay**：指定延迟执行的时间
    * **animation-iteration-count**：指定动画执行的次数，执行infinite表示无限动画
    * **animation-direction**：指定方向，常用值normal和reverse
    * **animation-fill-mode**：执行动画最后保留哪一个值
    * **none**：回到没有执行动画的位置
    * **forwards**：动画最后一帧的位置
    * **backwards**：动画第一帧的位置
    * **animation-play-state**：指定动画运行或者暂停（在JavaScript中使用，用于暂停动画）
 * 综合案例
~~~
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            /*animation: go 2s ease 0s infinite alternate; 引用动画*/
            animation: go 2s infinite; /*引用动画*/
            /*animation:动画名称 动画时间 运动曲线  何时开始  播放次数  是否反方向;*/
            /*动画名称是自己定义的 go google*/
            /*infinite 无限循环*/
            /*一般情况下，我们就用前2个 animation: go 2s*/
        }
        /*@keyframes go {}  定义动画*/
        @keyframes go {
            0% { /*起始位置，等价于 form*/
                transform: translate3d(0, 0, 0) ;
            }
            25% {
                transform: translate3d(800px, 0, 0);
            }
            50% {
                transform: translate3d(800px, 400px, 0);

            }
            75% {
                transform: translate3d(0, 400px, 0);

            }
            100% {
                transform: translate3d(0, 0, 0);  /*100% 相当于结束位置 to*/

            }
        }
       /* 动画结束之后会返回原来的位置！！！*/
    </style>
</head>
<body>
<div></div>
</body>
</html>
~~~