<template>
  <b-modal
    id="_ProfileSnapshot"
    title="Snapshot"
    lazy
    @ok="snapshotProfile()">
    Want to change a name before snapshot?
    <b-form-input
      v-model="name"
      :maxlength="this.$unify.PLAN_MAXLENGTH"
      class="mt-2"
      type="text"
      placeholder="Plan Name"/>
  </b-modal>
</template>

<script>
export default {
  name: 'SnapshotProfileModal',
  data () {
    return {
      name: ''
    }
  },
  mounted: function () {
    this.name = this.$store.getters.currentProfile.name
  },
  methods: {
    snapshotProfile: function () {
      this.$store.dispatch('snapshotProfile', this.name)
      this.$toasted.success('Snapshot created!')
    }
  }
}
</script>
