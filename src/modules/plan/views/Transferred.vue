<template>
  <div>
    <b-row>
      <b-col>
        <transferred-courses/>
        <remove-course-modal/>
      </b-col>
    </b-row>
    <note-button/>
  </div>
</template>

<script>
import TransferredCourses from '../components/Cards/TransferredCourses'
import RemoveCourseModal from '../components/Modals/RemoveCourseModal'
import NoteButton from '../components/Items/NoteButton'

export default {
  components: {
    TransferredCourses,
    RemoveCourseModal,
    NoteButton
  },
  computed: {
  }
}
</script>
