import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setColorTheme } from './plugins/colorTheme.js'

import App from './App.vue'
import router from './router'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'

const app = createApp(App)

setColorTheme('bard')

app.use(createPinia())
app.use(router)
app.use(VueCollapsiblePanel)

app.mount('#app')
