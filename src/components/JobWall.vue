<template lang="pug">
div#job-wall-container.section-padding
  div.container
    h1.mb-3 CV Generator
    div.d-flex.justify-content-center.text-light
      div.col-lg-8.d-flex.justify-content-center
        div#orange.box.flex-fill.text-center
          small {{ (ticker % prefixes.length) + 1 }}/{{ prefixes.length }}
          transition(name="slide")
            p(:key="currentJob.prefix") {{ currentJob.prefix }}
        div#blue.box.flex-fill.text-center.ml-2.mr-2
          small {{ (ticker % jobs.length) + 1 }}/{{ jobs.length }}
          transition(name="slide")
            p(:key="currentJob.job") {{ currentJob.job }}
        div#lila.box.flex-fill.text-center
          small {{ (ticker % suffixes.length) + 1 }}/{{ suffixes.length }}
          transition(name="slide")
            p(:key="currentJob.suffix") {{ currentJob.suffix }}

    h4.d-flex.justify-content-center.mt-4.mb-4 at

    div.row.text-center.align-items-center
      div.col-sm.mb-4
        g-image(alt="PlayRaven logo" src="@/assets/logo-playraven.png" width="160" fit="inside")
      div.col-sm.mb-4
        g-image(alt="Wooga logo" src="@/assets/logo-wooga.png" width="130" fit="inside")
    div.row.text-center.align-items-center
      div.col-sm.mb-4
        g-image(alt="NewFactory logo" src="@/assets/logo-newfactory.png" width="130" fit="inside")
      div.col-sm.mb-4
        g-image(alt="Neogames logo" src="@/assets/logo-neogames.png" width="90" fit="inside")
      div.col-sm.mb-4
        g-image(alt="IGDA logo" src="@/assets/logo-igda.png" width="140" fit="inside")

    p#boring-label.d-flex.justify-content-center Looking for a boring list?
    div.d-flex.justify-content-center
      a(href="https://www.linkedin.com/in/dasinf/")
        g-image(alt="LinkedIn" src="~/assets/logo-linkedin.png" width="150")
</template>

<script>
export default {
  data: function () {
    return {
      ticker: 0,
      prefixes: ['One-man', 'Senior', 'Lead', 'Chief'],
      jobs: ['Product', 'Game', 'Analytics', 'Technology', 'Bizdev'],
      suffixes: ['Officer', 'Manager', 'Designer', 'Developer', 'Producer', 'Artist']
    }
  },
  computed: {
    // True Story™ Technology, patent pending
    currentJob: function () {
      return {
        prefix: this.prefixes[this.ticker % this.prefixes.length],
        job: this.jobs[this.ticker % this.jobs.length],
        suffix: this.suffixes[this.ticker % this.suffixes.length]
      }
    }
  },
  mounted: function () {
    setInterval(() => { this.ticker++ }, 4000)
  }
}
</script>

<style lang="sass">
#job-wall-container
  margin-bottom: 2rem

.box
  border-radius: 0.4rem
  height: 2rem
  position: relative

  small
    font-size: 0.6rem
    position: absolute
    left: 0
    bottom: 0
    margin-left: 0.2rem

  p
    font-size: 1.3rem
    font-weight: 700
    margin-bottom: 0
    position: absolute
    left: 0
    right: 0

#orange
  background-image: linear-gradient(rgb(235, 157, 28), rgb(216, 120, 42))

#blue
  background-image: linear-gradient(rgb(28, 235, 131), rgb(36, 190, 145))

#lila
  background-image: linear-gradient(rgb(182, 28, 235), rgb(149, 42, 216))

.slide-enter-active, .slide-leave-active
  transition: all .5s ease

.slide-enter
  transform: translateY(1rem)
  opacity: 0

.slide-leave-to
  transform: translateY(-1rem)
  opacity: 0

#boring-label
  margin-top: 4rem
  margin-bottom: 0.3rem
</style>
