>[success] # form 补充

* 指定form 表单字段中name，就会以name 为key 和对应表单元素value拼接，注意下面按钮类型，提交后连接自动拼接`http://aaa/?username=33&password=33&sex=male&hobby=basketball&hobby=football`
~~~ html
 
  <form action="http://aaa" method="post" target="_blank">
    <div>
      <label for="username">
        用户: <input id="username" type="text" name="username">
      </label>
    </div>
    <div>
      <label for="password">
        密码: <input id="password" type="password" name="password">
      </label>
    </div>

    <!-- 性别 -->
    <div>
      性别: 
      <label for="male">
        <input id="male" type="radio" name="sex" value="male">男
      </label>
      <label for="female">
        <input id="female" type="radio" name="sex" value="female">女
      </label>
    </div>

    <!-- 爱好 -->
    <div>
      爱好:
      <label for="basketball">
        <input id="basketball" type="checkbox" name="hobby" checked value="basketball">篮球
      </label>
      <label for="football">
        <input id="football" type="checkbox" name="hobby" value="football">足球
      </label>
    </div>

    <!-- 提交按钮 -->
    <button type="reset">重置内容</button>
    <button type="submit">提交内容</button>
  </form>
~~~