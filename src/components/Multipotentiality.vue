<template lang="pug">
div#potentiality-container.text-light.section-padding
  div.container
    div.background-picture
      div.container.text-right.asd
        g-image(src="@/assets/selfie3.png" alt="Selfie" width="576")

    div.text-overlay
      h1 MULTIPOTENTIALITY
      small.text-monospace.font-weight-light teemu@haila.fi ~/manifestos> cat 01.txt#[span.caret.bg-light.text-light(v-show="showCaret") _]

      p.mt-4.ml-3 1. Eat
      p.ml-3 2. Sleep
      p.ml-3
        span 3.
        span.overlay.ml-1   ------------
        span  Code
        span.ml-4.overlay.up --------------
        span.ml-4 Design
      p.ml-5
        span.overlay.ml-1.up ----------------------
        span Photograph
      p.ml-4
        span.overlay.ml-1 --------
        span Play
        span.ml-4.overlay.down -------------------
        span.ml-4 Excercise
      p.ml-5
        span.overlay.ml-1.down ----------
        span Cook
        span.ml-2.overlay ------
        span.ml-2 Fix
      p.ml-3
        span.overlay.ml-1 ----------
        span Read
        span.ml-3.overlay.down -------------------
        span.ml-3 Evagelise
      p.ml-4
        span.overlay.ml-1.down -----------
        span Teach
        span.ml-4.overlay.up ------------
        span.ml-4 Learn
      p.ml-2
        span.overlay.ml-1 ------------
        span Travel
        span.ml-4.overlay.down -------------
        span.ml-4 Create

      p.mt-4.ml-4 Ehhh, whatever.
</template>

<script>
export default {
  data: function () {
    return {
      showCaret: true
    }
  },
  mounted: function () {
    setInterval(() => { this.showCaret = !this.showCaret }, 1000)
  }
}
</script>

<style lang="sass">
#potentiality-container
  background-color: rgb(48, 48, 48)
  height: 34rem

  h1
    margin-bottom: 0
    line-height: 1.5rem

  p
    margin-bottom: 0
    font-size: 1.5rem

  .overlay
    position: absolute
    color: red
    font-weight: 700

  .up
    line-height: 2rem

  .down
    line-height: 2.4rem

  .caret
    width: 1rem
    height: 2rem

  .background-picture
    position: absolute
    z-index: 1
    width: 80%

  .text-overlay
    position: absolute
    z-index: 2

.section-padding
  padding-top: 3rem
  padding-bottom: 2.5rem

@media (max-width: 767.98px)
  #potentiality-container
    p, small, h1
      color: rgb(255, 255, 255)
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000

      span
        text-shadow: none

@media (max-width: 991.98px)
  #potentiality-container
    .background-picture
      width: 90%
</style>
