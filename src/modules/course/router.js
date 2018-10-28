export default [{
  path: '/courses/custom',
  name: 'CustomCourse',
  component: () => import( /* webpackChunkName: "course" */ './views/CustomCourse')
}, {
  path: '/courses',
  name: 'CourseSelect',
  component: () => import( /* webpackChunkName: "course" */ './views/CourseSelect')
}]
