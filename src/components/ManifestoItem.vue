<template lang="pug">
span(class="relative" ref="text") {{ props.text }}
  svg(class="absolute inline left-0" height="100%" :width="textLength" :viewBox="`0 0 ${textLength} 10`" stroke-width="5" stroke="red")
    line(x1="0" :x2="textLength" :y1="5 + offset" :y2="5 + offset")
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
text: string
offset?: number
}>(), {
  offset: 0
})

const text = ref<HTMLSpanElement>()
const textLength = computed(() => text.value?.offsetWidth || 0)
</script>
