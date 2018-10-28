import _ from 'lodash'

export default {
  updateData(state, data) {
    state.data = _.cloneDeep(data)
  },
  updateTimestamp(state) {
    state.updatedAt = Math.floor(Date.now() / 1000)
  },
  cleanData(state) {
    state.data = []
    state.hash = null
    state.updatedAt = null
  }
}
