import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrap } from 'bootstrap/dist/js/bootstrap'

// Create the Pinia store
const pinia = createPinia();

// Create the Vue app instance and use the Pinia store
const app = createApp(App);
app.use(bootstrap)
app.use(pinia); // Use the Pinia store
app.use(router);
app.mount('#app');
