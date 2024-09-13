<template lang="pug">
div(class="relative bg-gradient-to-t from-neutral-900 to-neutral-800 text-center text-neutral-100")
  img(
    src="/assets/photos/photo-award.jpg"
    srcset="/assets/photos/photo-award@1x.webp 1x, /assets/photos/photo-award@2x.webp 2x"
    alt="IGDA Finland Lifetime Award"
    class="max-h-screen w-full object-cover"
    style="min-height: 25rem"
    loading="lazy"
    )

  div(
    class="absolute left-4 right-4 top-6 rounded-lg bg-neutral-900 text-center text-neutral-100 sm:top-10 sm:bg-transparent sm:text-white"
    )
    p(class="px-4 py-2") In 2018 I got a lifetime award for my contributions to the Finnish game development scene.
</template>
