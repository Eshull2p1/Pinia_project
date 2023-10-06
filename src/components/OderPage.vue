<!-- PageCart.vue -->
<template>
  <div class="PageCart">
    <div class="table_total" v-if="BookingList.length > 0">
      <h1>รายการที่สั่ง</h1>
      <table class="table" v-if="BookingList.length > 0">
        <thead>
          <tr>
            <th scope="col" class=""></th>
            <th scope="col">รายการ</th>
            <th scope="col">จำนวน</th>
            <th scope="col">ราคา</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in BookingList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.Name }}</td>
            <td>
              {{ item.count_tb }}
            </td>
            <td>{{ item.Totalprice }}</td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <p>ราคารวม : {{ cartSum }} บาท</p>
      </div>
    </div>
    <div class="table_total2" v-if="BookingList.length == 0">
    <h1>ยังไม่มีรายการใดๆในขณะนี้</h1>
    </div>
  </div>
</template>

<script setup>
import { customerShop } from '@/stores/Shope'
import { computed } from 'vue'
const store = customerShop()
const BookingList = store.cartItems
const cartSum = computed(() => {
  return BookingList.reduce((acc, item) => acc + item.Totalprice, 0);
});
</script>

<style scoped>
.table_total2{
  height: 440px;
  text-align: center;
}
.PageCart{
  padding: 55px;
  background-color: white;
  margin-inline: 50px;
}
.total{
  font-size: large;
  font-weight: bolder;
  padding-top: 15px;
  padding-inline: 10px;
  max-width: fit-content;
  border: 3px solid;
  border-radius: 10px;
}
</style>
