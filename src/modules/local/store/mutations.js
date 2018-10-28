export default {
  updateShortenedURL(state, URL) {
    state.shortenedURL = URL
  },
  updateLoading(state, status) {
    state.loading = status
  },
  updateError(state, status) {
    state.error = status
  }
}
