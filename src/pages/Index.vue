<template lang="pug">
// Copyright © 2019, Teemu Haila
  Released under MIT License

  Fira Code by Nikita Prokopov (http://tonsky.me)
  SIL Open Font License

  Jost* by Owen Earl (https://indestructibletype.com)
  SIL Open Font License

div
  div#header.d-flex.justify-content-center.fixed-top
    img(alt="Haila logo" srcset="@/assets/logo-haila-small1x.png 1x, @/assets/logo-haila-small2x.png 2x" src="@/assets/logo-haila-small1x.png")
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
    div.d-flex.justify-content-center: small Handcrafted with ❤️ and 🍺 as <a href="https://gitlab.com/dasinf/haila.fi-v2">open source</a>.
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
  metaInfo: {
    title: 'Home',
    meta: [
      { name: 'author', content: 'Teemu Haila' }
    ]
  },
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


// @import '~bootstrap/scss/bootstrap.scss'

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
  padding-top: 5rem
  p
    margin: 0
  small
    margin-top: 4rem
    margin-bottom: 0.3rem
</style>
