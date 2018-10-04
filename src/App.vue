<template>
  <div id="app">
      <navBar v-if="this.$route.path !== '/'"></navBar>
      <b-container fluid class="container-padding">
      <transition>
        <router-view/>
      </transition>
      </b-container>
  </div>
</template>

<style>
body {
  background-image: url("https://www.rpi.edu/dept/cct/apps/web-branding/v1/footer/footer-background.jpg");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-attachment: fixed;
  background-size: cover;
}

/* The nav is position:fixed */
.container-padding {
  padding-top: 100px;
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
