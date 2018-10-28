<template>
  <b-modal
    :id="'profile reload ' + profileID"
    header-text-variant="danger"
    title="Reload Profile"
    lazy
    @ok="reloadProfile">
    Are you sure you want to reload your stored profile into current plan? <strong>(All changes you made will lose!)</strong>
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
