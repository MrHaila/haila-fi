<template lang="pug">
div#root
  div(
    :class="['flex justify-center fixed bg-white py-3 z-10 shadow-sm w-full', toy && y > toy.clientHeight ? 'show' : 'hide']"
    )
    img(
      alt="Haila logo"
      srcset="/assets/logo-haila-small1x.png 1x, /assets/logo-haila-small2x.png 2x"
      src="/assets/logo-haila-small1x.png"
      )

  LogoBlock(
    @updateclicks="updateClicks"
    ref="toy"
    )
  MultipotentialityBlock
  MetaplayBlock
  SeriousBusinessBlock
  AwardBlock
  CvBlock
  PhotographyBlock

  div(class="mt-20 text-center mb-6")
    p Email me, maybe?
    h4(class="text-2xl mt-3 font-bold") teemu@haila.fi
    div(class="space-y-1 text-sm mt-16")
      p(class="text-neutral-400") Global logo tapping 👆 stats: #[span(class="font-bold") H] {{ clicks?.h1 }}, #[span(class="font-bold") A] {{ clicks?.a2 }}, #[span(class="font-bold") I] {{ clicks?.i3 }}, #[span(class="font-bold") L] {{ clicks?.l4 }}, #[span(class="font-bold") A] {{ clicks?.a5 }}
      p Handcrafted with ❤️ and 🍺 as <a href="https://gitlab.com/dasinf/haila.fi-v2">open source</a>.
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'

import LogoBlock from '../components/LogoBlock.vue'
import MultipotentialityBlock from '../components/MultipotentialityBlock.vue'
import MetaplayBlock from '../components/MetaplayBlock.vue'
import SeriousBusinessBlock from '../components/SeriousBusinessBlock.vue'
import AwardBlock from '../components/AwardBlock.vue'
import CvBlock from '../components/CvBlock.vue'
import PhotographyBlock from '../components/PhotographyBlock.vue'

type Clicks = {
  h1: number
  a2: number
  i3: number
  l4: number
  a5: number
}

const toy = ref<HTMLDivElement>()

const root = ref<HTMLDivElement>()
const { y, isScrolling, arrivedState, directions } = useScroll(root)

const clicks = ref<Clicks>()

function updateClicks (data: Clicks) {
  clicks.value = data
}
</script>

<style>
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
