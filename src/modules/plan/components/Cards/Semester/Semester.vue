<template>
  <b-col
    cols="12"
    lg="4">
    <b-card-group deck>
      <b-card header-tag="header">
        <p
          slot="header"
          class="mb-0 d-flex justify-content-between align-items-center">
          {{ title }}
          <b-btn
            variant="light"
            size="sm"
            @click="removeSemester">
            <font-awesome-icon icon="times" />
          </b-btn>
        </p>
        <draggable
          v-model="semesterCourses"
          :options="{group:'semester'}"
          class="list-group">
          <transition-group class="dragArea">
            <Course
              v-for="(course, index) in semesterCourses"
              :key="index"
              v-bind="course"
              :semester-index="semesterIndex"
              :course-index="index"/>
          </transition-group>
        </draggable>
        <ul
          v-if="isEmptySemester"
          class="list-group mb-2">
          <li class="list-group-item list-group-item-info">EMPTY SEMESTER</li>
        </ul>
        <em
          slot="footer"
          class="d-flex justify-content-between">
          Credits: {{ totalCredits }}
          <b-btn
            v-if="!isEmptySemester"
            size="sm"
            @click="jumpToYACS">View in YACS</b-btn>
        </em>
      </b-card>
    </b-card-group>
  </b-col>
</template>

<script>
import Course from '../../Items/Course.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Semester',
  components: {
    draggable,
    Course,
  },
  props: {
    semesterIndex: {
      type: Number,
      required: true
    },
    semester: {
      type: Object,
      required: true
    }
  },
  computed: {
    title () {
      return this.$unify.READABLE_SEMESTER(this.semester)
    },
    totalCredits () {
      return this.$store.getters.totalCreditsBySemester(this.semesterIndex)
    },
    semesterCourses: {
      get () {
        return this.semester.courses
      },
      set (value) {
        this.$store.commit('updateCourses', { semester: this.semesterIndex, courses: value })
      }
    },
    isEmptySemester () {
      return !this.semesterCourses[0]
    }
  },
  methods: {
    removeSemester () {
      this.$store.dispatch('removeSemesterModal', this.semesterIndex)
    },
    jumpToYACS() {
      this.$store.dispatch('viewInScheduler', this.semesterCourses)
    }
  }
}
</script>
