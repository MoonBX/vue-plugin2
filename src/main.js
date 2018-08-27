import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from './plugin/toast'

Vue.config.productionTip = false;
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
