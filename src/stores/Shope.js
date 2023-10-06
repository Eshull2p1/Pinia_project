// Shope.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const customerShop = defineStore('customer', () => {
  const Product = ref([
    { Name: 'แสงโสม (กลม)', price: 400, count_tb: 0, Totalprice: 0, imageSrc: 'https://ustatic.priceza.com/img/productgroup/alo-4-l.jpg' },
    { Name: 'แสงโสม (แบน)', price: 200, count_tb: 0, Totalprice: 0, imageSrc: 'https://ustatic.priceza.com/img/productgroup/alo-6-l.jpg' },
    { Name: 'หงส์ฯ (กลม)', price: 400, count_tb: 0, Totalprice: 0, imageSrc: 'https://ustatic.priceza.com/img/productgroup/alo-4-l.jpg' },
    { Name: '285 ขวดลิตร', price: 400, count_tb: 0, Totalprice: 0, imageSrc: 'https://ustatic.priceza.com/img/productgroup/alo-4-l.jpg' },
    { Name: 'โซจู (องุ่น)', price: 150, count_tb: 0, Totalprice: 0, imageSrc: 'https://reviewhub.asia/wp-content/uploads/2021/09/S__4661264.jpg.webp' },
    { Name: 'โซจู (สตรอว์เบอร์รี)', price: 150, count_tb: 0, Totalprice: 0, imageSrc: 'https://reviewhub.asia/wp-content/uploads/2021/09/S__4661261-768x768.jpg.webp' },
    { Name: 'โซจู (พีซ)', price: 150, count_tb: 0, Totalprice: 0, imageSrc: 'https://reviewhub.asia/wp-content/uploads/2021/09/S__4661262-768x768.jpg.webp' },
    { Name: 'เบียร์ช้าง (3ขวด)', price: 219, count_tb: 0, Totalprice: 0, imageSrc: 'https://ustatic.priceza.com/img/productgroup/alo-3-l.jpg' },
    { Name: 'เบียร์ลีโอ (3ขวด)', price: 219, count_tb: 0, Totalprice: 0, imageSrc: 'https://ustatic.priceza.com/img/productgroup/alo-3-l.jpg' },
    { Name: 'เบียร์สิงห์ (3ขวด)', price: 219, count_tb: 0, Totalprice: 0, imageSrc: 'https://ustatic.priceza.com/img/productgroup/alo-3-l.jpg' },
    { Name: 'โคล่า 250 มล.', price: 20, count_tb: 0, Totalprice: 0, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPg0x6Hxjo7-Bfcwtyp0sL8UnssCkbQAwmqQ&usqp=CAU' },
    { Name: 'น้ำดื่ม 250 มล.', price: 20, count_tb: 0, Totalprice: 0, imageSrc: 'https://filebroker-cdn.lazada.co.th/kf/S2b8f00ce81c3419085d7d1ec997337f73.jpg' }
  ])
  const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')) || [])

 

  function updateCartInLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
  }

  function addItemToCart(item) {
    const existingItem = cartItems.value.find((cartItem) => cartItem.Name === item.Name)
    if (existingItem) {
      existingItem.count_tb++
      existingItem.Totalprice =
        existingItem.count_tb * Product.value.find((product) => product.Name === item.Name).price
    } else {
      item.count_tb = 1
      item.Totalprice =
        item.count_tb * Product.value.find((product) => product.Name === item.Name).price
      cartItems.value.push(item)
      console.log(item)
    }
    updateCartInLocalStorage()
  }
  function cancelItem(itemName) {
    const index = cartItems.value.findIndex((cartItems) => cartItems.Name === itemName)
    if (index !== -1) {
      cartItems.value.splice(index, 1)
    }
    updateCartInLocalStorage()
  }

  function incrementCartItem(itemName) {
    const cartItem = cartItems.value.find((item) => item.Name === itemName)
    if (cartItem) {
      cartItem.count_tb++
      cartItem.Totalprice =
        cartItem.count_tb * Product.value.find((product) => product.Name === itemName).price
    }
    updateCartInLocalStorage()
  }

  function decrementCartItem(itemName) {
    const cartItem = cartItems.value.find((item) => item.Name === itemName)
    if (cartItem && cartItem.count_tb > 1) {
      cartItem.count_tb--
      cartItem.Totalprice =
        cartItem.count_tb * Product.value.find((product) => product.Name === itemName).price
    } else if (cartItem && cartItem.count_tb === 1) {
      const index = cartItems.value.findIndex((item) => item.Name === itemName)
      if (index !== -1) {
        cartItems.value.splice(index, 1)
      }
    }
    updateCartInLocalStorage()
  }
  function clearCart() {
    cartItems.value = []
    updateCartInLocalStorage()
  }

  return {
    Product,
    addItemToCart,
    cartItems,
    cancelItem,
    decrementCartItem,
    incrementCartItem,
    clearCart

  }
})
