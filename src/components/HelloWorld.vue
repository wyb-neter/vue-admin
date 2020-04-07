<template>
      <el-row>
         <el-button>默认按钮</el-button>
         <el-button type="primary" @click="getPeoples">{{msg}}</el-button>
         <el-button type="success">成功按钮</el-button>
         <el-button type="info">信息按钮</el-button>
         <el-button type="warning">警告按钮</el-button>
         <el-button type="danger">危险按钮</el-button>
     </el-row>
</template>

<script>

import axios from "axios"
axios.defaults.withCredentials = true;
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods:{
    getPeoples:function name(params) {
         axios.get("https://192.168.0.105:44345/api/WeatherForecast/insert", {
        }).then((res) => {
           this.msg = res.data[0]["message"]
        }).catch((err) => {
            console.log(err);
        });
    }
  },
  // created(){
  //   this.$http.get("https://localhost:44345/api/WeatherForecast/insert")
  //   .then((data) =>{
  //     this.msg = data.body
  //   })
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
