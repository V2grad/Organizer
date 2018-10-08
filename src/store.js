import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import _ from 'lodash'

Vue.use(Vuex)

// All `course`s refer to object.
export default new Vuex.Store({
  state: {
    name: 'Unnamed Plan',
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
        if (_.findIndex(value, course) !== -1) {
          result.push(parseInt(key))
        }
      }, [])
    },
    allCourses: (state) => {
      return _.flatten(_.transform(state.courses, (result, value, key) => {
        result.push(value)
      }, []))
    }
  },
  mutations: {
    addSemester (state, currentSemester) {
      let newList = { ...state.courses }
      newList[currentSemester + 1] = []
      state.courses = newList
      // state.courses = _.set(state.courses, currentSemester + 1, [])
    },
    removeSemester (state, semester) {
      state.courses = _.omit(state.courses, semester)
    },
    addCourse (state, payload) {
      state.courses = _.set(state.courses, payload.semester, [..._.get(state.courses, payload.semester), payload.course])
    },
    removeCourse (state, payload) {
      state.courses = _.set(state.courses, payload.semester, _.filter(_.get(state.courses, payload.semester), (course) => {
        return course.CourseTitle !== payload.courseTitle
      }))
    },
    updateSemester (state, payload) {
      state.courses = _.set(state.courses, payload.semester, payload.courses)
    },
    updateName (state, payload) {
      state.name = payload.name
    },
    updateCourses (state, courses) {
      state.courses = courses
    },
    cleanCourses (state) {
      state.courses = {}
    }
  },
  actions: {
    addSemester (context) {
      context.commit('addSemester', context.getters.currentSemester)
    },
    removeSemester ({ commit }, semester) {
      // Although remove will only happened to the last one, required semester to delect specific semester
      commit('removeSemester', semester)
    }
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState()]
})
