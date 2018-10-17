import Vue from 'vue'

export default {
  state: {
    profiles: {},
    currentProfileID: null
    // The plan => id() : {...plan}
  },
  mutations: {
    // {id: '', profile: {}}
    importProfile (state, payload) {
      delete payload.profile.version
      Vue.set(state.profiles, payload.id, payload.profile)
    },
    deleteProfile (state, profileID) {
      Vue.delete(state.profiles, profileID)
    },
    cleanProfiles (state) {
      state.profiles = []
    },
    assignCurrentProfileID (state, id) {
      state.currentProfileID = id
    }
  }
}
