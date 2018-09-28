<template>
<div>
  <b-container fluid>
    <b-row>
        <b-col cols=12>
             <course-selection></course-selection>
        </b-col>
    </b-row>
</b-container>
</div>
</template>

<script>
import CourseSelection from '../components/CourseSelection.vue'

export default {
  name: 'CourseSelect',
  components: {
    CourseSelection
  }
}
</script>
