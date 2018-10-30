<template>
  <div id="">
    <b-row
      class="flex-nowrap">
      <semester
        v-for="(semester, index) in semesters"
        :key="index"
        :semester="semester"
        :semester-index="index"/>
      <semester-placeholder/>
    </b-row>
  </div>
</template>

<script>
import Semester from '../components/Cards/Semester/Semester'
import SemesterPlaceholder from '../components/Cards/Semester/SemesterPlaceholder'

export default {
  components: {
    SemesterPlaceholder,
    Semester
  },
  computed: {
    semesters () {
      return this.$store.state.plan.semesters
    }
  }
}
</script>
