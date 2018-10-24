<template>
  <b-card
    header="Want to share your wonderful plan with others?"
    header-tag="header"
    footer-tag="footer"
    title="Export Your Plan">
    <p class="card-text">
      Give your plan a name, copy the link below, and send to anyone who you want to share you plan with.
      <b-form-input
        v-model="name"
        :maxlength="this.$unify.PLAN_MAXLENGTH"
        class="mt-3"
        type="text"
        placeholder="Give this Plan a name ?"/>
    </p>
    <hr >

    <b-form-textarea
      :rows="3"
      :max-rows="6"
      :value="displayURL"
      plaintext/>
    <p>
      <b-form-checkbox
        v-model="checked"
        :disabled="loading">
        Generate Shorten Link (From TinyURL)
      </b-form-checkbox>
    </p>
    <em
      slot="footer"
      class="w-100">
      <b-btn
        v-clipboard:copy="displayURL"
        v-clipboard:success="copySuccess"
        v-clipboard:error="copyError"
        size="lg"
        variant="primary">Copy the URL
      </b-btn>
    </em>
  </b-card>
</template>

<script>
import { deflateAndEncode } from '@/utils/compress'

export default {
  name: 'ExportCard',
  components: {},
  data () {
    return {
      shortenedURL: '',
      checked: false,
      loading: false
    }
  },
  computed: {
    encodedURL () {
      return (
        'https://' +
        window.location.hostname +
        this.$router.resolve({
          name: 'ImportPlan',
          params: {
            json: deflateAndEncode({
              ...this.$store.state.plan,
              version: this.$store.state.local.version
            })
          }
        }).href
      )
    },
    displayURL () {
      return this.checked && !this.loading
        ? this.shortenedURL === ''
          ? this.encodedURL
          : this.shortenedURL
        : this.encodedURL
    },
    name: {
      get () {
        return this.$store.state.plan.name
      },
      set (value) {
        this.$store.commit('updateName', value)
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
    },
    shortenedURL: function (newValue) {
      this.$store.commit('updateShortenedURL', newValue)
    }
  },
  methods: {
    copySuccess () {
      this.$toasted.success('Successfully copy the link')
    },
    copyError () {
      this.$toasted.success('Error on copy, please copy manually.')
    },
    fetchTinyURL () {
      // Don't use params! tinyurl don't not recognize that. :(
      this.loading = true
      this.$toasted.info('Generating Shorten URL...')
      this.$axios
        .get('/api/shorturl/api-create.php?url=' + this.encodedURL)
        .then(response => {
          this.shortenedURL = response.data
          this.$toasted.success('Link generate successfully.')
        })
        .catch(error => {
          this.$toasted.error(
            'Error while fetching the short link, please try again. ' + error,)
          this.checked = false
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
