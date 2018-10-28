<template>
  <b-modal
    id="_ActionPurgeCache"
    header-text-variant="danger"
    title="Purge Course Data"
    lazy
    @ok="purgeCache">
    Are you sure you want to purge cache?
  </b-modal>
</template>

<script>
export default {
  name: 'PurgeCacheModal',
  methods: {
    purgeCache: function () {
      this.$store.commit('cleanData')
    }
  }
}
</script>
