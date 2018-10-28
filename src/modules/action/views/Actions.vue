<template>
  <b-card-group deck>
    <reset-plan/>
    <purge-cache/>
    <purge-organizer/>
  </b-card-group>
</template>

<script>
import PurgeCache from '../components/Cards/PurgeCache'
import ResetPlan from '../components/Cards/ResetPlan'
import PurgeOrganizer from '../components/Cards/PurgeOrganizer'

export default {
  name: 'Actions',
  components: {
    ResetPlan,
    PurgeOrganizer,
    PurgeCache
  }
}
</script>
