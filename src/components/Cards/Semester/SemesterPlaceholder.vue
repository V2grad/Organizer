<template>
<b-col cols="12" lg="4">
 <b-card title="Add a new Semester">
    <p class="card-text">Click the button below to add a new Semester</p>
    <p class="card-text">If you want to edit/remove a semester, click the button at the top of the card</p>
    <hr/>
    <add-semester-form></add-semester-form>
    <hr/>
    <b-button size="sm" variant="success">Add a range of semesters</b-button>
  </b-card>
</b-col>
</template>

<script>
import AddSemesterForm from '@/components/Form/AddSemester'

export default {
  name: 'SemesterPlaceholder',
  components: {
    AddSemesterForm
  },
  methods: {
  }
}
</script>
