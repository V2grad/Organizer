import Unify from '@/utils/unify';
import axios from 'axios'

// Be aware of the reference and clone issue!

export default {
  checkData({
    dispatch,
    state
  }) {
    if (state.data.length === 0 ||
      state.pullAt === null ||
      (Math.floor(Date.now() / 1000) - state.pullAt) >= Unify.CACHE_EXPIRED) {
      dispatch('pullingData')
    }
  },
  pullingData({
    commit
  }) {
    commit('updateLoading', true)
    // Fetch data
    let format = []
    if (Unify.API_ENDPOINT !== null) {
      axios.get(Unify.API_ENDPOINT).then(response => {
        let data = response.data.courses
        data.forEach((c) => {
          let list = c.latest_listing
          format.push({
            CourseTitle: `${c.subject_shortname}-${c.shortname}`,
            CourseName: list.longname,
            CreditHours: list.max_credits === list.min_credits ? list.max_credits.toString() : `${list.min_credits}-${list.max_credits}`,
            uuid: c.uuid
          })
        })
      }).then(() => {
        commit('updateData', format)
        commit('updateTimestamp')
        commit('updateDataSource', Unify.API_SOURCE)
        commit('updateLoading', false)
      }).catch((error) => {
        console.log('Error while requesting API')
        console.log(error)
        commit('updateError', true)
      })
    } else {
      console.log('Note: you are using the default data set. Please check your API endpoint setting if this is not desired behavior.')
      // Import dummy data instead.
      // Why dummy? Google: dummy system.
      import( /* webpackChunkName: "dummy" */ '../dummy').then((dummy) => {
        commit('updateDataSource', 'dummy')
        commit('updateData', dummy)
        commit('updateTimestamp')
        commit('updateLoading', false)
      })
    }
  }
}
