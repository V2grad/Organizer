<template>
  <b-card
    header="Current Editing Plan"
    footer-tag="footer">
    <b-list-group>
      <current-editing-profile-item
        :profile-name="currentProfile.name"
        :profile-i-d="currentProfileID"/>
    </b-list-group>
    <em slot="footer">
      <b-button-group>
        <b-btn
          variant="primary"
          @click="createNewPlan">Add new Profile and Load</b-btn>
        <b-btn
          v-b-modal="'_ProfileSnapshot'"
          variant="dark">Take a Snapshot</b-btn>
      </b-button-group>
    </em>
    <snapshot-profile-modal/>
  </b-card>
</template>

<script>
import CurrentEditingProfileItem from '../Items/CurrentEditingProfileItem'
import SnapshotProfileModal from '../Modals/SnapshotProfileModal'

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
     createNewPlan: function () {
      this.$store.dispatch('createNewProfile')
      this.$toasted.success('New Profile Created.')
    }
  }
}
</script>

