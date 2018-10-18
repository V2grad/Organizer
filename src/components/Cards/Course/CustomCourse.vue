<template>
  <b-card-group deck>
    <b-card 
      header="Want to add your own course?"
      title="Add Your Own Course">
      <p class="card-text">
        Sometimes you may have your own plan(take same courses), or the course you want to take does not include in our list.
        <strong>Then, add your own course by filling in the information and choose a semester.</strong>
      </p>
      <p class="card-text">
        Do note that Organizer will not check your custom course, but <strong>it will still count the credit, and their title will be CTSM-1100</strong>
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
            label="Course Name"
            type="text"
            maxlength="50"
            required
            placeholder="The name of the course you want to add"/>
        </b-form-group>
        <b-form-group 
          id="CourseCreditGroup"
          label="Course Credit"
          label-for="CourseCreditInput">
          <b-form-input 
            id="CourseCreditInput"
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
            :options="this.$store.getters.semesterList"
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

export default {
  name: 'CustomCourse',
  data () {
    return {
      show: true,
      courseName: '',
      courseTitle: 'CTSM-1100',
      courseCredits: 0,
      semester: null
    }
  },
  computed: {
  },
  methods: {
    addCourse () {
      this.$store.commit('addCourse', {
        semester: this.semester,
        course: {
          'CourseName': this.courseName,
          'CourseTitle': this.courseTitle,
          'CreditHours': this.creditHours
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
