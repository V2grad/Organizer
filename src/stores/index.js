import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

import local from '@/modules/local/store'
import plan from '@/modules/plan/store'
import profile from '@/modules/profile/store'
import data from '@/modules/data/store'
import upgrade from '@/modules/upgrade/store'

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    plan,
    profile,
    local,
    data,
    upgrade
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
