import { ViteSSG } from 'vite-ssg/single-page'

import '@/styles/styles.css'
import '@/styles/fira_code.css'
import LandingPage from './LandingPage.vue'

import MasonryWall from '@yeger/vue-masonry-wall'

export const createApp = ViteSSG(
  LandingPage,
  ({ app, router, routes, isClient, initialState }) => {
    app.use(MasonryWall)
  }
)
