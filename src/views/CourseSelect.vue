<template>
<div>
  <b-container fluid>
    <b-row>
        <b-col cols=12>
            <b-card-group deck>
                <b-card :header="'Course List'">
                    <course-selection></course-selection>
                </b-card>
            </b-card-group>
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
