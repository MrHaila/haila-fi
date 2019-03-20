<template lang="pug">
div#photography-container
  div.overlapping-header.ml-3
    div.dark.text-light.mb-2
      h4 Everyone needs a hobby
    div.light.d-inline-flex
      h5 I chase the light
  BCarousel(id="photos" indicators controls)
    div.carousel-item
      g-image.d-block.w-100(alt="Alps" src="@/assets/photo-alps.jpeg" width="1920" height="1080")/
    div.carousel-item
      g-image.d-block.w-100(alt="Lizard" src="@/assets/photo-lizard.jpg" width="1920" height="1080")/
    div.carousel-item
      g-image.d-block.w-100(alt="Inkoo" src="@/assets/photo-inkoo.jpg" width="1920" height="1080")/
    div.carousel-item
      g-image.d-block.w-100(alt="Berlin" src="@/assets/photo-berlin.jpg" width="1920" height="1080")/
    div.carousel-item
      g-image.d-block.w-100(alt="Tampere" src="@/assets/photo-tampere.jpg" width="1920" height="1080")/
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
  margin-top: 1rem

  h4
    margin: 0
  h5
    margin: 0
  div
    padding: 0.3rem 0.6rem
</style>
