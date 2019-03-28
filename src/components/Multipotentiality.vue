<template lang="pug">
div#potentiality-container.text-light
  div.container.section-padding
    h1.outline-on-mobile MULTIPOTENTIALITY
    small.text-monospace.font-weight-light.outline-on-mobile teemu@haila.fi ~/manifestos> cat 01.txt#[span.caret.bg-light.text-light(v-show="showCaret") _]

    p.mt-4.ml-3.outline-on-mobile 1. Eat
    p.ml-3.outline-on-mobile 2. Sleep
    p.ml-3
      span.outline-on-mobile 3.
      span.overlay.ml-1   ------------
      span.outline-on-mobile  Code
      span.ml-4.overlay.up --------------
      span.ml-4.outline-on-mobile Design
    p.ml-5
      span.overlay.ml-1.up ----------------------
      span.outline-on-mobile Photograph
    p.ml-4
      span.overlay.ml-1 --------
      span.outline-on-mobile Play
      span.ml-4.overlay.down ----------------
      span.ml-4.outline-on-mobile Exercise
    p.ml-5
      span.overlay.ml-1.down ----------
      span.outline-on-mobile Cook
      span.ml-2.overlay ------
      span.ml-2.outline-on-mobile Fix
    p.ml-3
      span.overlay.ml-1 ----------
      span.outline-on-mobile Read
      span.ml-3.overlay.down ---------------------
      span.ml-3.outline-on-mobile Evangelise
    p.ml-4
      span.overlay.ml-1.down -----------
      span.outline-on-mobile Teach
      span.ml-4.overlay.up ------------
      span.ml-4.outline-on-mobile Learn
    p.ml-2
      span.overlay.ml-1 ------------
      span.outline-on-mobile Travel
      span.ml-4.overlay.down -------------
      span.ml-4.outline-on-mobile Create

    p.mt-4.ml-4.outline-on-mobile Ehhh, whatever.
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

  .container
      background-image: url('/assets/selfie1000v2.png')
      background-size: auto 90%
      background-repeat: no-repeat
      background-position: bottom right

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

.section-padding
  padding-top: 3rem
  padding-bottom: 2.5rem

@media (max-width: 767.98px)
  #potentiality-container
    background-image: url('/assets/selfie1000v2.png')
    background-size: auto 90%
    background-repeat: no-repeat
    background-position: bottom right

    .container
      background: none

    .outline-on-mobile
      color: rgb(255, 255, 255)
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000

@media (max-width: 329.98px)
  #potentiality-container
    background-position: bottom left

    h1
      margin-bottom: 0
      line-height: 1.5rem
      font-size: 1.8rem
</style>
