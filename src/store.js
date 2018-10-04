import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'NULL',
    courses: {}
    // 1: [courses], 2:[courses] ...
  },
  getters: {
    currentSemester: (state) => {
      return Object.keys(state.courses).length
    }
  },
  mutations: {
    addSemester (state, currentSemester) {
      let newList = { ...state.courses }
      newList[currentSemester + 1] = []
      state.courses = newList
    },
    removeSemester (state, semester) {
      state.courses = _.omit(state.courses, semester)
    },
    addCourse (state, payload) {
      state.courses[payload.semester].push(payload.courseTitle)
    },
    removeCourse (state, payload) {
      state.courses[payload.semester].filter(course => course !== payload.courseTitle)
    }
  },
  actions: {
    addSemester (context) {
      context.commit('addSemester', context.getters.currentSemester)
    },
    removeSemester ({ commit, state }, semester) {
      // Although remove will only happened to the last one, required semester to delect specific semester
      commit('removeSemester', semester)
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
