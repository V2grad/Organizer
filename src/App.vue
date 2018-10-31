<template>
  <div id="app">
    <loading-modal/>
    <router-view/>
  </div>
</template>

<style>
/* Extend parent elements */
html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  background-image: url("https://www.rpi.edu/dept/cct/apps/web-branding/v1/footer/footer-background.jpg");
  /*background-repeat: no-repeat; /* Do not repeat the image disabled for now, for mobile device. */
  background-size: cover;
}

/* The nav is position:fixed */
.main-container {
  padding-top: 100px;
  min-height: 100%;
  height: 100%;
}

/* https://github.com/SortableJS/Vue.Draggable/issues/44 */
.dragArea {
  min-height: 10px;
}

</style>

<script>
import LoadingModal from '@/components/Modals/LoadingModal'

export default {
  components: {
    LoadingModal
  },
  computed: {
    courseData: function () {
      return this.$store.state.data.data
    }
  },
  watch: {
    courseData: function () {
      this.$store.dispatch('checkData')
    }
  },
  created () {
    this.$store.dispatch('checkCurrentVersion')
    this.$store.dispatch('checkData')
  },
}
</script>
