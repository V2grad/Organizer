import _ from 'lodash'
import Unify from '@/utils/unify'

export default {
  addSemester({
    commit,
    getters
  }, semester) {
    let list = getters.uniqueSemesters
    let uid = Unify.SEMESTER_UID(semester.year, semester.period)

    // Identify the index that semester should fit in
    let result = _.sortedIndex(list, uid)

    commit('addSemester', {
      semester: { ...semester,
        courses: []
      },
      index: result
    })
  },
  removeSemester({
    commit
  }, semester) {
    // Although remove will only happened to the last one, required semester to delect specific semester
    commit('removeSemester', semester)
  },
  // {semester: SemesterIndex, course: {}}
  addCourse({
    commit
  }, payload) {
    if (payload.semester === Unify.TRANSFERRED_SEMESTER_INDEX) {
      commit('addTransferredCourse', payload.course)
    } else {
      commit('addCourse', payload)
    }
  }
}
