<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
import dummy from '../data/dummy.json'
const items = dummy

export default {
  name: 'CourseSelection',
  data () {
    return {
      items: items
    }
  }
}
</script>
