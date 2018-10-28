<template>
  <b-col
    cols="12"
    lg="4">
    <b-card title="Add a new Semester">
      <p class="card-text">Click the button below to add a new Semester</p>
      <p class="card-text">If you want to remove a semester, click the button at the top of the card</p>
      <hr>
      <add-semester-form/>
      <hr>
      <b-row>
        <!-- https://github.com/angular-ui/bootstrap/issues/1025 -->
        <div
          v-b-tooltip.html.bottom
          title="This function can be used when the plan is empty. To reset your plan, go to Action tab"
          class="ml-3">
          <b-button
            v-b-modal="'_SemesterAddMultiple'"
            :disabled="!isEmptyList"
            size="sm"
            variant="success"
          >Add Multiple Semester
          </b-button>
        </div>
      </b-row>
    </b-card>
    <add-multiple-semester-modal/>
  </b-col>
</template>

<script>
import AddSemesterForm from '../../Form/AddSemester'
import AddMultipleSemesterModal from '../../Modals/SemesterAddMultipleModal'

export default {
  name: 'SemesterPlaceholder',
  components: {
    AddSemesterForm,
    AddMultipleSemesterModal
  },
  computed: {
    isEmptyList () {
      return this.$store.state.plan.semesters.length === 0
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.tool-tip [disabled] {
  pointer-events: none;
}

.tool-tip {
  display: inline-block;
}
</style>
