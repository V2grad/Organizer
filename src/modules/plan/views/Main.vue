<template>
  <div>
    <b-row class="flex-nowrap">
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

<style>
/* scrollbar */
/* width */
::-webkit-scrollbar {
  height: 25px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
