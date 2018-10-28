<template>
  <div>
    <b-card
      v-if="decodedObject.status"
      title="Import a Plan">
      <p class="card-text">
        You are about to import a new plan from <strong>{{ planName }}</strong>. You may change the name before import.
      </p>
      <b-alert
        v-if="!fitCurrentAppVersion"
        variant="danger"
        show>
        This link is generated with different schemas. You may encounter compatibility issue if you continue importing this plan.
      </b-alert>
      <b-form-input
        v-model="name"
        :maxlength="this.$unify.PLAN_MAXLENGTH"
        class="mt-3 mb-3"
        type="text"
        placeholder="Give this Plan a name ?"/>
      <p class="card-text">
        Are you sure you want to continue? (Your data will not be override)
      </p>
      <em slot="footer">
        <b-button-group size="lg">
          <b-btn
            variant="success"
            @click="writeData">Yes</b-btn>
          <b-btn
            :to="{name: 'Home'}"
            variant="danger">No</b-btn>
        </b-button-group>
      </em>
    </b-card>
    <b-card
      v-else
      bg-variant="danger"
      text-variant="white"
      title="An Error Occur">
      <p class="card-text">
        Organizer is not able to process this link, please try again later or check if some parts of the link are missing.
      </p>
      <pre>{{ decodedObject.message.stack ? decodedObject.message.stack.split('\n')[0] : 'Error: ' + decodedObject.message }}</pre>
      <b-button
        :to="{'name': 'Home'}"
        variant="primary">Back to Home Page</b-button>
    </b-card>
  </div>
</template>

<script>
import { decodeAndInflate } from '@/utils/compress'

export default {
  name: 'ExportPlan',
  data () {
    return {
      name: ''
    }
  },
  computed: {
    encodedData () {
      return this.$route.params.json
    },
    decodedObject () {
      return decodeAndInflate(this.encodedData)
    },
    planName () {
      return this.decodedObject.obj.name
    },
    fitCurrentAppVersion () {
      return this.$store.state.local.version === this.decodedObject.obj.version
    }
  },
  methods: {
    writeData: function () {
      this.$store.dispatch('addProfile', { ...this.decodedObject.obj, name: this.name === '' ? this.planName : this.name })
      this.$router.push({ name: 'Profile' })
    }
  }
}
</script>
