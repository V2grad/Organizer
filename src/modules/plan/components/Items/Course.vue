<template>
  <div>
    <b-list-group-item
      v-b-popover.hover="{title: currentCourse.CourseTitle,
                          content: 'Credit Hours: ' + currentCourse.CreditHours,
                          delay: { show: 1000, hide: 0 }}"
      :variant="colorToVariant[currentColor]"
      class="list-complete-item d-flex justify-content-between align-items-center"
      @contextmenu.prevent="$refs.menu.open"
    >
      {{ currentCourse.CourseName }}
      <b-btn
        class="d-none d-md-block"
        variant="outline-danger"
        @click="removeCourse">
        <font-awesome-icon icon="times" />
      </b-btn>
      <b-dropdown
        class="d-md-none"
        right
        text="Actions"
        variant="light"
      >
        <b-dropdown-item
          class="text-danger"
          @click="removeCourse"
        >
          Remove
        </b-dropdown-item>
        <b-dropdown-divider/>
        <b-dropdown-item
          v-for="color in colors"
          :key="color"
          @click="setColor($event.target.innerText)">
          {{ color }}
        </b-dropdown-item>
      </b-dropdown>
    </b-list-group-item>
    <vue-context
      ref="menu">
      <ul>
        <li
          v-for="color in colors"
          :key="color"
          @click="setColor($event.target.innerText)">
          {{ color }}
        </li>
      </ul>
    </vue-context>
  </div>
</template>

<script>
import {
  VueContext
} from 'vue-context'

export default {
  name: 'Course',
  components: {
    VueContext,
  },
  props: {
    CourseName: {
      type: String,
      default: 'Unknown Course'
    },
    CourseTitle: {
      type: String,
      default: 'Unknown Title'
    },
    CreditHours: {
      type: String,
      default: '0'
    },
    custom: {
      type: Boolean,
      default: false
    },
    uuid: {
      type: String,
      default: '_CUSTOM'
    },
    color: {
      type: String,
      default: 'white'
    },
    semesterIndex: {
      type: Number,
      required: true
    },
    courseIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      colors: [
        'Red',
        'Green',
        'Blue',
        'Yellow',
        'White'
      ],
      colorToVariant: {
        Red: 'danger',
        Yellow: 'warning',
        Blue: 'primary',
        Green: 'success',
        White: 'white'
      }
    }
  },
  computed: {
    currentColor () {
      return this.color === null ? 'white' : this.color
    },
    currentCourse () {
      if (this.custom){
        return {
          CourseName: this.CourseName,
          CourseTitle: this.CourseTitle,
          CreditHours: this.CreditHours
        }
      } else {
        return {
          ...this.$store.getters.detailsByUuid(this.uuid)
        }
      }
    }
  },
  methods: {
    setColor (text) {
       this.$store.dispatch('updateCourseColor', {
         semesterIndex: this.semesterIndex,
         courseIndex: this.courseIndex,
         color: text
       })
    },
    removeCourse () {
      this.$store.dispatch('removeCourseModal', {
        courseIndex: this.courseIndex,
        semesterIndex: this.semesterIndex
      })
    }
  }
}
</script>
