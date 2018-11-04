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
  // semesterIndex
  removeSemester({
    commit
  }, semester) {
    commit('removeSemester', semester)
  },
  // {semester: SemesterIndex, course: {}}
  addCourse({
    commit
  }, payload) {
    commit('addCourse', payload)
  },
  // {semesterIndex: , courseIndex, color: }
  updateCourseColor({
    commit,
    getters
  }, payload) {
    let course = getters.getSpecificCourse(payload)
    if (course !== null)
      commit('replaceCourse', {
        course: { ...course,
          color: payload.color
        },
        semesterIndex: payload.semesterIndex,
        courseIndex: payload.courseIndex
      })
  }
}
