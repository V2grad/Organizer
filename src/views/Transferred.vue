<template>
  <div>
    <b-row>
      <b-col>
        <transferred-courses/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TransferredCourses from '@/components/Cards/TransferredCourses'

export default {
  components: {
    TransferredCourses
  },
  computed: {
  }
}
</script>
