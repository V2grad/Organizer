export default {
  checkCurrentVersion({
    state,
    rootState,
    commit
  }) {
    if (state.currentVersion === null) {
      commit('updateCurrentVersion', rootState.local.version)
      commit('updateForceUpgrade', false)
    } else {
      if (rootState.local.version !== state.currentVersion) {
        commit('updateForceUpgrade', true)
      } else {
        commit('updateForceUpgrade', false)
      }
    }
  }
}
