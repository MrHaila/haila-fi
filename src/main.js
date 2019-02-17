// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import Bootstrap from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import LogoToy from '~/components/LogoToy.vue'
import Multipotentiality from '~/components/Multipotentiality.vue'
import SeriousBusiness from '~/components/SeriousBusiness.vue'
import Award from '~/components/Award.vue'
import JobWall from '~/components/JobWall.vue'
import Photography from '~/components/Photography.vue'

export default function (Vue, { router, head, isClient }) {
  // Vue.use(Bootstrap)
  // Vue.use(Navbar)

  Vue.component('logo-toy', LogoToy)
  Vue.component('multipotentiality', Multipotentiality)
  Vue.component('serious-business', SeriousBusiness)
  Vue.component('award', Award)
  Vue.component('job-wall', JobWall)
  Vue.component('photography', Photography)
}
