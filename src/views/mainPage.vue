<template>
  <div class="ColShop">
    <div class="col" v-for="(item, index) in travelList" :key="index"> 
      <div class="card" style="width: 18rem">
        <img class="card-img-top" :src="item.imageSrc" alt="Travel Destination" />
        <div class="card-body">
          <h5 class="card-title">{{ item.Name }}</h5>
          <p class="card-text">ราคา {{ item.price }} บาท</p>
          <router-link :to="item.path" class="router-link">เลือก</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import { customerShop } from '@/stores/Shope'; 

const store = customerShop(); 
const travelList = store.Product 

</script>


<style scoped>
.ColShop {
  margin-left: 6%;
  margin-right: 6%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 20px;
  padding: 30px;
  max-width: 1200px;
}

.card {
  background-color: #ccc7fa;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-left: 11%;
  margin-right: 11%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  color: #777;
}

.router-link:hover {
  text-decoration: line;
  color: #000000;
  cursor: pointer;
  font-weight: bolder;
}
.router-link {
  text-decoration: line;
  color: #000000;
  cursor: pointer;
  font-weight: 300px;
}
</style>
