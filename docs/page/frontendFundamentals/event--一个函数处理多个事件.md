>[success] # 一个函数处理多个事件
~~~
1.当一个节点有多个触发方法时候，可以考虑封装
成函数，利用'event.type' 需要被触发的事件
~~~
~~~
<script type="text/javascript">
		var btnNode = document.getElementsByTagName("input").item(0);
		var handler = function(event) {
			switch (event.type) {
			case "click":
				alert("clicked");
				break;
			case "mouseover":
				event.currentTarget.style.backgroundColor = "red";
				break;
			case "mouseout":
				event.currentTarget.style.backgroundColor = "";
				break;
			}
		};
		btnNode.onclick = handler;
		btnNode.onmouseover = handler;
		btnNode.onmouseout = handler;
	};
</script>
~~~