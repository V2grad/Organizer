import Vue from 'vue'

export default {
  // {semester: {}, index: Number}
  addSemester (state, payload) {
    state.semesters.splice(payload.index, 0, payload.semester)
  },
  removeSemester (state, index) {
    Vue.delete(state.semesters, index)
  },
  // {semester: Index of Semester (Number), course: {}}
  addCourse (state, payload) {
    state.semetsers[payload.semester].courses.push(payload.course)
  },
  // {semester: Index of Semester (Number), course: Index of Course (Number)}
  removeCourse (state, payload) {
    state.semesters[payload.semester].courses.splice(payload.course)
  },
  updateName (state, name) {
    state.name = name
  },
  // {semester: Index of Semester (Number), course: []}
  updateCourses (state, payload) {
    state.semesters[payload.semester].courses = payload.course
  },
  cleanPlan (state) {
    state.semesters = []
  }
}
