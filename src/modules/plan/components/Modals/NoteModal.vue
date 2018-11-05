<template>
  <vue-modal
    :min-width="250"
    :min-height="200"
    name="noteModal"
    height="auto"
    draggable
    resizable
    scrollable>
    <h5 class="text-center mt-1">Notepad</h5>
    <b-form-textarea
      v-model="note"
      :rows="10"
      placeholder="Here you can type some notes for this plan, and it will save automatically. You can also drag or resize this card"/>
  </vue-modal>
</template>

<style scoped>
.v--modal-overlay {
  background: rgba(0, 0, 0, 0);
}
</style>


<script>
export default {
  name: 'NoteModal',
  computed: {
    note: {
      get() {
        return this.$store.state.plan.note
      },
      set(note) {
        this.$store.commit('updateNote', note)
      }
    }
  }
}
</script>
