import _ from 'lodash'
import Unify from '@/utils/unify'

export default {
  findCourse: (state) => (uuid) => {
    // Even though course should appear only once, we collect every possible answers.
    // if (_.startsWith(courseTitle, Unify.CUSTOM_COURSE_PREFIX)) {
    //   // Igore Custom Course
    //   return []
    // } else {
    // }
    let semesters = []
    state.semesters.forEach((s, i) => {
      let index = _.findIndex(s.courses, ['uuid', uuid])
      if (index !== -1) {
        semesters.push(i)
      }
    })
    // Transferred
    let i = _.findIndex(state.transferred, ['uuid', uuid])
    if (i !== -1) {
      semesters.push(-1)
    }
    return semesters

  },
  // {semesterIndex:, courseIndex:}
  getSpecificCourse: (state) => (payload) => {
    if (payload.semesterIndex === Unify.TRANSFERRED_SEMESTER_INDEX) {
      return state.transferred[payload.courseIndex]
    }
    return state.semesters[payload.semesterIndex].courses[payload.courseIndex]
  },
  // {semesterIndex:, courseIndex:}
  specificCourseDetails: (state, getters) => (payload) => {
    let course = getters.getSpecificCourse(payload)
    if (course.custom) {
      return course
    } else {
      return { ...course,
        ...getters.detailsByUuid(course.uuid)
      }
    }
  }
}
