<template lang="pug">
div(
  ref="target"
  :class="['transition-all duration-500', { 'translate-y-0 opacity-100': hasBeenVisible, '-translate-y-24 opacity-0': !hasBeenVisible }]"
  :bind="props"
  )
  slot
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{
  delay?: number
}>()

const target = ref<HTMLDivElement>()
const hasBeenVisible = ref(false)
useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    if (props.delay) {
      setTimeout(() => {
        hasBeenVisible.value = true
      }, props.delay)
    } else {
      hasBeenVisible.value = true
    }
  }
})
</script>
