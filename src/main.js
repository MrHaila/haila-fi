// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import Bootstrap from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BModal from 'bootstrap-vue/es/components/modal/modal'

import LogoToy from '~/components/LogoToy.vue'
import Multipotentiality from '~/components/Multipotentiality.vue'
import SeriousBusiness from '~/components/SeriousBusiness.vue'

export default function (Vue, { router, head, isClient }) {
  // Vue.use(Bootstrap)
  // Vue.use(Navbar)

  Vue.component('b-modal', BModal)

  Vue.component('logo-toy', LogoToy)
  Vue.component('multipotentiality', Multipotentiality)
  Vue.component('serious-business', SeriousBusiness)
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
}
