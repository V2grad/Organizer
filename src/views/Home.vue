<template>
  <b-jumbotron>
    <template slot="header">
      Organizer
    </template>
    <template slot="lead">
      Way to organize your college life.
    </template>
    <hr class="my-4">
    <p>
      Choose an action and get started!
    </p>
    <b-btn
      :to="{'name': 'Plan'}"
      variant="primary">Enter Organizer</b-btn>
    <b-btn
      :to="{'name': 'Profile'}"
      variant="success">View/Import Plans</b-btn>
    <b-btn
      variant="dark"
      href="https://github.com/V2grad/Organizer">About this Project</b-btn>
    <b-btn
      variant="link"
      href="https://v2grad.org">About us</b-btn>
  </b-jumbotron>
</template>
