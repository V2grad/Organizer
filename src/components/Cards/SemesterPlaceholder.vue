<template>
<b-col cols="12" lg="4">
 <b-card title="Add a new Semester">
    <p class="card-text">Click the button below to add a new Semester</p>
    <p class="card-text">If you want to remove a semester, click the button at the bottom of the card</p>
    <p class="card-text"><strong>You can only remove the last semester each time.</strong></p>
    <b-button size="lg" variant="success" v-on:click="addNewSemester">New Semester</b-button>
  </b-card>
</b-col>
</template>

<script>
export default {
  name: 'SemesterPlaceholder',
  methods: {
    addNewSemester: function () {
      this.$store.dispatch('addSemester')
    }
  }
}
</script>
