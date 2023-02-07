import { createApp } from 'vue'
import App from './App.vue'
import alloc from '../packages/index';
import router from './router';
const app=createApp(App);
app.use(alloc);
app.use(router);
app.mount('#app');
