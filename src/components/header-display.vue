<template>
	<nav>
		<ul>
			<li><a href="#" @click.prevent = recommend>推荐阅读</a></li>
			<li v-if = "this.isLogin"><p>你好	{{userJson.UserID}},  欢迎访问 !</p></li>
			<!-- <li v-else><a href = '/login'>登录</a></li> -->
			<li v-else><router-link to="/login">登录</router-link></li>
		</ul>
	</nav>
</template>

<script>
import axios from 'axios'
import store from '@/store'

export default {
	data() {
		return {
			userJson: {},
			rec_json: {}
		}
	},
	computed: {
		isLogin() {
			return !(JSON.stringify(this.userJson) === '{}')
		}
	},
	created() {
		console.log("created");
		if (sessionStorage.getItem("userJson")) {
			this.userJson = JSON.parse(sessionStorage.getItem("userJson"))
			console.log(this.userJson);
		}
		if (this.isLogin && !sessionStorage.getItem("get_rec")) {
			this.get_recommend()
		}
	},

	methods: {
		get_recommend() {
			console.log("get_recommend");
			let before_date = new Date();

			axios.get('http://127.0.0.1:8000/get_top_ratings/', {
				params: {
					uid: this.userJson.UserID
				}
			}).then((recommend_res) => {
				let after_date = new Date()
				console.log((after_date - before_date) / 1000);

				let rec_list = [];
				recommend_res.data.forEach(json_str => {
					rec_list.push(JSON.parse(json_str))
				});

				this.rec_json = rec_list
				sessionStorage.setItem("get_rec", JSON.stringify(this.rec_json))
				console.log(this.rec_json);
			})

		},
		
		recommend() {
			console.log("recommend");
			if (this.isLogin) {
				// console.log(this.userJson);
				// this.$emit("rec_to_app", JSON.parse(sessionStorage.getItem("get_rec")))
				store.commit('setBookList' ,JSON.parse(sessionStorage.getItem("get_rec")));
			} else {
				alert("请先登录");
			}
		}
	}
}
</script>

<style scoped>
nav {
	background-color: #afeeee;
}

nav ul {
	list-style: none;
	position: relative;
}

nav ul li {
	display: inline-block;
	margin-left: 50px;
}

nav a {
	display: block;
	padding: 0 10px;
	font-size: 20px;
	color: rgb(16, 93, 123);
	line-height: 60px;
	text-decoration: none;
}

nav a:hover {
	background-color: #d1fcfc;
}

</style>