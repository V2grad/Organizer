<template>
  <VuePerfectScrollbar class="h-100">
    <b-row class="flex-nowrap">
      <semester
        v-for="(semester, index) in semesters"
        :key="index"
        :semester="semester"
        :semester-index="index"/>
      <semester-placeholder/>
    </b-row>
    <remove-course-modal/>
    <remove-semester-modal/>
    <view-in-scheduler-modal/>
    <note-button/>
  </VuePerfectScrollbar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import Semester from '../components/Cards/Semester/Semester'
import SemesterPlaceholder from '../components/Cards/Semester/SemesterPlaceholder'

import RemoveSemesterModal from '../components/Modals/RemoveSemesterModal'
import RemoveCourseModal from '../components/Modals/RemoveCourseModal'

import NoteButton from '../components/Items/NoteButton'

import ViewInSchedulerModal from '../components/Modals/ViewInSchedulerModal'

export default {
  components: {
    SemesterPlaceholder,
    VuePerfectScrollbar,
    RemoveSemesterModal,
    RemoveCourseModal,
    ViewInSchedulerModal,
    NoteButton,
    Semester
  },
  computed: {
    semesters () {
      return this.$store.getters.semesterCollection
    }
  }
}
</script>

<style type="text/css">
.ps__scrollbar-x {
  height: 20px !important;
  background: #999 !important;
}

.ps__scrollbar-x-rail {
  height: 25px !important;
  background: #333 !important;
}
</style>
