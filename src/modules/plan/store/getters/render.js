import _ from 'lodash'

export default {
  renderedSemesters: (state, getters) => {
    // So we pre-rendered all courses before feed into the UI.
    // Find a way to manipulate in different way?
    let rendered = _.cloneDeep(state.semesters)
    state.semesters.forEach((s, si) => {
      s.courses.forEach((c, ci) => {
        if (!c.custom) {
          rendered[si].courses[ci] = {
            ...c,
            ...getters.detailsByUuid(c.uuid)
          }
        }
      })
    })
    return rendered
  },
  renderedTransferred: (state, getters) => {
    let rendered = _.cloneDeep(state.transferred)
    state.transferred.forEach((c, ci) => {
      if (!c.custom) {
        rendered[ci] = {
          ...c,
          ...getters.detailsByUuid(c.uuid)
        }
      }
    })
    return rendered
  }
}
