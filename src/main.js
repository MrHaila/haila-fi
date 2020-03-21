// Global styles that get transpiled to a .css and then inlined by Critical CSS
import '~/assets/custom-bootstrap.sass'
import GridsomeScrollReveal from 'gridsome-scroll-reveal'

export default function (Vue, context) {
  Vue.use(GridsomeScrollReveal, {
    duration: 800,
    distance: '-30px',
    reset: false,
    mobile: false
  })
}
