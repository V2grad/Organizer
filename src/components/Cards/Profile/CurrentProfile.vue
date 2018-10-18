<template>
  <b-card
    header="Current Editing Profile"
    footer-tag="footer">
    <b-list-group>
      <current-editing-profile-item
        :profile-name="currentProfile.name"
        :profile-i-d="currentProfileID"/>
    </b-list-group>
    <em slot="footer">
      <b-button-group>
        <b-btn variant="primary" @click="createNewProfile">Add new Profile and Load</b-btn>
        <b-btn variant="dark" v-b-modal="'_ProfileSnapshot'">Take a Snapshot on current plan</b-btn>
      </b-button-group>
    </em>
    <snapshot-profile-modal/>
  </b-card>
</template>

<script>
import CurrentEditingProfileItem from '@/components/Items/CurrentEditingProfileItem'
import SnapshotProfileModal from '@/components/Modals/Profile/SnapshotProfileModal'

export default {
  name: 'CurrentProfile',
  components: {
    CurrentEditingProfileItem,
    SnapshotProfileModal
  },
  computed: {
    currentProfile () {
      return this.$store.getters.currentProfile
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

