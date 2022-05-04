<template>
  <header-display @rec_to_app ="rec_to_books"></header-display>
  <search-display @search_list ="showSearch"></search-display>
  <books-display :rec ="rec_json" :search ="search_list"></books-display>
</template>


<script>
import headerDisplay from '../components/header-display.vue'
import searchDisplay from '../components/search-display.vue'
import booksDisplay from '../components/books-display.vue'

export default {
  name: 'App',
  components: {
    headerDisplay,
    searchDisplay,
    booksDisplay
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body{
  padding: 0;
  margin: 0;
}

</style>
