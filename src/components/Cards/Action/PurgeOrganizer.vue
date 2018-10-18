<template>
  <b-card
    header="!@#$%^&*(??????)(*&^%$#@!@"
    header-tag="header"
    title="Purge Oranizer">
    <p class="card-text">
      Sometimes the APP may not work properly as the data store in your browser is somewhat broken. Try resetting everything to get back to the right track.
    </p>
    <b-button
      v-b-modal="'_ActionPurgeOrganizer'"
      variant="danger"
      size="lg">Purge Organizer</b-button>
    <purge-organizer-modal/>
  </b-card>
</template>

<script>
import PurgeOrganizerModal from '@/components/Modals/PurgeOrganizerModal'

export default {
  name: 'PurgeOrganizer',
  components: {
    PurgeOrganizerModal
  }
}
</script>
