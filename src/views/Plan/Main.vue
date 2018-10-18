<template>
  <div>
    <b-row class="flex-row flex-nowrap">
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

<style>
/* https://github.com/SortableJS/Vue.Draggable/issues/44 */
.dragArea {
  min-height: 10px;
}
</style>
