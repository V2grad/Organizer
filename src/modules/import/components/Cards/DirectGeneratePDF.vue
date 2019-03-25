<template>
  <b-card
    title="Download a Plan">
    <p class="card-text">
      You are about to generate a PDF preview for Plan <strong>{{ planName }}</strong>.
    </p>
    <incompatible-schemas-alert
      :version="version"/>
    <p class="card-text">
      Are you sure you want to continue? (Without Saving to your profile)
    </p>
    <em slot="footer">
      <b-button-group size="lg">
        <b-btn
          variant="success"
          @click="generatePDF">Yes</b-btn>
        <b-btn
          :to="{name: 'Home'}"
          variant="danger">No</b-btn>
      </b-button-group>
    </em>
  </b-card>
</template>

<script>
import IncompatibleSchemasAlert from '../Alerts/IncompatibleSchemasAlert'
import { generatePDF } from '@/utils/pdf'

export default {
  name: 'DirectGeneratePDFCard',
  components: {
    IncompatibleSchemasAlert
  },
  props: {
    decodedObject: {
      type: Object,
      required: true
    }
  },
  computed: {
    planName () {
      return this.decodedObject.obj.name
    },
    version () {
      return this.decodedObject.obj.version
    }
  },
  methods: {
    generatePDF: function () {
      this.$toasted.info('PDF Generating...')

      let doc = generatePDF({
        semesters: this.$store.getters.renderedSemesters(this.decodedObject.obj),
        transferred: this.$store.getters.renderedTransferred(this.decodedObject.obj),
        note: this.decodedObject.note,
        name: this.$store.state.plan.name
      }, null) // Don't generate link

      doc.download(this.$store.state.plan.name + '.pdf')
      
      this.$toasted.success('PDF Generated!')
    }
  }
}
</script>

