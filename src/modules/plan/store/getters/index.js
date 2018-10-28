import course from './course'
import period from './period'
import render from './render'
import semester from './semester'

export default {
  ...course,
  ...period,
  ...render,
  ...semester
}
