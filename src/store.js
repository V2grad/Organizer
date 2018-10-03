import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'NULL',
    semester: 0,
    courses: {}
    // 1: [courses], 2:[courses] ...
  },
  getters: {
  },
  mutations: {
    addSemester (state, payload) {
      state.courses[state.semester + 1] = []
    },
    removeSemester (state, payload) {
      delete state.courses[payload.semester]
    },
    addCourse (state, payload) {
      state.courses[payload.semester].push(payload.courseTitle)
    },
    removeCourse (state, payload) {
      state.courses[payload.semester].filter(course => course !== payload.courseTitle)
    }
  },
  actions: {
  },
  strict: process.env.NODE_ENV !== 'production'
})
