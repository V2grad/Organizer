<template>
<div>
    <b-list-group-item class="list-complete-item d-flex justify-content-between align-items-center">
        {{ ProfileName }}
        <b-btn class="btn-outline-danger"
        v-b-modal=""
        variant="danger">
        <font-awesome-icon icon="times" />
        </b-btn>
    </b-list-group-item>
</div>
</template>

<script>
export default {
  name: 'ProfileItem',
  props: {
    ProfileName: {
      type: String,
      required: true
    },
    ProfileID: {
      type: String,
      required: true
    }
  },
  components: {
  }
}
</script>
