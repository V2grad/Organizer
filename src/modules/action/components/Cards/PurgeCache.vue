<template>
  <b-card
    header="Wait, this is OUTDATED!"
    header-tag="header"
    title="Purge Cache">
    <p class="card-text">
      Things are changing but sometimes we are not that up to date. (A week maybe too long?)
    </p>
    <p class="card-text">
      Last Updated at: {{ lastUpdated }} <br>
      Data Source: <span v-html="dataSource"/>
    </p>
    <div slot="footer">
      <b-button
        v-b-modal="'_ActionPurgeCache'"
        variant="danger"
        size="lg">Purge Cache</b-button>
    </div>
    <purge-cache-modal/>
  </b-card>
</template>

<script>
import PurgeCacheModal from '../Modals/PurgeCacheModal'

export default {
  name: 'PurgeCache',
  components: {
    PurgeCacheModal
  },
  computed: {
    lastUpdated () {
      return this.$store.getters.updatedAt
    },
    dataSource () {
      return this.$store.state.data.dataSource
    }
  }
}
</script>
