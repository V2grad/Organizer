<template>
 <b-container class="bv-example-row" fluid>
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
  <b-btn variant="primary" :to="{'name': 'plan'}">Enter Organizer</b-btn>
  <b-btn variant="success" :to="{'name': 'WIP'}">Import a Plan</b-btn>
  <b-btn variant="dark" href="https://github.com/V2grad/Organizer">About this Project</b-btn>
</b-jumbotron>
</b-container>
</template>
