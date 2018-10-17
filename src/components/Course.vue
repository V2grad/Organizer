<template>
<div>
    <b-list-group-item class="list-complete-item d-flex justify-content-between align-items-center"
                       v-b-popover.hover="{title: this.CourseTitle,
                                           content: 'Credit Hours: ' + this.CreditHours,
                                           delay: { show: 1000, hide: 0 }}">
        {{ CourseName }}
        <b-btn class="btn-outline-danger"
        v-b-modal="'semester ' + this.semesterIndex + ' course ' + this.courseIndex"
        variant="danger">
        <font-awesome-icon icon="times" />
        </b-btn>
    </b-list-group-item>
    <remove-course-modal v-bind:courseTitle="this.CourseTitle"
                         v-bind:semesterIndex="this.semesterIndex"
                         v-bind:courseIndex="this.courseIndex"></remove-course-modal>
</div>
</template>

<script>
import RemoveCourseModal from '@/components/Modals/RemoveCourseModal'

export default {
  name: 'Course',
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
      required: true
    },
    semesterIndex: {
      required: true
    },
    courseIndex: {
      required: true
    }
  },
  components: {
    RemoveCourseModal
  }
}
</script>
