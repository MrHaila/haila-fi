<template lang="pug">
div(class="container mx-auto")
    h1(class="text-3xl font-bold mb-8") CV Generator
    div(class="flex justify-center text-neutral-100 space-x-2")
      div(class="text-center relative px-3 py-1 w-36 rounded-lg bg-gradient-to-t from-orange-500 to-orange-400")
        span(class="text-xs absolute left-0 bottom-0.5 ml-1") {{ (ticker % prefixes.length) + 1 }}/{{ prefixes.length }}
        transition(name="slide")
          p(class="font-semibold" :key="currentJob.prefix") {{ currentJob.prefix }}

      div(class="text-center relative px-3 py-1 w-36 rounded-lg bg-gradient-to-t from-sky-500 to-sky-400")
        span(class="text-xs absolute left-0 bottom-0.5 ml-1") {{ (ticker % jobs.length) + 1 }}/{{ jobs.length }}
        transition(name="slide")
          p(class="font-semibold" :key="currentJob.job") {{ currentJob.job }}

      div(class="text-center relative px-3 py-1 w-36 rounded-lg bg-gradient-to-t from-violet-500 to-violet-400")
        span(class="text-xs absolute left-0 bottom-0.5 ml-1") {{ (ticker % suffixes.length) + 1 }}/{{ suffixes.length }}
        transition(name="slide")
          p(class="font-semibold" :key="currentJob.suffix") {{ currentJob.suffix }}

    div(class="text-center my-8") at

    div(class="sm:flex sm:justify-center sm:space-x-4 sm:items-center")
      img(
        class="mb-4 h-24"
        alt="Metaplay logo"
        src="/assets/logo-metaplay.png"
        )
      img(
        class="mb-4 h-20"
        alt="PlayRaven logo"
        src="/assets/logo-playraven.png"
        )
      img(
        class="mb-4 h-24"
        alt="Wooga logo"
        src="/assets/logo-wooga.png"
        )
    div(class="sm:flex sm:justify-center sm:space-x-8 sm:items-center")
      img(
        class="mb-4 h-24"
        alt="NewFactory logo"
        src="/assets/logo-newfactory.png"
        )
      img(
        class="mb-4 h-24"
        alt="Neogames logo"
        src="/assets/logo-neogames.png"
        )
      img(
        class="mb-4 h-16"
        alt="IGDA logo"
        src="/assets/logo-igda.png"
        )

    div(class="text-center mt-16")
      p(class="mb-3") Looking for a boring list?
      a(href="https://www.linkedin.com/in/dasinf/")
        img(class="inline" alt="LinkedIn" src="/assets/logo-linkedin.png" width="150")
</template>

<script lang="ts" setup>
import { useInterval } from '@vueuse/core'
import { computed, ref } from 'vue'

const prefixes = ref(['One-man', 'Senior', 'Lead', 'Chief'])
const jobs = ref(['Product', 'Game', 'Analytics', 'Technology', 'Bizdev'])
const suffixes = ref(['Officer', 'Manager', 'Designer', 'Developer', 'Producer', 'Artist'])

// True Story™ Technology, patent pending
const currentJob = computed(() => {
  return {
    prefix: prefixes.value[ticker % prefixes.value.length],
    job: jobs.value[ticker % jobs.value.length],
    suffix: suffixes.value[ticker % suffixes.value.length]
  }
})

const { value: ticker } = useInterval(4000)
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter {
  transform: translateY(1rem);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(-1rem);
  opacity: 0;
}
</style>
