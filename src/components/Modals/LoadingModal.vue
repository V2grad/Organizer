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
    <b-progress
      :value="value"
      :max="max"
      animated/>
  </b-modal>
</template>

<script>
export default {
  name: 'LoadingModal',
  data () {
    return {
      max: 100,
      value: 100,
   }
  },
  computed: {
    modalShow: {
      get(){
        return this.$store.state.local.loading
      },
      set(){
        // Do nothing
      }
    }
  }
}
</script>
