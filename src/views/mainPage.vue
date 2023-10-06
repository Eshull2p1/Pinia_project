<template>
  <!-- mainPage.vue -->
  <div class="PageMain">
    <div class="ColShop">
      <div class="col" v-for="(item, index) in travelList" :key="index">
        <div class="card">
          <img class="card-img-top" :src="item.imageSrc" alt="Travel Destination" />
          <div class="card-body">
            <h5 class="card-title">{{ item.Name }}</h5>
            <p class="card-text">ราคา {{ item.price }} บาท</p>
            <button class="btnAdd" @click="Addcart(item)">เพิ่มสินค้า</button>
            <p>เพิ่มแล้ว: {{ item.count_tb }} ชิ้น</p>
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
.ColShop {
  text-align: center;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  gap: 10px;

}
.col{
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
}

.card {
  width: 18rem;
  background-color: #ccc7fa;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card:hover {
  width: 19rem;
  background-color: #f6c7de;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 1);
}

.card-img-top {
  max-height: 270px;
  padding: 10px;
  border-radius: 17px;
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

.btnAdd{
  padding: 5px;
  background-color: #c293fa;
  border: 3px solid #000300;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.btnAdd:hover{
  background-color: #e3abf7;
  border: 3px solid #000000;
  box-shadow: #000000;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
