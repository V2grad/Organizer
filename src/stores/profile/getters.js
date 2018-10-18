import _ from 'lodash'

export default {
  profileNumber: (state) => {
    return _.keys(state.profiles).length
  },
  currentProfile: (state) => {
    return state.profiles[state.currentProfileID]
  }
}
