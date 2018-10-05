<template>
    <b-card title="Import a Plan">
    <p class="card-text">
      You are about to import a new plan from <strong>{{ planName }}</strong>.
    </p>
    <p class="card-text">
      Are you sure you want to continue? (will override your current data)
    </p>
    <em slot="footer">
    <b-button-group size="lg">
        <b-btn v-on:click="writeData" variant="success">Yes</b-btn>
        <b-btn :to="{name: 'home'}" variant="danger">No!!!!!</b-btn>
    </b-button-group>
    </em>
  </b-card>
</template>

<script>
import { decodeAndInflate } from '../compress'

export default {
  name: 'ExportPlan',
  computed: {
    encodedData () {
      return this.$route.params.json
    },
    decodedObject () {
      return decodeAndInflate(this.encodedData)
    },
    planName () {
      return this.decodedObject.name
    }
  },
  methods: {
    writeData: function () {
      this.$store.commit('updateName', { name: this.planName })
      this.$store.commit('updateCourses', this.decodedObject.courses)
      this.$router.push({ name: 'plan' })
    }
  }
}
</script>
