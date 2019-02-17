<template lang="pug">
div#job-wall-container.section-padding
  h1.mb-3 CV
  div.d-flex.justify-content-center.text-light
    div#orange.box
      p Chief
    div#blue.box
      p Product
    div#lila.box
      p Officer
  h4.d-flex.justify-content-center.mt-3 at
  i.content-placeholder.d-flex.justify-content-center Placeholder
  p#boring-label.d-flex.justify-content-center Looking for a boring list?
  div.d-flex.justify-content-center
    a(href="")
      g-image(alt="LinkedIn" src="~/assets/linkedin.png" width="150")
</template>

<style lang="sass">
#job-wall-container

.box
  border-radius: 0.4rem
  margin-left: 0.5rem
  mergin-right: 0.5rem

  p
    font-size: 1.3rem
    font-weight: 700
    margin-bottom: 0
    margin-left: 1rem
    margin-right: 1rem

#orange
  background-image: linear-gradient(rgb(235, 157, 28), rgb(216, 120, 42))

#blue
  background-image: linear-gradient(rgb(28, 235, 131), rgb(36, 190, 145))

#lila
  background-image: linear-gradient(rgb(182, 28, 235), rgb(149, 42, 216))

#boring-label
  margin-top: 2rem
  margin-bottom: 0.3rem
</style>
