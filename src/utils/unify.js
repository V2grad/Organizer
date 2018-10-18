export default {
  READABLE_SEMESTER(semester) {
    if (semester.year && semester.period) {
      return semester.year + ' ' + semester.period
    }
    return 'Transferred Course'
  },
  PLAN_MAXLENGTH: 50,
  COURSE_MAXLENGTH: 50,
}
