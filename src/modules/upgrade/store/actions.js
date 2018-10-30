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
      if (state.currentVersion - rootState.local.version >= 10000) {
        // When Version difference >= 10000, breaking changes happened.
        commit('updateForceUpgrade', true)
      } else {
        commit('updateForceUpgrade', false)
      }
    }
  }
}
