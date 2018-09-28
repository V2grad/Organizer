<template>
<div>
    <b-row class="flex-row flex-nowrap">
         <b-col cols="12" lg="4"><semester></semester></b-col>
         <b-col cols="12" lg="4"><semester></semester></b-col>
         <b-col cols="12" lg="4"><semester></semester></b-col>
         <b-col cols="12" lg="4"><semester></semester></b-col>
         <b-col cols="12" lg="4"><semester></semester></b-col>
         <b-col cols="12" lg="4"><semester></semester></b-col>
    </b-row>
</div>
</template>

<script>
import navBar from '../components/navBar.vue'
import Semester from '../components/Semester.vue'

export default {
  components: {
    Semester,
    navBar
  }
}
</script>
