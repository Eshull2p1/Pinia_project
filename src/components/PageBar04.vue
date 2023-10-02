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
    Name: 'OverNight',
    price: 299,
    imageSrc:
      'https://scontent.fbkk8-3.fna.fbcdn.net/v/t39.30808-6/314943429_107842845474701_641691726405226769_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeE2jtbOWcxEQxWt5VOcktcwEYxzLzXtdwsRjHMvNe13CzOH8qAa3eRI-d2PHcleZmuOx09IYZ10rhrdDC906sgc&_nc_ohc=7LL9V4RNpl4AX9nIxO2&_nc_ht=scontent.fbkk8-3.fna&oh=00_AfDPIZXIuQZ3FQ1onD__C3i0YjB9gDSGbwYGPWczTBDwdw&oe=65178BF1'
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
