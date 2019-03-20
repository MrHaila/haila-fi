<template lang="pug">
div.section-padding
  div.container
    div.col-lg-8
      h4.mb-4.font-weight-bold Serious Business Since 1987
      p I’ve fiddled with everything that computes for as long as I can remember. Combine endless curiosity with a passion for interactive design and you get… well, mostly video games.
      p I’ve learned that I’m most comfortable here, in the intersection of all creative disciplines, because only from here can one find something #[i truly interesting].

      h5.font-weight-bold.mt-5.mb-2 Project Gallery
      p Here's a few interesting projects that are not under a metric ton of NDAs 😉

    b-card-group(columns).mt-4
      // @/assets/card-playraven.jpg doesn't work... why?
      b-card(title="PlayRaven" sub-title="Company" img-src="/assets/img/card-playraven.jpg" img-alt="Logo" img-top).mb-2
        b-card-text I co-founded a mobile games company focused on free-to-play strategy games. After 6 years, $10M raised capital and 5 shipped games we were aquired by Rovio.
      b-card(title="Eve: War of Ascension" sub-title="Mobile Game" img-src="https://placekitten.com/g/400/400" img-alt="Logo" img-top).mb-2
        b-card-text An ambitious take on 4X style MMOs on mobile in collaboration with CCP. We had exceptional soft launch metrics but shifted to work on an unannounced title after the acquisition by Rovio.
      b-card(title="Spymaster (reboot)" sub-title="Mobile Game" img-src="https://placekitten.com/g/400/600" img-alt="Logo" img-top).mb-2
        b-card-text A new take on spy management with a collection of hundreds of unique agents and various agency (clan/guild) activities to complete.
      b-card(title="Robocide" sub-title="Mobile Game" img-src="https://placekitten.com/g/400/300" img-alt="Logo" img-top).mb-2
        b-card-text Micro RTS where you direct a swarm of hundreds of robots with just one finger. Top X strategy in X countries.
      b-card(title="Winterstate" sub-title="Mobile Game" img-src="https://placekitten.com/g/400/300" img-alt="Logo" img-top).mb-2
        b-card-text Cars with guns in froze USA. Vehicle RTS with a campaign and async multiplayer. Top X strategy in X countries.
      b-card(title="Spymaster" sub-title="Mobile Game" img-src="https://placekitten.com/g/400/300" img-alt="Logo" img-top).mb-2
        b-card-text A second world war spy manager. Train a roster of agents and direct them on dangerous missions behind the enemy lines. Top X strategy in X countries.
      b-card(title="Bubble Island iOS" sub-title="Mobile Game" img-src="https://placekitten.com/g/400/400" img-alt="Logo" img-top).mb-2
        b-card-text Mobile SKU of the most successful bubble shooter at the time. Game of the week in App Store etc. etc.
      b-card(title="Diamond Dash iOS" sub-title="Mobile Game" img-src="https://placekitten.com/g/400/400" img-alt="Logo" img-top).mb-2
        b-card-text Mobile SKU of Wooga's biggest arcade game at the time. We were the first game to ship with Facebook Connect and other bleeding edge social features.
      b-card(title="Emmi" sub-title="Online Service" img-src="https://placekitten.com/g/400/300" img-alt="Logo" img-top).mb-2
        b-card-text IGDA Finland's tech backbone that handles all events and memberships across thousands of people ever year. Open sourced under MIT.
      b-card(title="Score" sub-title="Club" img-src="https://placekitten.com/g/400/200" img-alt="Logo" img-top).mb-2
        b-card-text I founded Finland's first game development club in Tampere Polytechnic University.
      b-card(title="High Score" sub-title="Company" img-src="https://placekitten.com/g/400/200" img-alt="Logo" img-top).mb-2
        b-card-text I founded a series of non-profit copmanies on top of game development clubs as a part of building a stronger career path for aspiring developers in Finland.
      b-card(title="Fingamers" sub-title="Online Service" img-src="https://placekitten.com/g/400/400" img-alt="Logo" img-top).mb-2
        b-card-text I founded Finland's first online gaming community provider. We crowd funded and hosted some of the biggest MMO communities at the time.
      b-card(title="Runepoli" sub-title="Community" img-src="https://placekitten.com/g/400/400" img-alt="Logo" img-top).mb-2
        b-card-text I founded Finland's biggest Runescape community that united the various trade forums under a single banner. It survives to this day and is officially supported by Jagex.
      b-card(title="Refugee Work" sub-title="Photography" img-src="https://placekitten.com/g/400/400" img-alt="Logo" img-top).mb-2
        b-card-text I am a volunteer photographer in a program that organises Lapland tours for refugees to help with societal integration.
  </b-card>
</template>

<script>
import BCard from 'bootstrap-vue/es/components/card/card'
import BCardText from 'bootstrap-vue/es/components/card/card-text'
import BCardGroup from 'bootstrap-vue/es/components/card/card-group'

export default {
  components: {
    BCard,
    BCardText,
    BCardGroup
  }
}
</script>
