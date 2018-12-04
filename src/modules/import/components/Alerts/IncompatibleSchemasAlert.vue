<template>
  <b-alert
    :show="!fitCurrentAppVersion"
    variant="danger">
    This link is generated with different schemas. You may encounter compatibility issue if you continue importing this plan.
    <br>
    <small>Current APP Schemas: {{ currentVersion }} <br> Import Version: {{ importVersion }}</small>
  </b-alert>
</template>

<script>
export default {
  name: 'IncompatibleSchemasAlert',
  props: {
    version: {
      type: Number,
      default: null
    }
  },
  computed: {
    importVersion () {
      if (this.version === null || this.version === undefined) {
        return "Unable to identify schema number"
      }else{
        return this.version
      }
    },
    currentVersion () {
      return this.$store.state.local.version
    },
    fitCurrentAppVersion () {
      return this.importVersion === this.currentVersion
    }
  }
}
</script>
