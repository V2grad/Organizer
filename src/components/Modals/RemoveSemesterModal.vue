<template>
  <b-modal
    :id="'semester ' + semesterIndex"
    header-text-variant="danger"
    title="Remove Semester"
    lazy
    @ok="removeSemester">
    Are you sure you want to remove this semester?
  </b-modal>
</template>

<script>
export default {
  name: 'RemoveSemesterModal',
  props: {
    semesterIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeSemester: function () {
      this.$store.commit('removeSemester', this.semesterIndex)
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Semester has removed.')
    }
  }
}
</script>
