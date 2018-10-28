<template>
  <b-form inline>
    <b-form-select
      :value="null"
      v-model="selectedYear"
      :options="yearOptions"
      class="mb-2 mr-sm-2 mb-sm-0"
    >
      <option
        slot="first"
        :value="null">Year...</option>
    </b-form-select>
    <b-form-select
      :value="null"
      :options="periodOptions"
      v-model="selectedPeriod"
      class="mb-2 mr-sm-2 mb-sm-0">
      <option
        slot="first"
        :value="null">Period...</option>
    </b-form-select>
    <b-button
      :disabled="!buttonEnabled"
      variant="primary"
      size="sm"
      @click="addSemester">Add Semester</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'SemesterModal',
  data () {
    return {
      selectedYear: null,
      selectedPeriod: null
    }
  },
  computed: {
    yearOptions () {
      return this.$unify.YEAR_SPAN_LIST()
    },
    periodOptions () {
      if (this.selectedYear === null) {
        return []
      } else {
        return this.$store.getters.getSelectablePeriod(this.selectedYear)
      }
    },
    buttonEnabled () {
      return this.selectedYear && this.selectedPeriod
    }
  },
  methods: {
    addSemester () {
      this.$store.dispatch('addSemester', { year: this.selectedYear, period: this.selectedPeriod })
      this.$toasted.success('Add Semester Successfully')
      this.resetOptions()
    },
    resetOptions () {
      this.selectedPeriod = null
    }
  }
}
</script>
