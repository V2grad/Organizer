<template>
<b-col cols="12" lg="4">
<b-card-group deck>
  <b-card header-tag="header">
    <p slot="header"
       class="mb-0 d-flex justify-content-between align-items-center">
       {{title}}
       <b-btn v-b-modal="'semester ' + this.semesterIndex"
              variant="light"
              size="sm">
          <font-awesome-icon icon="times" />
        </b-btn>
    </p>
    <draggable class="list-group" v-model='semesterCourses' :options="{group:'semester'}">
        <transition-group class="dragArea">
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
  <remove-semester-modal :semesterIndex="semesterIndex"></remove-semester-modal>
</b-card-group>
</b-col>
</template>

<script>
import Course from '@/components/Course.vue'
import RemoveSemesterModal from '@/components/Modals/RemoveSemesterModal'
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
    RemoveSemesterModal
  },
  data () {
    return {
      title: this.$human.READABLE_SEMESTER(this.semester)
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
