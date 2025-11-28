import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCollapsiblePanel)

app.mount('#app')
