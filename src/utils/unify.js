import _ from 'lodash'

export default {
  READABLE_SEMESTER(semester) {
    if (_.get(semester, 'year') && _.get(semester, 'period')) {
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

  PURGE_ORGANIZER() {
    localStorage.clear()
  },

  API_SOURCE: 'Dummy',
  API_ENDPOINT: null,
  JUMP_TO_SCHEDULER(courses) {
    return 'https://example.com' + _(courses).map(function (c) {
      return c.custom ? null : c.uuid
    }).compact().join(",")
  },

  CACHE_EXPIRED: 604800, // A week
  VERSION: 10003, // Change when changing vuex modules, check out wiki for more info

  // Background image is located in App.vue
}
