<template>
<b-list-group-item>{{ name }}</b-list-group-item>
</template>

<script>
export default {
  name: 'Course',
  props: {
    name: String,
    course_id: String,
    description: {
      type: String,
      required: false,
      default: 'Course description is not available'
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
