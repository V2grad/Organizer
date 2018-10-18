<template>
  <b-modal
    :id="'semester ' + semesterIndex + ' course ' + courseIndex"
    header-text-variant="danger"
    title="Remove Course"
    lazy
    @ok="removeCourse">
    Are you sure you want to remove this course?
  </b-modal>
</template>

<script>
export default {
  name: 'RemoveCourseModal',
  props: {
    courseIndex: {
      type: Number,
      required: true
    },
    semesterIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
  },
  methods: {
    removeCourse: function () {
      this.$store.commit('removeCourse', { semester: this.semesterIndex, course: this.courseIndex })
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Course removed.')
    }
  }
}
</script>
