<template>
  <b-card-group deck>
    <keep-alive>
      <export-card/>
    </keep-alive>
    <print-card/>
  </b-card-group>
</template>

<script>
import PrintCard from '../components/Cards/PrintCard'
import ExportCard from '../components/Cards/ExportCard'

export default {
  name: 'ExportPlan',
  components: {
    PrintCard,
    ExportCard
  }
}
</script>
