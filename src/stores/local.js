import Unify from '@/utils/unify';

export default {
  state: {
    shortenedURL: '',
    loading: false,
    version: Unify.VERSION
  },
  mutations: {
    updateShortenedURL(state, URL) {
      state.shortenedURL = URL
    },
    updateLoading(state, status) {
      state.loading = status
    }
  }
}
