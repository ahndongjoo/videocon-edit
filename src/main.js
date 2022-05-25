import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { store } from './store.js'

// import '/@static/css/reset.css'

createApp(App).use(router , store).mount('#app');
