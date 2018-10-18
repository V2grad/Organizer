import _ from 'lodash'
import Unify from '@/utils/unify'

export default {
  getSemesterTree: (state) => {
    let tree = {}
    state.semesters.forEach((s, i) => {
      if (tree[s.year] === undefined) {
        tree[s.year] = {}
      }
      tree[s.year][s.period] = i
    })
    return tree
  },
  getYearSpan: () => {
    let startYear = Unify.DEFAULT_YEAR
    return _.range(startYear, startYear + Unify.YEAR_SPAN)
  },
  getExistedPeriod: (state, getters) => (year) => {
    if (getters.getSemesterTree[year] !== undefined) {
      return _.keys(getters.getSemesterTree[year])
    }
    return []
  },
  getSelectablePeriod: (state, getters) => (year) => {
    let arr = _.cloneDeep(Unify.PERIOD) // Export will cause a shadow clone, which makes it an empty array.
    if (getters.getSemesterTree[year] !== undefined) {
      _.pullAll(arr, _.keys(getters.getSemesterTree[year]))
    }
    return arr
  },
  semesterList: (state) => {
    return _.map(state.semesters, (s, i) => {
      return {
        text: s.year + ' ' + s.period,
        value: i
      }
    })
  },
  findCourse: (state) => (courseTitle) => {
    // Even though course should appear only once, we collect every possible answers.
    if (_.startsWith(courseTitle, Unify.CUSTOM_COURSE_PREFIX)) {
      // Igore Custom Course
      return []
    } else {
      let semesters = []
      state.semesters.forEach((s, i) => {
        let index = _.findIndex(s.courses, ['CourseTitle', courseTitle])
        if (index !== -1) {
          semesters.push(i)
        }
      })
      // Transferred
      let i = _.findIndex(state.transferred, ['CourseTitle', courseTitle])
      if (i !== -1) {
        semesters.push(-1)
      }
      return semesters
    }
  },
  findSemester: (state) => (semester) => {
    return _.findIndex(state.semesters, semester)
  },
  allCourses: (state) => {
    let courses = []
    state.semesters.forEach((s) => {
      courses = s.courses.concat(s.courses)
    })
    return courses
  }
}
