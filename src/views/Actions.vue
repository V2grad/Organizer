<template>
  <b-card-group deck>
    <reset-plan/>
  </b-card-group>
</template>

<script>
import ResetPlan from '@/components/Cards/Action/ResetPlan'

export default {
  name: 'Actions',
  components: {
    ResetPlan
  }
}
</script>
