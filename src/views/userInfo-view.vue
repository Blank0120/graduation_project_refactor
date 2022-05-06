<template>
<div class="help">
	<div class="container">
		<div id="logo">
			<!-- <h1>SAVE</h1> -->
			<router-link to="/default" tag="h1" class="logo">Save</router-link>
			<div class="CTA">
				<h1>FOREVER</h1>
			</div>
		</div>
		<div class="leftbox">
			<nav>
			<a id="profile" class="active"><i class="fa fa-user"></i></a>
			<a id="payment"><i class="fa fa-credit-card"></i></a>
			<a id="subscription"><i class="fa fa-tv"></i></a>
			<a id="privacy"><i class="fa fa-tasks"></i></a>
			<a id="settings"><i class="fa fa-cog"></i></a>
			</nav>
		</div>
		<div class="rightbox">
			<div class="profile">
			<h1>Personal Info</h1>

			<h2>用户ID</h2>
			<p>{{userJson.UserID}}</p>
			<h2>密码 </h2>
			<p><input :placeholder="userJson.password"/><button class="btn">修改</button> </p>
			<h2>地区 </h2>
			<p><input :placeholder="userJson.Location"/><button class="btn">修改</button></p>
			<h2>年龄 </h2>
			<p><input :placeholder="userJson.Age"/><button class="btn">修改</button></p>
			</div>
						
		</div>
	</div>

	<footer>
	♡ ♡ ♡
	</footer>
</div>


</template>

<script>
export default {
	computed:{
		userJson(){
			return JSON.parse(sessionStorage.getItem("userJson"));
		}
	}
}
</script>

<style  scoped>

.help {
	position: absolute;
	width: 100%;
	height: 100%;
	top:0px;
	left: 0px;
	overflow-y: auto;
	background: linear-gradient(to right, #3FB6A8, #7ED386);
}

.container {
  background: #FFFFFF;
  width: 540px;
  height: 450px;
  margin: auto;
  position: relative;
  margin-top: 10%;
  box-shadow: 2px 5px 20px rgba(#777777, .5);
}

.logo {
  float: right;
  margin-right: 12px;
  margin-top: 12px;
  font-family: 'Nunito Sans', sans-serif;
  color: #3DBB3D;
  font-weight: 900;
  font-size: 1.5em;
  letter-spacing: 1px;
}
a{
	text-decoration-line: underline;
}

.CTA {
  width: 80px;
  height: 40px;
  right: -20px;
  bottom: 0;
  margin-bottom: 90px;
  position: absolute;
  z-index: 1;
  background: #7ED386;
  font-size: 1em;
  transform: rotate(-90deg);
  transition: all .5s ease-in-out;
  cursor: pointer;
}

.leftbox {
  float: left;
  top: -5%;
  left: 5%;
  position: absolute;
  width: 15%;
  height: 110%;
  background: #7ED386;
  box-shadow: 3px 3px 10px rgba(#777777, .5);
}

nav a {
  list-style: none;
  padding: 35px;
  color: #FFFFFF;
  font-size: 1.1em;
  display: block;
  transition: all .3s ease-in-out;

}

.active {
  color: #3FB6A8;
}

.rightbox {
  float: right;
  width: 60%;
  height: 100%;
}

input{  
	background:none;  
	outline:none;  
	border:0px;
}

.profile{
  transition: opacity .5s ease-in;
  position: absolute;
  width: 70%;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  color: #7ED386;
  font-size: 1em;
  margin-top: 40px;
  margin-bottom: 35px;
}

h2 {
  color: #777777;
  font-family: 'Roboto', sans-serif;
  width: 80%;
  text-transform: uppercase;
  font-size: 8px;
  letter-spacing: 1px;
  margin-left: 2px;
}

p {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #7ED386,#3FB6A8) 1 0%;
  border-top: 0;
  width: 80%;
  font-family: 'Montserrat', sans-serif;
  font-size: .7em;
  padding: 7px 0;
  color: #070707;
}
span {
  font-size: .5em;
  color: #777777;
}

.btn {
  float: right;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 10px;
  border: none;
  color: #3FB6A8;
  cursor: pointer;
}

.btn:hover {
  text-decoration: underline;
  font-weight: 900;
}

input {
  border: 1px solid lighten(#777777,40%); 
  font-family: 'Roboto', sans-serif;
  padding: 2px;
  margin: 0;
}

.privacy h2{
  margin-top: 25px;
}

.settings h2{
  margin-top: 25px;
}


footer {
  position: absolute;
  width: 20%;
  bottom: 0;
  right: 10px;
  text-align: right;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;

}

</style>