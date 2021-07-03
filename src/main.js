import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import AuthPlugin from './plugins/auth'

createApp(App).use(AuthPlugin).mount('#app')
