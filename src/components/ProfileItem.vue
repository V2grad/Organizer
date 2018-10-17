<template>
<div>
    <b-list-group-item class="list-complete-item d-flex justify-content-between align-items-center"
                       :variant="currentEditing ? 'success' : ''"
                       v-b-popover.hover.top="profileID"
                       title="Profile Reference ID">
          {{ profileName }}
        <b-button-group v-if="!currentEditing">
          <b-btn class="btn-outline-secondary"
          @click="switchProfile"
          variant="secondary">
          Load
          </b-btn>
          <b-btn class="btn-outline-danger"
          v-b-modal="'profile ' + this.profileID"
          variant="danger">
          Remove
          </b-btn>
        </b-button-group>
        <b-btn v-else
               variant="success"
               @click="saveCurrentProfile">
        Save
        </b-btn>
    </b-list-group-item>
    <remove-profile-modal :profileID="profileID"></remove-profile-modal>
</div>
</template>

<script>
import RemoveProfileModal from '@/components/Modals/RemoveProfileModal'

export default {
  name: 'ProfileItem',
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
  components: {
    RemoveProfileModal
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
