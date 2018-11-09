import _ from 'lodash'

export default {
  renderedSemesters: (state, getters) => (plan) => {
    // So we pre-rendered all courses before feed into the UI.
    // Find a way to manipulate in different way?
    let rendered = plan ? _.cloneDeep(plan.semesters) : _.cloneDeep(state.semesters)
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
  renderedTransferred: (state, getters) => (plan) => {
    let rendered = plan ? _.cloneDeep(plan.transferred) : _.cloneDeep(state.transferred)
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
