<template>
    <b-card title="Export Your Plan">
    <p class="card-text">
      Give your plan a name and Copy the link below and send to your friends or advisors so they can see the plan with a click.
       <b-form-input v-model="name"
                  type="text"
                  placeholder="Give this Plan a name ?"></b-form-input>
    </p>
    <pre v-clipboard:copy="encodedURI"><p><code>{{ encodedURI }}</code></p></pre>
    <b-btn variant="primary"
      v-clipboard:copy="encodedURI">Copy!</b-btn>
  </b-card>
</template>

<script>
import { deflateAndEncode } from '../compress'

export default {
  name: 'ExportPlan',
  computed: {
    encodedURI () {
      return 'https://' + window.location.hostname  + this.$router.resolve({name:'ImportPlan', params: {json: deflateAndEncode(this.$store.state)}}).href
    },
    name: {
      get () {
        return this.$store.state.name
      },
      set (value) {
        this.$store.commit('updateName', {name: value})
      }
    }
  }
}
</script>
