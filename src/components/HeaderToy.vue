<template lang="pug">
div#toy-container
  div.text-overlay
    div
      p BA Interaction Design
      p MProf Games Development
      p Games Industry Entrepreneur & Executive
  scene()
    property(name="clearColor" color="#FFF")
    camera(v-model="camera" type="arcRotate")
    entity(:scaling="[2, 2, 2]")
      animation(property="rotation.x" :duration="5" :end="Math.PI * 2")
      animation(property="rotation.y" :duration="5" :end="Math.PI * 2")
      animation(property="rotation.z" :duration="5" :end="Math.PI * 2")
      box
        material(diffuse="#020202" reflection="#D8D8D8" :roughness="0")
          texture(type="environment" src="/assets/environment.dds")
</template>

<script>
export default {
  data: function () {
    return {
      camera: null
    }
  },
  watch: {
    camera () {
      this.camera.inputs.clear()
    }
  }
}
</script>

<style lang="sass">
#toy-container
  background-image: linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))
  height: 25rem

  .text-overlay
    position: absolute
    z-index: 1
    top: 23rem
    left: 10%

    p
      margin-bottom: 0
</style>
