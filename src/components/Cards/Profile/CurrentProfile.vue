<template>
  <b-card
    header="Current Editing Profile"
    footer-tag="footer">
    <b-list-group>
      <profile-item
        :profile-name="currentProfile.name"
        :profile-i-d="currentProfileID"/>
    </b-list-group>
    <em slot="footer">
      <b-btn @click="createNewProfile">Add new Profile and Load</b-btn>
    </em>
  </b-card>
</template>

<script>
import ProfileItem from '@/components/Items/ProfileItem'

export default {
  name: 'CurrentProfile',
  components: {
    ProfileItem
  },
  computed: {
    currentProfile () {
      return this.$store.state.profile.profiles[this.currentProfileID]
    },
    currentProfileID () {
      return this.$store.state.profile.currentProfileID
    }
  },
  methods: {
     createNewProfile: function () {
      this.$store.dispatch('createNewProfile')
      this.$toasted.success('New Profile Created.')
    }
  }
}
</script>

