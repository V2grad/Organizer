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
  semesterCollection: (state) => {
    return state.semesters
  },
  findSemester: (state) => (semester) => {
    return _.findIndex(state.semesters, semester)
  },
  totalCreditsBySemester: (state, getters) => (semesterIndex) => {
    let credits = 0
    if (semesterIndex === Unify.TRANSFERRED_SEMESTER_INDEX) {
      state.transferred.forEach((c) => {
        if (c.custom) {
          credits = credits + parseInt(c.CreditHours)
        } else {
          credits = credits + parseInt(getters.detailsByUuid(c.uuid).CreditHours)
        }
      })
    } else {
      state.semesters[semesterIndex].courses.forEach((c) => {
        if (c.custom) {
          credits = credits + parseInt(c.CreditHours)
        } else {
          credits = credits + parseInt(getters.detailsByUuid(c.uuid).CreditHours)
        }
      })
    }
    return credits
  },
  // SemesterIndex
  semesterName: (state) => (index) => {
    return Unify.READABLE_SEMESTER(state.semesters[index])
  }
}
