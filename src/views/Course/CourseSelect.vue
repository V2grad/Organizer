<template>
<div>
  <b-container fluid>
    <b-row>
        <b-col cols=12>
            <keep-alive>
              <course-selection></course-selection>
            </keep-alive>
        </b-col>
    </b-row>
</b-container>
</div>
</template>

<script>
import CourseSelection from '@/components/Cards/Course/CourseSelection.vue'

export default {
  name: 'CourseSelect',
  components: {
    CourseSelection
  }
}
</script>
