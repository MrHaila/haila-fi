<template lang="pug">
div(
  class="relative bg-gradient-to-t from-neutral-100 to-white"
  :class="{ 'cursor-pointer': !!hoveredCharacter }"
  )
  p(
    v-show="!isEngineLoaded"
    class="absolute top-40 z-10 w-full text-center text-xl text-neutral-600"
    ) 🎨 Loading... 🤹‍

  //div(
    v-if="totalLocalClicks > 0"
    class="absolute top-4 z-10 w-full"
    )
    div(class="flex justify-center space-x-1 font-bold")
      span(v-if="totalLocalClicks >= 20") {{ feedback }}
      span(
        class="rounded-lg px-2"
        :style="scoreStyle.h1"
        v-show="localClicks.h1 > 0"
        ) {{ localClicks.h1 }}
      span(
        class="rounded-lg px-2"
        :style="scoreStyle.a2"
        v-show="localClicks.a2 > 0"
        ) {{ localClicks.a2 }}
      span(
        class="rounded-lg px-2"
        :style="scoreStyle.i3"
        v-show="localClicks.i3 > 0"
        ) {{ localClicks.i3 }}
      span(
        class="rounded-lg px-2"
        :style="scoreStyle.l4"
        v-show="localClicks.l4 > 0"
        ) {{ localClicks.l4 }}
      span(
        class="rounded-lg px-2"
        :style="scoreStyle.a5"
        v-show="localClicks.a5 > 0"
        ) {{ localClicks.a5 }}
      span(v-if="totalLocalClicks >= 20") {{ feedback }}
    // div(class="text-center text-sm") You: {{totalLocalClicks}} / Everyone: {{ totalClicks }}

  div(class="absolute bottom-4 left-0 right-0 z-10 text-sm sm:bottom-5 sm:text-base")
    ul(class="container mx-auto px-4 sm:px-10")
      li BA Interaction Design
      li MProf Games Development
      li Games Industry Entrepreneur & Executive

  canvas(
    ref="headerCanvas"
    class="block h-full w-full outline-none"
    )
</template>

<script lang="ts" setup>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  AmbientLight,
  DirectionalLight,
  MeshStandardMaterial,
  Color,
  Raycaster,
  Vector2,
  DataTexture,
  EquirectangularReflectionMapping,
} from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { ref, computed, onMounted } from 'vue'

// import { useSupabase } from '../useSupabase'

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

const totalLocalClicks = computed(() => {
  return (
    localClicks.value.h1 + localClicks.value.a2 + localClicks.value.i3 + localClicks.value.l4 + localClicks.value.a5
  )
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

// const { totalClicks, h1, a2, i3, l4, a5, incrementClick } = useSupabase()

// 3D Shenanigans -----------------------------------------------------------------------------------------------------
const headerCanvas = ref<HTMLCanvasElement>()
const isWebGlAvailable = WebGL.isWebGL2Available()
const isEngineLoaded = ref(false)

const scene = new Scene()

const defaultMaterial = new MeshStandardMaterial({ color: new Color(0.7, 0.7, 0.7), roughness: 0.25, metalness: 0.2 })
const hoverMaterial = new MeshStandardMaterial({ color: 0xff0000 })
const clickMaterial = new MeshStandardMaterial({ color: 0x0000ff })

const raycaster = new Raycaster()
const mouse = new Vector2()
let hoveredMesh: Mesh | null = null
const hoveredCharacter = ref<'h1' | 'a2' | 'i3' | 'l4' | 'a5'>()

function onClick(): void {
  if (!hoveredMesh) return
  hoveredMesh.material = clickMaterial
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
  if (!headerCanvas.value) throw new Error('Header canvas not found')

  // Step 1: Camera
  const camera = new PerspectiveCamera(35, headerCanvas.value.clientWidth / headerCanvas.value.clientHeight, 0.1, 1000)
  camera.position.z = 12

  // Step 2: Environment
  const hdr = '/assets/3d/cloudy_128.hdr'
  new RGBELoader().load(hdr, (texture) => {
    texture.mapping = EquirectangularReflectionMapping
    scene.environment = texture
    scene.backgroundBlurriness = 0.2
  })

  // Step 3: Models, materials and animations
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
    if (!headerCanvas.value) return
    mouse.x = (event.clientX / headerCanvas.value.clientWidth) * 2 - 1
    mouse.y = -(event.clientY / headerCanvas.value.clientHeight) * 2 + 1
  })

  window.addEventListener('click', onClick)

  // Step 5: Renderer
  const renderer = new WebGLRenderer({
    canvas: headerCanvas.value,
    antialias: true,
    alpha: true,
  })

  renderer.setSize(headerCanvas.value.clientWidth, headerCanvas.value.clientHeight)

  // Handle window resizing
  // window.addEventListener('resize', () => {
  //   if (!headerCanvas.value) return
  //   camera.aspect = headerCanvas.value.clientWidth / headerCanvas.value.clientHeight
  //   camera.updateProjectionMatrix()
  //   renderer.setSize(headerCanvas.value.clientWidth, headerCanvas.value.clientHeight)
  // })

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
    renderer.render(scene, camera)
  })

  isEngineLoaded.value = true
})
</script>
