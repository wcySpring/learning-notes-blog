* 获取IP
https://www.taobao.com/help/getip.php
https://pv.sohu.com/cityjson?ie=utf-8



* IP解析
https://api.map.baidu.com/location/ip

>[success] # 练习例子
~~~
<template>
  <div class="geolocation">
    Geolocation
    <hr />
    定位坐标： <br />
    ip: {{ ip }}<br />
    纬度：{{ position.lat }}<br />
    <hr />
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "geolocation",
  data() {
    return {
      position: {},
      msg: "",
    };
  },
  mounted() {

    this.timer = setTimeout(this.doTimeout, 5000);

    // 如果navigator.geolocation.getCurrentPosition 触发成功怎阻止this.doTimeout触发
    navigator.geolocation.getCurrentPosition((position) => {
      this.position = position;
      if (this.timer) {
        clearTimeout(this.timer);
      }
    });
  },
  methods: {
    doTimeout() {
      this.msg = "定位超时";
      this.getIp();
    },
    getIp() {
      // jsonp get "https://www.taobao.com/help/getip.php"
      // baidu sdk get ip information
    },
  },
};
</script>
~~~