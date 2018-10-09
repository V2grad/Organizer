<template>
<b-card header="Want to print your plan?"
        header-tag="header"
        title="Export as PDF"
        footer-tag="footer">
            <p class="card-text">Generate a PDF and get your plan ready in a nice table!</p>
             <p>
                <b-form-checkbox v-model="exportChecked" :disabled="exportDisabled" v-b-tooltip title="You need to click on the Generate Shortened Link on the Export Your Plan Panel before enabling this function">
                    Include Plan's short URL and QrCode in the PDF
                </b-form-checkbox>
            </p>
            <em slot="footer" class="w-100">
                <b-button v-on:click="downloadPDF" variant="primary" size="lg">Download the PDF</b-button>
            </em>
</b-card>
</template>

<script>
import { generatePDF, addShortURL, addCopyright } from '../utils/pdf'

export default {
  name: 'PrintCard',
  data () {
    return {
      exportChecked: false,
      exportDisabled: false
    }
  },
  created: function () {
    // Check value before created.
    this.exportDisabled = this.$store.state.local.shortenedURL === ''
  },
  watch: {
    shortenedURL: function (newValue, oldValue) {
      if (newValue === '') {
        this.exportChecked = false
        this.exportDisabled = true
      } else {
        this.exportDisabled = false
      }
    }
  },
  computed: {
    shortenedURL () {
      return this.$store.state.local.shortenedURL
    }
  },
  methods: {
    downloadPDF () {
      let doc = generatePDF(this.$store.state.plan)
      if (this.exportChecked === true) {
        doc = addShortURL(doc, this.shortenedURL)
      }
      doc = addCopyright(doc)
      doc.save(this.$store.state.plan.name + '.pdf')
    }
  }
}
</script>
