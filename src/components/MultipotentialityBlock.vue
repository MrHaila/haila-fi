<template lang="pug">
div(class="text-white sm:text-neutral-100 bg-neutral-800 flex justify-center" style="height: 34rem")
  div(class="px-4 py-8 sm:p-10 container mx-auto bg-no-repeat bg-right-bottom" style="background-image: url('/assets/selfie1000v2.png'); background-size: auto 90%;")
    h1(class="text-3xl sm:text-4xl font-bold uppercase") Multipotentiality
    p(class="font-mono text-xs sm:text-sm font-light") teemu@haila.fi ~/manifestos> cat 01.txt#[span(class="bg-neutral-100 w-4 h-8" v-show="showCaret") _]

    ul(class="mt-10 ml-3 text-2xl")
      li 1. Eat
      li 2. Sleep
      li 3.
        ManifestoItem(text="Code" :offset="-2" class="ml-2")
        ManifestoItem(text="Design" :offset="2" class="ml-8")
      li
        ManifestoItem(text="Play" :offset="-1" class="ml-10")
        ManifestoItem(text="Exercise" :offset="3" class="ml-8")
      li
        ManifestoItem(text="Cook" :offset="-1" class="ml-5")
        ManifestoItem(text="DIY" :offset="-3" class="ml-5")
      li
        ManifestoItem(text="Read" :offset="2" class="ml-12")
        ManifestoItem(text="Evangelise" :offset="0" class="ml-10")
      li
        ManifestoItem(text="Teach" :offset="-2" class="ml-7")
        ManifestoItem(text="Learn" :offset="2" class="ml-6")
      li
        ManifestoItem(text="Travel" :offset="3" class="ml-3")
        ManifestoItem(text="Create" :offset="-1" class="ml-10")

      p(class="mt-4 ml-7") Ehhh, whatever.
</template>

<script lang="ts" setup>
import { useInterval } from '@vueuse/core'
import { ref } from 'vue'
import ManifestoItem from './ManifestoItem.vue'

const showCaret = ref(true)

useInterval(
  1000,
  {
    callback: () => { showCaret.value = !showCaret.value }
  }
)
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
