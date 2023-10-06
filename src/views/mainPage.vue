<template>
  <!-- mainPage.vue -->
  <div class="PageMain">
    <div class="ColShop">
      <div class="col" v-for="(item, index) in travelList" :key="index">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" :src="item.imageSrc" alt="Travel Destination" />
          <div class="card-body">
            <h5 class="card-title">{{ item.Name }}</h5>
            <p class="card-text">ราคา {{ item.price }} บาท</p>

            <button @click="Addcart(item)">เพิ่มสินค้า</button>
            <p>จำนวน: {{ item.count_tb }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { customerShop } from '@/stores/Shope';

const store = customerShop()
const travelList = store.Product
const Addcart = (item) => {
  store.addItemToCart(item)
}
</script>

<style scoped>
.PageMain {
  
}
.ColShop {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 20px;
  max-width: 800px;
}

.card {
  background-color: #ccc7fa;
  border: 1px solid #000000;
  border-radius: 5px;
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
