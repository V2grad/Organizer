<template>
  <b-modal
    :id="'profile remove' + profileID"
    header-text-variant="danger"
    title="Remove Profile"
    lazy
    @ok="removeProfile">
    Are you sure you want to remove this profile?
  </b-modal>
</template>

<script>
export default {
  name: 'RemoveProfileModal',
  props: {
    profileID: {
      type: String,
      required: true
    }
  },
  methods: {
    removeProfile: function () {
      this.$store.commit('removeProfile', this.profileID)
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Profile removed.')
    }
  }
}
</script>
