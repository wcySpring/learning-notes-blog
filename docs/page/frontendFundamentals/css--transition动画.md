>[success] # transition -- 动画

~~~
1.在CSS3里使用transition可以实现补间动画（过渡效果）
2.transition: 要过渡的属性  花费时间  运动曲线  何时开始;（过渡所有属性用all代替）。
3.必须前后属性有变化才能触发

~~~

*   直接第一种简写，看总结第二条属性介绍

| 属性 | 描述 | CSS |
| --- | --- | --- |
| transition | 简写属性，用于在一个属性中设置四个过渡属性。 | 3 |
| transition\-property | 规定应用过渡的 CSS 属性的名称。 | 3 |
| transition\-duration | 定义过渡效果花费的时间。默认是 0。 | 3 |
| transition\-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。 | 3 |
| transition\-delay | 规定过渡效果何时开始。默认是 0。 | 3 |

*   曲线示意图  
    ![](https://box.kancloud.cn/fc3bc8e5916fc2e6da2d5e52189d1e51_797x265.png)

>[danger] ##### 使用场景

~~~
1. 当我们做将鼠标悬停改变当前元素的css 属性时候，虽然不使用transition 也能实现，
但是 效果僵硬没有过度效果，这时候可以使用transition 来解决这个问题

~~~

>[danger] ##### 使用

~~~
1.transition  放到初始化的css 即一般在要做动画的样式中
2.若 transition 放在hover 中也可以执行动画效果，但是动画效果是双向的，就会
导致，当鼠标离开的时候没有动画效果，所以推荐放在主体中。

~~~

~~~
img {
  width:80px; height: 80px; border:8px solid #ccc; border-radius: 50%;
  transition:width 0.5s ease-in 0s;
}
img:hover {
   width:180px; 
}

~~~

>[danger] ##### 关于要改变多个元素和all 的使用

~~~
div {
			width: 200px;
			height: 100px;
			background-color: pink;
			/* transition: 要过渡的属性  花费时间  运动曲线  何时开始; */
			transition: width 0.6s ease 0s, height 0.3s ease-in 1s; // transition: all 0.6s;  /* 所有属性都变化用all 就可以了  后面俩个属性可以省略 */

			/* transtion 过渡的意思  这句话写到div里面而不是 hover里面 */
  
			
}
div:hover {  /* 鼠标经过盒子，我们的宽度变为400 */

			width: 600px;
			height: 300px
}

~~~
