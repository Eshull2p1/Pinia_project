<template>
  <div class="container">
    <blog-header></blog-header>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BlogHeader from './views/blogHeader.vue'
</script>

<style scoped>
.container {
  background-color: rgb(137, 126, 199);
  max-width: 1380px;
  padding: 20px;
}
.main{
  margin-top: 20px;
}
</style>
