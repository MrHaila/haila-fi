<template lang="pug">
div#photography-container
  div.overlapping-header.ml-3
    div.dark.text-light.mb-2
      h4 Everyone needs a hobby
    div.light.d-inline-flex
      h5 I chase the light
  BCarousel(id="photos" indicators)
    div.carousel-item.active
      img.d-block.w-100(alt="Thailand" src="@/assets/thailand.jpg")/
    div.carousel-item
      img.d-block.w-100(alt="Lizard" src="@/assets/lizard.jpg")/
    div.carousel-item
      img.d-block.w-100(alt="Inkoo" src="@/assets/inkoo.jpg")/
    div.carousel-item
      img.d-block.w-100(alt="Berlin" src="@/assets/berlin.jpg")/
    div.carousel-item
      img.d-block.w-100(alt="Wedding" src="@/assets/wedding.jpg")/
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
