<template>
    <b-list-group-item>
        {{ CourseTitle }}
        <b-badge variant="primary" pill>X</b-badge>
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
    CourseCredit: {
      required: true
    }
  }
}
</script>
