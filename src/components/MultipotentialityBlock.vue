<template lang="pug">
div(class="text-white sm:text-neutral-100 bg-neutral-800 flex justify-center" style="height: 34rem")
  div(class="container pt-12 pb-10 bg-no-repeat bg-right-bottom" style="background-image: url('/assets/selfie1000v2.png'); background-size: auto 90%;")
    h1(class="text-4xl") MULTIPOTENTIALITY
    p(class="font-mono text-sm font-light") teemu@haila.fi ~/manifestos> cat 01.txt#[span(class="bg-neutral-100 w-4 h-8" v-show="showCaret") _]

    div(class="mt-4 ml-3")
      p 1. Eat
      p 2. Sleep
      p 3. Code
        svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="6" x2="65" y1="22" y2="22")
        span(class="ml-4")
          svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
            line(x1="1" x2="77" y1="21" y2="21")
          span Design
      p(class="ml-2")
        svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="3" x2="125" y1="18" y2="18")
        span Photograph
      p(class="ml-1")
        svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="0" x2="39" y1="20" y2="20")
        span Play
        span(class="ml-4")
          svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
            line(x1="3" x2="85" y1="22" y2="22")
          span Exercise
      p(class="ml-2")
        svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="0" x2="50" y1="18" y2="18")
        span Cook
        span.ml-2
          svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
            line(x1="1" x2="35" y1="19" y2="19")
          span DIY
      p(class="ml-0")
        svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="0" x2="47" y1="22" y2="22")
        span Read
        span.ml-3
          svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
            line(x1="1" x2="110" y1="19" y2="21")
          span Evangelise
      p(class="ml-1")
        svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="4" x2="58" y1="19" y2="19")
        span Teach
        span(class="ml-4")
          svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
            line(x1="1" x2="60" y1="21" y2="21")
          span Learn
      p(class="ml-2")
        svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="3" x2="54" y1="22" y2="22")
        span Travel
        span(class="ml-4")
          svg(class="absolute" height="100%" width="125" stroke-width="5" stroke="red")
            line(x1="1" x2="69" y1="20" y2="20")
          span Create

      p(class="mt-4 ml-1 text-xl") Ehhh, whatever.
</template>

<script lang="ts" setup>
import { useInterval } from '@vueuse/core'
import { ref } from 'vue'

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
