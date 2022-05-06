<template>
		<div class="wrap">
			<div class="search">
				<input type="text" class="searchTerm" placeholder="What are you looking for?" v-model = "keyword" required>

				<el-button type="success" @click.prevent = "search">
					<search style="width: 1em; height: 1em;" />
				</el-button>

			</div>
		</div>
</template>

<script>
import axios from 'axios'
import store from '@/store';

export default {
	data() {
		return {
			keyword: ""
		}
	},
	methods: {
		search() {
			console.log(this.keyword);
			axios.get('http://127.0.0.1:8000/search_book/', {
				params: {
					keyword: this.keyword
				}
			}).then((res) => {
				// console.log(res.data);
				let search_list = []
				res.data.forEach(element => {
					search_list.push(element.fields)
				});
				console.log(search_list);
				store.commit('setBookList', search_list)
			})
		}
	}
}
</script>

<style scoped>
.el-button--success{
	margin-left: 20px;
}

.search {
  width: 30%;
  position: relative;
  left: 50%;
  transform: translate(-50%, 100%);
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #030303;
}



/* Resize the wrap to see the search bar change!
.wrap{
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */

</style>>
