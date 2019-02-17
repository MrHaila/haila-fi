<template lang="pug">
div#photography-container
  div.overlapping-header.ml-3
    div.dark.text-light.mb-2
      h4 Everyone needs a hobby
    div.light.d-inline-flex
      h5 I chase the light
  BCarousel(id="photos" indicators img-height="10")
    div.carousel-item
      img.img-fluid(alt="Test" src="@/assets/thailand.jpg")/
    div.carousel-item
      img.img-fluid(alt="" src="@/assets/lizard.jpg")/
    div.carousel-item
      img.img-fluid(alt="Test" src="@/assets/inkoo.jpg")/
    div.carousel-item
      img.img-fluid(alt="Test" src="@/assets/berlin.jpg")/
    div.carousel-item
      img.img-fluid(alt="Test" src="@/assets/wedding.jpg")/
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
  max-width: 1280px
  .dark
    background-color: rgba(0, 0, 0, 200)
  .light
    background-color: rgb(255, 255, 255)

.overlapping-header
  position: absolute
  z-index: 9
  margin-top: 1rem

  h4
    margin: 0
  h5
    margin: 0
  div
    padding: 0.3rem 0.6rem
</style>
