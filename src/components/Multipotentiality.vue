<template lang="pug">
div#potentiality-container.text-light.section-padding
  h1 MULTIPOTENTIALITY
  // haila.fi:manifestos teemu$ cat 01.txt
  small.text-monospace.font-weight-light teemu@haila.fi ~/manifestos> cat 01.txt

  p.mt-4.ml-3 1. Eat
  p.ml-3 2. Sleep
  p.ml-3 3. Code #[span.ml-4 Design]
  p.ml-5 Photograph
  p.ml-4 Play #[span.ml-4 Excercise]
  p.ml-5 Cook #[span.ml-2 Fix]
  p.ml-3 Read #[span.ml-3 Evagelise]
  p.ml-4 Teach #[span.ml-4 Learn]
  p.ml-2 Travel #[span.ml-4 Create]

  p.mt-4.ml-4 Ehhh, whatever.
</template>

<style lang="sass">
#potentiality-container
  background-color: rgb(48, 48, 48)

  h1
    margin-bottom: 0
    line-height: 1.5rem

  p
    margin-bottom: 0
    font-size: 1.5rem

.section-padding
  padding-top: 3rem
  padding-bottom: 2.5rem
  padding-left: 1rem
  padding-right: 1rem
</style>
