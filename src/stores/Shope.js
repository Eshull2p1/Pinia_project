import { ref } from 'vue';
import { defineStore } from 'pinia';

export const customerShop = defineStore('customer', () => {
  const Product = ref([
    { Name: 'แสงโสม (กลม)', price: 400, path: '/Bar1', imageSrc: '' },
    { Name: 'แสงโสม (แบน)', price: 200, path: '/Bar2', imageSrc: '' },
    { Name: 'หงส์ฯ (กลม)', price: 400, path: '/Bar3', imageSrc: '' },
    { Name: '285 ขวดลิตร', price: 400, path: '/Bar4', imageSrc: '' },
    { Name: 'เบียร์ช้าง (3ขวด)', price: 219, path: '/Bar5', imageSrc: '' },
    { Name: 'เบียร์ลีโอ (3ขวด)', price: 200, path: '/Bar6', imageSrc: '' },
    { Name: 'โคล่า 250 มล.', price: 20, path: '/Bar7', imageSrc: '' },
    { Name: 'น้ำดื่ม 250 มล.', price: 20, path: '/Bar8', imageSrc: '' }
  ]);

  return { Product };
});
