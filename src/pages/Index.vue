<template lang="pug">
div
  div#header.d-flex.justify-content-center.fixed-top
    g-image(alt="Haila logo" src="~/assets/haila.png" width="100" fit="inside")
  div#empty-header

  logo-toy
  multipotentiality
  serious-business
  award
  job-wall
  photography

  div#footer
    p.d-flex.justify-content-center Email me, maybe?
    h4.d-flex.justify-content-center teemu@haila.fi
    div.d-flex.justify-content-center: small Handcrafted with ❤️and 🍺as <a href="">open source</a>.
</template>

<script>
import LogoToy from '~/components/LogoToy.vue'
import Multipotentiality from '~/components/Multipotentiality.vue'
import SeriousBusiness from '~/components/SeriousBusiness.vue'
import Award from '~/components/Award.vue'
import JobWall from '~/components/JobWall.vue'
import Photography from '~/components/Photography.vue'

export default {
  name: 'Index',
  components: {
    LogoToy,
    Multipotentiality,
    SeriousBusiness,
    Award,
    JobWall,
    Photography
  }
}
</script>

<style lang="sass">
@import url('https://indestructibletype.com/fonts/Jost.css')
@import url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css')
$font-family-sans-serif: "Jost", sans-serif
$font-family-monospace: "Fira Code", monospace

$enable-shadows: true

@import '~bootstrap/scss/bootstrap.scss'
@import '~bootstrap-vue/src/index.scss'

h1
  font-weight: 700
  font-size: 2.2rem

#header
  background-color: rgb(255, 255, 255)
  padding-top: 0.8rem
  padding-bottom: 0.8rem
  z-index: 10
  box-shadow: 1px 0px 2px rgba(0, 0, 0, .2)

#empty-header
  height: 3.6rem

#footer
  padding-top: 3rem
  p
    margin: 0
  small
    margin-top: 4rem
    margin-bottom: 0.3rem
</style>
