<template>
<div id = 'register'>
  <form class="login-box">
    <h1>Register</h1>
    <div class="textbox">
      <i class="fa fa-user" aria-hidden="true"></i>
      <input type="text" placeholder="UserID" v-model = "userID" required="required">
    </div>
    <div class="textbox">
       <i class="fa fa-lock" aria-hidden="true"></i>
       <input type="password" placeholder="Password"  required="required">
    </div>
    <div class="textbox">
       <i class="fa fa-lock" aria-hidden="true"></i>
       <input type="password" placeholder="Confirm Password" required="required">
    </div>
    <div class="textbox">
       <i class="fa fa-lock" aria-hidden="true"></i>
       <input type="text" placeholder="Age">
    </div>
    <div class="textbox">
       <i class="fa fa-lock" aria-hidden="true"></i>
       <input type="text" placeholder="Address">
    </div>


    <el-button :plain="true" @click="register" class="btn">Register</el-button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
import { ElMessage } from 'element-plus'

export default {
  data() {
    return {
      userID: '',
      password: '',
      userJson: {}
    }
  },
  methods: {
   register(){
      ElMessage({
        message: '注册成功',
        type: 'success',
      });
		  this.$router.push("/default")
    } 
  }
  
}
</script>

<style scoped>
#register{
  position: relative;
  height: 720px;
    font-family: sans-serif;
  /* background: #9dbef1; */
  background: linear-gradient(to bottom, #9dbef1, #afeeee);
}

.login-box {
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;

}
.login-box h1 {
  float: left;
  font-size: 40px;
  border-bottom: 6px solid #4caf50;
  margin-bottom: 50px;
  padding: 13px 0;
}

.textbox {
  width: 100%;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #4caf50;
  overflow: hidden;
}
.textbox i {
  width: 26px;
  float: left;
  text-align: center;
}
.textbox input {
  border: none;
  outline: none;
  background: none;
  color: black;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}
.btn {
  width: 100%;
  background: none;
  border: solid 2px #4caf50;
  padding: 5px;
  font-size: 18px;
  margin: 12px 0;
  cursor: pointer;
  color: black;
}

</style>>
