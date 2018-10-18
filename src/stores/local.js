import Unify from '@/utils/unify';

export default {
  state: {
    shortenedURL: '',
    version: Unify.VERSION
  },
  mutations: {
    updateShortenedURL(state, URL) {
      state.shortenedURL = URL
    },

  }
}
