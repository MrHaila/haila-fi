<template lang="pug">
div(class="bg-gradient-to-b from-white to-neutral-100")
div(class="container mx-auto space-y-8 px-4 py-8 sm:p-10")
  div(class="max-w-2xl space-y-3")
    h4(class="text-xl font-bold") Serious Business Since 1987
    p I've fiddled with everything that computes for as long as I can remember. Combine endless curiosity with a passion for interaction design and you get… well, mostly video games.
    p I've learned that I'm most comfortable here, in the intersection of all creative disciplines, because only from here can one find something #[i(class="italic") truly interesting].

  div(class="space-y-3")
    h5(class="text-xl font-bold") Project Gallery
    p Here are a few interesting projects that are not under a metric ton of NDAs 😉

  MasonryWall(
    :items="items"
    :column-width="300"
    :gap="16"
    )
    template(#default="{ item, index }")
      FadeIn(
        class="rounded-xl bg-neutral-100 shadow-lg"
        :delay="index * 10"
        )
        img(
          :src="`/assets/cards/${item.image}.jpg`"
          :srcset="`/assets/cards/${item.image}@1x.webp 1x, /assets/cards/${item.image}@2x.webp 2x`"
          :alt="item.imageAlt"
          loading="lazy"
          class="w-full rounded-t-xl"
          )
        div(class="p-4")
          h6(class="text font-bold") {{ item.title }}
          aside(class="mb-2 text-xs text-neutral-500") {{ item.subtitle }}
          p(class="text-sm") {{ item.description }}
</template>

<script lang="ts" setup>
import FadeIn from '../components/FadeIn.vue'

const items = [
  {
    title: 'Playraven',
    subtitle: 'Games Company',
    description:
      'I co-founded a mobile games company focused on free-to-play strategy games. After 6 years, $10M raised capital and 5 shipped games we were acquired by Rovio.',
    image: 'card-playraven',
    imageAlt: 'Playraven logo',
  },
  {
    title: 'Eve: War of Ascension',
    subtitle: 'Mobile Game',
    description:
      'An ambitious take on 4X style MMOs on mobile in collaboration with CCP. The company was acquired by Rovio during soft launch and the project was rebooted under a different brand.',
    image: 'card-eve',
    imageAlt: 'Eve: War of Ascension key art',
  },
  {
    title: 'Robocide',
    subtitle: 'Mobile Game',
    description:
      'Micro RTS where you direct a swarm of hundreds of robots with a single tap. Top 1 strategy in 41 and top 5 in 104 countries.',
    image: 'card-robocide',
    imageAlt: 'Robocide key art',
  },
  {
    title: 'Spymaster (reboot)',
    subtitle: 'Mobile Game',
    description:
      'A new take on spy management with a collection of hundreds of unique agents and various agency (clan/guild) activities to complete.',
    image: 'card-spymaster2',
    imageAlt: 'Spymaster key art',
  },
  {
    title: 'Winterstate',
    subtitle: 'Mobile Game',
    description:
      'Cars with guns in frozen USA. Vehicle RTS with a campaign and async multiplayer. Top 5 strategy in 133 countries.',
    image: 'card-winterstate',
    imageAlt: 'Winterstate key art',
  },
  {
    title: 'Spymaster',
    subtitle: 'Mobile Game',
    description:
      'A spy management game with a collection of hundreds of unique agents and various agency (clan/guild) activities to complete.',
    image: 'card-spymaster1',
    imageAlt: 'Spymaster key art',
  },
  {
    title: 'Bubble Island iOS',
    subtitle: 'Mobile Game',
    description:
      'Mobile SKU of the most successful bubble shooter at the time. Game of the week in App Store, millions of MAU, etc.',
    image: 'card-bi',
    imageAlt: 'Bubble Island key art',
  },
  {
    title: 'Diamond Dash iOS',
    subtitle: 'Mobile Game',
    description:
      "Mobile SKU of Wooga's biggest arcade game at the time with over 10M MAU. We were the first game to ship with Facebook Connect and other bleeding edge social features.",
    image: 'card-ddios',
    imageAlt: 'Diamond Dash key art',
  },
  {
    title: 'Score',
    subtitle: 'Community',
    description:
      "I founded Finland's first game development club in Tampere University of Applied Sciences with a goal of improving the available games education.",
    image: 'card-score',
    imageAlt: 'Score logo',
  },
  {
    title: 'Emmi',
    subtitle: 'Fullstack Web App',
    description:
      "IGDA Finland's tech backbone that handles all events and memberships across thousands of people every year. Open sourced under MIT.",
    image: 'card-emmi',
    imageAlt: 'Emmi screenshot',
  },
  {
    title: 'High Score',
    subtitle: 'Company',
    description:
      'I founded a series of non-profit companies on top of game development clubs as a part of building a stronger career path for aspiring developers in Finland.',
    image: 'card-highscore',
    imageAlt: 'High Score screenshot',
  },
  {
    title: 'Fingamers',
    subtitle: 'Community',
    description:
      "I founded Finland's first online gaming community provider. We crowdfunded and hosted some of the biggest MMO communities at the time.",
    image: 'card-fingamers',
    imageAlt: 'Fingamers screenshot',
  },
  {
    title: 'Runepoli',
    subtitle: 'Community',
    description:
      "I founded Finland's biggest Runescape community that united the various trade forums under a single banner. It survives to this day and is officially supported by Jagex.",
    image: 'card-runepoli',
    imageAlt: 'Runepoli screenshot',
  },
  {
    title: 'Refugee Work',
    subtitle: 'Charity',
    description:
      'I am a volunteer photographer in a program that organizes Lapland wilderness tours for refugees to help with societal integration.',
    image: 'card-refugees',
    imageAlt: 'Photo of refugees climbing Saana',
  },
]
</script>
