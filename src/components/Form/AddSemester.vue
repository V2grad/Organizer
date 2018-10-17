<template>
     <b-form inline>
       <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                     :value="null"
                     v-model="selectedYear"
                     :options="yearOptions"
                     >
        <option slot="first" :value="null">Year...</option>
      </b-form-select>
       <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                     :value="null"
                     :options="periodOptions"
                     v-model="selectedPeriod">
        <option slot="first" :value="null">Period...</option>
      </b-form-select>
      <b-button variant="primary" :disabled="!buttonEnabled" size="sm" @click="addSemester">Add Semester</b-button>
    </b-form>
</template>

<script>
export default {
  name: 'AddSemesterForm',
  data () {
    return {
      selectedYear: null,
      selectedPeriod: null
    }
  },
  computed: {
    yearOptions () {
      return this.$store.getters.getYearSpan
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
