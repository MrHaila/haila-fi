<template lang="pug">
div#potentiality-container.text-light
  div.container.section-padding
    h1.outline-on-mobile MULTIPOTENTIALITY
    small.text-monospace.font-weight-light.outline-on-mobile teemu@haila.fi ~/manifestos> cat 01.txt#[span.caret.bg-light.text-light(v-show="showCaret") _]

    p.mt-4.ml-3.outline-on-mobile 1. Eat
    p.ml-3.outline-on-mobile 2. Sleep
    p.ml-3
      span.outline-on-mobile 3.
      svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
        line(x1="6" x2="65" y1="22" y2="22")
      span.outline-on-mobile  Code
      span.ml-4
        svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="1" x2="77" y1="21" y2="21")
        span.outline-on-mobile Design
    p.ml-5
      svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
        line(x1="3" x2="125" y1="18" y2="18")
      span.outline-on-mobile Photograph
    p.ml-4
      svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
        line(x1="0" x2="39" y1="20" y2="20")
      span.outline-on-mobile Play
      span.ml-4
        svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="3" x2="85" y1="22" y2="22")
        span.outline-on-mobile Exercise
    p.ml-5
      svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
        line(x1="0" x2="50" y1="18" y2="18")
      span.outline-on-mobile Cook
      span.ml-2
        svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="1" x2="35" y1="19" y2="19")
        span.outline-on-mobile DIY
    p.ml-3
      svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
        line(x1="0" x2="47" y1="22" y2="22")
      span.outline-on-mobile Read
      span.ml-3
        svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="1" x2="110" y1="19" y2="21")
        span.outline-on-mobile Evangelise
    p.ml-4
      svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
        line(x1="4" x2="58" y1="19" y2="19")
      span.outline-on-mobile Teach
      span.ml-4
        svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="1" x2="60" y1="21" y2="21")
        span.outline-on-mobile Learn
    p.ml-2
      svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
        line(x1="3" x2="54" y1="22" y2="22")
      span.outline-on-mobile Travel
      span.ml-4
        svg.overlay(height="100%" width="125" stroke-width="5" stroke="red")
          line(x1="1" x2="69" y1="20" y2="20")
        span.outline-on-mobile Create

    p.mt-4.ml-4.outline-on-mobile.text-small Ehhh, whatever.
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

  .caret
    width: 1rem
    height: 2rem

  .text-small
    font-size: 1.3rem
    margin-bottom: 0.4rem

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
