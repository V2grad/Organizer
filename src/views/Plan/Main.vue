<template>
<div>
    <b-row class="flex-row flex-nowrap">
        <semester v-for="(semester, index) in semesters" :key="index" :semester="semester" :semesterIndex="index"></semester>
        <semester-placeholder></semester-placeholder>
    </b-row>
</div>
</template>

<script>
import Semester from '@/components/Cards/Semester/Semester'
import SemesterPlaceholder from '@/components/Cards/Semester/SemesterPlaceholder'

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
