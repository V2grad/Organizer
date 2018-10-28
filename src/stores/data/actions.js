import Unify from '@/utils/unify';
import axios from 'axios'

// Be aware of the reference and clone issue!

export default {
  checkData({
    commit,
    state
  }) {
    if (state.data.length === 0 ||
      state.pullAt === null ||
      (Math.floor(Date.now() / 1000) - state.pullAt) >= Unify.CACHE_EXPIRED) {
      commit('updateLoading', true)
      // Fetch data
      let format = []
      axios.get('https://nightly.yacs.io/api/v6/courses.json?include=latest_listing').then(response => {
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
        commit('updateLoading', false)
      })
    }
  }
}
