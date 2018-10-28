<template>
  <b-modal
    id="_SemesterAddMultiple"
    title="Add Multiple Semesters"
    lazy
    @ok="addMultipleSemester">
    <p>Use <code>Shift</code> to select a Range of Semesters, Use <code>Ctrl</code> to select specific one.</p>
    <b-form-select
      v-model="selectedYear"
      :options="yearSpan"
      multiple
      class="mb-3">
      <option
        slot="first"
        :value="null"
        disabled>Please select Years...</option>
    </b-form-select>
    <b-form-select
      v-model="selectedPeriod"
      :options="periodSpan"
      multiple
      class="mb-3">
      <option
        slot="first"
        :value="null"
        disabled>Please select Periods...</option>
    </b-form-select>
  </b-modal>
</template>

<script>
export default {
  name: 'SemesterAddMultipleModal',
  data() {
    return {
      selectedYear: [],
      selectedPeriod: []
    }
  },
  computed: {
    yearSpan () {
      return this.$unify.YEAR_SPAN_LIST()
    },
    periodSpan () {
      return this.$unify.PERIOD
    }
  },
  methods: {
    addMultipleSemester: function () {
      this.$toasted.info('Adding Semesters, please wait...')
      this.selectedYear.forEach((s) => {
        this.selectedPeriod.forEach((p) => {
          this.$store.dispatch('addSemester', {
            year: s,
            period: p
          })
        })
      })
    }
  }
}
</script>
