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
    state.semesters[payload.semester].courses.push(payload.course)
  },
  // {semester: Index of Semester (Number), course: Index of Course (Number)}
  removeCourse (state, payload) {
    state.semesters[payload.semester].courses.splice(payload.course)
  },
  updateName (state, name) {
    state.name = name
  },
  // {semester: Index of Semester (Number), courses: []}
  updateCourses (state, payload) {
    state.semesters[payload.semester].courses = payload.courses
  },
  // @TODO, find a way to set the state
  updatePlan (state, plan) {
    state.semesters = plan.semesters
    state.transferred = plan.transferred
    state.name = plan.name
  },
  cleanPlan (state) {
    state.semesters = []
    state.transferred = []
  },
  resetPlan (state) {
    state.name = 'Unnamed Plan'
    state.semesters = []
    state.transferred = []
  }
}
