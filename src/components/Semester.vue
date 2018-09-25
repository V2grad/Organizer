<template>
<b-card-group deck>
  <b-card :header="'Semester ' + year">
    <b-list-group>
<draggable>
    <transition-group>
        <Course :key="this.class" v-bind:name="this.class" v-bind:course_id="this.class"></Course>
    </transition-group>
</draggable>
    </b-list-group>
  </b-card>
</b-card-group>
</template>

<script>
import Course from './Course.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Semester',
  components: {
    draggable,
    Course
  },
  data: function () {
    return {
      year: 0
    }
  }
}
</script>
