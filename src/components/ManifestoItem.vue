<template lang="pug">
span(
  ref="textRef"
  class="relative"
  ) {{ props.text }}
  svg(
    class="absolute left-0 inline"
    height="100%"
    :width="textLength"
    :viewBox="`0 0 ${textLength} 10`"
    stroke-width="5"
    stroke="red"
    )
    line(
      x1="0"
      :x2="textLength"
      :y1="5 + offset"
      :y2="5 + offset"
      )
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    offset?: number
  }>(),
  {
    offset: 0,
  }
)

const textRef = ref<HTMLSpanElement>()
const textLength = computed(() => textRef.value?.offsetWidth ?? 0)
</script>
