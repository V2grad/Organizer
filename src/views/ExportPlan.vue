<template>
    <b-card title="Export Your Plan">
    <p class="card-text">
      Give your plan a name and Copy the link below and send to your friends or advisors so they can see the plan with a click.
       <b-form-input
                  v-model="name"
                  class="mt-3"
                  type="text"
                  placeholder="Give this Plan a name ?"
                  maxlength="50">
        </b-form-input>
    </p>
    <hr/>

    <b-form-textarea :rows="3"
                     :max-rows="6"
                     plaintext
                     :value="displayURL"></b-form-textarea>
    <p><b-form-checkbox v-model="checked" :disabled="loading">Generate Shorten Link (From TinyURL)</b-form-checkbox></p>
    <b-btn size="lg" variant="primary"
      v-clipboard:copy="displayURL"
      v-clipboard:success="copySuccess"
      v-clipboard:error="copyError">Copy the URL</b-btn>
    </b-card>
</template>

<script>
import { deflateAndEncode } from '../compress'

export default {
  name: 'ExportPlan',
  data () {
    return {
      shortenedURL: '',
      checked: false,
      loading: false
    }
  },
  computed: {
    encodedURL () {
      return 'https://' + window.location.hostname + this.$router.resolve({ name: 'ImportPlan', params: { json: deflateAndEncode(this.$store.state) } }).href
    },
    displayURL () {
      return this.checked && !this.loading ? this.shortenedURL === '' ? this.encodedURL : this.shortenedURL : this.encodedURL
    },
    name: {
      get () {
        return this.$store.state.name
      },
      set (value) {
        this.$store.commit('updateName', { name: value })
      }
    }
  },
  watch: {
    encodedURL: function () {
      this.shortenedURL = ''
      this.checked = false
    },
    checked: function (newValue, oldValue) {
      if (this.shortenedURL === '' && oldValue === false) {
        this.fetchTinyURL()
      }
    }
  },
  methods:
  {
    copySuccess () {
      this.$toasted.success('Successfully copy the link', { duration: 3000 })
    },
    copyError () {
      this.$toasted.success('Error on copy, please copy manually.', { duration: 3000 })
    },
    fetchTinyURL () {
      // Don't use params! tinyurl don't not recognize that.
      this.loading = true
      this.$toasted.info('Generating Shorten URL...', { duration: 3000 })
      this.$axios.get('https://cors-anywhere.herokuapp.com/http://tinyurl.com/api-create.php?url=' + this.encodedURL)
        .then((response) => {
          this.shortenedURL = response.data
        })
        .catch((error) => {
          this.$toasted.error('Error while fetching the short link, please try again. ' + error, { duration: 3000 })
          this.checked = false
        }).finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
