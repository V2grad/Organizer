<template>
  <div>
    <import-card
      v-if="decodedObject.status"
      :decoded-object="decodedObject"/>
    <unable-to-import-card
      v-else
      :decoded-object="decodedObject"/>
  </div>
</template>

<script>
import ImportCard from '../components/Cards/ImportCard'
import UnableToImportCard from '../components/Cards/UnableToImportCard'
import { decodeAndInflate } from '@/utils/compress'

export default {
  name: 'ExportPlan',
  components: {
    ImportCard,
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
