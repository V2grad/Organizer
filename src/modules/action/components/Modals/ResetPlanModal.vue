<template>
  <b-modal
    id="_ActionResetPlan"
    header-text-variant="danger"
    title="Reset Plan"
    lazy
    @ok="resetPlan">
    Are you sure you want to reset your plan?
  </b-modal>
</template>

<script>
export default {
  name: 'ResetPlanModal',
  methods: {
    resetPlan: function () {
      this.$store.commit('resetPlan')
      this.$router.push({ 'name': 'Plan' })
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Plan reset successfully.')
    }
  }
}
</script>
