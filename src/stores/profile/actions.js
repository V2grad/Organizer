import _ from 'lodash'
import {
  id
} from '@/utils/id'

// Be aware of the reference and clone issue!

export default {
  addProfile({
    commit
  }, plan) {
    commit('importProfile', {
      id: id(),
      profile: _.cloneDeep(plan)
    })
  },
  saveCurrentProfile({
    state,
    commit,
    rootState
  }) {
    commit('importProfile', {
      id: state.currentProfileID,
      profile: _.cloneDeep(rootState.plan)
    })
  },
  initializeProfile({
    commit,
    rootState
  }) {
    let pid = id()
    commit('importProfile', {
      id: pid,
      profile: _.cloneDeep(rootState.plan)
    })
    commit('updateCurrentProfileID', pid)
  },
  loadProfile({
    state,
    commit
  }, profileID) {
    let profile = state.profiles[profileID]
    if (profile !== null) {
      commit('updatePlan', profile)
      commit('updateCurrentProfileID', profileID)
      // Well done, plan changed.
      return true
    } else {
      // Oops, plan does not exist.
      return false
    }
  },
  switchProfile({
    dispatch
  }, profileID) {
    return dispatch('saveCurrentProfile').then(() => {
      // Load Profile into Plan
      return dispatch('loadProfile', profileID).then((result) => {
        return result
      })
    })
  },
  createNewProfile({
    dispatch,
    commit
  }) {
    dispatch('saveCurrentProfile').then(() => {
      // Safely empty current Plan
      commit('resetPlan')
      // Generate a new ID and save it into profile
      dispatch('initializeProfile')
    })
  },
  // {profileID: '', name: ''}
  cloneProfile({
    dispatch,
    state
  }, payload) {
    let p = state.profiles[payload.profileID]
    if (p) {
      dispatch('addProfile', { ..._.cloneDeep(p),
        name: payload.name
      })
      return true
    } else {
      return false
    }
  },
  snapshotProfile({
    dispatch,
    rootState
  }, name) {
    dispatch('addProfile', { ..._.cloneDeep(rootState.plan),
      name: name
    })
  }
}
