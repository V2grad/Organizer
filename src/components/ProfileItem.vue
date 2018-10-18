<template>
  <div>
    <b-list-group-item
      v-b-popover.hover.top="profileID"
      :variant="currentEditing ? 'success' : ''"
      class="list-complete-item d-flex justify-content-between align-items-center"
      title="Profile Reference ID">
      {{ profileName }}
      <b-button-group v-if="!currentEditing">
        <b-btn
          class="btn-outline-secondary"
          variant="secondary"
          @click="switchProfile">
          Load
        </b-btn>
        <b-btn
          v-b-modal="'profile ' + profileID"
          class="btn-outline-danger"
          variant="danger">
          Remove
        </b-btn>
      </b-button-group>
      <b-btn
        v-else
        variant="success"
        @click="saveCurrentProfile">
        Save
      </b-btn>
    </b-list-group-item>
    <remove-profile-modal :profile-id="profileID"/>
  </div>
</template>

<script>
import RemoveProfileModal from '@/components/Modals/RemoveProfileModal'

export default {
  name: 'ProfileItem',
  components: {
    RemoveProfileModal
  },
  props: {
    profileName: {
      type: String,
      required: true
    },
    profileID: {
      type: String,
      required: true
    }
  },
  computed: {
    currentEditing () {
      return this.$store.state.profile.currentProfileID === this.profileID
    }
  },
  methods: {
    saveCurrentProfile () {
      this.$store.dispatch('saveCurrentProfile')
      this.$toasted.success('Save current plan into profile successfully.')
    },
    switchProfile () {
      this.$store.dispatch('switchProfile', this.profileID).then((c) => {
        if (c) {
          this.$toasted.success('Profile Switch Successfully!')
        } else {
          this.$toasted.error('An error occur when switching profile, please refresh the page.')
        }
      })
    }
  }
}
</script>
