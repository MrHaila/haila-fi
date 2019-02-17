<template lang="pug">
div
  div#header.d-flex.justify-content-center
    g-image(alt="Haila logo" src="~/assets/haila.png" width="120" fit="inside")

  logo-toy
  multipotentiality
  serious-business
  award
  job-wall
  photography

  div#footer
    p.d-flex.justify-content-center Email me, maybe?
    h4.d-flex.justify-content-center teemu@haila.fi
    div.d-flex.justify-content-center: small Handcrafted with ❤️ and 🍺 as <a href="">open source</a>.
</template>

<script>
import LogoToy from '~/components/LogoToy.vue'
import Multipotentiality from '~/components/Multipotentiality.vue'
import SeriousBusiness from '~/components/SeriousBusiness.vue'
import Award from '~/components/Award.vue'
import JobWall from '~/components/JobWall.vue'
import Photography from '~/components/Photography.vue'

export default {
  name: "index",
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
#header
  background-color: rgb(255, 255, 255)
  padding-top: 0.5rem
  padding-bottom: 0.5rem
  position: sticky

#footer
  padding-top: 3rem
  p
    margin: 0
  small
    margin-top: 4rem
</style>
