<template>
  <b-navbar toggleable="sm" type="dark" variant="info" fixed="top" class="nav-padding">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{'name': 'home'}">Organizer</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item-dropdown text="Plan" >
          <b-dropdown-item :to="{'name': 'Plan'}">Your Plan</b-dropdown-item>
          <b-dropdown-item :to="{'name': 'WIP'}">Transferred/AP</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Course">
          <b-dropdown-item :to="{'name': 'CourseSelect'}" exact>Courses</b-dropdown-item>
          <b-dropdown-item :to="{'name': 'CustomCourse'}" exact>Custom Courses</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item :to="{'name': 'Actions'}">Actions</b-nav-item>
        <b-nav-item :to="{'name': 'ExportPlan'}">Export</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Navigate" right>
          <b-dropdown-item :to="{'name': 'Profile'}">
           Current Profile: {{ planName }}
          </b-dropdown-item>
          <br/>
          <b-dropdown-item :to="{'name': 'home'}" exact>
            Back to Welcome Page
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<style scoped>
.nav-padding {
  position: fixed;
}
</style>

<script>
export default {
  name: 'NavBar',
  computed: {
    planName () {
      return this.$store.state.plan.name
    }
  }
}
</script>
