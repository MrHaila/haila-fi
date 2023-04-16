<template lang="pug">
div(class="py-8 container mx-auto px-4 space-y-8 bg-gradient-to-b from-white to-neutral-100")
  div(class="max-w-2xl space-y-3")
    h4(class="text-xl font-bold") Serious Business Since 1987
    p I've fiddled with everything that computes for as long as I can remember. Combine endless curiosity with a passion for interaction design and you get… well, mostly video games.
    p I've learned that I'm most comfortable here, in the intersection of all creative disciplines, because only from here can one find something #[i truly interesting].

  div(class="space-y-3")
    h5(class="text-xl font-bold") Project Gallery
    p Here are a few interesting projects that are not under a metric ton of NDAs 😉

  div(class="sm:flex justify-between sm:space-x-3 space-y-4")
    //- Col 1
    div(class="sm:flex flex-col space-y-3 w-full")
      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-playraven.jpg" class="rounded-t-xl" alt="PlayRaven logo")
        div(class="p-4")
          h6(class="text font-bold") Playraven
          aside(class="text-neutral-500 text-xs mb-2") Games Company
          p(class="text-sm") I co-founded a mobile games company focused on free-to-play strategy games. After 6 years, $10M raised capital and 5 shipped games we were aquired by Rovio.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-spymaster2.png" class="rounded-t-xl" alt="Spymaster key art")
        div(class="p-4")
          h6(class="text font-bold") Spymaster (reboot)
          aside(class="text-neutral-500 text-xs mb-2") Mobile Game
          p(class="text-sm") A new take on spy management with a collection of hundreds of unique agents and various agency (clan/guild) activities to complete.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-bi.png" class="rounded-t-xl" alt="Bubble Island key art")
        div(class="p-4")
          h6(class="text font-bold") Bubble Island iOS
          aside(class="text-neutral-500 text-xs mb-2") Mobile Game
          p(class="text-sm") Mobile SKU of the most successful bubble shooter at the time. Game of the week in App Store, millions of MAU, etc.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-score.png" class="rounded-t-xl" alt="Score screenshot")
        div(class="p-4")
          h6(class="text font-bold") Score
          aside(class="text-neutral-500 text-xs mb-2") Community
          p(class="text-sm") I founded Finland's first game development club in Tampere University of Applied Sciences with a goal of improving the available games education.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-runepoli.png" class="rounded-t-xl" alt="Runepoli screenshot")
        div(class="p-4")
          h6(class="text font-bold") Runepoli
          aside(class="text-neutral-500 text-xs mb-2") Community
          p(class="text-sm") I founded Finland's biggest Runescape community that united the various trade forums under a single banner. It survives to this day and is officially supported by Jagex.

    //- Col 2
    div(class="sm:flex flex-col space-y-3 w-full")
      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-eve.png" class="rounded-t-xl" alt="Eve: WoA key art")
        div(class="p-4")
          h6(class="text font-bold") Eve: War of Ascension
          aside(class="text-neutral-500 text-xs mb-2") Mobile Game
          p(class="text-sm") An ambitious take on 4X style MMOs on mobile in collaboration with CCP. We had exceptional soft launch metrics but shifted to work on an unannounced title after the acquisition by Rovio.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-ddios.png" class="rounded-t-xl" alt="Diamond Dash key art")
        div(class="p-4")
          h6(class="text font-bold") Diamond Dash iOS
          aside(class="text-neutral-500 text-xs mb-2") Mobile Game
          p(class="text-sm") Mobile SKU of Wooga's biggest arcade game at the time with over 10M MAU. We were the first game to ship with Facebook Connect and other bleeding edge social features.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-highscore.png" class="rounded-t-xl" alt="High Score screenshot")
        div(class="p-4")
          h6(class="text font-bold") High Score
          aside(class="text-neutral-500 text-xs mb-2") Company
          p(class="text-sm") I founded a series of non-profit companies on top of game development clubs as a part of building a stronger career path for aspiring developers in Finland.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-refugees.jpg" class="rounded-t-xl" alt="Refugee kids at Saana")
        div(class="p-4")
          h6(class="text font-bold") Refugee Work
          aside(class="text-neutral-500 text-xs mb-2") Charity
          p(class="text-sm") I am a volunteer photographer in a program that organises Lapland wilderness tours for refugees to help with societal integration.

    //- Col 3
    div(class="sm:flex flex-col space-y-3 w-full")
      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-robocide.jpg" class="rounded-t-xl" alt="Robocide key art")
        div(class="p-4")
          h6(class="text font-bold") Robocide
          aside(class="text-neutral-500 text-xs mb-2") Mobile Game
          p(class="text-sm") Micro RTS where you direct a swarm of hundreds of robots with a single tap. I was the lead designer and developer on this project.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-winterstate.jpg" class="rounded-t-xl" alt="Winterstate key art")
        div(class="p-4")
          h6(class="text font-bold") Winterstate
          aside(class="text-neutral-500 text-xs mb-2") Mobile Game
          p(class="text-sm") Cars with guns in frozen USA. Vehicle RTS with a campaign and async multiplayer. Top 5 strategy in 133 countries.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-spymaster1.jpg" class="rounded-t-xl" alt="Spymaster key art")
        div(class="p-4")
          h6(class="text font-bold") Spymaster
          aside(class="text-neutral-500 text-xs mb-2") Mobile Game
          p(class="text-sm") A second world war spy manager. Train a roster of agents and direct them on dangerous missions behind the enemy lines. Top 5 strategy in 102 countries.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-emmi.png" class="rounded-t-xl" alt="Emmi screenshot")
        div(class="p-4")
          h6(class="text font-bold") Emmi
          aside(class="text-neutral-500 text-xs mb-2") Fullstack Web App
          p(class="text-sm") IGDA Finland's tech backbone that handles all events and memberships across thousands of people every year. Open sourced under MIT.

      div(class="bg-neutral-100 rounded-xl shadow-lg")
        image(src="/assets/card-fingamers.png" class="rounded-t-xl" alt="Fingamers screenshot")
        div(class="p-4")
          h6(class="text font-bold") Fingamers
          aside(class="text-neutral-500 text-xs mb-2") Community
          p(class="text-sm") I founded Finland's first online gaming community provider. We crowdfunded and hosted some of the biggest MMO communities at the time.
</template>
