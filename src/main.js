// Global styles that get transpiled to a .css and then inlined by Critical CSS
import '~/assets/custom-bootstrap.sass'
import VueBabylon from 'vue-babylonjs'

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueBabylon)
}
