<template>
  <div v-if="loading">
    <b-progress
      v-if="!error"
      :value="value"
      :max="max"
      animated/>
    <b-progress
      v-else
      :value="value"
      :max="max"
      variant="danger"/>
  </div>
</template>

<script>
export default {
  name: 'LoadingProgressBar',
  props: {
    loading: {
      required: true,
      type: Boolean
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      max: 100,
      value: 100,
   }
  }
}
</script>

