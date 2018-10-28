<template>
  <b-card
    header="Profiles"
    footer-tag="footer">
    <b-list-group>
      <profile-item
        v-for="(profile, key) in this.$store.state.profile.profiles"
        v-if="key !== currentProfileID"
        :key="key"
        :profile-name="profile.name"
        :profile-i-d="key"/>
    </b-list-group>
    <em slot="footer">Total Profile Number (Including Current Editing Plan): {{ itemNumber }}</em>
  </b-card>
</template>

<script>
import ProfileItem from '../Items/ProfileItem'

export default {
  name: 'Profiles',
  components: {
    ProfileItem
  },
  computed: {
    itemNumber () {
      return this.$store.getters.profileNumber
    },
    currentProfileID () {
      return this.$store.state.profile.currentProfileID
    }
}
}
</script>
