<template>
  <b-card header="Note">
    <ul>
      <li>Profiles are storage for plans</li>
      <li><strong>Your plan won't save into the profile unless you press Save button or switch to a different profile. (Auto save when switching)</strong></li>
      <li>You can always <strong>Reload your plan</strong> before saving.</li>
      <li>Snapshot will take your current state and create a new Profile at the bottom list</li>
    </ul>
    <h6>Import Plan</h6>
    <p class="card-text">
      To import a plan, click on the link that generated by others or by yourself and Organizer will handle that for you.
    </p>
    <h6>Edit Plan Name</h6>
    <p class="card-text">
      You can edit current plan name at <router-link :to="{name: 'ExportPlan'}">Export Tab</router-link>, or at the time you import your plan.
    </p>
  </b-card>
</template>
