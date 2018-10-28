<template>
  <b-card-group deck>
    <reset-plan/>
    <purge-cache/>
    <purge-organizer/>
  </b-card-group>
</template>

<script>
import ResetPlan from '@/components/Cards/Action/ResetPlan'
import PurgeOrganizer from '@/components/Cards/Action/PurgeOrganizer'
import PurgeCache from '@/components/Cards/Action/PurgeCache'

export default {
  name: 'Actions',
  components: {
    ResetPlan,
    PurgeOrganizer,
    PurgeCache
  }
}
</script>
