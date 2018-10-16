import _ from 'lodash'

export default {
  actions: {
    addSemester ({ state, commit, getters }, semester) {
      // If added in the correct order, everything should work.
      // small to large, spring to fall
      let year = getters.getSemesterTree[semester.year]
      let years = _.keys(getters.getSemesterTree)
      let result = -1
      // First, guess that the year about to add has already exist. Save time before search
      if (year !== undefined) {
        let arrIndex = _.keys(_.invert(year))
        // It is within an existing year, identify the period
        switch (semester.period) {
          case 'spring':
            result = _.head(arrIndex)
            break
          case 'fall':
            result = _.last(arrIndex) + 1
            break
          case 'summer':
          default:
            result = _.last(arrIndex)
            break
        }
      } else {
        // The year is not exist, just add it in
        let index = _.sortedIndex(years, semester.year)
        if (index === 0) {
          // The oldest one
          result = 0
        } else if (index === years.length) {
          // The newest one
          result = state.semesters.length
        } else {
          // Somewhere in the middle
          result = _.max(_.keys(_.invert(getters.getSemesterTree[years[index - 1]]))) + 1
        }
      }

      commit('addSemester', { semester: { ...semester, courses: [] }, index: result })
    },
    removeSemester ({ commit }, semester) {
      // Although remove will only happened to the last one, required semester to delect specific semester
      commit('removeSemester', semester)
    }
  }
}
