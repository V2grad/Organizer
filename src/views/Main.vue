<template>
<div>
    <b-row class="flex-row flex-nowrap">
        <semester v-for="(courses, key) in totalSemesters" :key="key" :semester="key" :courses="courses"></semester>
        <semester-placeholder></semester-placeholder>
    </b-row>
</div>
</template>

<script>
import navBar from '../components/navBar'
import Semester from '../components/Semester'
import SemesterPlaceholder from '../components/SemesterPlaceholder'

export default {
  components: {
    SemesterPlaceholder,
    Semester,
    navBar
  },
  computed: {
    totalSemesters () {
      return this.$store.state.courses
    }
  }
}
</script>
