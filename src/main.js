import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ref } from 'vue'

const app = createApp(App)

app.config.globalProperties.classicTheme = ref(true)
app.config.globalProperties.darkTheme = ref(false)
app.config.globalProperties.earthTheme = ref(false)
app.config.globalProperties.oceanTheme = ref(false)

app.use(router)

app.mount('#app')
