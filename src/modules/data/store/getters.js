import Unify from '@/utils/unify';
import _ from 'lodash'

export default {
  detailsByUuid: (state) => (uuid) => {
    let detail = _.find(state.data, ['uuid', uuid])
    if (detail === undefined) {
      return {
        CourseName: uuid,
        CourseTitle: 'Unknown Courses',
        CreditHours: 0
      }
    }
    return detail
  },
  updatedAt: (state) => {
    let date = new Date(state.updatedAt * 1000);
    return date.toLocaleString('en-US')
  },
  isBroken: (state) => {
    return state.updatedAt === null || state.data.length === 0
  },
  isExpired: (state) => {
    return (Math.floor(Date.now() / 1000) - state.updatedAt) >= Unify.CACHE_EXPIRED
  }
}
