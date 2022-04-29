<template>
  <div>
      <header_display @rec_to_app="rec_to_books"></header_display>
      <search @search_list = "showSearch"></search>
      <books :rec="rec_json" :search = "search_list"></books>
  </div>
</template>

<script>
import { header_display } from "./components/header.vue";
import { search } from "./components/search.vue";
import { book } from "./components/book.vue";

export default {
  name: 'App',
  components: {
    header_display,
    search,
    book
  },
	data(){
		return {
			rec_json:{},
			search_list:{}
		}
	},
	methods:{
		rec_to_books(rec_json){
			// console.log(rec_json);
			console.log("rec_to_books");
			this.rec_json = rec_json
		},
		showSearch(search_list){
			console.log("search_list");
			this.search_list = search_list
		}
	}
}
</script>

<style>
* {
  padding: 0%;
  margin: 0%;
}

</style>
