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
      <p >
        จริงๆแล้วมันก็ไม่ใช่ร้านหรอกแต่แค่ไปกินที่ไหนก็ได้
        เเค่นัดเพื่อนให้เพื่อนเลี้ยงร้านไหนก็ได้ไม่เกี่ยง
      </p>
    </div>
    <div class="Rtop">
      <div class="inputBox">
        <h3>ราคาเริ่มต้นที่ : {{ item.price }}</h3>
        ให้เพื่อนเลี้ยง
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
    Name: 'ในใจเทอ',
    price: 0,
    imageSrc:
      'https://scontent.xx.fbcdn.net/v/t1.15752-9/381662888_702854637842947_1835758075658419294_n.png?stp=dst-png_s206x206&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHjXlTQpuq6w_VDBA6yOYpBlXM7sEpoNe-VczuwSmg174l6jnqhCuvJAvmU_RFyvM0KaEE2rD_IE_i5VLp9LlXc&_nc_ohc=LhJTSsoEAkQAX8IqDdb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSEWpg4kG6RmHqyZRJ_BE2ZL0ny-o7eOgAfXr30d3TlKg&oe=653AA360'
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
.Ltop {
  margin: 20px;
  text-align: center;

}
.Rtop {
  margin: 20px;
  margin-top: 50px;
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
