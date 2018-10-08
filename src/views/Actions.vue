<template>
     <b-card-group deck>
        <b-card header="Have AP/transfered Credits?"
                header-tag="header"
                title="Add Transferred Courses">
            <p class="card-text">If you have courses already, add them here so that Organizer will know.</p>
            <b-button :to="{'name': 'WIP'}"
                      variant="primary" size="lg">Add</b-button>
        </b-card>
        <b-card header="Mess up?"
                header-tag="header"
                title="Reset Current Plan">
            <p class="card-text">You may want a clean template and start again. <strong>But your current data won't save!!!</strong></p>
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
      this.$store.commit('cleanCourses')
      this.$router.push({ 'name': 'plan' })
    },
    hideModal () {
      this.$refs.deleteConfirm.hide()
    }
  }
}
</script>
