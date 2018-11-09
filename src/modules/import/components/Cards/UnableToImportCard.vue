<template>
  <b-card
    bg-variant="danger"
    text-variant="white"
    title="An Error Occur">
    <p class="card-text">
      Organizer is not able to process this link, please try again later or check if some parts of the link are missing.
    </p>
    <pre>{{ decodedObject.message }}</pre>
    <b-button
      :to="{'name': 'Home'}"
      variant="primary">Back to Home Page</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'UnableToImportCard',
  props: {
    decodedObject: {
      type: Object,
      required: true
    }
  }
}
</script>

