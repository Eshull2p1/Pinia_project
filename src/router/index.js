import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/mainPage.vue'

import cart from '../components/Page_cart.vue'
import oder from '../components/OderPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/oder',
      name: 'oder',
      component: oder
    }
  ]
})

export default router
