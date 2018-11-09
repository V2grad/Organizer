<template>
  <div>
    <direct-generate-p-d-f
      v-if="decodedObject.status"
      :decoded-object="decodedObject"/>
    <unable-to-import-card
      v-else
      :decoded-object="decodedObject"/>
  </div>
</template>

<script>
import DirectGeneratePDF from '../components/Cards/DirectGeneratePDF'
import UnableToImportCard from '../components/Cards/UnableToImportCard'
import { decodeAndInflate } from '@/utils/compress'

export default {
  name: 'ExportPlan',
  components: {
    DirectGeneratePDF,
    UnableToImportCard
  },
  computed: {
    encodedData () {
      return this.$route.params.json
    },
    decodedObject () {
      return decodeAndInflate(this.encodedData)
    },
  }
}
</script>
