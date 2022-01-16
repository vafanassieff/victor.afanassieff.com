import { createApp } from 'vue'

import App from '#src/App.vue'
import '#src/main.css'
import { FontAwesomeIcon } from '#src/plugins/font-awesome.js'

const app = createApp(App)
app.component('FontAwesome', FontAwesomeIcon)
app.mount('#app')
