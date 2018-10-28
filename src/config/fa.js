import Vue from 'vue'

// Font
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
