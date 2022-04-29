<template>
      <header_display @rec_to_app="rec_to_books"></header_display>
      <search @search_list = "showSearch"></search>
      <books :rec="rec_json" :search = "search_list"></books>
</template>

<script>
import header_display from './components/header.vue'
import search from './components/search.vue'
import books from './components/book.vue'

export default {
  name: 'App',
  components: {
    header_display,
    search,
    books
  },
  
}
</script>

<style>
* {
  padding: 0%;
  margin: 0%;
}

</style>
