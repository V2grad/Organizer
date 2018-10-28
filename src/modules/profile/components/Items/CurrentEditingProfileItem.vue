<template>
  <div>
    <b-list-group-item
      v-b-popover.hover.top="profileID"
      variant="success"
      class="list-complete-item d-flex justify-content-between align-items-center"
      title="Profile Reference ID">
      {{ profileName }}
      <b-button-group>
        <b-btn
          variant="success"
          @click="saveCurrentProfile">
          Save
        </b-btn>
        <b-btn
          v-b-modal="'profile reload ' + profileID"
          variant="secondary"
        >
          Reload
        </b-btn>
      </b-button-group>
    </b-list-group-item>
    <reload-profile-modal :profile-i-d="profileID"/>
  </div>
</template>

<script>
import ReloadProfileModal from '../Modals/ReloadProfileModal'

export default {
  name: 'ProfileItem',
  components: {
    ReloadProfileModal,
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
    }
  }
}
</script>
