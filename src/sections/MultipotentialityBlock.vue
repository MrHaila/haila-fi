<template lang="pug">
div(
  class="bg-neutral-800 text-white sm:text-neutral-100"
  style="height: 34rem"
  )
  div(
    class="relative mx-auto h-full bg-right-bottom bg-no-repeat px-4 py-8 sm:p-10"
    style="max-width: 70rem"
    )
    div(
      class="absolute -right-20 bottom-0 z-0 brightness-75 filter sm:right-10 sm:filter-none"
      style="height: 90%"
      )
      img(
        src="/assets/selfie.png"
        class="h-full w-full object-cover"
        srcset="/assets/selfie@1x.webp 1x, /assets/selfie@2x.webp 2x"
        )

    div(class="relative z-10")
      h1(class="text-3xl font-bold uppercase sm:text-4xl") Multipotentiality
      p(class="font-mono text-xs font-light sm:text-sm") teemu@haila.fi ~/manifestos> cat 01.txt#[span(class="h-8 w-4 bg-neutral-100" v-show="showCaret") _]

      ul(class="ml-3 mt-10 text-2xl")
        li 1. Eat
        li 2. Sleep
        li 3.
          ManifestoItem(
            text="Code"
            :offset="-2"
            class="ml-2"
            )
          ManifestoItem(
            text="Design"
            :offset="2"
            class="ml-8"
            )
        li
          ManifestoItem(
            text="Play"
            :offset="-1"
            class="ml-10"
            )
          ManifestoItem(
            text="Exercise"
            :offset="3"
            class="ml-8"
            )
        li
          ManifestoItem(
            text="Cook"
            :offset="-1"
            class="ml-5"
            )
          ManifestoItem(
            text="DIY"
            :offset="-3"
            class="ml-5"
            )
        li
          ManifestoItem(
            text="Read"
            :offset="2"
            class="ml-12"
            )
          ManifestoItem(
            text="Evangelise"
            :offset="0"
            class="ml-10"
            )
        li
          ManifestoItem(
            text="Teach"
            :offset="-2"
            class="ml-7"
            )
          ManifestoItem(
            text="Learn"
            :offset="2"
            class="ml-6"
            )
        li
          ManifestoItem(
            text="Travel"
            :offset="3"
            class="ml-3"
            )
          ManifestoItem(
            text="Create"
            :offset="-1"
            class="ml-10"
            )

        li
          p(class="ml-7 mt-4") Ehhh, whatever.
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useInterval } from '@vueuse/core'

import ManifestoItem from '../components/ManifestoItem.vue'

const showCaret = ref(true)

useInterval(1000, {
  callback: () => {
    showCaret.value = !showCaret.value
  },
})
</script>

<style>
@media (max-width: 329.98px) {
  #potentiality-container {
    background-position: bottom left;
  }

  .potentiality-container h1 {
    margin-bottom: 0;
    line-height: 1.5rem;
    font-size: 1.8rem;
  }
}
</style>
