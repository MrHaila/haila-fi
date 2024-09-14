<template lang="pug">
div(class="relative bg-gradient-to-t from-neutral-100 to-white")
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
  MeshBasicMaterial,
  Mesh,
  CubeTextureLoader,
  AmbientLight,
  DirectionalLight,
  MeshStandardMaterial,
  Color,
} from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { ref, computed, onMounted } from 'vue'

// import { useSupabase } from '../useSupabase'

const isEngineLoaded = ref(false)
const emits = defineEmits(['loaded'])

const scoreStyle = ref({
  h1: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black',
  },
  a2: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black',
  },
  i3: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black',
  },
  l4: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black',
  },
  a5: {
    'background-image': 'linear-gradient(rgb(238, 238, 238), rgb(255, 255, 255))',
    color: 'black',
  },
})

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

const headerCanvas = ref<HTMLCanvasElement>()
const isWebGlAvailable = WebGL.isWebGL2Available()

// const { totalClicks, h1, a2, i3, l4, a5, incrementClick } = useSupabase()

onMounted(async () => {
  if (!isWebGlAvailable) return
  if (!headerCanvas.value) throw new Error('Header canvas not found')

  // Step 1: Scene + camera
  const scene = new Scene()
  const camera = new PerspectiveCamera(35, headerCanvas.value.clientWidth / headerCanvas.value.clientHeight, 0.1, 1000)
  camera.position.z = 12

  const ambientLight = new AmbientLight(0xffffff, 1)
  scene.add(ambientLight)

  // const directionalLight = new DirectionalLight(0xffffff, 1)
  // directionalLight.position.set(5, 10, 7.5)
  //scene.add(directionalLight)

  // Step 2: Environment (env texture from Babylon Playground)
  const gltfLoader = new GLTFLoader()
  gltfLoader.load(
    '/assets/haila.glb',
    (gltf) => {
      const gltfScene = gltf.scene

      gltfScene.traverse((child) => {
        if (child instanceof Mesh) {
          // Create a new material for each mesh
          child.material = new MeshStandardMaterial({
            // color: new Color(0.05, 0.05, 0.05),
            color: new Color(1, 1, 1),
            roughness: 0.25,
            metalness: 0.2,
          })
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

  const textureLoader = new CubeTextureLoader()
  const envTexture = textureLoader.load(['/assets/environment_32.env'])

  scene.environment = envTexture

  const skyboxMaterial = new MeshBasicMaterial({ envMap: envTexture })
  const skyboxGeometry = new BoxGeometry(100, 100, 100)
  const skybox = new Mesh(skyboxGeometry, skyboxMaterial)
  scene.add(skybox)

  // Step 3: Models, materials and animations

  // Step 4: Inputs

  // Step 5: Renderer
  const renderer = new WebGLRenderer({
    canvas: headerCanvas.value,
    antialias: true,
  })

  renderer.setSize(headerCanvas.value.clientWidth, headerCanvas.value.clientHeight)

  renderer.setAnimationLoop(() => {
    const time = Date.now()
    const z = Math.sin(time * 0.0005) / 6
    const x = Math.cos(time * 0.0009) / 4

    // Sine wave rotation
    scene.rotation.z = z
    scene.rotation.x = x

    renderer.render(scene, camera)
  })

  isEngineLoaded.value = true
  emits('loaded')

  // Handle window resizing
  window.addEventListener('resize', () => {
    // engine.resize()
  })
})
</script>
