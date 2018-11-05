<template>
  <b-modal
    ref="_RemoveSemesterModal"
    :ok-disabled="!validate"
    header-text-variant="danger"
    title="Remove Semester"
    @ok="removeSemester">
    Are you sure you want to remove <code>{{ semesterName }}</code>?
  </b-modal>
</template>

<script>
export default {
  name: 'RemoveSemesterModal',
  data () {
    return {
      semesterIndex: null,
      hook: null
    }
  },
  computed: {
    validate () {
      return this.semesterIndex !== null
    },
    semesterName() {
      if (this.validate) {
        return this.$store.getters.semesterName(this.semesterIndex)
      } else {
        return 'Undefined Semester'
      }
    },
  },
  created() {
    this.hook = this.$store.subscribeAction((action) => {
      if (action.type === 'removeSemesterModal'){
        this.semesterIndex = action.payload
        this.$refs._RemoveSemesterModal.show()
      }
    })
  },
  beforeDestroy () {
    // Unregister Subscribe
    this.hook()
  },
  methods: {
    removeSemester: function () {
      this.$store.commit('removeSemester', this.semesterIndex)
      this.showSuccess()
      this.resetModal()
    },
    showSuccess () {
      this.$toasted.success('Semester removed.')
    },
    resetModal () {
      this.courseIndex = null
      this.semesterIndex = null
      this.$refs._RemoveSemesterModal.hide()
    }
  }
}
</script>
