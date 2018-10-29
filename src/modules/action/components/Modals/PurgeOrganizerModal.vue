<template>
  <b-modal
    id="_ActionPurgeOrganizer"
    header-text-variant="danger"
    title="Purge Organizer"
    lazy
    @ok="purgeOrganizer">
    Are you sure you want to purge? <strong>(All data will lose! DO NOT continue if you don't know what you are doing)</strong>
  </b-modal>
</template>

<script>
export default {
  name: 'PurgeOrganizerModal',
  methods: {
    purgeOrganizer: function () {
      this.$unify.PURGE_ORGANIZER()
      window.location.href = this.$router.resolve({name: 'Home'}).href
    }
  }
}
</script>
