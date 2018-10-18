<template>
  <b-modal
    id="_TransferredCleanAll"
    header-text-variant="danger"
    title="Remove All Transferred Courses"
    lazy
    @ok="cleanTransferredCourses">
    Are you sure you want to remove all transferred courses?
  </b-modal>
</template>

<script>
export default {
  name: 'CleanTransferredCoursesModal',
  methods: {
    cleanTransferredCourses: function () {
      this.$store.commit('cleanTransferredCourse')
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Courses removed successfully.')
    }
  }
}
</script>
