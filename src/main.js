import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import BootstrapVue from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'
import qrcode from 'qrious'
import Toasted from 'vue-toasted'
import axios from 'axios'
import _ from 'lodash'
// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Toasted)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.prototype.$_ = _
Vue.prototype.$axios = axios
Vue.prototype.$qrcode = qrcode

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
