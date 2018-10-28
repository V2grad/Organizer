import Unify from '@/utils/unify'
import _ from 'lodash'

export default {
  uniqueSemesters: (state) => {
    let list = []
    state.semesters.forEach((s) => {
      list.push(parseInt(s.year) * 10 + _.indexOf(Unify.PERIOD, s.period))
    })
    return list
  },
  semesterList: (state) => {
    return _.map(state.semesters, (s, i) => {
      return {
        text: Unify.READABLE_SEMESTER(s),
        value: i
      }
    })
  },
  findSemester: (state) => (semester) => {
    return _.findIndex(state.semesters, semester)
  },
}
