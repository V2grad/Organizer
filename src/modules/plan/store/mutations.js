import Unify from '@/utils/unify'
// https://github.com/vuejs/vuex/issues/1118#issuecomment-418176287
import initialState from './state'
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
    if (payload.semester === Unify.TRANSFERRED_SEMESTER_INDEX) {
      state.transferred.push(payload.course)
    } else {
      state.semesters[payload.semester].courses.push(payload.course)
    }
  },
  // {semester: Index of Semester (Number), course: Index of Course (Number)}
  removeCourse(state, payload) {
    if (payload.semester === Unify.TRANSFERRED_SEMESTER_INDEX) {
      state.transferred.splice(payload.course, 1)
    } else {
      state.semesters[payload.semester].courses.splice(payload.course, 1)
    }
  },
  // {semesterIndex: Index of Semester, courseIndex: Index of Course, course: {}}
  replaceCourse(state, payload) {
    if (payload.semesterIndex === Unify.TRANSFERRED_SEMESTER_INDEX) {
      Vue.set(state.transferred, payload.courseIndex, payload.course)
    } else {
      Vue.set(state.semesters[payload.semesterIndex].courses, payload.courseIndex, payload.course)
    }
  },
  // {semester: Index of Semester (Number), courses: []}
  updateCourses(state, payload) {
    if (payload.semester === Unify.TRANSFERRED_SEMESTER_INDEX) {
      state.transferred = payload.courses
    } else {
      state.semesters[payload.semester].courses = payload.courses
    }
  },
  cleanTransferredCourse(state) {
    state.transferred = []
  },
  updateName(state, name) {
    state.name = name
  },
  updateNote(state, note) {
    state.note = note
  },
  // See comments on the top
  updatePlan(state, plan) {
    Object.keys(state).forEach(key => {
      state[key] = plan[key]
    })
  },
  resetPlan(state) {
    Object.keys(state).forEach(key => {
      state[key] = initialState[key]
    })
  }
}
