export default {
  state: {
    shortenedURL: '',
    currentProfileID: 0
  },
  mutations: {
    updateShortenedURL (state, URL) {
      state.shortenedURL = URL
    }
  }
}
