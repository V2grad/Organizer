<template>
<div>
  <b-row>
      <b-col>
        <b-card header="Import a Plan">
        <p class="card-text">
          To import a plan, click on the link that generated from other's or by yourself and Organizer will handle that for you.
        </p>
      </b-card>
      </b-col>
  </b-row>
  <b-row class="mt-4">
    <b-col>
      <b-card header="Profiles"
              class="no-body">
        <b-list-group flush>
          <profile-item v-for="(profile, key) in this.$store.state.profile.profiles" 
                   :key="key"
                   v-bind:ProfileName="profile.name"
                   v-bind:ProfileID="key">
          </profile-item>
        </b-list-group>
      </b-card>
    </b-col>
  </b-row>
</div>
</template>

<script>
import ProfileItem from '@/components/Profile'
import { id } from '@/utils/id'

export default {
  name: 'Profile',
  mounted: function () {  
      if (this.$store.state.profile.currentProfileID === null) {
          // No Plan for now, add default
          let pid = id()
          this.$store.commit('importProfile', { id: pid, profile: this.$store.state.plan })
          this.$store.commit('assignCurrentProfileID', pid)
      }
  },
  components: {
    ProfileItem
  },
  computed: {
  },
}
</script>
