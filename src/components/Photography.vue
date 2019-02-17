<template lang="pug">
div#photography-container
  div.overlapping-header.ml-3
    div.dark.text-light.mb-2
      h4 Everyone needs a hobby
    div.light.d-inline-flex
      h5 I chase the light
  BCarousel(id="photos" indicators img-height="10")
    div.carousel-item
      g-image(alt="Test" src="~/assets/linkedin.png")/
    div.carousel-item
      g-image(alt="Test" src="~/assets/linkedin.png")/
    div.carousel-item
      g-image(alt="Test" src="~/assets/linkedin.png")/
    div.carousel-item
      g-image(alt="Test" src="~/assets/linkedin.png")/
    div.carousel-item
      g-image(alt="Test" src="~/assets/linkedin.png")/
  // g-image(alt="Test" src="~/assets/lizard.jpg" width="100")/
</template>

<script>
import BCarousel from 'bootstrap-vue/es/components/carousel/carousel'

export default {
  components: {
    BCarousel
  }
}
</script>

<style lang="sass">
#photography-container
  .dark
    background-color: rgba(0, 0, 0, 200)
  .light
    background-color: rgb(255, 255, 255)

.overlapping-header
  position: absolute
  z-index: 9

  h4
    margin: 0
  h5
    margin: 0
  div
    padding: 0.3rem 0.6rem
</style>
