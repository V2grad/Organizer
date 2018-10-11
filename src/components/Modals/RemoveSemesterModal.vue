<template>
  <b-modal :id="'semester ' + this.semester"
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
    semester: {
      required: true
    }
  },
  computed: {
  },
  methods: {
    removeSemester: function () {
      this.$store.dispatch('removeSemester', this.semester)
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Semester ' + this.semester + ' has removed.', { duration: 3000 })
    }
  }
}
</script>
