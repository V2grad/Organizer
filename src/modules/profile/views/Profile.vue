<template>
  <div>
    <b-row>
      <b-col>
        <note/>
      </b-col>
      <b-col>
        <current-profile/>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <profiles/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Note from '../components/Cards/Note'
import CurrentProfile from '../components/Cards/CurrentProfile'
import Profiles from '../components/Cards/Profiles'

export default {
  name: 'Profile',
  components: {
    Note,
    CurrentProfile,
    Profiles
  },
  created: function () {
    if (this.$store.state.profile.currentProfileID === null ||
        this.$store.getters.currentProfile === null) {
      // No Valid Plan for now, add default
      this.$store.dispatch('initializeProfile')
    }
  }
}
</script>
