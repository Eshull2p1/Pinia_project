<template>
  <!-- App.vue -->
  <div class="container">
    <BlogHeader></BlogHeader>
    <div class="main">
      <!-- <mainPage></mainPage> -->
      <RouterView />
    </div>
    <div class="footer">| หากหน้าเพจมีปัญหาโปรดกดปุ่ม รีเซ็ต |</div>
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
  /* box-shadow: 0 0 60px rgba(255, 3, 3, 1); */
  padding: 10px;
}
.main {
  margin-top: 10px;
}
.footer {
  text-align: center;
  color: white;
  font-weight: 900;
  padding: 10px;
  text-shadow: 0 0 10px rgb(0, 0, 0 , 20);
}
</style>
