<!-- PageCart.vue -->
<template>
  <div>
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
              <button type="button" class="btn btn-outline-danger" @click="cancel(item)">
                ยกเลิก
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>Total: {{ cartSum }}</p>
      </div>
    </div>
    <div class="table_total" v-if="BookingList.length == 0">
      <h1>ว่าง</h1>
    </div>
  </div>
</template>

<script setup>
import { customerShop } from '@/stores/Shope'
import { computed } from 'vue'
const store = customerShop()
const BookingList = store.cartItems
const cancel = (item) => {
  store.cancelItem(item.Name)
}
const cartSum = computed(() => {
  return BookingList.reduce((acc, item) => acc + item.Totalprice, 0);
});
</script>
