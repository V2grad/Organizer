<template>
  <b-modal
    id="courseSelectionModal"
    :ok-disabled="disabledOK"
    title="Add course to a Semester"
    @ok="addCoursetoSemester" >
    <div v-if="courseAdded">
      <p>This course has added into the following semester: {{ this.$unify.READABLE_SEMESTER(courseLocation[0] === -1 ? '' :this.$store.state.plan.semesters[courseLocation[0]]) }}</p>
    </div>
    <div v-else>
      <b-form inline>
        <label
          class="mr-sm-2"
          for="inlineFormCustomSelectPref">Semester</label>
        <b-form-select
          :value="null"
          v-model="semester"
          :options="semesterList"
          class="mb-2 mr-sm-4 mb-sm-0"
        >
          <option
            slot="first"
            :value="null">Choose...</option>
        </b-form-select>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'CourseSelectionModal',
  props: {
    course: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      semester: null
    }
  },
  computed: {
    currentCourse () {
      return this.course === null ? this.$unify.COURSE_ATTRIBUTES : this.course
    },
    courseLocation () {
      return this.$store.getters.findCourse(this.currentCourse.uuid)
    },
    courseAdded () {
      return this.courseLocation.length !== 0
    },
    disabledOK () {
      return this.semester === null || this.courseAdded
    },
    semesterList () {
      return [...this.$store.getters.semesterList, this.$unify.TRANSFERRED_SEMESTER_OPTION]
    }
  },
  methods: {
    addCoursetoSemester () {
      this.$store.dispatch('addCourse', {
          semester: this.semester,
          course: {
            custom: false,
            uuid: this.currentCourse.uuid
          }
          })
      this.showSuccess()
    },
    showSuccess () {
      this.$toasted.success('Add Successfully.')
    }
  }
}
</script>
