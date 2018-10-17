<template>
  <b-modal :id="'profile ' + this.profileID"
           header-text-variant="danger"
           title="Remove Profile"
           @ok="removeProfile"
           lazy>
           Are you sure you want to remove this profile?
  </b-modal>
</template>

<script>
export default {
  name: 'RemoveProfileModal',
  props: {
    profileID: {
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
