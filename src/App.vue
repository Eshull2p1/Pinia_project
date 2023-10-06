<template>
  <!-- App.vue -->
  <div class="container">
    <BlogHeader></BlogHeader>
    <div class="main">
      <!-- <mainPage></mainPage> -->
      <RouterView />
    </div>
  </div>
</template>

<script setup>
// import mainPage from './views/mainPage.vue'
import { RouterView } from 'vue-router'
import BlogHeader from './views/blogHeader.vue'

</script>

<style scoped>
.container {
  background-color: rgb(137, 126, 199);
  max-width: 2560px;
}
.main{
  margin-top: 20px;
}
</style>
