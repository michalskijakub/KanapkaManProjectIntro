import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import store from './store' // todo: uselsee
import vuetify from './vuetify.js'
import i18n from './i18n'
import {createPinia, PiniaVuePlugin} from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  // store, // todo: uselsee
  i18n,
  pinia,
  render: function (h) { return h(App) }
}).$mount('#app')
