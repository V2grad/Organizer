<template>
  <!-- Modal Component -->
  <b-modal @hide='resetModal' v-model="modalShow" title="Add course to a Semester">
    <div v-if="courseAdded">
       <p>This course has added into the following semester: {{courseLocation}}</p>
    </div>
    <div v-else>
      <b-form inline>
      <label class="mr-sm-2" for="inlineFormCustomSelectPref">Semester</label>
      <b-form-select class="mb-2 mr-sm-4 mb-sm-0"
                     :value="null"
                     v-model="semester"
                     :options="this.$store.getters.semesterList"
                     >
        <option slot="first" :value="null">Choose...</option>
      </b-form-select>
      <b-button v-on:click="addCoursetoSemester" variant="primary" :disabled="semester === null">Save</b-button>
    </b-form>
    </div>
    <div slot="modal-footer" class="w-100">
         <b-btn size="sm" class="float-right" variant="primary" @click="resetModal">
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
      required: true
    },
    modalShow: {
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
      return this.$store.getters.findCourse(this.course)
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
      this.$toasted.success('Add Successfully.', { duration: 3000 })
      this.resetModal()
    }
  }
}
</script>
