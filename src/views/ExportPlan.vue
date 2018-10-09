<template>
<b-card-group deck>
  <keep-alive>
    <export-card></export-card>
  </keep-alive>
  <print-card></print-card>
</b-card-group>
</template>

<script>
import PrintCard from '../components/PrintCard'
import ExportCard from '../components/ExportCard'

export default {
  name: 'ExportPlan',
  components: {
    PrintCard,
    ExportCard
  }
}
</script>
