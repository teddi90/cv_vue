import '@/assets/main.css'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

library.add(fas,fab,far)
dom.watch();

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.use(Vue3Toasity)
app.mount('#app')
