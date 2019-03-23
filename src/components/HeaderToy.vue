<template lang="pug">
div#toy-container
  div.score.text-center(v-if="clicks > 0")
    h6(:style="scoreStyle") {{clicks}}

  div.text-overlay
    div
      p BA Interaction Design
      p MProf Games Development
      p Games Industry Entrepreneur & Executive
  canvas(ref="headerCanvas")
</template>

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

  .score
    position: absolute
    z-index: 2
    left: 50%
    top: 4rem

    h6
      margin-bottom: 0
      padding: 0.2rem 0.3rem 0 0.3rem
      border-radius: 0.5rem

  .text-overlay
    position: absolute
    z-index: 1
    top: 23rem
    left: 10%

    p
      margin-bottom: 0

@media (max-width: 575.98px)
  #toy-container
    height: 15rem

    .text-overlay
      top: 13.5rem
      left: 1rem
</style>

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
  CircleEase,
  EasingFunction,
  Quaternion
} from '@babylonjs/core'
import '@babylonjs/loaders'

// import '@babylonjs/core/Debug/debugLayer'
// import '@babylonjs/inspector'

export default {
  data: function () {
    return {
      clicks: 0,
      scoreStyle: {
        'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
        color: 'black'
      }
    }
  },
  mounted: function () {
    const canvas = this.$refs.headerCanvas
    const engine = new Engine(canvas)
    const scene = new Scene(engine)

    // scene.debugLayer.show()

    // Step 1: Environment (env texture from Babylon Playground)
    const environmentTexture = CubeTexture.CreateFromPrefilteredData('/assets/environment.env', scene)
    environmentTexture.gammaSpace = false
    let skybox = scene.createDefaultSkybox(environmentTexture, true, 100, 0.4, true)
    skybox.material.alpha = 0.05
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

    // Step 3: Models, materials and animations
    SceneLoader.ImportMeshAsync(null, '/assets/', 'haila.glb', scene).then((result) => {
      // Character fly-in rotation animation
      let characterRotation = new Animation('characterRotation', 'rotationQuaternion', 30, Animation.ANIMATIONTYPE_QUATERNION, Animation.ANIMATIONLOOPMODE_CONSTANT)
      characterRotation.setKeys([
        {
          frame: 0,
          value: new Quaternion(0, 0, 0, -1)
        },
        {
          frame: 20,
          value: new Quaternion(0.707, 0, 0, 0.707)
        }
      ])
      let easingFunction = new CircleEase()
      easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEOUT)
      characterRotation.setEasingFunction(easingFunction)

      // For each character...
      for (let i = 1; i < result.meshes.length; i++) {
        // Generate unique materials for each char so they can be messed with individually
        result.meshes[i].material = new PBRMetallicRoughnessMaterial('pbr', scene)
        result.meshes[i].material.baseColor = new Color3(0.05, 0.05, 0.05)
        result.meshes[i].material.metallic = 0.2
        result.meshes[i].material.roughness = 0.18
        result.meshes[i].material.sideOrientation = 0

        // Create per-character fly-in animation
        let characterPosition = new Animation('characterPosition', 'position', 30, Animation.ANIMATIONTYPE_VECTOR3, Animation.ANIMATIONLOOPMODE_CONSTANT)
        characterPosition.setKeys([
          {
            frame: 0,
            value: new Vector3(i * 2 - 2, -20, -30)
          },
          {
            frame: 20,
            value: result.meshes[i].position
          }
        ])
        characterPosition.setEasingFunction(easingFunction)
        result.meshes[i].position = new Vector3(4, -30, -30)

        // Setup animations
        result.meshes[i].animations.push(characterRotation)
        result.meshes[i].animations.push(characterPosition)
        setTimeout(() => scene.beginAnimation(result.meshes[i], 0, 20, true), i * 70)
      }

      // Delayed start to camera animation
      setTimeout(() => scene.beginAnimation(camera, 0, 300, true), 5000)

      // Wireframe animation
      setInterval(() => {
        result.meshes[1].material.wireframe = !result.meshes[1].material.wireframe
        result.meshes[2].material.wireframe = !result.meshes[2].material.wireframe
        result.meshes[3].material.wireframe = !result.meshes[3].material.wireframe
        result.meshes[4].material.wireframe = !result.meshes[4].material.wireframe
        result.meshes[5].material.wireframe = !result.meshes[5].material.wireframe
      }, 10000)
    })

    // Step 4: Inputs
    scene.onPointerPick = (evt, pickInfo) => {
      if (pickInfo.hit) {
        // Character color & spin animation
        let characterColor = new Animation('characterColor', 'material.baseColor', 30, Animation.ANIMATIONTYPE_COLOR3, Animation.ANIMATIONLOOPMODE_CONSTANT)
        let color = new Color3(Math.random(), Math.random(), Math.random())
        characterColor.setKeys([
          {
            frame: 0,
            value: new Color3(1, 1, 1)
          },
          {
            frame: 20,
            value: color
          }
        ])

        let characterSpin = new Animation('characterSpin', 'rotation.z', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_RELATIVE)
        characterSpin.setKeys([
          {
            frame: 0,
            value: 0
          },
          {
            frame: 20,
            value: 0.1
          }
        ])
        let easingFunction = new CircleEase()
        easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEOUT)
        characterSpin.setEasingFunction(easingFunction)

        pickInfo.pickedMesh.animations = []
        pickInfo.pickedMesh.animations.push(characterColor)
        pickInfo.pickedMesh.animations.push(characterSpin)
        scene.beginAnimation(pickInfo.pickedMesh, 0, 20, false)

        this.clicks++
        let r = Math.floor(color.r * 256)
        let g = Math.floor(color.g * 256)
        let b = Math.floor(color.b * 256)
        let r2 = Math.round(Math.min(Math.max(0, r + (r * 0.2))))
        let g2 = Math.round(Math.min(Math.max(0, g + (g * 0.2))))
        let b2 = Math.round(Math.min(Math.max(0, b + (b * 0.2))))
        this.scoreStyle['background-image'] = 'linear-gradient(rgb(' + r2 + ',' + g2 + ',' + b2 + '), rgb(' + r + ',' + g + ',' + b + ')'
        this.scoreStyle.color = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white'
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
