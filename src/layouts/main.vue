<template>
  <div id="normal">
    <NavBar/>
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
/* Extend parent elements */
#normal {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'NormalLayout',
  components: {
    NavBar
  },
  mounted (){
    if (this.$store.state.upgrade.forceUpgrade === true){
      this.$router.push({name: 'ForceUpgrade'})
    }
  }
}
</script>


