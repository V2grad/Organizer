<template>
  <b-jumbotron
    bg-variant="danger"
    text-variant="white"
    border-variant="dark">
    <template slot="header">
      Organizer
    </template>
    <template slot="lead">
      You are currently OFFLINE and cache is NOT available.
    </template>
    <hr class="my-4">
    <p>
      We are sorry about that, please check your Internet Connections if this is not desired results. You can still try using other cached functions.
    </p>
    <b-btn
      :to="{'name': 'Home'}"
      variant="primary">Go to Main Page</b-btn>
    <b-btn
      variant="success"
      @click="goback()">Go Back</b-btn>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'CacheMissed',
  methods: {
    goback: function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
