import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

import local from './local'
import plan from './plan'
import profile from './profile'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    plan,
    profile,
    local
  },
  plugins: [createPersistedState({
    reducer(state) {
      // No need to use let as the reducer itself can be immutable which do not mean that the properties
      // are not mutable (https://ponyfoo.com/articles/var-let-const)
      const reducer = Object.assign({}, state)
      // state which you don't want to persist.
      // https://github.com/robinvdvleuten/vuex-persistedstate/issues/4
      delete reducer.local

      return reducer
    }
  })]
})
