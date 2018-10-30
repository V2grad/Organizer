<template>
  <VuePerfectScrollbar class="h-100" v-once :settings="settings">
    <b-row class="flex-nowrap">
      <semester
        v-for="(semester, index) in semesters"
        :key="index"
        :semester="semester"
        :semester-index="index"/>
      <semester-placeholder/>
    </b-row>
  </VuePerfectScrollbar>
</template>

<script>
import Semester from '../components/Cards/Semester/Semester'
import SemesterPlaceholder from '../components/Cards/Semester/SemesterPlaceholder'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: {
    SemesterPlaceholder,
    VuePerfectScrollbar,
    Semester
  },
  data () {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  computed: {
    semesters () {
      return this.$store.state.plan.semesters
    }
  }
}
</script>

<style type="text/css">

  .ps__scrollbar-x {
    height: 25px !important;
    background: #999 !important;
  }

  .ps__scrollbar-x-rail {
    height: 25px !important;
    background: #333 !important;
  }
</style>
