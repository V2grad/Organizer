<template>
  <vue-modal
    :min-width="150"
    :min-height="200"
    name="noteModal"
    height="200"
    width="150"
    draggable
    resizable
  >
    <div class="mb-1 mt-1 wrapper">
      <h5 class="text-center">Notepad</h5>
      <b-form-textarea
        v-model="note"
        no-resize
        class="area"
        placeholder="Here you can type some notes for this plan, and it will save automatically. You can also drag or resize this card"/>
    </div>
  </vue-modal>
</template>

<style scoped>
.v--modal-overlay {
  background: rgba(0, 0, 0, 0);
}
.wrapper {
  height: 100%;
}
.area {
  height: 85%;
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
