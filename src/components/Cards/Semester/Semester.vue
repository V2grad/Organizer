<template>
<b-col cols="12" lg="4">
<b-card-group deck>
  <b-card :header="title">
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
    <em slot="footer">
      Credits: {{ totalCredits }}
    </em>
  </b-card>
</b-card-group>
</b-col>
</template>

<script>
import Course from '@/components/Course.vue'
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
    Course
  },
  data () {
    return {
      title: this.semester.year + ' ' + this.semester.period
    }
  },
  computed: {
    totalCredits () {
      let credits = 0
      this.semester.courses.forEach((c) => {
        credits = credits + parseInt(c.CreditHours)
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
