<template lang="pug">
div#potentiality-container
  h1 MULTIPOTENTIALITY
  small haila.fi:manifestos teemu$ cat 01.txt
  p 1. Eat
  p 2. Sleep
  p 3. Code
  i.content-placeholder.d-flex.justify-content-center Placeholder
  slot
</template>

<style lang="sass">
#potentiality-container
  background-color: rgb(48, 48, 48)
  color: white
</style>
