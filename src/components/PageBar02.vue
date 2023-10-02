<template>
  <div class="topPage" v-for="(item, index) in travelList" :key="index">
    <div class="Ltop">
      <h1>{{ item.Name }}</h1>
      <br />
      <img
        :src="item.imageSrc"
        alt="Travel Destination"
        style="max-width: 60%; box-shadow: 2px 2px 10px 9px rgba(0, 0, 0, 0.1); margin-bottom: 20px"
      />
    </div>
    <div class="Rtop">
      <div class="inputBox">
        <h3>ราคาเริ่มต้นที่ : {{ item.price }}</h3>
        <div class="date_row">
          วันที่ :
          <input type="date" class="boxDate" required />
        </div>
        <div class="input_box">
          ผู้จอง
          <input type="text" class="form-control" placeholder="ชื่อ-สกุล" required />
        </div>
        <div class="input_box">
          <label class="form-label"> เบอร์</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="โปรดใส่เบอร์ที่ติดต่อได้"
              required
              maxlength="10"
            />
          </div>
        </div>
        <div>
          <P>จำนวน</P>
          <input type="number" class="boxCount" required />
        </div>
        <a class="btn btn-success">จอง</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const travelList = ref([
  {
    Name: 'ฯลฯ',
    price: 199,
    imageSrc:
      'https://scontent.fbkk8-3.fna.fbcdn.net/v/t39.30808-6/326435697_501993212005268_2267045348590722770_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeH6wOSgjmnBu0mx2CdHF44GxTbvRg4F5HPFNu9GDgXkc69Xy8MF7kytaavwQfgDD0pujV73nQ0rtrM3iipacngf&_nc_ohc=xiXWAA8jLckAX-2HbNj&_nc_ht=scontent.fbkk8-3.fna&oh=00_AfBoK-yKmezGLe0x3J7YSiOThBxAYsRo1lVtBDrahS23ZA&oe=651873CF'
  }
])
</script>
<style scoped>
.topPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px;
  padding: 20px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #d3cfee;
}
.Rtop {
  margin: 20px;
  margin-top: 60px;
  text-align: center;
}
.Ltop {
  margin: 20px;
  text-align: center;
}
.inputBox {
  text-align: center;
}
.boxDate {
  padding: 3px;
}
.input_box {
  max-width: 400px;
  margin-right: 20%;
  margin-left: 20%;
}
.boxCount {
  margin-bottom: 10px;
}
</style>
