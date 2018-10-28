<template>
  <b-modal
    v-model="modalShow"
    title="Loading..."
    no-close-on-backdrop
    no-close-on-esc
    hide-footer
    hide-header-close
    lazy>
    We are fetching data and checking data integraty...
    <p><strong>Refresh if this process takes too much time</strong></p>
    <loading-progress-bar
      :loading="modalShow"
      :error="errorShow"/>
    <loading-error-alert
      v-if="errorShow"
      class="mt-3"/>
  </b-modal>
</template>

<script>
import LoadingProgressBar from '../Items/LoadingProgressBar'
import LoadingErrorAlert from '../Alerts/LoadingErrorAlert'

export default {
  name: 'LoadingModal',
  components: {
    LoadingProgressBar,
    LoadingErrorAlert
  },
  computed: {
    modalShow: {
      get(){
        return this.$store.state.local.loading
      },
      set(){
        // Do nothing
      }
    },
    errorShow: function () {
      return this.$store.state.local.error
    }
  }
}
</script>
