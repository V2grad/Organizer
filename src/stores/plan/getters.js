import _ from 'lodash'
import {
  CUSTOM_COURSE_TITLE,
  DEFAULT_YEAR,
  PERIOD,
  YEAR_SPAN,
  TRANSFERRED_SEMESTER_INDEX
} from '../const'

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
  getStartYear: () => {
    // Maybe just let them choose whatever they like.
    return DEFAULT_YEAR
  },
  transferredSemesterIndex: () => {
    return TRANSFERRED_SEMESTER_INDEX
  },
  getYearSpan: (state, getters) => {
    let startYear = getters.getStartYear
    return _.range(startYear, startYear + YEAR_SPAN)
  },
  getExistedPeriod: (state, getters) => (year) => {
    if (getters.getSemesterTree[year] !== undefined) {
      return _.keys(getters.getSemesterTree[year])
    }
    return []
  },
  getSelectablePeriod: (state, getters) => (year) => {
    let arr = _.cloneDeep(PERIOD) // Export will cause a shadow clone, which makes it an empty array.
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
    if (_.startsWith(courseTitle, CUSTOM_COURSE_TITLE)) {
      // Igore Custom Course
      console.log('ctsm')
      return []
    } else {
      let semesters = []
      state.semesters.forEach((s) => {
        let index = _.findIndex(s.courses, ['CourseTitle', courseTitle])
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
