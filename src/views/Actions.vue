<template>
     <b-card-group deck>
        <b-card header="Mess up?"
                header-tag="header"
                title="Reset Current Plan">
            <p class="card-text">You may want a clean template and start again. <strong>This action cannot be undo!!!</strong></p>
            <b-button v-b-modal="'deleteConfirm'"
                      variant="danger" size="lg">Reset My Plan</b-button>
        </b-card>
        <b-modal ref="deleteConfirm" title="Reset your plan" id="deleteConfirm">
            Are you sure you want to reset your plan?
            <div slot="modal-footer" class="w-100">
                <b-btn class="float-right" variant="primary" @click="hideModal()">
                    No!
                </b-btn>
                <b-btn class="float-right" variant="danger" @click="cleanCourses()">
                    Yes
                </b-btn>
            </div>
        </b-modal>
    </b-card-group>
</template>

<script>

export default {
  name: 'Actions',
  methods: {
    cleanCourses () {
      this.$store.commit('cleanPlan')
      this.$router.push({ 'name': 'Plan' })
    },
    hideModal () {
      this.$refs.deleteConfirm.hide()
    }
  }
}
</script>
