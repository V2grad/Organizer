import { VERSION } from './const'

export default {
  state: {
    shortenedURL: '',
    version: VERSION
  },
  mutations: {
    updateShortenedURL (state, URL) {
      state.shortenedURL = URL
    }
  }
}
