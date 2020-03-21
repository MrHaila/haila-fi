// Global styles that get transpiled to a .css and then inlined by Critical CSS
import '~/assets/custom-bootstrap.sass'
import VueScrollReveal from 'vue-scroll-reveal'

export default function (Vue, context) {
  if (context.isClient) {
    Vue.use(VueScrollReveal, {
      duration: 800,
      distance: '-30px',
      reset: false,
      mobile: false
    })
  }
}
