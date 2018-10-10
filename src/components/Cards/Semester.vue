<template>
<b-col cols="12" lg="4">
<b-card-group deck>
  <b-card :header="'Semester ' + semester + ' | <strong>Credits: ' + totalCredits + '</strong>'">
    <draggable class="list-group" v-model='semesterCourses' :options="{group:'semester'}">
        <transition-group class="dragArea">
          <!--This section is a bit of dirty, maybe change the structure how the courses ar stored-->
            <Course v-for="course in semesterCourses" :key="course.CourseTitle" v-bind="course" v-bind:semester="semester"></Course>
        </transition-group>
    </draggable>
    <ul class="list-group mb-2" v-if="!semesterCourses[0]">
      <li class="list-group-item list-group-item-info">EMPTY SEMESTER</li>
    </ul>
    <em v-if="totalSemester === Number(semester)" slot="footer">
      <b-btn v-b-modal="'semester ' + this.semester">Remove This Semester</b-btn>
      <remove-semeter-modal :semester="this.semester"></remove-semeter-modal>
    </em>
  </b-card>
</b-card-group>
</b-col>
</template>

<script>
import Course from '@/components/Course.vue'
import RemoveSemeterModal from '@/components/Modals/RemoveSemesterModal'
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
    Course,
    RemoveSemeterModal,
  },
  computed: {
    totalSemester () {
      return this.$store.getters.currentSemester
    },
    totalCredits () {
      let credits = 0
      if (this.semesterCourses !== undefined) {
        this.semesterCourses.forEach(element => {
          credits = credits + parseInt(element.CreditHours)
        })
      }
      return credits
    },
    semesterCourses: {
      get () {
        return this.$store.state.plan.courses[this.semester]
      },
      set (value) {
        this.$store.commit('updateSemester', { semester: this.semester, courses: value })
      }
    }
  }
}
</script>

<style scoped>
/* https://github.com/SortableJS/Vue.Draggable/issues/44 */
.dragArea {
  min-height: 10px;
}
</style>
