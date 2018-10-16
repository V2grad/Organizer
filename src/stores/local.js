import { VERSION } from './const'

export default {
  state: {
    shortenedURL: '',
    currentProfileID: 0,
    version: VERSION
  },
  mutations: {
    updateShortenedURL (state, URL) {
      state.shortenedURL = URL
    }
  }
}
