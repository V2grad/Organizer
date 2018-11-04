<template>
  <div>
    <b-row>
      <b-col>
        <transferred-courses/>
        <remove-course-modal/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TransferredCourses from '../components/Cards/TransferredCourses'
import RemoveCourseModal from '../components/Modals/RemoveCourseModal'

export default {
  components: {
    TransferredCourses,
    RemoveCourseModal
  },
  computed: {
  }
}
</script>
