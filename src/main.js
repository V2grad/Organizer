import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
