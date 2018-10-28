<template>
  <b-modal
    :id="'profile clone ' + profileID"
    title="Clone Profile"
    lazy
    @ok="cloneProfile()">
    Want to change a name before clone?
    <b-form-input
      v-model="name"
      :maxlength="this.$unify.PLAN_MAXLENGTH"
      class="mt-2"
      type="text"
      placeholder="Plan Name"/>
  </b-modal>
</template>

<script>
export default {
  name: 'CloneProfileModal',
  props: {
    profileID: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      name: ''
    }
  },
  mounted: function () {
    this.name = this.$store.state.profile.profiles[this.profileID].name
  },
  methods: {
    cloneProfile: function () {
      this.$store.dispatch('cloneProfile', {name: this.name, profileID: this.profileID}).then((result) => {
        if (result) {
          this.$toasted.success('Profile cloned!')
        }else{
          this.$toasted.error('An error occur when cloning, please refresh the page and retry.')
        }
      })
    }
  }
}
</script>
