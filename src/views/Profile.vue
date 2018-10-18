<template>
  <div>
    <b-row>
      <b-col>
        <b-card header="Note">
          <h6>Import Plan</h6>
          <p class="card-text">
            To import a plan, click on the link that generated from other's or by yourself and Organizer will handle that for you.
          </p>
          <h6>Edit Plan Name</h6>
          <p class="card-text">
            You can edit current plan name at Export Tab, or at the time you import your plan.
          </p>
        </b-card>
      </b-col>
      <b-col>
        <b-card 
          header="Current Editing Profile"
          footer-tag="footer">
          <b-list-group>
            <profile-item 
              :profile-name="currentProfile.name"
              :profile-id="currentProfileID"/>
          </b-list-group>
          <em slot="footer">
            <b-btn @click="createNewProfile">Add new Profile and Load</b-btn>
          </em>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <b-card 
          header="Profiles"
          footer-tag="footer">
          <b-list-group>
            <profile-item 
              v-for="(profile, key) in this.$store.state.profile.profiles"
              :key="key"
              :profile-name="profile.name"
              :profile-id="key"/>
          </b-list-group>
          <em slot="footer">Total profile number: {{ itemNumber }} </em>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ProfileItem from '@/components/ProfileItem'

export default {
  name: 'Profile',
  components: {
    ProfileItem
  },
  computed: {
    itemNumber () {
      return this.$store.getters.profileNumber
    },
    currentProfile () {
      return this.$store.state.profile.profiles[this.currentProfileID]
    },
    currentProfileID () {
      return this.$store.state.profile.currentProfileID
    }
  },
  created: function () {
    if (this.$store.state.profile.currentProfileID === null ||
        this.$store.state.profile.profiles[this.$store.state.profile.currentProfileID] === null) {
      // No Valid Plan for now, add default
      this.$store.dispatch('initializeProfile')
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
