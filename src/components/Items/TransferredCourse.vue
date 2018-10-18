<template>
  <div>
    <b-list-group-item
      v-b-popover.hover="{title: CourseTitle,
                          content: 'Credit Hours: ' + CreditHours,
                          delay: { show: 1000, hide: 0 }}"
      class="list-complete-item d-flex justify-content-between align-items-center">
      {{ CourseName }}
      <b-btn
        v-b-modal="'transferred course ' + courseIndex"
        class="btn-outline-danger"
        variant="danger">
        <font-awesome-icon icon="times" />
      </b-btn>
    </b-list-group-item>
    <remove-transferred-course-modal
      :course-index="courseIndex"/>
  </div>
</template>

<script>
import RemoveTransferredCourseModal from '@/components/Modals/RemoveTransferredCourseModal'

export default {
  name: 'Course',
  components: {
    RemoveTransferredCourseModal
  },
  props: {
    CourseName: {
      type: String,
      required: true
    },
    CourseTitle: {
      type: String,
      required: true
    },
    CreditHours: {
      type: String,
      required: true
    },
    courseIndex: {
      type: Number,
      required: true
    }
  },
}
</script>
