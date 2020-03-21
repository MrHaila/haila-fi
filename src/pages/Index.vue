<template lang="pug">
// Copyright © 2020, Teemu Haila
  Released under MIT License

  Fira Code by Nikita Prokopov (http://tonsky.me)
  SIL Open Font License

  Jost* by Owen Earl (https://indestructibletype.com)
  SIL Open Font License

div
  div#header.d-flex.justify-content-center.fixed-top(:class="$refs.toy && pos > $refs.toy.$el.clientHeight ? 'show' : 'hide'")
    img(alt="Haila logo" srcset="@/assets/logo-haila-small1x.png 1x, @/assets/logo-haila-small2x.png 2x" src="@/assets/logo-haila-small1x.png")

  header-toy(@updateclicks="updateClicks" ref="toy")/
  multipotentiality/
  metaplay/
  serious-business/
  award/
  job-wall/
  photography/

  div#footer
    p.d-flex.justify-content-center Email me, maybe?
    h4.d-flex.justify-content-center teemu@haila.fi
    div.bottom.text-center
      small.text-muted Global logo tapping 👆 stats: #[strong H] {{clicks.h1}}, #[strong A] {{clicks.a2}}, #[strong I] {{clicks.i3}}, #[strong L] {{clicks.l4}}, #[strong A] {{clicks.a5}}
      br/
      small Handcrafted with ❤️ and 🍺 as <a href="https://gitlab.com/dasinf/haila.fi-v2">open source</a>.
</template>

<page-query>
query {
  metadata {
    siteName,
    siteUrl,
    siteDescription
  }
}
</page-query>

<script>
import HeaderToy from '~/components/HeaderToy.vue'
import Multipotentiality from '~/components/Multipotentiality.vue'
import Metaplay from '~/components/Metaplay.vue'
import SeriousBusiness from '~/components/SeriousBusiness.vue'
import Award from '~/components/Award.vue'
import JobWall from '~/components/JobWall.vue'
import Photography from '~/components/Photography.vue'

export default {
  name: 'Index',
  metaInfo: function () {
    return {
      title: 'Home',
      meta: [
        { name: 'author', content: 'Teemu Haila' },
        { name: 'og:title', content: this.$page.metadata.siteName },
        { name: 'og:description', content: this.$page.metadata.siteDescription },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: this.$page.metadata.siteUrl + '/og.jpg' },
        { name: 'og:url', content: this.$page.metadata.siteUrl }
      ]
    }
  },
  components: {
    HeaderToy,
    Multipotentiality,
    Metaplay,
    SeriousBusiness,
    Award,
    JobWall,
    Photography
  },
  data: function () {
    return {
      clicks: {},
      pos: 0
    }
  },
  created () {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    updateClicks: function (data) {
      this.clicks = data
    },
    onScroll: function () {
      this.pos = window.scrollY
      //console.log(this.$refs.toy.$el.clientHeight)
    }
  }
}
</script>

<style lang="sass">
h1
  font-weight: 700
  font-size: 2.2rem

span.line
  display: inline-block

#header
  background-color: white
  padding-top: 0.8rem
  padding-bottom: 0.8rem
  z-index: 10
  box-shadow: 1px 0px 2px rgba(0, 0, 0, .2)
  width: 100vw

.show
  transition: 0.2s transform cubic-bezier(.3,.73,.3,.74)
  transform: translateY(0)

.hide
  transition: 0.2s transform cubic-bezier(.3,.73,.3,.74)
  transform: translateY(-100%)

#empty-header
  height: 3.6rem

#footer
  padding-top: 5rem
  p
    margin: 0
  .bottom
    margin-top: 4rem
    margin-bottom: 0.3rem
</style>
