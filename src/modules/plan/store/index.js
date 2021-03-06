import state from './state'
import getters from './getters/index'
import mutations from './mutations'
import actions from './actions'
const namespaced = false

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
