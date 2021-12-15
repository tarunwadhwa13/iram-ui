import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { apolloClient, apolloProvider } from './utils/apollo'
import { FontAwesomeIcon } from '@/plugins/font-awesome'
import { DefaultApolloClient } from '@vue/apollo-composable'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
}))
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(apolloProvider)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
