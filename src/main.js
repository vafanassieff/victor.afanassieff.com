import { createApp } from 'vue'
import App from '@/App.vue'
import '@/main.css'
import { FontAwesomeIcon } from '@/plugins/font-awesome.js'

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
