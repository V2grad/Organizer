<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <keep-alive>
            <custom-course/>
          </keep-alive>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CustomCourse from '../components/Cards/CustomCourse'

export default {
  name: 'CustomCoursePage',
  components: {
    CustomCourse
  }
}
</script>
