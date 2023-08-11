import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes.js'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app')
