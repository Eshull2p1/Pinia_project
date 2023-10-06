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
    <div class="group">
      <a class="logo" href="/"
        ><img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/381678158_847307653734544_8165485903006211424_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeG5ZuQLDwcSs6NOW-Eg3WmcTxABgVTbEwZPEAGBVNsTBuZP6O0N7DPuq2uhK9SclBXhFOnWvDY5yGX-B8D8quNg&_nc_ohc=R4IXIzVl3j8AX_wUzPI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRSihgEhNGpHkSFEHDYyyrdQF4MRgjtP99uru_hNcUtaQ&oe=653B5D80"
          alt=""
          style="max-width: 80px"
      /></a>
    </div>
    <p class="namePage">กับข้าวกับเบียร์</p>
    <div class="group">
      <a href="/cart"> <p class="item">สินค้า  {{ travelList.length }} ชิ้น</p></a>
      <a href="/"  @click="ClearCart"> <p class="item">รีเซ็ต</p></a>
      <div class="item">
        <a href="/oder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-send-fill"
            viewBox="0 0 16 16"
            color="white"
          >
            <path
              d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.menu-bar {
  background-color: #140970;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.item {
  color: rgb(255, 255, 255);
  margin-top: 15%;
  display: inline-block;
  box-sizing: border-box;
  padding: 14px 20px;
}
.logo {
  background-color: transparent;
  display: inline-block;
  box-sizing: border-box;
  padding: 14px 20px;
}
.logo :hover {
  background-color: #160d55;
  display: inline-block;
  box-sizing: border-box;
  padding: 5px;
}
.namePage {
  color: white;
  margin: auto;
  font-size: xx-large;
  padding: 14px 20px;
}
.item:hover {
  background-color: green;
}
</style>
