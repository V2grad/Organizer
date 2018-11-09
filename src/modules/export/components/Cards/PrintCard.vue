<template>
  <b-card
    header="Want to print your plan?"
    header-tag="header"
    title="Export as PDF"
    footer-tag="footer">
    <p class="card-text">Generate a PDF and get your plan ready in a nice table!</p>
    <p>
      <b-form-checkbox
        v-b-tooltip
        v-model="exportChecked"
        :disabled="exportDisabled"
        title="You need to click on the Generate Shortened Link on the Export Your Plan Panel before enabling this function">
        Include Plan's short URL and QrCode in the PDF
      </b-form-checkbox>
    </p>
    <em
      slot="footer"
      class="w-100">
      <b-button
        variant="primary"
        size="lg"
        @click="downloadPDF">Download the PDF</b-button>
    </em>
  </b-card>
</template>

<script>
import { generatePDF } from '@/utils/pdf'

export default {
  name: 'PrintCard',
  data () {
    return {
      exportChecked: false,
      exportDisabled: false
    }
  },
  computed: {
    shortenedURL () {
      return this.$store.state.local.shortenedURL
    }
  },
  watch: {
    shortenedURL: function (newValue) {
      if (newValue === '') {
        this.exportChecked = false
        this.exportDisabled = true

      } else {
        this.exportDisabled = false
      }
    }
  },
  created: function () {
    // Check value before created.
    this.exportDisabled = this.$store.state.local.shortenedURL === ''
  },
  methods: {
    downloadPDF () {
      this.$toasted.info('PDF Generating...')
      let URL = this.exportChecked ? this.shortenedURL : null
      let doc = generatePDF({
        semesters: this.$store.getters.renderedSemesters(),
        transferred: this.$store.getters.renderedTransferred(),
        note: this.$store.state.plan.note,
        name: this.$store.state.plan.name
      }, URL)
      doc.download(this.$store.state.plan.name + '.pdf')
      this.$toasted.success('PDF Generated!')
    }
  }
}
</script>
