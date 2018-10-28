import Unify from '@/utils/unify'
import _ from 'lodash'

export default {
  getSelectablePeriod: (state, getters) => (year) => {
    let arr = _.cloneDeep(Unify.PERIOD) // Export will cause a shadow clone, which makes it an empty array.
    return _.remove(arr, (p) => {
      return _.indexOf(getters.uniqueSemesters, Unify.SEMESTER_UID(year, p)) === -1
    })
  },
}
