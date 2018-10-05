<template>
    <b-card title="Import a Plan">
    <p class="card-text">
      To import a plan, click on the link that generated from other's or by yourself and Organizer will handle that for you.
    </p>
    <em slot="footer">
        <b-btn variant="primary" :to="{name: 'home'}">Back to Main Page</b-btn>
    </em>
  </b-card>
</template>

<script>

export default {
  name: 'ImportPlanLanding'
}
</script>
