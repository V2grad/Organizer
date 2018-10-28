<template>
  <b-card
    title="Import a Plan">
    <p class="card-text">
      You are about to import a new plan from <strong>{{ planName }}</strong>. You may change the name before import.
    </p>
    <incompatible-schemas-alert
      :version="version"/>
    <b-form-input
      v-model="name"
      :maxlength="this.$unify.PLAN_MAXLENGTH"
      class="mt-3 mb-3"
      type="text"
      placeholder="Give this Plan another name? Leave blank to use existing"/>
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
</template>

<script>
import IncompatibleSchemasAlert from '../Alerts/IncompatibleSchemasAlert'

export default {
  name: 'ImportCard',
  components: {
    IncompatibleSchemasAlert
  },
  props: {
    decodedObject: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
          name: ''
      }
  },
  computed: {
    planName () {
      return this.decodedObject.obj.name
    },
    version () {
      return this.decodedObject.obj.version
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

