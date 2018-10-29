<template>
  <b-card
    title="Upgrade Organizer"
    class="mb-2">
    <p class="card-text">
      We are sorry to tell you that Organizer need an upgrade and we need to wipe out your data because of this.
      <br>
      However, you can export all data stored in Organizer by now before we begin the process.
    </p>
    <b-button-group slot="footer">
      <b-btn
        variant="primary"
        @click="downloadData">Download data</b-btn>
      <b-btn
        v-b-modal._UpgradeConfirm
      >Upgrade</b-btn>
    </b-button-group>
    <confirm-upgrade-modal/>
  </b-card>
</template>

<script>
import ConfirmUpgradeModal from '../components/Modals/ConfirmUpgradeModal'

export default {
  name: 'ForceUpgrade',
  components: {
    ConfirmUpgradeModal
  },
  methods: {
    downloadData: function () {
      this.$toasted.info('Collecting data...')
      let data = {}
      for (let i = 0; i < localStorage.length; i++) {
        data[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
      }
      let json = JSON.stringify(data)
      let blob = new Blob([json], {type: "octet/stream"})
      this.$saveAs.saveAs(blob, "Organizer.json")
    }
  }
}
</script>
