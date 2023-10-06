<!-- PageCart.vue -->
<template>
  <div class="PageCart">
    <div class="table_total" v-if="BookingList.length > 0">
      <h1>รายการที่สั่ง</h1>
      <table class="table" v-if="BookingList.length > 0">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">รายการ</th>
            <th scope="col"  style="padding-left: 30px;">จำนวน</th>
            <th scope="col">ราคา</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in BookingList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.Name }}</td>
            <td class="countBox">
              <button @click="decCount(item)" class="btnDec">-</button>
              {{ item.count_tb }}
              <button @click="inCount(item)" class="btnIn">+</button>
            </td>

            <td>{{ item.Totalprice }}</td>
            <td>
              <button type="button" class="btn btn-outline-danger" @click="cancel(item)">
                ยกเลิก
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table_total2" v-if="BookingList.length == 0">
    <h1>ยังไม่มีรายการใดๆในขณะนี้</h1>
    </div>
  </div>
</template>

<style scoped>
.PageCart{
  padding: 55px;
  background-color: white;
  margin-inline: 50px;
}
.btnDec{
  margin-inline: 5px;
  padding-inline: 10px;
  padding-block: 1px;
  font-weight: 1000;
  border-radius: 5px;
  font-size: larger;
  color: rgb(255, 255, 255);
  background-color: rgba(255, 0, 0, 0.508);
}
.btnDec:hover{
  margin-inline: 5px;
  padding-inline: 10px;
  padding-block: 1px;
  font-weight: 1000;
  border-radius: 5px;
  font-size: larger;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 0, 0);
}
.btnIn{
  margin-inline: 5px;
  padding-inline: 10px;
  padding-block: 1px;
  font-weight: 1000;
  border-radius: 5px;
  font-size: larger;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 128, 0, 0.567);
}
.btnIn:hover{
  margin-inline: 5px;
  padding-inline: 10px;
  padding-block: 1px;
  font-weight: 1000;
  border-radius: 5px;
  font-size: larger;
  color: rgb(255, 255, 255);
  background-color: rgb(5, 149, 5);
}

.table_total2{
  height: 440px;
  text-align: center;
}
</style>

<script setup>
import { customerShop } from '@/stores/Shope'

const store = customerShop()
const BookingList = store.cartItems
const cancel = (item) => {
  store.cancelItem(item.Name)
}
const inCount = (item) => {
  store.incrementCartItem(item.Name)
}
const decCount = (item) => {
  store.decrementCartItem(item.Name)
}
</script>
