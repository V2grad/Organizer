<template>
<div>
    <b-list-group-item class="list-complete-item d-flex justify-content-between align-items-center"
                       v-b-popover.hover="{title: this.CourseName, content: 'Credit Hours: ' + this.CreditHours, delay: { show: 1000, hide: 0 }}">
        {{ CourseTitle }}
        <b-btn class="btn-outline-danger" v-b-modal="'semester ' + this.semester + ' course ' + this.CourseTitle" variant="danger">X</b-btn>
    </b-list-group-item>
    <remove-course-modal v-bind:courseTitle="this.CourseTitle" v-bind:semester="this.semester"></remove-course-modal>
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
    semester: {
      required: true
    }
  },
  components: {
    RemoveCourseModal
  }
}
</script>
