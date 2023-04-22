<template lang="pug">
div#root
  div(
    :class="['flex justify-center fixed bg-white hover:bg-neutral-100 active:bg-neutral-200 py-3 z-50 shadow w-full cursor-pointer', logoIsVisible ? 'hide' : 'show']"
    @click="scrollToTop"
    )
    img(
      alt="Haila logo"
      srcset="/assets/logo-haila-small1x.png 1x, /assets/logo-haila-small2x.png 2x"
      src="/assets/logo-haila-small1x.png"
      )

  LogoBlock(
    @updateclicks="updateClicks"
    ref="header"
    )
  MultipotentialityBlock
  MetaplayBlock
  SeriousBusinessBlock
  AwardBlock
  CvBlock
  PhotographyBlock

  div(class="mt-20 text-center mb-6 pt-14")
    p Email me, maybe?
    h4(class="text-2xl mt-3 mb-32 font-bold") teemu@haila.fi
    div(class="space-y-1 text-sm")
      p(class="text-neutral-400") Global logo tapping 👆 stats: #[span(class="font-bold") H] {{ clicks?.h1 }}, #[span(class="font-bold") A] {{ clicks?.a2 }}, #[span(class="font-bold") I] {{ clicks?.i3 }}, #[span(class="font-bold") L] {{ clicks?.l4 }}, #[span(class="font-bold") A] {{ clicks?.a5 }}
      p Handcrafted with ❤️ and 🍺 as <a href="https://gitlab.com/dasinf/haila.fi-v2">open source</a>.
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

import LogoBlock from './sections/LogoBlock.vue'
import MultipotentialityBlock from './sections/MultipotentialityBlock.vue'
import MetaplayBlock from './sections/MetaplayBlock.vue'
import SeriousBusinessBlock from './sections/SeriousBusinessBlock.vue'
import AwardBlock from './sections/AwardBlock.vue'
import CvBlock from './sections/CvBlock.vue'
import PhotographyBlock from './sections/PhotographyBlock.vue'

type Clicks = {
  h1: number
  a2: number
  i3: number
  l4: number
  a5: number
}

const header = ref<HTMLDivElement>()
const logoIsVisible = ref(true)

useIntersectionObserver(
  header,
  ([{ isIntersecting }]) => {
    logoIsVisible.value = isIntersecting
  },
)

const clicks = ref<Clicks>()

function updateClicks (data: Clicks) {
  clicks.value = data
}

function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
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
</style>
