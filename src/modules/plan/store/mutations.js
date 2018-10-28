import Vue from 'vue'

export default {
  // {semester: {}, index: Number}
  addSemester(state, payload) {
    state.semesters.splice(payload.index, 0, payload.semester)
  },
  removeSemester(state, index) {
    Vue.delete(state.semesters, index)
  },
  // {semester: Index of Semester (Number), course: {}}
  addCourse(state, payload) {
    state.semesters[payload.semester].courses.push(payload.course)
  },
  // {semester: Index of Semester (Number), course: Index of Course (Number)}
  removeCourse(state, payload) {
    state.semesters[payload.semester].courses.splice(payload.course, 1)
  },
  // {semester: Index of Semester (Number), courses: []}
  updateCourses(state, payload) {
    state.semesters[payload.semester].courses = payload.courses
  },
  addTransferredCourse(state, course) {
    state.transferred.push(course)
  },
  removeTransferredCourse(state, index) {
    state.transferred.splice(index, 1)
  },
  updateTransferredCourses(state, courses) {
    state.transferred = courses
  },
  cleanTransferredCourse(state) {
    state.transferred = []
  },
  updateName(state, name) {
    state.name = name
  },
  // @TODO, find a way to set the state
  updatePlan(state, plan) {
    state.semesters = plan.semesters
    state.transferred = plan.transferred
    state.name = plan.name
  },
  cleanPlan(state) {
    state.semesters = []
    state.transferred = []
  },
  resetPlan(state) {
    state.name = 'Unnamed Plan'
    state.semesters = []
    state.transferred = []
  }
}
