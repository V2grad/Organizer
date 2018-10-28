<template>
  <b-progress
    :value="value"
    :max="max"
    animated/>
</template>

<script>
export default {
  name: 'LoadingProgressBar',
  data () {
    return {
      max: 100,
      value: 100,
   }
  }
}
</script>

