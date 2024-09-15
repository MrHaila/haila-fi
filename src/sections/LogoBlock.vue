<template lang="pug">
div(
  ref="containerRef"
  class="scrollingBackground relative h-[25rem] select-none sm:h-[35rem]"
  :class="{ 'cursor-pointer': !!hoveredCharacter }"
  )
  p(
    v-show="!isEngineLoaded"
    class="absolute top-40 z-10 w-full text-center text-xl text-neutral-600"
    ) 🎨 Loading... 🤹‍

  div(class="absolute top-4 z-10 w-full")
    div(class="flex justify-center space-x-1")
      div(
        class="rounded-lg bg-amber-100 px-1 pt-0.5 text-center opacity-70"
        :style="{ backgroundColor: getBgColor(localAnimationOffsets.h1), transform: `scale(${localAnimationOffsets.h1 * -0.3 + 1}, ${localAnimationOffsets.h1 * 0.2 + 1}) translateY(${localAnimationOffsets.h1 * -4}px)` }"
        )
        div(class="text-xs") H
        div(class="-mt-1 text-sm font-semibold") {{ supabase.h1 }}
      div(
        class="rounded-lg px-1 pt-0.5 text-center opacity-70"
        :style="{ backgroundColor: getBgColor(localAnimationOffsets.a2), transform: `scale(${localAnimationOffsets.a2 * -0.3 + 1}, ${localAnimationOffsets.a2 * 0.2 + 1}) translateY(${localAnimationOffsets.a2 * -4}px)` }"
        )
        div(class="text-xs") A
        div(class="-mt-1 text-sm font-semibold") {{ supabase.a2 }}
      div(
        class="rounded-lg px-1 pt-0.5 text-center opacity-70"
        :style="{ backgroundColor: getBgColor(localAnimationOffsets.i3), transform: `scale(${localAnimationOffsets.i3 * -0.3 + 1}, ${localAnimationOffsets.i3 * 0.2 + 1}) translateY(${localAnimationOffsets.i3 * -4}px)` }"
        )
        div(class="text-xs") I
        div(class="-mt-1 text-sm font-semibold") {{ supabase.i3 }}
      div(
        class="rounded-lg px-1 pt-0.5 text-center opacity-70"
        :style="{ backgroundColor: getBgColor(localAnimationOffsets.l4), transform: `scale(${localAnimationOffsets.l4 * -0.3 + 1}, ${localAnimationOffsets.l4 * 0.2 + 1}) translateY(${localAnimationOffsets.l4 * -4}px)` }"
        )
        div(class="text-xs") L
        div(class="-mt-1 text-sm font-semibold") {{ supabase.l4 }}
      div(
        class="rounded-lg px-1 pt-0.5 text-center opacity-70"
        :style="{ backgroundColor: getBgColor(localAnimationOffsets.a5), transform: `scale(${localAnimationOffsets.a5 * -0.3 + 1}, ${localAnimationOffsets.a5 * 0.2 + 1}) translateY(${localAnimationOffsets.a5 * -4}px)` }"
        )
        div(class="text-xs") A
        div(class="-mt-1 text-sm font-semibold") {{ supabase.a5 }}
    div(class="mt-1 text-center text-xs text-neutral-100") You: {{ totalLocalClicks }} / Everyone: {{ supabase.totalClicks }}

  div(class="absolute bottom-4 left-0 right-0 z-10 text-sm text-neutral-200 sm:bottom-5 sm:text-base")
    ul(class="container mx-auto px-4 sm:px-10")
      li BA Interaction Design
      li MProf Games Development
      li Games Industry Entrepreneur & Executive

  canvas(
    ref="canvas"
    class="block h-full w-full outline-none"
    )
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  MeshStandardMaterial,
  Color,
  Raycaster,
  Vector2,
  EquirectangularReflectionMapping,
  MeshBasicMaterial,
} from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { ref, computed, onMounted, reactive } from 'vue'

import { useSupabase } from '../useSupabase'

// Stats -----------------------------------------------------------------------------------------------------

interface Clicks {
  h1: number
  a2: number
  i3: number
  l4: number
  a5: number
}

const localClicks = ref<Clicks>({
  h1: 0,
  a2: 0,
  i3: 0,
  l4: 0,
  a5: 0,
})

const localAnimationOffsets = reactive<Clicks>({
  h1: 0,
  a2: 0,
  i3: 0,
  l4: 0,
  a5: 0,
})

const h1Animation = reactive({
  number: 0,
})

const totalLocalClicks = computed(() => {
  return (
    localClicks.value.h1 + localClicks.value.a2 + localClicks.value.i3 + localClicks.value.l4 + localClicks.value.a5
  )
})

onMounted(() => {
  // Load local clicks from localStorage.
  const localClicksData = localStorage.getItem('localClicks')
  if (localClicksData) {
    localClicks.value = JSON.parse(localClicksData)
  }
})

function incrementLocalClick(character: 'h1' | 'a2' | 'i3' | 'l4' | 'a5'): void {
  localClicks.value[character]++
  //gsap.to(test, { h1: 0, duration: 0.5 })
  gsap.fromTo(localAnimationOffsets, { [character]: 1 }, { duration: 0.5, [character]: 0 })
  localStorage.setItem('localClicks', JSON.stringify(localClicks.value))
}

function getBgColor(animationOffset: number): string {
  // Offset is from 0 to 1. Returns rgb(255, 0.3 * 255, 0) for 1 and rgb(255, 255, 255) for 0.
  return `rgb(255, ${Math.round(255 - 0.5 * 255 * animationOffset)}, ${Math.round(255 - 255 * animationOffset)})`
}

const supabase = useSupabase()

// 3D Shenanigans -----------------------------------------------------------------------------------------------------
const containerRef = ref<HTMLDivElement>()
const canvas = ref<HTMLCanvasElement>()
const isWebGlAvailable = WebGL.isWebGL2Available()
const isEngineLoaded = ref(false)

const scene = new Scene()

const defaultMaterial = new MeshStandardMaterial({ color: new Color(0.7, 0.7, 0.7), roughness: 0.25, metalness: 0.2 })
const hoverMaterial = new MeshStandardMaterial({ color: new Color(1, 1, 1), roughness: 0.6, metalness: 0.2 })
const clickMaterial = new MeshStandardMaterial({ color: new Color(1, 0.3, 0), roughness: 0.6, metalness: 0.2 })
const shadowMaterial = new MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3 })

const raycaster = new Raycaster()
const mouse = new Vector2()
let hoveredMesh: Mesh | null = null
const hoveredCharacter = ref<'h1' | 'a2' | 'i3' | 'l4' | 'a5'>()
let originalScale = 1

setInterval(() => {
  if (isEngineLoaded.value) {
    // Rotate the scene every 3 seconds.
    gsap.to(scene.rotation, {
      y: scene.rotation.y + Math.PI,
      duration: 1,
      ease: 'power2.inOut',
    })

    setTimeout(() => {
      // Toggle wireframe halfway through the rotation.
      defaultMaterial.wireframe = !defaultMaterial.wireframe
      hoverMaterial.wireframe = !hoverMaterial.wireframe
      clickMaterial.wireframe = !clickMaterial.wireframe
    }, 500)
  }
}, 6000)

function onClick(): void {
  if (!hoveredMesh) return
  hoveredMesh.material = clickMaterial

  // Increment the click count.
  const character = hoveredMesh.name as 'h1' | 'a2' | 'i3' | 'l4' | 'a5'
  incrementLocalClick(character)
  void supabase.incrementClick(character)

  // Animations.
  gsap.to(hoveredMesh.rotation, {
    z: hoveredMesh.rotation.z + Math.PI + Math.random() * 0.5,
    duration: 0.5,
    ease: 'power2.out',
  })

  gsap.fromTo(
    hoveredMesh.scale,
    {
      x: originalScale + 20,
      y: originalScale + 20,
      z: originalScale + 20,
      duration: 0.5,
      ease: 'power2.out',
    },
    {
      x: originalScale,
      y: originalScale,
      z: originalScale,
    }
  )

  gsap.fromTo(clickMaterial.color, { r: 1, g: 0.3, b: 0 }, { r: 1, g: 1, b: 1, duration: 0.3 })
}

function onHover(mesh: Mesh): void {
  if (hoveredMesh !== mesh) {
    // If a new object is being hovered, revert the old object's material.
    if (hoveredMesh) hoveredMesh.material = defaultMaterial

    // Set the new hovered object's material.
    mesh.material = hoverMaterial
    hoveredMesh = mesh
    hoveredCharacter.value = mesh.name as 'h1' | 'a2' | 'i3' | 'l4' | 'a5'
  }
}

function onNoHover(): void {
  if (hoveredMesh) hoveredMesh.material = defaultMaterial
  hoveredMesh = null
  hoveredCharacter.value = undefined
}

function update(sceneTime: number, deltaTime: number): void {
  const z = Math.sin(sceneTime * 0.0005) / 12
  const x = Math.cos(sceneTime * 0.0009) / 5

  // Sine wave rotation
  scene.rotation.z = z
  scene.rotation.x = x
}

onMounted(async () => {
  if (!isWebGlAvailable) return
  if (!canvas.value) throw new Error('Header canvas not found')
  if (!containerRef.value) throw new Error('Header container not found')

  // Step 1: Camera
  const camera = new PerspectiveCamera(35, canvas.value.clientWidth / canvas.value.clientHeight, 0.1, 1000)
  function repositionCamera(): void {
    if (!containerRef.value) throw new Error('Header container not found')
    camera.position.z = 30 - containerRef.value.clientWidth / 80
  }
  repositionCamera()

  // Step 2: Environment
  const hdr = '/assets/3d/cloudy_128.hdr'
  new RGBELoader().load(hdr, (texture) => {
    texture.mapping = EquirectangularReflectionMapping
    scene.environment = texture
    scene.backgroundBlurriness = 0.2
  })

  // Step 3: Models & materials
  const characterObjects: Mesh[] = []

  const gltfLoader = new GLTFLoader()
  gltfLoader.load(
    '/assets/3d/haila.glb',
    (gltf) => {
      const gltfScene = gltf.scene

      // Traverse the scene and apply the default material to all meshes.
      gltfScene.traverse((obj) => {
        if (obj instanceof Mesh) {
          obj.material = defaultMaterial
          obj.geometry.computeVertexNormals()

          // Store the mesh in the characterObject array.
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          characterObjects.push(obj)

          originalScale = obj.scale.x
        }
      })

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      scene.add(gltfScene)
    },
    undefined,
    (error) => {
      console.error(error)
    }
  )

  // Step 4: Inputs
  window.addEventListener('mousemove', (event) => {
    // Calculate mouse position inside the canvas.
    if (!canvas.value) return
    mouse.x = (event.clientX / canvas.value.clientWidth) * 2 - 1
    mouse.y = -(event.clientY / canvas.value.clientHeight) * 2 + 1
  })

  window.addEventListener('click', onClick)

  // Step 5: Renderer
  const renderer = new WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
  })

  renderer.autoClear = false
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight)

  // Handle window resizing.
  const resizeObserver = new ResizeObserver(() => {
    if (!containerRef.value) return
    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight

    // Update renderer size.
    renderer.setSize(width, height)

    // Update camera aspect ratio and projection matrix.
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    repositionCamera()
  })
  resizeObserver.observe(containerRef.value)

  // Step 6: Update loop
  const sceneTimeStart = Date.now()
  let lastTime = Date.now()
  renderer.setAnimationLoop(() => {
    // Animate the scene.
    const time = Date.now()
    update(time - sceneTimeStart, time - lastTime)
    lastTime = time

    // Input handling.
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(characterObjects)
    if (intersects.length > 0) {
      const intersectedMesh = intersects[0].object as Mesh
      onHover(intersectedMesh)
    } else {
      onNoHover()
    }

    // Render the scene.
    renderer.clear()

    // Shadow scene. It's a duplicate of the main scene with black materials and offset.
    const shadowScene = scene.clone()
    shadowScene.traverse((object) => {
      if (object instanceof Mesh) {
        object.material = shadowMaterial
      }
    })
    shadowScene.position.z = -5
    shadowScene.position.y = -2

    renderer.render(shadowScene, camera)
    renderer.render(scene, camera)
  })

  isEngineLoaded.value = true
})
</script>

<style>
.scrollingBackground {
  /* Set a background image with a 45° repeating pattern */
  background-image: url('/assets/3d/AA.svg');
  background-size: 120px 120px; /* Controls the size of the pattern */
  background-color: var(--color-neutral-900);

  /* Initial position */
  background-position: 0 0;

  /* Rotate 45° */

  /* Animate the background position */
  animation: moveBackground 10s linear infinite;
}

/* Keyframe animation to move the background */
@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 120px -120px; /* Moves in a diagonal direction */
  }
}
</style>
