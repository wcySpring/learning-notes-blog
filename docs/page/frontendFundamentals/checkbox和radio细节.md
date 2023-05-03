>[success] # checkbox 和 radio 细节

* 在类型为radio的input中, 如果name一样, 那么两个radio就会互斥,并且如果通过form 表单提交此时name 会作为key，即如果下面选择为女那么形成key，value {sex: "female"}
~~~html
 <label for="male">
      <input id="male" type="radio" name="sex" value="male">男
    </label>
    <label for="female">
      <input id="female" type="radio" name="sex" value="female">女
 </label>
~~~
* checkbox 为多选name 名相同为一组下 如果两个都选那么提交连接效果 `hobby=basketball&hobby=football`
~~~html
  <form action="/cba">
    <div>
      您的爱好:
      <label for="basketball">
        <input id="basketball" type="checkbox" name="hobby" checked value="basketball">篮球
      </label>
      <label for="football">
        <input id="football" type="checkbox" name="hobby" value="football">足球
      </label>
    </div>
    
    <input type="submit">
  </form>
~~~