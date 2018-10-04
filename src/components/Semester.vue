<template>
<b-col cols="12" lg="4">
<b-card-group deck>
  <b-card :header="'Semester ' + semester + ' | Credits: ' + totalCredits">
    <b-list-group>
        <draggable v-model='semesterCourses' :options="{group:'semester'}">
            <transition-group class="dragArea">
                <Course v-on:removeCourse="removeCourse" v-for="course in semesterCourses" :key="course.CourseTitle" v-bind="course"></Course>
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
    totalCredits () {
      let credits = 0
      if (this.semesterCourses !== undefined){
        this.semesterCourses.forEach(element => {
        credits = credits + parseInt(element.CreditHours)
      })
      } 
      return credits
    },
    semesterCourses: {
      get () {
        return this.$store.state.courses[this.semester]
      },
      set (value) {
        this.$store.commit('updateSemester', { semester: this.semester, courses: value })
      }
    }
  },
  methods: {
    removeSemester: function () {
      this.$store.dispatch('removeSemester', this.semester)
    },
    removeCourse: function (courseTitle) {
      this.$store.commit('removeCourse', { semester: this.semester, courseTitle: courseTitle })
    }
  }
}
</script>

<style scoped>
/* https://github.com/SortableJS/Vue.Draggable/issues/44 */
.dragArea {
  min-height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
