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
    var date = new Date(state.updatedAt * 1000);
    return date.toLocaleString('en-US')
  }
}
