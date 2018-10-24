<template>
  <div id="app">
    <NavBar v-if="this.$route.path !== '/'"/>
    <b-container
      fluid
      class="main-container">
      <transition>
        <keep-alive include="ExportPlan">
          <router-view/>
        </keep-alive>
      </transition>
    </b-container>
  </div>
</template>

<style>
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
  overflow-x: scroll;
  min-height: 100%;
  height: 100%;
}

/* https://github.com/SortableJS/Vue.Draggable/issues/44 */
.dragArea {
  min-height: 10px;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
