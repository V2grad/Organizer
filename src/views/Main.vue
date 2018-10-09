<template>
<div>
    <b-row class="flex-row flex-nowrap">
        <semester v-for="(courses, key) in totalSemesters" :key="key" :semester="parseInt(key)"></semester>
        <semester-placeholder></semester-placeholder>
    </b-row>
</div>
</template>

<script>
import Semester from '../components/Semester'
import SemesterPlaceholder from '../components/SemesterPlaceholder'

export default {
  components: {
    SemesterPlaceholder,
    Semester
  },
  computed: {
    totalSemesters () {
      return this.$store.state.plan.courses
    }
  }
}
</script>
