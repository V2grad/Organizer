<template>
  <b-modal :id="'semester ' + this.semesterIndex"
           header-text-variant="danger"
           title="Remove Semester"
           @ok="removeSemester"
           lazy>
           Are you sure you want to remove this semester?
  </b-modal>
</template>

<script>
export default {
  name: 'RemoveSemesterModal',
  props: {
    semesterIndex: {
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
