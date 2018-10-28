<template>
  <b-card
    header="!@#$%^&*(??????)(*&^%$#@!@"
    header-tag="header"
    title="Purge Organizer">
    <p class="card-text">
      Sometimes Organizer may not work properly as the data store in your browser is somewhat broken. Try resetting everything to get back to the right track.
    </p>
    <p class="card-text">
      Version: {{ this.$unify.VERSION }}
    </p>
    <b-button
      v-b-modal="'_ActionPurgeOrganizer'"
      variant="danger"
      size="lg">Purge Organizer</b-button>
    <purge-organizer-modal/>
  </b-card>
</template>

<script>
import PurgeOrganizerModal from '../Modals/PurgeOrganizerModal'

export default {
  name: 'PurgeOrganizer',
  components: {
    PurgeOrganizerModal
  }
}
</script>
