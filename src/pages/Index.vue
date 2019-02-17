<template lang="pug">
div
  div#header.d-flex.justify-content-center
    h1 HAILA

  logo-toy
  multipotentiality
  serious-business
  award
  job-wall
  photography

  div#footer
    p.d-flex.justify-content-center Email me, maybe?
    h4.d-flex.justify-content-center teemu@haila.fi
    div.d-flex.justify-content-center: small Handcrafted with ❤️ and 🍺 as <a href="">open source</a>.
</template>

<script>
export default {
 // ..
}
</script>

<style lang="sass">
#header
  background-color: rgb(255, 255, 255)
  position: sticky

#footer
  padding-top: 3rem
  p
    margin: 0
  small
    margin-top: 4rem
</style>
