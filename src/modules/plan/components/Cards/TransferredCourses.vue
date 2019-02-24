<template>
  <b-card
    header="wow, study in advance? Enjoy it!"
    header-tag="header"
    title="Transferred Courses">
    <p class="card-text">
      Add those course to Organzier so that we know what you have learned so that Organizer can provide better suggestions.
    </p>
    <draggable
      v-model="transferredCourses"
      :options="{group:'transferred'}"
      class="list-group">
      <transition-group class="dragArea">
        <Course
          v-for="(course, index) in transferredCourses"
          :key="index"
          v-bind="course"
          :semester-index="$unify.TRANSFERRED_SEMESTER_INDEX"
          :course-index="index"/>
      </transition-group>
    </draggable>
    <ul
      v-if="!transferredCourses[0]"
      class="list-group mb-2">
      <li class="list-group-item list-group-item-info">EMPTY LIST</li>
    </ul>
    <p
      slot="footer"
      class="mb-0 d-flex justify-content-between align-items-center">
      Credits: {{ totalCredits }}
      <b-btn
        v-b-modal="'_TransferredCleanAll'"
        size="sm">
        Remove All Transferred Courses
      </b-btn>
    </p>
    <clean-transferred-courses-modal/>
  </b-card>
</template>

<script>
import draggable from 'vuedraggable'
import Course from '../Items/Course'
import CleanTransferredCoursesModal from '../Modals/CleanTransferredCoursesModal'

export default {
  name: 'TransferredCourses',
  components: {
    Course,
    CleanTransferredCoursesModal,
    draggable
  },
   computed: {
    totalCredits () {
      return this.$store.getters.totalCreditsBySemester(this.$unify.TRANSFERRED_SEMESTER_INDEX)
    },
    transferredCourses: {
      get () {
        return this.$store.getters.renderedTransferred()
      },
      set (value) {
        this.$store.commit('updateCourses', {
          semester: this.$unify.TRANSFERRED_SEMESTER_INDEX,
          courses: value
          })
      }
    }
  }
}
</script>

