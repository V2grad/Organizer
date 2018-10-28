<template>
  <b-card-group deck>
    <reset-plan/>
    <purge-organizer/>
  </b-card-group>
</template>

<script>
import ResetPlan from '../components/Cards/ResetPlan'
import PurgeOrganizer from '../components/Cards/PurgeOrganizer'

export default {
  name: 'Actions',
  components: {
    ResetPlan,
    PurgeOrganizer
  }
}
</script>
