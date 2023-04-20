<template lang="pug">
div(class="bg-gradient-to-t from-neutral-100 to-white relative")
  p(
    v-show="!isEngineLoaded"
    class="absolute z-10 w-full top-40 text-center text-xl text-neutral-600"
    ) 🎨 Loading... 🤹‍

  div(
    v-if="totalLocalClicks > 0"
    class="absolute z-10 w-full top-4"
    )
    div(class="flex justify-center font-bold space-x-1")
      span(v-if="totalLocalClicks >= 20") {{ feedback }}
      span(class="px-2 rounded-lg" :style="scoreStyle.h1" v-show="localClicks.h1 > 0") {{localClicks.h1}}
      span(class="px-2 rounded-lg" :style="scoreStyle.a2" v-show="localClicks.a2 > 0") {{localClicks.a2}}
      span(class="px-2 rounded-lg" :style="scoreStyle.i3" v-show="localClicks.i3 > 0") {{localClicks.i3}}
      span(class="px-2 rounded-lg" :style="scoreStyle.l4" v-show="localClicks.l4 > 0") {{localClicks.l4}}
      span(class="px-2 rounded-lg" :style="scoreStyle.a5" v-show="localClicks.a5 > 0") {{localClicks.a5}}
      span(v-if="totalLocalClicks >= 20") {{ feedback }}
    div(class="text-center text-sm") You: {{totalLocalClicks}} / Everyone: {{totalClicks}}

  div(class="absolute z-10 bottom-4 left-0 right-0 sm:bottom-5 text-sm sm:text-base")
    ul(class="px-4 sm:px-10 container mx-auto")
      li BA Interaction Design
      li MProf Games Development
      li Games Industry Entrepreneur & Executive

  canvas(
    class="w-full h-full block outline-none"
    ref="headerCanvas"
    )
</template>

<script lang="ts" setup>
import { Engine } from '@babylonjs/core/Engines/engine'
import { Scene } from '@babylonjs/core/scene'
import { Vector3, Quaternion, Color3 } from '@babylonjs/core/Maths/math'
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { Animation, QuinticEase, CircleEase, EasingFunction } from '@babylonjs/core/Animations/index'
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture'
import '@babylonjs/core/Materials/Textures/Loaders/ddsTextureLoader'
import '@babylonjs/core/Misc/dds'
import '@babylonjs/core/Helpers/sceneHelpers'
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader'
import { PBRMetallicRoughnessMaterial } from '@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial'
import '@babylonjs/loaders'
// import '@babylonjs/core/Debug/debugLayer'
// import '@babylonjs/inspector'

// import Firebase from 'firebase/app'
// import 'firebase/firestore'

import { ref, computed, onMounted } from 'vue'

const isEngineLoaded = ref(false)

const scoreStyle = ref({
  h1: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black'
  },
  a2: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black'
  },
  i3: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black'
  },
  l4: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black'
  },
  a5: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black'
  }
})

// let firestore = null
type Clicks = {
  h1: number
  a2: number
  i3: number
  l4: number
  a5: number
}

const clicks = ref<Clicks>({
  h1: 0,
  a2: 0,
  i3: 0,
  l4: 0,
  a5: 0
})

const localClicks = ref<Clicks>({
  h1: 0,
  a2: 0,
  i3: 0,
  l4: 0,
  a5: 0
})

const totalClicks = computed(() => {
  return clicks.value.h1 + clicks.value.a2 + clicks.value.i3 + clicks.value.l4 + clicks.value.a5
})

const totalLocalClicks = computed(() => {
  return localClicks.value.h1 + localClicks.value.a2 + localClicks.value.i3 + localClicks.value.l4 + localClicks.value.a5
})

const feedback = computed(() => {
  if (totalLocalClicks.value >= 700) return '🤯'
  else if (totalLocalClicks.value >= 600) return '💣'
  else if (totalLocalClicks.value >= 500) return '💶'
  else if (totalLocalClicks.value >= 400) return '📈'
  else if (totalLocalClicks.value >= 300) return '🍾'
  else if (totalLocalClicks.value >= 200) return '🍻'
  else if (totalLocalClicks.value >= 150) return '🤩'
  else if (totalLocalClicks.value >= 100) return '⭐️'
  else if (totalLocalClicks.value >= 75) return '🔥'
  else if (totalLocalClicks.value >= 45) return '🐬'
  else if (totalLocalClicks.value >= 20) return '💛'
  else return ''
})

const headerCanvas = ref<HTMLCanvasElement>()

onMounted(async () => {
  if (!headerCanvas.value) throw new Error('Header canvas not found')
  const engine = new Engine(headerCanvas.value)
  const scene = new Scene(engine)

  // scene.debugLayer.show()

  // Step 1: Environment (env texture from Babylon Playground)
  const environmentTexture = CubeTexture.CreateFromPrefilteredData('/assets/environment_32.env', scene)
  environmentTexture.gammaSpace = false
  environmentTexture.rotationY = 2.8
  const skybox = scene.createDefaultSkybox(environmentTexture, true, 100, 0.4, true)
  if (!skybox?.material) throw new Error('Skybox material not found')
  skybox.material.alpha = 0.05
  scene.autoClear = false
  scene.autoClearDepthAndStencil = false

  // Step 2: Camera
  const camera = new ArcRotateCamera('camera', 0, 0, 2, new Vector3(0, -1.5, 10), scene)
  camera.setTarget(Vector3.Zero())

  const cameraAnimation = new Animation('cameraAnimation', 'alpha', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_RELATIVE)
  cameraAnimation.setKeys([
    { frame: 0, value: Math.PI * 0.5 },
    { frame: 300, value: Math.PI + Math.PI * 0.5 }
  ])
  const easingFunction = new QuinticEase()
  easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT)
  cameraAnimation.setEasingFunction(easingFunction)
  camera.animations.push(cameraAnimation)
  // camera.attachControl(canvas, true)

  // Step 3: Models, materials and animations
  const result = await SceneLoader.ImportMeshAsync(null, '/assets/', 'haila.glb', scene)
  // Character fly-in rotation animation
  const characterRotation = new Animation('characterRotation', 'rotationQuaternion', 30, Animation.ANIMATIONTYPE_QUATERNION, Animation.ANIMATIONLOOPMODE_CONSTANT)
  characterRotation.setKeys([
    { frame: 0, value: new Quaternion(0, 0, 0, -1) },
    { frame: 20, value: new Quaternion(0.707, 0, 0, 0.707) }
  ])
  const easingFunction2 = new CircleEase()
  easingFunction2.setEasingMode(EasingFunction.EASINGMODE_EASEOUT)
  characterRotation.setEasingFunction(easingFunction2)

  // For each character...
  for (let i = 1; i < result.meshes.length; i++) {
    // Generate unique materials for each char so they can be messed with individually
    const material = new PBRMetallicRoughnessMaterial('pbr', scene)
    material.baseColor = new Color3(0.05, 0.05, 0.05)
    material.metallic = 0.2
    material.roughness = 0.25
    material.sideOrientation = 0
    result.meshes[i].material = material

    // Create per-character fly-in animation
    const characterPosition = new Animation('characterPosition', 'position', 30, Animation.ANIMATIONTYPE_VECTOR3, Animation.ANIMATIONLOOPMODE_CONSTANT)
    characterPosition.setKeys([
      { frame: 0, value: new Vector3(i * 2 - 2, -20, -30) },
      { frame: 20, value: result.meshes[i].position }
    ])
    characterPosition.setEasingFunction(easingFunction)
    result.meshes[i].position = new Vector3(4, -30, -30)

    // Setup animations
    result.meshes[i].animations.push(characterRotation)
    result.meshes[i].animations.push(characterPosition)
    setTimeout(() => scene.beginAnimation(result.meshes[i], 0, 20, true), i * 70, false)
  }

  // Delayed start to camera animation
  setTimeout(() => scene.beginAnimation(camera, 0, 300, true), 5000)

  // Wireframe animation
  setInterval(() => {
    if (result.meshes[1].material) result.meshes[1].material.wireframe = !result.meshes[1].material.wireframe
    if (result.meshes[2].material) result.meshes[2].material.wireframe = !result.meshes[2].material.wireframe
    if (result.meshes[3].material) result.meshes[3].material.wireframe = !result.meshes[3].material.wireframe
    if (result.meshes[4].material) result.meshes[4].material.wireframe = !result.meshes[4].material.wireframe
    if (result.meshes[5].material) result.meshes[5].material.wireframe = !result.meshes[5].material.wireframe
  }, 10000)

  // Start rendering
  engine.runRenderLoop(() => {
    scene.render()
    isEngineLoaded.value = true
  })

  // Step 4: Inputs
  scene.onPointerPick = (evt, pickInfo) => {
    if (pickInfo.hit && pickInfo.pickedMesh) {
      // Setup color & spin animation
      const characterRotation = new Animation('characterRotation', 'rotationQuaternion', 30, Animation.ANIMATIONTYPE_QUATERNION, Animation.ANIMATIONLOOPMODE_CONSTANT)
      const random = (Math.random() - 0.5) * 0.15
      characterRotation.setKeys([
        { frame: 0, value: pickInfo.pickedMesh.rotationQuaternion },
        { frame: 20, value: new Quaternion(0.707 + random, random, random, 0.707 + random) }
      ])

      const easingFunction = new CircleEase()
      easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEOUT)
      characterRotation.setEasingFunction(easingFunction)

      const characterColor = new Animation('characterColor', 'material.emissiveColor', 30, Animation.ANIMATIONTYPE_COLOR3, Animation.ANIMATIONLOOPMODE_CONSTANT)
      characterColor.setKeys([
        { frame: 0, value: new Color3(1, 1, 1) },
        { frame: 20, value: new Color3(0, 0, 0) }
      ])

      pickInfo.pickedMesh.animations = []
      pickInfo.pickedMesh.animations.push(characterColor)
      pickInfo.pickedMesh.animations.push(characterRotation)

      // Actually do stuff
      scene.beginAnimation(pickInfo.pickedMesh, 0, 20, false)
      if (!pickInfo.pickedMesh.material) throw new Error('Material not found')
      const material = pickInfo.pickedMesh.material as PBRMetallicRoughnessMaterial
      material.baseColor = new Color3(Math.random(), Math.random(), Math.random())

      // Update HUD
      const r = Math.floor(material.baseColor.r * 256)
      const g = Math.floor(material.baseColor.g * 256)
      const b = Math.floor(material.baseColor.b * 256)
      const r2 = Math.round(Math.min(Math.max(0, r + (r * 0.2))))
      const g2 = Math.round(Math.min(Math.max(0, g + (g * 0.2))))
      const b2 = Math.round(Math.min(Math.max(0, b + (b * 0.2))))

      if (pickInfo.pickedMesh.name === 'h1') {
        localClicks.value.h1++
        scoreStyle.value.h1['background-image'] = 'linear-gradient(rgb(' + r2 + ',' + g2 + ',' + b2 + '), rgb(' + r + ',' + g + ',' + b + ')'
        scoreStyle.value.h1.color = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white'
      }
      if (pickInfo.pickedMesh.name === 'a2') {
        localClicks.value.a2++
        scoreStyle.value.a2['background-image'] = 'linear-gradient(rgb(' + r2 + ',' + g2 + ',' + b2 + '), rgb(' + r + ',' + g + ',' + b + ')'
        scoreStyle.value.a2.color = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white'
      }
      if (pickInfo.pickedMesh.name === 'i3') {
        localClicks.value.i3++
        scoreStyle.value.i3['background-image'] = 'linear-gradient(rgb(' + r2 + ',' + g2 + ',' + b2 + '), rgb(' + r + ',' + g + ',' + b + ')'
        scoreStyle.value.i3.color = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white'
      }
      if (pickInfo.pickedMesh.name === 'l4') {
        localClicks.value.l4++
        scoreStyle.value.l4['background-image'] = 'linear-gradient(rgb(' + r2 + ',' + g2 + ',' + b2 + '), rgb(' + r + ',' + g + ',' + b + ')'
        scoreStyle.value.l4.color = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white'
      }
      if (pickInfo.pickedMesh.name === 'a5') {
        localClicks.value.a5++
        scoreStyle.value.a5['background-image'] = 'linear-gradient(rgb(' + r2 + ',' + g2 + ',' + b2 + '), rgb(' + r + ',' + g + ',' + b + ')'
        scoreStyle.value.a5.color = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white'
      }

      // Update database
      // const doc = firestore.value.collection('logo').doc(pickInfo.pickedMesh.name)
      // return firestore.value.runTransaction(transaction => {
      //   return transaction.get(doc).then(current => {
      //     transaction.update(doc, { count: current.data().count + 1 })
      //   })
      // }).catch(err => console.log('Updating database failed: ', err))
    }
  }

  // Handle window resizing
  window.addEventListener('resize', () => engine.resize())

  // Step 5: Firestore
  // Firebase.initializeApp({
  //   apiKey: 'AIzaSyD37dmxeMAhz7JhQrWRZM6EpS6kx60iHNU',
  //   projectId: 'haila-fi-v2'
  // })
  // firestore = Firebase.firestore()
  // firestore.collection('logo').onSnapshot(snapshot => {
  //   for (const doc of snapshot.docs) {
  //     this.clicks[doc.id] = doc.data().count
  //   }
  //   this.$emit('updateclicks', this.clicks)
  // })
})
</script>
