import _ from 'lodash'

export default {
  READABLE_SEMESTER(semester) {
    console.log(semester)
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
    CreditHours: 'Credit Hours'
  },

  DEFAULT_YEAR: (new Date()).getFullYear() - 5,
  YEAR_SPAN: 15,

  TRANSFERRED_SEMESTER_INDEX: -1,
  TRANSFERRED_SEMESTER_OPTION: {
    text: 'Transferred Course',
    value: -1
  },

  VERSION: "1.00"
}
