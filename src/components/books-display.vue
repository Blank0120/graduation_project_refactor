<template>
	<div id = "books">
		<ul>
			<li v-for="(book,index) in $store.state.bookList" :key='index'>
				<div id = "image_placeholder">
					<img :src = 'book.ImageURLS'/> 
				</div>
				<div class="img_right">
					<!-- <a :isbn='book.ISBN' @click.prevent="showDetail($event)" href="#">{{book.BookTitle}}</a> -->
					<router-link :to="'/detail/'+book.ISBN">{{book.BookTitle}}</router-link>
					<p>{{book.BookAuthor}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import store from '@/store'

export default {
	created() {
		console.log('createdBooks')

		axios.get('http://127.0.0.1:8000/books/')
			.then((res) => {
				// console.log(res.data[0])
				// this.bookList = res.data
				store.commit('setBookList', res.data);
			})
	},
//   props: {
// 		rec: {},
// 		search:{}
// 	},
	// data() {
	// 	return {
	// 		// data()初始化,访问不到异步数据， 需要watch
	// 		bookList: [{
	// 			"ISBN": "0000913154",
	// 			"BookTitle": "The Way Things Work: An Illustrated Encyclopedia of Technology",
	// 			"BookAuthor": "C. van tom(translator)",
	// 			"YearOfPublication": 1967,
	// 			"Publisher": "Simon &amp; cat",
	// 			"ImageURLS": "http://images.amazon.com/images/P/0000913154.01.THUMBZZZ.jpg",
	// 			"ImageURLM": "http://images.amazon.com/images/P/0000913154.01.MZZZZZZZ.jpg",
	// 			"ImageURLL": "http://images.amazon.com/images/P/0000913154.01.LZZZZZZZ.jpg"
	// 		}]
	// 	}
	// },
	// watch:{
	// 	rec:function(newVal){
	// 		this.bookList = newVal
	// 	},
	// 	search:function(newVal){
	// 		this.bookList = newVal
	// 	}
	// },
	
}
</script>

<style>
#books {
  margin-top: 80px;
  background: linear-gradient(to right, #9dbef1, #afeeee);
  padding: 0% 0% 0% 15%;
}

#books ul li{
  margin-top: 40px;
  display: flex;
  flex-direction: row;
}

#image_placeholder {
  width: 60px;
  height: 75px;
}

.img_right {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
a{
	text-decoration: none;
	color: rgb(7, 148, 42);
}

</style>