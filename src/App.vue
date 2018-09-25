<template>
  <div id="app">
      <navBar v-if="this.$router.path !== '/'"></navBar>
      <transition>
    <router-view/>
      </transition>
  </div>
</template>

<style>
body {
  background-image: url("https://www.rpi.edu/dept/cct/apps/web-branding/v1/footer/footer-background.jpg");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-attachment: fixed;
  background-size: cover;
}
</style>

<script>
import navBar from './components/navBar.vue'

export default {
  components: {
    navBar
  }
}
</script>
