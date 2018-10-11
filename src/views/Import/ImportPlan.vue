<template>
<div>
    <b-card v-if="decodedObject.status" title="Import a Plan">
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
  <b-card v-else bg-variant="danger" text-variant="white" title="An Error Occur">
    <p class="card-text">
      Organizer is not able to process this link, please try again later or check if some parts of the link are missing.
    </p>
    <pre>{{ decodedObject.message.stack ? decodedObject.message.stack.split('\n')[0] : 'Error: ' + decodedObject.message}}</pre>
    <b-button :to="{'name': 'home'}" variant="primary">Back to Home Page</b-button>
  </b-card>
</div>
</template>

<script>
import { decodeAndInflate } from '@/utils/compress'

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
      return this.decodedObject.obj.name
    }
  },
  methods: {
    writeData: function () {
      this.$store.commit('updateName', { name: this.planName })
      this.$store.commit('updateCourses', this.decodedObject.obj.courses)
      this.$router.push({ name: 'plan' })
    }
  }
}
</script>
