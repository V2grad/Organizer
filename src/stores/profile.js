import Vue from 'vue'
import { id } from '@/utils/id'

export default {
  state: {
    profiles: {}
    // The plan => id() : {..profile}
  },
  mutations: {
    importProfile (state, profile) {
      Vue.set(state.profiles, id(), profile)
    },
    deleteProfile (state, profileID) {
      Vue.delete(state.profiles, profileID)
    },
    cleanProfiles (state) {
      state.profiles = []
    }
  }
}
