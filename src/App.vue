<template>
  <div id="app">
      <NavBar v-if="this.$route.path !== '/'"></NavBar>
      <b-container fluid class="container-padding">
      <transition>
        <keep-alive include="ExportPlan">
          <router-view/>
        </keep-alive>
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
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
