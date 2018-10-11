<template>
  <b-modal :id="'semester ' + this.semester + ' course ' + this.courseTitle"
           header-text-variant="danger"
           title="Remove Course"
           @ok="removeCourse"
           lazy>
           Are you sure you want to remove this course?
  </b-modal>
</template>

<script>
export default {
  name: 'RemoveCourseModal',
  props: {
    courseTitle: {
      required: true
    },
    semester: {
      required: true
    }
  },
  computed: {
  },
  methods: {
    removeCourse: function (courseTitle) {
      this.$store.commit('removeCourse', { semester: this.semester, courseTitle: this.courseTitle })
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Course ' + this.courseTitle + ' has removed.', { duration: 3000 })
    }
  }
}
</script>
