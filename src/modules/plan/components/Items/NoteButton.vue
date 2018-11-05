<template>
  <div id="noteButtonLayout">
    <b-btn
      class="noteBtn"
      @click="openNoteModal"
    >
      Note
    </b-btn>
    <note-modal/>
  </div>
</template>

<style scoped>
.noteBtn {
  padding: 10px 20px;
  border-radius: 4px;
  border-color: #31b0d5;
  background-color: #31b0d5;
}

#noteButtonLayout {
  position: fixed;
  bottom: 50px;
  left: -4px;
}
</style>

<script>
import NoteModal from '../Modals/NoteModal'

export default {
  name: 'NoteButton',
  components: {
      NoteModal
  },
  methods: {
    openNoteModal() {
      this.$modal.show('noteModal')
    }
  }
}
</script>

