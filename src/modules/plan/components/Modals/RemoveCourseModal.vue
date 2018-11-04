<template>
  <b-modal
    ref="_RemoveCourseModal"
    :ok-disabled="!validate"
    header-text-variant="danger"
    title="Remove Course"
    @ok="removeCourse">
    Are you sure you want to remove <code>{{ courseName }}</code> in <code>{{ semesterName }}</code>?
  </b-modal>
</template>

<script>
export default {
  name: 'RemoveCourseModal',
  data () {
    return {
      hook: null,
      courseIndex: null,
      semesterIndex: null,
    }
  },
  computed: {
    validate () {
      return this.courseIndex !== null && this.semesterIndex !== null
    },
    semesterName() {
      if (this.validate) {
        return this.$store.getters.semesterName(this.semesterIndex)
      } else {
        return 'Undefined Semester'
      }
    },
    courseName (){
      if (this.validate) {
        return this.$store.getters.specificCourseDetails({
          courseIndex: this.courseIndex,
          semesterIndex: this.semesterIndex
        }).CourseName
      } else {
        return 'Undefined Course'
      }
    }
  },
  created() {
    this.hook = this.$store.subscribeAction((action) => {
      if (action.type === 'removeCourseModal'){
        this.courseIndex = action.payload.courseIndex
        this.semesterIndex = action.payload.semesterIndex
        this.$refs._RemoveCourseModal.show()
      }
    })
  },
  beforeDestroy () {
    // Unregister Subscribe
    this.hook()
  },
  methods: {
    removeCourse: function () {
      this.$store.commit('removeCourse', { semester: this.semesterIndex, course: this.courseIndex })
      this.showSuccess()
      this.resetModal()
    },
    showSuccess () {
      this.$toasted.success('Course removed.')
    },
    resetModal () {
      this.$refs._RemoveCourseModal.hide()
      this.courseIndex = null
      this.semesterIndex = null
    }
  }
}
</script>
