<template>
  <b-modal :id="'semester ' + this.semesterIndex + ' course ' + this.courseTitle"
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
    courseIndex: {
      required: true
    },
    semesterIndex: {
      required: true
    }
  },
  computed: {
  },
  methods: {
    removeCourse: function (courseTitle) {
      this.$store.commit('removeCourse', { semester: this.semesterIndex, course: this.courseIndex })
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Course ' + this.courseTitle + ' has removed.')
    }
  }
}
</script>
