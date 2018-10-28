<template>
  <b-card
    header="Mess up?"
    header-tag="header"
    title="Reset Current Plan">
    <p class="card-text">
      You may want a clean template and start again.
    </p>
    <div slot="footer">
      <b-button
        v-b-modal="'_ActionResetPlan'"
        variant="danger"
        size="lg">Reset My Plan</b-button>
    </div>
    <reset-plan-modal/>
  </b-card>
</template>

<script>
import ResetPlanModal from '../Modals/ResetPlanModal'

export default {
  name: 'ResetPlan',
  components: {
    ResetPlanModal
  }
}
</script>
