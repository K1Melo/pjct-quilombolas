import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Particles from "vue3-particles";

window.app = createApp(App).use(store).use(router).use(Particles).mount('#app')
