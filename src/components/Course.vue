<template>
    <b-list-group-item class="list-complete-item d-flex justify-content-between align-items-center">
        {{ CourseTitle }}
        <b-btn v-on:click="removeCourse" variant="danger">X</b-btn>
    </b-list-group-item>
</template>

<script>
export default {
  name: 'Course',
  props: {
    CourseName: {
      type: String,
      required: true
    },
    CourseTitle: {
      type: String,
      required: true
    },
    CreditHours: {
      required: true
    }
  },
  methods: {
    removeCourse: function () {
      this.$emit('removeCourse', this.CourseTitle)
    }
  }
}
</script>

