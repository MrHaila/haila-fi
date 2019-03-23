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
  CubeTexture,
  SceneLoader,
  PBRMetallicRoughnessMaterial,
  Animation,
  QuinticEase,
  EasingFunction
} from '@babylonjs/core'
import '@babylonjs/loaders'

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

    // Step 2: Camera
    let camera = new ArcRotateCamera('camera', 0, 0, 2, new Vector3(0, -1.5, 10), scene)
    camera.setTarget(Vector3.Zero())

    let cameraAnimation = new Animation('cameraAnimation', 'alpha', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_RELATIVE)
    cameraAnimation.setKeys([
      {
        frame: 0,
        value: Math.PI * 0.5
      },
      {
        frame: 300,
        value: Math.PI + Math.PI * 0.5
      }
    ])
    let easingFunction = new QuinticEase()
    easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT)
    cameraAnimation.setEasingFunction(easingFunction)
    camera.animations.push(cameraAnimation)
    // camera.attachControl(canvas, true)

    // Step 3: Models and materials
    SceneLoader.ImportMeshAsync(null, '/assets/', 'haila.glb', scene).then((result) => {
      // Generate unique materials for each letter so they can be messed with individually
      for (let i = 1; i < result.meshes.length; i++) {
        result.meshes[i].material = new PBRMetallicRoughnessMaterial('pbr', scene)
        result.meshes[i].material.baseColor = new Color3(1.000, 0.766, 0.336)
        result.meshes[i].material.metallic = 1
        result.meshes[i].material.roughness = 0.2
        result.meshes[i].material.sideOrientation = 0
      }

      setTimeout(() => scene.beginAnimation(camera, 0, 300, true), 5000)
    })

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
