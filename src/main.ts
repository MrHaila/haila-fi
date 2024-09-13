import { ViteSSG } from 'vite-ssg/single-page'

import '@/styles/fira_code.css'
import '@/styles/styles.css'
import MasonryWall from '@yeger/vue-masonry-wall'

import LandingPage from './LandingPage.vue'

export const createApp = ViteSSG(LandingPage, ({ app, router, routes, isClient, initialState }) => {
  app.use(MasonryWall)
})
