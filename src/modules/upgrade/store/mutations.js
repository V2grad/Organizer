export default {
  updateCurrentVersion(state, version) {
    state.currentVersion = version
  },
  updateForceUpgrade(state, status) {
    state.forceUpgrade = status
  }
}
