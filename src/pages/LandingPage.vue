<template lang="pug">
div#root
  div(
    :class="['flex justify-center fixed bg-white py-3 z-10 shadow-sm w-full', toy && y > toy.clientHeight ? 'show' : 'hide']"
    )
    img(
      alt="Haila logo"
      srcset="@/assets/logo-haila-small1x.png 1x, @/assets/logo-haila-small2x.png 2x"
      src="@/assets/logo-haila-small1x.png"
      )

  HeaderToy(
    @updateclicks="updateClicks"
    ref="toy"
    )
  //- multipotentiality/
  //- metaplay/
  //- serious-business/
  //- award/
  //- job-wall/
  //- photography/

  div(class="mt-20 text-center mb-2")
    p Email me, maybe?
    h4(class="text-xl") teemu@haila.fi
    div(class="space-y-1 text-sm mt-16")
      p(class="text-neutral-400") Global logo tapping 👆 stats: #[span(class="font-bold") H] {{ clicks?.h1 }}, #[span(class="font-bold") A] {{ clicks?.a2 }}, #[span(class="font-bold") I] {{ clicks?.i3 }}, #[span(class="font-bold") L] {{ clicks?.l4 }}, #[span(class="font-bold") A] {{ clicks?.a5 }}
      p Handcrafted with ❤️ and 🍺 as <a href="https://gitlab.com/dasinf/haila.fi-v2">open source</a>.
</template>

<!--
<page-query>
query {
  metadata {
    siteName,
    siteUrl,
    siteDescription
  }
}
</page-query>
-->

<script lang="ts" setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'

import HeaderToy from '../components/HeaderToy.vue'
// import Multipotentiality from '~/components/Multipotentiality.vue'
// import Metaplay from '~/components/Metaplay.vue'
// import SeriousBusiness from '~/components/SeriousBusiness.vue'
// import Award from '~/components/Award.vue'
// import JobWall from '~/components/JobWall.vue'
// import Photography from '~/components/Photography.vue'

// metaInfo: function () {
//   return {
//     title: 'Home',
//     meta: [
//       { name: 'author', content: 'Teemu Haila' },
//       { name: 'og:title', content: this.$page.metadata.siteName },
//       { name: 'og:description', content: this.$page.metadata.siteDescription },
//       { name: 'og:type', content: 'website' },
//       { name: 'og:image', content: this.$page.metadata.siteUrl + '/og.jpg' },
//       { name: 'og:url', content: this.$page.metadata.siteUrl }
//     ]
//   }
// },

const toy = ref<HTMLDivElement>()

const root = ref<HTMLDivElement>()
const { y, isScrolling, arrivedState, directions } = useScroll(root)

const clicks = ref<any>({})

function updateClicks (data: any) {
  clicks.value = data
}
</script>

<style>
h1 {
  font-weight: 700;
  font-size: 2.2rem;
}

span.line {
  display: inline-block;
}

.show {
  transition: 0.2s transform cubic-bezier(.3,.73,.3,.74);
  transform: translateY(0);
}

.hide {
  transition: 0.2s transform cubic-bezier(.3,.73,.3,.74);
  transform: translateY(-100%);
}

#empty-header {
  height: 3.6rem;
}

#footer {
  padding-top: 5rem;
}

#footer p {
  margin: 0;
}

#footer .bottom {
  margin-top: 4rem;
  margin-bottom: 0.3rem;
}
</style>
