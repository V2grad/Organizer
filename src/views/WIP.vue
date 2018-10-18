<template>
  <b-jumbotron
    bg-variant="danger"
    text-variant="white"
    border-variant="dark">
    <template slot="header">
      Organizer
    </template>
    <template slot="lead">
      The page you are looking for is under consturction :(
    </template>
    <hr class="my-4">
    <p>
      We are sorry about that, but you can still use other function at this moment.
    </p>
    <b-btn
      :to="{'name': 'Home'}"
      variant="primary">Go to Main Page</b-btn>
    <b-btn
      variant="success"
      @click="goback()">Go Back</b-btn>
    <b-btn
      variant="dark"
      href="https://github.com/V2grad/Organizer">About this Project</b-btn>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'WIP',
  methods: {
    goback: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
