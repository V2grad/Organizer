<template>
  <div>
    <b-list-group-item
      v-b-popover.hover="{title: CourseTitle,
                          content: 'Credit Hours: ' + CreditHours,
                          delay: { show: 1000, hide: 0 }}"
      class="list-complete-item d-flex justify-content-between align-items-center">
      {{ CourseName }}
      <b-btn
        v-b-modal="'semester ' + semesterIndex + ' course ' + courseIndex"
        class="btn-outline-danger"
        variant="danger">
        <font-awesome-icon icon="times" />
      </b-btn>
    </b-list-group-item>
    <remove-course-modal
      :course-title="CourseTitle"
      :semester-index="semesterIndex"
      :course-index="courseIndex"/>
  </div>
</template>

<script>
import RemoveCourseModal from '@/components/Modals/RemoveCourseModal'

export default {
  name: 'Course',
  components: {
    RemoveCourseModal
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
    semesterIndex: {
      type: Number,
      required: true
    },
    courseIndex: {
      type: Number,
      required: true
    }
  },
}
</script>
