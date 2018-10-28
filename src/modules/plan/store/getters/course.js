import _ from 'lodash'

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
  allCourses: (state) => {
    let courses = []
    state.semesters.forEach((s) => {
      courses = s.courses.concat(s.courses)
    })
    return courses
  }
}
