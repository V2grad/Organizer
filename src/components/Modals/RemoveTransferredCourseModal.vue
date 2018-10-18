<template>
  <b-modal
    :id="'transferred course ' + courseIndex"
    header-text-variant="danger"
    title="Remove Course"
    lazy
    @ok="removeTransferredCourse">
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
  },
  computed: {
  },
  methods: {
    removeTransferredCourse: function () {
      this.$store.commit('removeTransferredCourse', this.courseIndex)
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Course removed.')
    }
  }
}
</script>
