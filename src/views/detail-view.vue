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
                  <span>{{bookDetail}}</span>
                  <router-link to="/default">返回</router-link>
                </div>
              </template>

              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>

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
      currentDate:ref(new Date())
    }
  }
}
</script>

<style scoped>
.el-container {
  background: linear-gradient(to right, #9dbef1, #afeeee);
  margin: 15px;
  padding: 0px;
  display: flex;
  align-items: center;
}

h1 {
  text-decoration: underline;
  text-align: center;
  margin: 35px 0 5px
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
