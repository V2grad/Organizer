<template>
  <b-card :header="'Course List'">
    <b-container fluid>
      <b-row>
        <b-col md="6">
          <b-form-group
            label-cols-sm="3"
            label="Filter">
            <b-input-group>
              <b-form-input
                v-model="filter"
                placeholder="Type to Search" />
              <b-input-group-append>
                <b-btn
                  :disabled="!filter"
                  @click="filter = ''">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-cols-sm="3"
            label="Sort">
            <b-input-group>
              <b-form-select
                v-model="sortBy"
                :options="sortOptions">
                <option
                  slot="first"
                  :value="null">-- none --</option>
              </b-form-select>
              <b-form-select
                slot="append"
                :disabled="!sortBy"
                v-model="sortDesc">
                <option :value="false">Asc</option>
                <option :value="true">Desc</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-cols-sm="3"
            label="Sort direction">
            <b-input-group>
              <b-form-select
                slot="append"
                v-model="sortDirection">
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
                <option value="last">Last</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-cols-sm="3"
            label="Per page">
            <b-form-select
              :options="pageOptions"
              v-model="perPage" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-table
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            show-empty
            responsive
            striped
            hover
            @filtered="onFiltered"
          >
            <template
              slot="actions"
              slot-scope="row">
              <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
              <b-button
                v-b-modal.courseSelectionModal
                size="sm"
                class="mr-1"
                @click.stop="info(row.item)">
                Add This Course
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-pagination
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"/>
        </b-col>
      </b-row>
      <course-selection-modal
        :course="selectedCourse"/>
    </b-container>
  </b-card>
</template>

<script>
import CourseSelectionModal from '../Modals/CourseSelectionModal'

export default {
  name: 'CourseSelection',
  components: {
    CourseSelectionModal
  },
  data () {
    return {
      fields: [
        { key: 'CourseName', label: 'Course Name', sortable: true, sortDirection: 'desc' },
        { key: 'CourseTitle', label: 'Course Title', sortable: true, 'class': 'text-center' },
        { key: 'CreditHours', label: 'Credit Hours', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 10,
      pageOptions: [ 5, 10, 15 ],
      currentRows: null,
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      selectedCourse: null,
    }
  },
  computed: {
    items () {
      return this.$store.state.data.data
    },
    totalRows: {
      get () {
        return this.currentRows === null ? this.items.length : this.currentRows
      },
      set (value) {
        this.currentRows = value
      }
    },
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    info (item) {
      this.selectedCourse = item
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
