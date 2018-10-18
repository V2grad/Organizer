import Vue from 'vue'
import _ from 'lodash'
import { id } from '@/utils/id'

export default {
  state: {
    profiles: {},
    currentProfileID: null
    // The plan => id() : {...plan}
  },
  getters: {
    profileNumber: (state) => {
      return _.keys(state.profiles).length
    }
  },
  mutations: {
    // {id: '', profile: {}}
    importProfile (state, payload) {
      delete payload.profile.version
      Vue.set(state.profiles, payload.id, _.cloneDeep(payload.profile))
    },
    removeProfile (state, profileID) {
      Vue.delete(state.profiles, profileID)
    },
    cleanProfiles (state) {
      state.profiles = []
    },
    updateCurrentProfileID (state, id) {
      state.currentProfileID = id
    }
  },
  actions: {
    addProfile ({ commit }, plan) {
      commit('importProfile', { id: id(), profile: plan })
    },
    saveCurrentProfile ({ state, commit, rootState }) {
      commit('importProfile', { id: state.currentProfileID, profile: rootState.plan })
    },
    initializeProfile ({ commit, rootState }) {
      let pid = id()
      commit('importProfile', { id: pid, profile: rootState.plan })
      commit('updateCurrentProfileID', pid)
    },
    switchProfile ({ dispatch, state, commit }, ProfileID) {
      return dispatch('saveCurrentProfile').then(() => {
        // Load Profile into Plan
        let profile = state.profiles[ProfileID]
        if (profile !== null) {
          commit('updatePlan', profile)
          commit('updateCurrentProfileID', ProfileID)
          // Well done, plan changed.
          return true
        } else {
          // Oops, plan does not exist.
          return false
        }
      })
    },
    createNewProfile ({ dispatch, commit }) {
      dispatch('saveCurrentProfile').then(() => {
        // Safely empty current Plan
        commit('resetPlan')
        // Generate a new ID and save it into profile
        dispatch('initializeProfile')
      })
    }
  }
}
