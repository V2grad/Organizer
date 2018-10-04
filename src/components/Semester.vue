<template>
<b-col cols="12" lg="4">
<b-card-group deck>
  <b-card :header="'Semester ' + semester">
    <b-list-group>
<draggable v-model='semesterCourses'>
    <transition-group>
        <Course v-for="course in semesterCourses" :key="course.CourseTitle" v-bind="course"></Course>
    </transition-group>
</draggable>
    </b-list-group>
    <em v-if="totalSemester === Number(semester)" slot="footer">
      <b-btn v-on:click="removeSemester">Remove This Semester</b-btn>
    </em>
  </b-card>
</b-card-group>
</b-col>
</template>

<script>
import Course from './Course.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Semester',
  props: {
    semester: {
      type: Number,
      required: true
    }
  },
  components: {
    draggable,
    Course
  },
  computed: {
    totalSemester () {
      return this.$store.getters.currentSemester
    },
    semesterCourses: {
      get () {
          return this.$store.state.courses[this.semester]
      },set(value){

      }
      
    }
  },
  methods: {
    removeSemester: function () {
      this.$store.dispatch('removeSemester', this.semester)
    }
  }
}
</script>
