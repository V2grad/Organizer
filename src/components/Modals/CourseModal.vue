<template>
  <!-- Modal Component -->
  <b-modal
    v-model="modalShow"
    title="Add course to a Semester"
    @hide="resetModal">
    <div v-if="courseAdded">
      <p>This course has added into the following semester: {{ this.$human.READABLE_SEMESTER(this.$store.state.plan.semesters[courseLocation[0]]) }}</p>
    </div>
    <div v-else>
      <b-form inline>
        <label
          class="mr-sm-2"
          for="inlineFormCustomSelectPref">Semester</label>
        <b-form-select
          :value="null"
          v-model="semester"
          :options="this.$store.getters.semesterList"
          class="mb-2 mr-sm-4 mb-sm-0"
        >
          <option
            slot="first"
            :value="null">Choose...</option>
        </b-form-select>
        <b-button
          :disabled="semester === null"
          variant="primary"
          @click="addCoursetoSemester">Save</b-button>
      </b-form>
    </div>
    <div
      slot="modal-footer"
      class="w-100">
      <b-btn
        size="sm"
        class="float-right"
        variant="primary"
        @click="resetModal">
        Close
      </b-btn>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'CourseModal',
  props: {
    course: {
      type: Object,
      required: true
    },
    modalShow: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      semester: null
    }
  },
  computed: {
    courseLocation () {
      return this.$store.getters.findCourse(this.course.CourseTitle)
    },
    courseAdded () {
      return this.courseLocation.length !== 0
    }
  },
  methods: {
    addCoursetoSemester () {
      this.$store.commit('addCourse', {
        semester: this.semester,
        course: this.course
      })
      this.showSuccess()
    },
    resetModal () {
      this.$emit('resetModal')
    },
    showSuccess () {
      this.$toasted.success('Add Successfully.')
      this.resetModal()
    }
  }
}
</script>
