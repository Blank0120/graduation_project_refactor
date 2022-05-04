<template>
  this is a detail vue html 
  <hr/>
  {{test}}
  <hr/>
  {{$route.params.isbn}}
</template>

<script>
export default {
  computed:{
    test(){
      return this.$route.params.isbn
    }
  }
}
</script>

<style>

</style>