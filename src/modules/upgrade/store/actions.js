export default {
  checkCurrentVersion({
    state,
    rootState,
    commit
  }) {
    if (state.currentVersion === null) {
      // Great! We are about to be another microsoft that force user to upgrade XD
      commit('updateCurrentVersion', rootState.local.version)
      commit('updateForceUpgrade', false)
      console.log('Upgrade Flag Init!')
    } else {
      let diff = rootState.local.version - state.currentVersion
      console.log('Version diff:', diff)
      if (diff >= 10000) {
        // When Version difference >= 10000, breaking changes happened.
        commit('updateForceUpgrade', true)
        console.log('A ForceUpgrade is detected.')
      } else {
        commit('updateForceUpgrade', false)
      }
    }
  }
}
