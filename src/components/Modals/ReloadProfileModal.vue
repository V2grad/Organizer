<template>
  <b-modal
    id="_ProfileReload"
    header-text-variant="danger"
    title="Reload Profile"
    lazy
    @ok="reloadProfile">
    Are you sure you want to reload your profile into current plan? <strong>(All data you currently editing will lost!)</strong>
  </b-modal>
</template>

<script>
export default {
  name: 'ReloadProfileModal',
  props: {
    profileID: {
      type: String,
      required: true
    }
  },
  methods: {
    reloadProfile: function () {
      this.$store.dispatch('loadProfile', this.profileID)
      this.$toasted.success('Profile reloaded!')
    }
  }
}
</script>
