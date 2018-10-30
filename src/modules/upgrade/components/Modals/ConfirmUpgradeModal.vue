<template>
  <b-modal
    id="_UpgradeConfirm"
    :ok-disabled="!forceUpgrade"
    header-text-variant="danger"
    title="Upgrade"
    lazy
    @ok="upgrade">
    Are you sure you want to continue?
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ConfirmUpgradeModal',
  computed: mapState({
    forceUpgrade: state => state.upgrade.forceUpgrade,
  }),
  methods: {
    upgrade: function (){
      this.$unify.PURGE_ORGANIZER()
      window.location.href = this.$router.resolve({name: 'Home'}).href
    }
  }
}
</script>
