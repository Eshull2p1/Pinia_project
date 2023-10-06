<script setup>
import { customerShop } from '@/stores/Shope'

const store = customerShop()
const travelList = store.cartItems
const ClearCart = () => {
  store.clearCart()
}
</script>

<template>
  <nav class="menu-bar">
    <div >
      <a class="logo" href="/"
        ><img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/381678158_847307653734544_8165485903006211424_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeG5ZuQLDwcSs6NOW-Eg3WmcTxABgVTbEwZPEAGBVNsTBuZP6O0N7DPuq2uhK9SclBXhFOnWvDY5yGX-B8D8quNg&_nc_ohc=R4IXIzVl3j8AX_wUzPI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRSihgEhNGpHkSFEHDYyyrdQF4MRgjtP99uru_hNcUtaQ&oe=653B5D80"
          alt=""
          style="max-width: 80px"
      /></a>
    </div>
    <p class="namePage">กับข้าวกับเบียร์</p>
    <div class="group">
      <a href="/cart">
        <p class="item">สินค้า {{ travelList.length }} ชิ้น</p></a
      >
      <a href="/" @click="ClearCart"> <p class="item">รีเซ็ต</p></a>
    
        <a href="/oder">
          <p class="item">รายการรวม</p>
        </a>
     
    </div>
  </nav>
</template>

<style scoped>
.menu-bar {
  background-color: #140970;
  display: flex;
}
.group{
  margin-block: 13px;
}

.item {
  color: rgb(255, 255, 255);
  display: inline-block;
  margin-block: 5px;
  margin-inline: 3.5px;
  box-sizing: border-box;
  padding: 20px;
}
.logo {
  background-color: transparent;
  display: inline-block;
  margin-inline: 4px;
  box-sizing: border-box;
  padding: 10px;
}
.logo :hover {
  background-color: #160d55;
  display: inline-block;
  box-sizing: border-box;
  padding: 5px;
}
.namePage {
  color: white;
  margin-block: 26px;
  margin-inline: 400px;
  font-size: xx-large;
}
.item:hover {
  background-color: rgb(19, 4, 57);
  font-weight: bold;
}
</style>
