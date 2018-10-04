import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

// All `course`s refer to object.
export default new Vuex.Store({
  state: {
    name: 'NULL',
    courses: {}
    // 1: [courses], 2:[courses] ...
  },
  getters: {
    currentSemester: (state) => {
      return _.keys(state.courses).length
    },
    semesterList: (state) => {
      return _.keys(state.courses)
    },
    findCourse: (state) => (course) => {
      // Even though course should appear only once, we collect every possible answers.
      return _.transform(state.courses, (result, value, key) => {
        let res = _.findIndex(value, course)
        if (res !== -1) {
          result.push(res)
        }
      }, [])
    },
    allCourses: (state) => {
      return _.flatten(_.transform(state.courses, (result, value, key) => {

      }, []))
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
      state.courses = _.set(state.courses, payload.semester, [..._.get(state.courses, payload.semester), payload.course])
    },
    removeCourse (state, payload) {
      state.courses = _.set(state.courses, payload.semester, _.remove(_.get(state.courses, payload.semester), (course) => {
        return course.courseTitle === payload.course.courseTitle
      }))
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
