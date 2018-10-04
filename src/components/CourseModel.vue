<template>
  <!-- Modal Component -->
  <b-modal v-model="modalShow" title="Add course to a Semester">
    <div v-if="courseAdded">
       <p>This course has added into the following semester: {{courseLocation}}</p>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'CourseModel',
  props: {
    course: {
      required: true
    }
  },
  data () {
    return {
      modalShow: true
    }
  },
  computed: {
    courseLocation () {
      return this.$store.getters.findCourse(this.course)
    },
    courseAdded () {
      return this.courseLocation.length !== 0
    }
  }
}
</script>
