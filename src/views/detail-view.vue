<template>
  <!-- {{$route.params.isbn}} -->
    <el-container>
      <el-header><h1>The Book Information</h1></el-header>
      <el-container>
        <el-aside>
          <el-card >
            <img :src="bookDetail.ImageURLL" class="image"/>
          </el-card>
        </el-aside>
          <el-main>
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>{{bookDetail.BookTitle}}</span>
                  <router-link to="/default">返回</router-link>
                </div>
              </template>

              <div class="text item">作者:  {{bookDetail.BookAuthor}}</div>
              <div class="text item">出版商:  {{bookDetail.Publisher}}</div>
              <div class="text item">出版日期:  {{bookDetail.YearOfPublication}}</div>
              <div class="text item">当前评分:  {{bookDetail.rate}}</div>

              <div class="demo-rate-block">
                  <span class="demonstration">评分：</span>
                  <el-rate v-model="rateValue" />
              </div>
              
            </el-card>
          </el-main>
      </el-container>
      <el-footer>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
        </div>
      </el-footer>
    </el-container>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  created(){
    console.log("detail-view created");
    axios.get('http://127.0.0.1:8000/getBookDetail/',{
          params:{
            isbn: this.$route.params.isbn
          }
      }
    ).then((res) => {
        console.log("bookDetail");
        console.log(res.data[0].fields);
        this.bookDetail = res.data[0].fields
			})
  },
  data(){
    return {
      bookDetail:{},
      currentDate:ref(new Date()),
      rateValue:0
    }
  }
}
</script>

<style>
html,body{
  padding: 0px;
  margin: 0px;
  border: 0px;
  height: 100%;
}

#app{
  height: 100%;
}

.el-container {
  background: linear-gradient(to right, #9dbef1, #afeeee);
  display: flex;
  align-items: center;
  height: 100%;
}


.cardsSet {
  display: flex;
  align-items: stretch;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
