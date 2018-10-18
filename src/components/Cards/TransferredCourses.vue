<template>
  <b-card
    header="WOW, study in advance? Enjoy!"
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
        <transferred-course
          v-for="(course, index) in transferredCourses"
          :key="index"
          v-bind="course"
          :course-index="index"/>
      </transition-group>
    </draggable>
    <ul
      v-if="!transferredCourses[0]"
      class="list-group mb-2">
      <li class="list-group-item list-group-item-info">EMPTY LIST</li>
    </ul>
    <em slot="footer">
      Credits: {{ totalCredits }}
    </em>
  </b-card>
</template>

<script>
import draggable from 'vuedraggable'
import TransferredCourse from '@/components/Items/TransferredCourse'

export default {
  name: 'TransferredCourses',
  components: {
    TransferredCourse,
    draggable
  },
   computed: {
    totalCredits () {
      let credits = 0
      this.$store.state.plan.transferred.forEach((c) => {
        credits = credits + parseInt(c.CreditHours)
      })
      return credits
    },
    transferredCourses: {
      get () {
        return this.$store.state.plan.transferred
      },
      set (value) {
        this.$store.commit('updateTransferredCourses', value)
      }
    }
  }
}
</script>

