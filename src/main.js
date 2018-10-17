import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
// Library
import BootstrapVue from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'
import qrcode from 'qrious'
import Toasted from 'vue-toasted'
import axios from 'axios'
import _ from 'lodash'
// Font
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Utils
import human from '@/utils/human'
// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faTimes)

Vue.use(Toasted, {
  duration: 3000
})
Vue.config.productionTip = false
Vue.use(BootstrapVue)
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$_ = _
Vue.prototype.$axios = axios
Vue.prototype.$qrcode = qrcode
Vue.prototype.$human = human

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
