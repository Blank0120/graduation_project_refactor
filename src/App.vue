<template>
  <header-display @rec_to_app="rec_to_books"></header-display>
  <search-display @search_list = "showSearch"></search-display>
  <books-display :rec="rec_json" :search = "search_list"></books-display>
  
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  
</template>


<script>
import headerDisplay from './components/header-display.vue'
import searchDisplay from './components/search-display.vue'
import booksDisplay from './components/books-display.vue'

export default {
  name: 'App',
  components: {
    headerDisplay,
    searchDisplay,
    booksDisplay
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

* {
  padding: 0%;
  margin: 0%;
}

</style>
