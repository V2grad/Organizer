<template>
<b-col cols="12" lg="4">
 <b-card title="Add a new Semester">
    <p class="card-text">Click the button below to add a new Semester</p>
    <p class="card-text">If you want to edit/remove a semester, click the button at the top of the card</p>
    <hr/>
    <add-semester-form></add-semester-form>
    <hr/>
    <b-row>
      <!-- https://github.com/angular-ui/bootstrap/issues/1025 -->
      <div v-b-tooltip
          title="This function can be used when the plan is empty. To reset your plan, go to Action tab"
          class="ml-3">
        <b-button size="sm"
                variant="success"
                :disabled="!isEmptyList"
                >Add a range of semesters
        </b-button>
      </div>
    </b-row>
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
