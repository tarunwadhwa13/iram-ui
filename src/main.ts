import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { apolloProvider } from './utils/apollo'
import { FontAwesomeIcon } from '@/plugins/font-awesome'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(apolloProvider)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
