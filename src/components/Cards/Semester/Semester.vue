<template>
<b-col cols="12" lg="4">
<b-card-group deck>
  <b-card :header="'Year ' + semester.year + ', Period: ' + semester.period">
    <draggable class="list-group" v-model='semesterCourses' :options="{group:'semester'}">
        <transition-group class="dragArea">
          <!--This section is a bit of dirty, maybe change the structure how the courses ar stored-->
            <Course v-for="(course, index) in semesterCourses"
                    :key="index"
                    v-bind="course"
                    v-bind:semesterIndex="semesterIndex"
                    v-bind:courseIndex="index">
            </Course>
        </transition-group>
    </draggable>
    <ul class="list-group mb-2" v-if="!semesterCourses[0]">
      <li class="list-group-item list-group-item-info">EMPTY SEMESTER</li>
    </ul>
    <!-- <em v-if="totalSemester === Number(semester)" slot="footer">
      <b-btn v-b-modal="'semester ' + this.semester">Remove This Semester</b-btn>
      <remove-semeter-modal :semester="this.semester"></remove-semeter-modal>
    </em> -->
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
    semesterIndex: {
      type: Number,
      required: true
    },
    semester: {
      required: true
    }
  },
  components: {
    draggable,
    Course,
    RemoveSemeterModal
  },
  computed: {
    totalCredits () {
      let credits = 0
      this.semester.courses.forEach((c) => {
        credits = credits + c.CreditHours
      })
      return credits
    },
    semesterCourses: {
      get () {
        return this.semester.courses
      },
      set (value) {
        this.$store.commit('updateCourses', { semester: this.semesterIndex, courses: value })
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
