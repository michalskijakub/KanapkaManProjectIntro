import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)
const opts = {
    icons: {
    iconfont: "mdiSvg", 
  },
  theme: {
    themes: {
        light: {
            primary: '#1976D2',
            secondary: '#b0bec5',
          },
    }
  }
}
export default new Vuetify(opts)

