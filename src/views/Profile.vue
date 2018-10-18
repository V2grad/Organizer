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
import Note from '@/components/Cards/Profile/Note'
import CurrentProfile from '@/components/Cards/Profile/CurrentProfile'
import Profiles from '@/components/Cards/Profile/Profiles'

export default {
  name: 'Profile',
  components: {
    Note,
    CurrentProfile,
    Profiles
  },
  created: function () {
    if (this.$store.state.profile.currentProfileID === null ||
        this.$store.state.profile.profiles[this.$store.state.profile.currentProfileID] === null) {
      // No Valid Plan for now, add default
      this.$store.dispatch('initializeProfile')
    }
  }
}
</script>
