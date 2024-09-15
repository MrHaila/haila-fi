<template lang="pug">
div#root
  div(
    :class="['flex justify-center fixed bg-white hover:bg-neutral-100 active:bg-neutral-200 py-3 z-50 shadow w-full cursor-pointer', logoIsVisible ? 'hide' : 'show']"
    @click="scrollToTop"
    )
    img(
      src="/assets/logos/logo-haila.png"
      alt="Haila logo"
      srcset="/assets/logos/logo-haila@1x.webp 1x, /assets/logos/logo-haila@2x.webp 2x"
      )

  LogoBlock(ref="header")
  MultipotentialityBlock
  MetaplayBlock
  SeriousBusinessBlock
  AwardBlock
  CvBlock
  PhotographyBlock

  div(class="mb-6 mt-20 pt-14 text-center")
    p Email me, maybe?
    h4(class="mb-32 mt-3 text-2xl font-bold") teemu@haila.fi
    div(class="space-y-1 text-sm")
      p(class="text-neutral-400") Global logo tapping 👆 stats: #[span(class="font-bold") H] {{ supabase.h1 }}, #[span(class="font-bold") A] {{ supabase.a2 }}, #[span(class="font-bold") I] {{ supabase.i3 }}, #[span(class="font-bold") L] {{ supabase.l4 }}, #[span(class="font-bold") A] {{ supabase.a5 }}
      p Handcrafted with ❤️ and 🍺 as <a href="https://github.com/MrHaila/haila-fi">open source</a>.
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useIntersectionObserver } from '@vueuse/core'

import AwardBlock from './sections/AwardBlock.vue'
import CvBlock from './sections/CvBlock.vue'
import LogoBlock from './sections/LogoBlock.vue'
import MetaplayBlock from './sections/MetaplayBlock.vue'
import MultipotentialityBlock from './sections/MultipotentialityBlock.vue'
import PhotographyBlock from './sections/PhotographyBlock.vue'
import SeriousBusinessBlock from './sections/SeriousBusinessBlock.vue'
import { useSupabase } from './useSupabase'

const header = ref<HTMLDivElement>()
const logoIsVisible = ref(true)
const supabase = useSupabase()

useIntersectionObserver(header, ([{ isIntersecting }]) => {
  logoIsVisible.value = isIntersecting
})

function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style>
.show {
  transition: 0.2s transform cubic-bezier(0.3, 0.73, 0.3, 0.74);
  transform: translateY(0);
}

.hide {
  transition: 0.2s transform cubic-bezier(0.3, 0.73, 0.3, 0.74);
  transform: translateY(-100%);
}
</style>
