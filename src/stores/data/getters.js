import _ from 'lodash'

export default {
  detailsByUuid: (state) => (uuid) => {
    return _.find(state.data, ['uuid', uuid])
  },
  updatedAt: (state) => {
    var date = new Date(state.updatedAt * 1000);
    return date.toLocaleString('en-US')
  }
}
