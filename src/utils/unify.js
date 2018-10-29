import _ from 'lodash'

export default {
  READABLE_SEMESTER(semester) {
    if (semester.year && semester.period) {
      return semester.year + ' ' + semester.period
    }
    return 'Transferred Course'
  },

  CUSTOM_COURSE_PREFIX: 'CTSM-',
  CUSTOM_COURSE_TITLE: 'CTSM-1100',

  PLAN_MAXLENGTH: 50,
  COURSE_MAXLENGTH: 50,

  PERIOD: ['Spring', 'Summer', 'Fall'],
  SEMESTER_UID(year, period) {
    return parseInt(year) * 10 + _.indexOf(this.PERIOD, period)
  },
  COURSE_ATTRIBUTES: {
    CourseTitle: 'Course Title',
    CourseName: 'Course Name',
    CreditHours: 'Credit Hours',
    // custom: false,
    // uuid: 'UU-II-DD'
  },

  DEFAULT_YEAR: (new Date()).getFullYear() - 5,
  YEAR_SPAN: 15,
  YEAR_SPAN_LIST() {
    let startYear = this.DEFAULT_YEAR
    return _.range(startYear, startYear + this.YEAR_SPAN)
  },

  TRANSFERRED_SEMESTER_INDEX: -1,
  TRANSFERRED_SEMESTER_OPTION: {
    text: 'Transferred Course',
    value: -1
  },

  API_SOURCE: '<a href="https://yacs.io">YACS</a>',
  API_ENDPOINT: "https://nightly.yacs.io/api/v6/courses.json?include=latest_listing",
  CACHE_EXPIRED: 604800, // A week
  VERSION: "1.01", // Change when changing vuex modules

  // Background image is located in App.vue
}
