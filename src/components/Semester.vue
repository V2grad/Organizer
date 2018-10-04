<template>
<b-col cols="12" lg="4">
<b-card-group deck>
  <b-card :header="'Semester ' + semester">
    <b-list-group>
<draggable>
    <transition-group>
        <Course :key="this.class" v-bind:name="this.class" v-bind:course_id="this.class"></Course>
    </transition-group>
</draggable>
    </b-list-group>
    <em v-if="totalSemester === Number(semester)" slot="footer">
      <b-btn v-on:click="removeSemester">Remove This Semester</b-btn>
    </em>
  </b-card>
</b-card-group>
</b-col>
</template>

<script>
import Course from './Course.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Semester',
  props: {
    semester: {
      type: Number,
      required: true
    },
    courses: {
      required: true
    }
  },
  components: {
    draggable,
    Course
  },
  computed: {
    totalSemester () {
      return this.$store.getters.currentSemester
    }
  },
  methods: {
    removeSemester: function () {
      this.$store.dispatch('removeSemester', this.semester)
    }
  }
}
</script>
