<template>
  <div>
    <b-list-group-item
      v-b-popover.hover.top="profileID"
      class="list-complete-item d-flex justify-content-between align-items-center"
      title="Profile Reference ID">
      {{ profileName }}
      <b-button-group>
        <b-btn
          variant="secondary"
          @click="switchProfile">
          Load
        </b-btn>
        <b-btn
          v-b-modal="'profile clone ' + profileID"
          variant="dark"
        >
          Clone
        </b-btn>
        <b-btn
          v-b-modal="'profile remove' + profileID"
          variant="outline-danger">
          Remove
        </b-btn>
      </b-button-group>
    </b-list-group-item>
    <remove-profile-modal :profile-i-d="profileID"/>
    <clone-profile-modal :profile-i-d="profileID"/>
  </div>
</template>

<script>
import RemoveProfileModal from '../Modals/RemoveProfileModal'
import CloneProfileModal from '../Modals/CloneProfileModal'

export default {
  name: 'ProfileItem',
  components: {
    RemoveProfileModal,
    CloneProfileModal
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
