<template>
  <b-card-group deck>
    <b-card
      header="Want to add your own course?"
      title="Add Your Own Course">
      <p class="card-text">
        Sometimes you may have your own plan(take same courses), or courses you want to take are not exist in our list.
        <strong>Try adding your own courses by filling in the form below and choose a semester.</strong>
      </p>
      <p class="card-text">
        Do note that Organizer will not check your custom courses, <strong>but credits will still be counted and their titles will be {{ courseTitle }}</strong>
      </p>
      <hr>
      <b-form
        v-if="show"
        validated
        @submit="onSubmit"
        @reset="onReset">
        <b-form-group
          id="CourseNameGroup"
          label="Course Name"
          label-for="CourseNameInput">
          <b-form-input
            id="CourseNameInput"
            v-model="courseName"
            :maxlength="this.$unify.COURSE_MAXLENGTH"
            label="Course Name"
            type="text"
            required
            placeholder="The name of the course you want to add"/>
        </b-form-group>
        <b-form-group
          id="CreditHoursGroup"
          label="Course Credit"
          label-for="CreditHoursInput">
          <b-form-input
            id="CreditHoursInput"
            v-model="creditHours"
            type="number"
            required
            placeholder="Number of credit your course will have"/>
        </b-form-group>
        <b-form-group
          id="SemesterGroup"
          label="Semester"
          label-for="SemesterSelection">
          <b-form-select
            id="SemesterSelection"
            :value="null"
            v-model="semester"
            :options="semesterList"
            required>
            <option
              slot="first"
              :value="null">Choose...</option>
          </b-form-select>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary">Submit</b-button>
        <b-button
          type="reset"
          variant="danger">Reset</b-button>
      </b-form>
    </b-card>
  </b-card-group>

</template>

<script>
import { id } from '@/utils/id'

export default {
  name: 'CustomCourse',
  data () {
    return {
      show: true,
      courseName: '',
      courseTitle: this.$unify.CUSTOM_COURSE_TITLE,
      creditHours: 0,
      semester: null
    }
  },
  computed: {
    semesterList() {
      return [...this.$store.getters.semesterList, this.$unify.TRANSFERRED_SEMESTER_OPTION]
    }
  },
  methods: {
    addCourse () {
      this.$store.dispatch('addCourse', {
        semester: this.semester,
        course: {
          CourseName: this.courseName,
          CourseTitle: this.courseTitle,
          CreditHours: this.creditHours,
          custom: true,
          uuid: id()
        }
      })
      this.$toasted.success('Course added successfully.')
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.addCourse()
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.courseName = ''
      this.creditHours = 0
      this.semester = null
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>
