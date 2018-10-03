<template>
<div>
    <b-row class="flex-row flex-nowrap">
        <semester v-for="semester in totalSemester" :key="semester" v-bind:semester="semester"></semester>
    </b-row>
</div>
</template>

<script>
import navBar from '../components/navBar.vue'
import Semester from '../components/Semester.vue'

export default {
  components: {
    Semester,
    navBar
  },
  computed: {
    totalSemester () {
      return [...Array(this.$store.state.semester).keys()]
    }
  }
}
</script>
