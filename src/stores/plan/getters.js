import _ from 'lodash'
import { CUSTOM_COURSE_TITLE, DEFAULT_YEAR, PERIOD } from '../const'

export default {
  getters: {
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
    getStartYear: (state) => {
      // Maybe just let them choose whatever they like.
      return DEFAULT_YEAR
    },
    getExistedPeriod: (state) => (year) => {
      if (state.semesters[year] !== undefined) {
        return _.keys(state.semesters[year])
      }
      return []
    },
    getSelectablePeriod: (state) => (year) => {
      if (state.semesters[year] !== undefined) {
        let arr = PERIOD
        _.pullAll(arr, _.keys(state.semesters[year]))
        return arr
      }
      return PERIOD
    },
    findCourse: (state) => (courseTitle) => {
      // Even though course should appear only once, we collect every possible answers.
      if (courseTitle.include(CUSTOM_COURSE_TITLE)) {
        // Igore Custom Course
        return []
      } else {
        let semesters = []
        state.semesters.forEach((s) => {
          let index = _.findIndex(s, ['CourseTitle', courseTitle])
          if (index !== -1) {
            semesters.push(index)
          }
        })
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
}
