import Vue from 'vue'
import _ from 'lodash'

export default {
  // {id: '', profile: {}}
  importProfile(state, payload) {
    delete payload.profile.version
    Vue.set(state.profiles, payload.id, _.cloneDeep(payload.profile))
  },
  removeProfile(state, profileID) {
    Vue.delete(state.profiles, profileID)
  },
  cleanProfiles(state) {
    state.profiles = []
  },
  updateCurrentProfileID(state, id) {
    state.currentProfileID = id
  }
}
