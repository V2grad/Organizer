<template>
<b-navbar toggleable="md" type="dark" variant="info" fixed="top" sticky="true" class="justify-content-center">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand :to="{'name': 'home'}">Organizer</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item :to="{'name': 'plan'}">Plan</b-nav-item>
      <b-nav-item :to="{'name': 'CourseSelect'}">Courses</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown text="Navigate" right>
        <b-dropdown-item :to="{'name': 'home'}">Main Page</b-dropdown-item>
      </b-nav-item-dropdown>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>
