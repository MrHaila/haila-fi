<template lang="pug">
div#toy-container
  div.text-overlay
    div
      p BA Interaction Design
      p MProf Games Development
      p Games Industry Entrepreneur & Executive
  canvas(ref="headerCanvas")
</template>

<script>
import {
  Engine,
  Scene,
  Vector3,
  Color3,
  ArcRotateCamera,
  HemisphericLight,
  Mesh,
  CubeTexture,
  SceneLoader,
  PBRMetallicRoughnessMaterial
} from '@babylonjs/core'
// import '@babylonjs/loaders'

// import '@babylonjs/core/Debug/debugLayer'
// import '@babylonjs/inspector'

export default {
  mounted: function () {
    const canvas = this.$refs.headerCanvas
    const engine = new Engine(canvas)
    const scene = new Scene(engine)

    // scene.debugLayer.show()

    // Step 1: Environment (env texture from Babylon Playground)
    const environmentTexture = CubeTexture.CreateFromPrefilteredData('/assets/environment.env', scene)
    scene.createDefaultSkybox(environmentTexture, true, 100, 0.4, true)
    scene.autoClear = false
    scene.autoClearDepthAndStencil = false

    let light = new HemisphericLight('ambientLight', Vector3.Up(), scene)
    light.intensity = 0.2

    // Step 2: Camera
    let camera = new ArcRotateCamera('camera', 0, 0, 2, new Vector3(0, 2, -10), scene)
    camera.setTarget(Vector3.Zero())
    camera.attachControl(canvas, true)
    camera.upperBetaLimit = Math.PI / 2.1

    // Step 3: Models and materials
    /* SceneLoader.LoadAssetContainerAsync('/assets/haila.glb', undefined, scene).then(container => {
      const root = container.meshes[0]
      root.id = root.name = 'model'
      container.addAllToScene()
    }) */

    let material = new PBRMetallicRoughnessMaterial('pbr', scene)
    material.baseColor = new Color3(1.000, 0.766, 0.336)
    material.metallic = 1
    material.roughness = 0.2

    let cube = Mesh.CreateBox('cube', 1, scene)
    cube.material = material

    // Step 4: Inputs
    scene.onPointerPick = function (evt, pickInfo) {
      if (pickInfo.hit) {
        pickInfo.pickedMesh.material.baseColor = new Color3(Math.random(), Math.random(), Math.random())
      }
    }

    // Handle window resizing
    window.addEventListener('resize', () => engine.resize())

    // Start rendering
    engine.runRenderLoop(() => {
      scene.render()
    })
  }
}
</script>

<style lang="sass">
#toy-container
  background-image: linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))
  height: 25rem

  canvas
    width: 100%
    height: 100%
    display: block
    font-size: 0
    outline: none

  .text-overlay
    position: absolute
    z-index: 1
    top: 23rem
    left: 10%

    p
      margin-bottom: 0
</style>
