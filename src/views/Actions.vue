<template>
  <b-card-group deck>
    <reset-plan/>
    <purge-organizer/>
  </b-card-group>
</template>

<script>
import ResetPlan from '@/components/Cards/Action/ResetPlan'
import PurgeOrganizer from '@/components/Cards/Action/PurgeOrganizer'

export default {
  name: 'Actions',
  components: {
    ResetPlan,
    PurgeOrganizer
  }
}
</script>
