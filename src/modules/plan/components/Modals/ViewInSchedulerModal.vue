<template>
  <b-modal
    ref="_ViewInScheduler"
    :ok-disabled="!validate"
    title="View in Scheduler"
    @ok="JumpToScheduler"
  >
    You are about to view this semester in <span v-html="dataSource"/>
  </b-modal>
</template>

<script>
export default {
  name: 'ViewInSchedulerModal',
  data () {
    return {
      hook: null,
      courses: null,
    }
  },
  computed: {
    validate () {
      return this.courses !== null
    },
    dataSource () {
      return this.$store.state.data.dataSource
    }
  },
  created() {
    this.hook = this.$store.subscribeAction((action) => {
      if (action.type === 'viewInScheduler'){
        this.courses = action.payload
        this.$refs._ViewInScheduler.show()
      }
    })
  },
  beforeDestroy () {
    // Unregister Subscribe
    this.hook()
  },
  methods: {
    JumpToScheduler: function () {
      let href = this.$unify.JUMP_TO_SCHEDULER(this.courses)
      window.open(href, '_blank');
    },
    resetModal () {
      this.$refs._ViewInScheduler.hide()
      this.courses = null
    }
  }
}
</script>
