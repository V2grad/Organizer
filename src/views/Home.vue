<template>
<b-jumbotron>
  <template slot="header">
    Organizer
  </template>
  <template slot="lead">
    This is a website that helps you organize your college life.
</template>
  <hr class="my-4">
  <p>
    Choose an action and get started!
  </p>
  <b-btn variant="primary" :to="{'name': 'Plan'}">Enter Organizer</b-btn>
  <b-btn variant="success" :to="{'name': 'Profile'}">View/Import Plans</b-btn>
  <b-btn variant="dark" href="https://github.com/V2grad/Organizer">About this Project</b-btn>
  <b-btn variant="link" href="https://v2grad.org">About us</b-btn>
</b-jumbotron>
</template>
